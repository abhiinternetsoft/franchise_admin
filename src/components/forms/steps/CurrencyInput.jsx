import React from "react";
import { useField } from "formik";

const CurrencyInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { value } = field;
  const { setValue } = helpers;

  // Format number with $ and commas
  const formatCurrency = (val) => {
    if (!val) return "";
    const num = val.toString().replace(/,/g, "").replace(/\$/g, "");
    if (isNaN(num)) return val;
    return `$${Number(num).toLocaleString("en-US")}`;
  };

  // Handle input
  const handleChange = (e) => {
    const raw = e.target.value.replace(/,/g, "").replace(/\$/g, "");
    if (!isNaN(raw) && raw !== "") {
      setValue(raw); // store clean number
    } else {
      setValue("");
    }
  };

  return (
    <div className="mb-3">
      <label className="label-heading">{label}</label>
      <input
        {...field}
        {...props}
        value={formatCurrency(value)}
        onChange={handleChange}
        className="form-control currency-input"
      />
      {meta.touched && meta.error ? (
        <div className="error currency-input-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CurrencyInput;
