import { TextField } from "@mui/material";
import React, { useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  console.log("value", value);
  return (
    <TextField
      label="text"
      onChange={(e) => {
        clearTimeout(1000);
        setTimeout(() => {
          setValue(e.target.value);
        }, 1000);
      }}
    />
  );
};

export default Test;
