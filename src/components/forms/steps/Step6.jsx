import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import moneys from "../../../assets/images/users/moneys.svg";
import Percentage from "../../../assets/images/users/percentage.svg";
import Dollar from "../../../assets/images/users/dollar.svg";
import CurrencyInput from "./CurrencyInput";

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const amountTypeOptions = [
  { label: "Flat Amount", value: "amount" },
  { label: "Percentage", value: "percentage" },
];

const businessModels = [
  "Home Based",
  "Industrial/Warehouse Based",
  "Mobile Operation",
  "Office Based",
  "Retail Based",
];

const Step6 = ({ formik, onBack, onNext }) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3, pb: 1, borderRadius: 2 }}
      className="shadow-none border mb-4 Listing-stepforms"
    >
      <Box mb={3}>
        <Box
          sx={{
            borderRadius: "50%",
            color: "#535364",
            display: "flex",
            alignItems: "center",
            mr: 2,
            gap: "10px",
          }}
        >
          <img src={moneys} alt="" />
          <Typography variant="h6 steps-heading">
            Investment + Ongoing Fees
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Financial requirements and fee structure.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} className="stepform-container">
        {/* Initial Investment Section */}
        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center"
        >
          <img src={Dollar} alt="initial Investment icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Initial Investment
          </Typography>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label className="listing-form-label">Investment Range Low</label>
          <CurrencyInput
            fullWidth
            name="investmentLow"
            value={formik.values.investmentLow}
            onChange={formik.handleChange}
            type="text"
            placeholder="Input Dollar Amount"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label className="listing-form-label">Investment Range High</label>
          <CurrencyInput
            fullWidth
            name="investmentHigh"
            value={formik.values.investmentHigh}
            onChange={formik.handleChange}
            type="text"
            placeholder="Input Dollar Amount"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label className="listing-form-label">
            Minimum Liquid Capital Requirement
          </label>
          <CurrencyInput
            fullWidth
            name="liquidCapital"
            value={formik.values.liquidCapital}
            onChange={formik.handleChange}
            type="text"
            placeholder="Input Dollar Amount"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label className="listing-form-label">
            Do you Offer Third Party Financing?
          </label>
          <TextField
            select
            fullWidth
            name="thirdPartyFinancing"
            value={formik.values.thirdPartyFinancing}
            onChange={formik.handleChange}
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Select Option
            </MenuItem>
            {yesNoOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Ongoing Fees Section */}
        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center"
        >
          <img src={Percentage} alt="Ongoing Fees icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Ongoing Fees
          </Typography>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label className="listing-form-label">Franchise Fee</label>
          <CurrencyInput
            fullWidth
            name="ongoingfranchisefee"
            value={formik.values.ongoingfranchisefee}
            onChange={formik.handleChange}
            type="text"
            placeholder="Input Dollar Amount"
          />
        </Grid>
        {/* Business Model */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label htmlFor="Business Model" className="listing-form-label">
            Business Model
          </label>
          <TextField
            select
            fullWidth
            name="businessModel"
            value={formik.values.businessModel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.businessModel &&
              Boolean(formik.errors.businessModel)
            }
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Business Model
            </MenuItem>

            {businessModels.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label className="listing-form-label">Royalty Fee Type</label>
          <TextField
            select
            fullWidth
            name="ongoingtype"
            value={formik.values.ongoingtype}
            onChange={formik.handleChange}
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Select Type
            </MenuItem>
            {amountTypeOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {formik.values.ongoingtype === "percentage" && (
          <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
            <label className="listing-form-label">Percentage (%)</label>
            <TextField
              fullWidth
              name="ongoingPercentage"
              value={formik.values.ongoingPercentage}
              onChange={formik.handleChange}
              type="number"
              placeholder="Input Dollar Amount"
            />
          </Grid>
        )}
        {formik.values.ongoingtype === "amount" && (
          <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
            <label className="listing-form-label">Flat Fee</label>
            <CurrencyInput
              fullWidth
              name="ongoingFlatFee"
              value={formik.values.ongoingFlatFee}
              onChange={formik.handleChange}
              type="text"
              placeholder="Input Dollar Amount"
            />
          </Grid>
        )}

        {/* Local Ad Spend Section */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Local Ad Spend
          </Typography>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label className="listing-form-label">Local Ad Spend Type</label>
          <TextField
            select
            fullWidth
            name="localAdType"
            value={formik.values.localAdType}
            onChange={formik.handleChange}
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Select Type
            </MenuItem>
            {amountTypeOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {formik.values.localAdType === "percentage" && (
          <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
            <label className="listing-form-label">Percentage (%)</label>
            <TextField
              fullWidth
              name="localAdpercentage"
              value={formik.values.localAdpercentage}
              onChange={formik.handleChange}
              type="number"
              placeholder="Input Dollar Amount"
            />
          </Grid>
        )}
        {formik.values.localAdType === "amount" && (
          <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
            <label className="listing-form-label">Flat Fee</label>
            <CurrencyInput
              fullWidth
              name="localAdflatfee"
              value={formik.values.localAdflatfee}
              onChange={formik.handleChange}
              type="text"
              placeholder="Input Dollar Amount"
            />
          </Grid>
        )}

        {/* National Ad Spend Section */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            National Ad Spend
          </Typography>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label className="listing-form-label">National Ad Spend Type</label>
          <TextField
            select
            fullWidth
            name="nationalAdType"
            value={formik.values.nationalAdType}
            onChange={formik.handleChange}
            SelectProps={{
              displayEmpty: true, // 👈 this makes the placeholder visible in the box
            }}
          >
            {/* Placeholder */}
            <MenuItem value="" disabled>
              Select Type
            </MenuItem>
            {amountTypeOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {formik.values.nationalAdType === "percentage" && (
          <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
            <label className="listing-form-label">Percentage (%)</label>
            <TextField
              fullWidth
              name="nationalAdpercentage"
              value={formik.values.nationalAdpercentage}
              onChange={formik.handleChange}
              type="number"
              placeholder="Input Dollar Amount"
            />
          </Grid>
        )}
        {formik.values.nationalAdType === "amount" && (
          <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
            <label className="listing-form-label">Flat Fee</label>
            <CurrencyInput
              fullWidth
              name="nationalAdflatfee"
              value={formik.values.nationalAdflatfee}
              onChange={formik.handleChange}
              type="text"
              placeholder="Input Dollar Amount"
            />
          </Grid>
        )}
      </Grid>

      {/* Navigation */}
      <Box mt={4} display="flex" justifyContent="space-between">
        {/* <Button variant="contained" onClick={onNext}>
          Skip Button
        </Button> */}
      </Box>
    </Paper>
  );
};

export default Step6;
