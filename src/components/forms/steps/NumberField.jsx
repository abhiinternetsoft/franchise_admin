import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useField, useFormikContext } from "formik";

const NumberField = ({ name, label, ...props }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const formatNumber = (value) => {
    if (!value) return "";
    const num = value.toString().replace(/,/g, "");
    return isNaN(num) ? "" : Number(num).toLocaleString("en-US");
  };

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      type="text"
      value={formatNumber(field.value)}
      onChange={(e) => {
        const raw = e.target.value.replace(/,/g, "");
        if (!isNaN(raw)) setFieldValue(name, raw);
      }}
      fullWidth
    />
  );
};

export default NumberField;
