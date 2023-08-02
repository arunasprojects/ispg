import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const initialValues = {
  date: null,
  name: "",
};

const validationSchema = yup.object().shape({
  date: yup.date().required("Date is required"),
});

const DatePickerMain = () => {
  const [value, setValue] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      setValue(JSON.stringify(values));
    },
  });

  formik.errors.date && console.log("formik.errors.date", formik.errors.date);

  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ width: 500 }}>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack width={450} spacing={4}>
                <Typography variant="h5" align="center">
                  Sample form
                </Typography>
                <DatePicker
                  label="date"
                  value={formik.values.date}
                  onChange={(date) => formik.setFieldValue("date", date)}
                />
                <Typography variant="caption" color="error">
                  {formik.errors.date}
                </Typography>
                <TextField
                  label="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!formik.dirty || !formik.isValid}
                >
                  Submit
                </Button>
              </Stack>
            </LocalizationProvider>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardContent>{JSON.stringify(value)}</CardContent>
      </Card>
    </Box>
  );
};

export default DatePickerMain;
