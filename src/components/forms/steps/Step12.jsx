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
import Like from "../../../assets/images/users/like.svg";

const brokerReferralOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const commissionTypes = [
  { label: "Flat Fee", value: "flat" },
  { label: "Percentage", value: "percentage" },
];

const Step12 = ({ formik, onBack, onNext }) => {
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }} className="shadow-none">
      <Box mb={3}>
        <Box
          sx={{
            borderRadius: "50%",
            // bgcolor: "primary.main",
            color: "#535364",
            display: "flex",
            alignItems: "center",
            mr: 2,
            gap: "10px",
          }}
        >
          <img src={Like} alt="Broker Referrals icon" />
          <Typography variant="h6 steps-heading">Broker Referrals</Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Financial performance disclosure information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} className="my-4">
        {/* Accept Broker Referrals */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Do You Accept Broker Referrals?"
            className="listing-form-label"
          >
            Do You Accept Broker Referrals?
          </label>
          <TextField
            select
            fullWidth
            name="brokerReferrals"
            value={formik.values.brokerReferrals}
            onChange={formik.handleChange}
          >
            {brokerReferralOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Commission Type */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Type of Commission Payable?"
            className="listing-form-label"
          >
            Type of Commission Payable?
          </label>
          <TextField
            select
            fullWidth
            name="commissionType"
            value={formik.values.commissionType}
            onChange={formik.handleChange}
          >
            {commissionTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="my-4">
        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label
            htmlFor="Single Unit Referral Fee?"
            className="listing-form-label"
          >
            Single Unit Referral Fee?
          </label>
          <TextField
            fullWidth
            name="singleunitreferral"
            value={formik.values.singleunitreferral}
            onChange={formik.handleChange}
            type="number"
            placeholder="Input Percentage or Doller Amount"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label
            htmlFor="Multi Unit Referral Fee?"
            className="listing-form-label"
          >
            Multi Unit Referral Fee?
          </label>
          <TextField
            fullWidth
            name="multiunitreferral"
            value={formik.values.multiunitreferral}
            onChange={formik.handleChange}
            type="number"
            placeholder="Input Percentage or Doller Amount"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label htmlFor="Master Franchise Fee?" className="listing-form-label">
            Master Franchise Fee?
          </label>
          <TextField
            fullWidth
            name="masterunitreferral"
            value={formik.values.masterunitreferral}
            onChange={formik.handleChange}
            type="number"
            placeholder="Input Percentage or Doller Amount"
          />
        </Grid>

        {/* Broker Program Details */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label
            htmlFor="Broker Program Details"
            className="listing-form-label"
          >
            Broker Program Details
          </label>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="brokerProgramDetails"
            value={formik.values.brokerProgramDetails}
            onChange={formik.handleChange}
            placeholder="Describe your broker referral program, requirements, and terms..."
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        {/* <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button> */}
        {/* <Button variant="contained" onClick={onNext}>
          Skip Button
        </Button> */}
      </Box>
    </Paper>
  );
};

export default Step12;
