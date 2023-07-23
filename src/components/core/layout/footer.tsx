import { Stack, Typography } from "@mui/material";
import React from "react";

const MainFooter = () => {
  return (
    <Stack
      sx={{ height: 50, backgroundColor: "#ccc", justifyContent: "center" }}
    >
      <Typography align="center">
        Copyright © {new Date().getFullYear()} company name
      </Typography>
    </Stack>
  );
};

export default MainFooter;
