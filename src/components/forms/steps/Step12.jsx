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
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Box mb={3} display="flex" alignItems="center">
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "primary.main",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          12
        </Box>
        <Box>
          <Typography variant="h6">Broker Referrals</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Broker referral program and commission structure.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Accept Broker Referrals */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Accept Broker Referrals"
            name="brokerReferrals"
            value={formik.values.brokerReferrals}
            onChange={formik.handleChange}
            helperText="Do you accept broker referrals?"
          >
            {brokerReferralOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Broker Commission (%) */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Broker Commission (%)"
            name="brokerCommission"
            type="number"
            value={formik.values.brokerCommission}
            onChange={formik.handleChange}
            helperText="Commission percentage for brokers"
          />
        </Grid>

        {/* Commission Type */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="Commission Type"
            name="commissionType"
            value={formik.values.commissionType}
            onChange={formik.handleChange}
            helperText="How commission is calculated"
          >
            {commissionTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Minimum Commission */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="Minimum Commission"
            name="minCommission"
            type="number"
            value={formik.values.minCommission}
            onChange={formik.handleChange}
            helperText="Minimum commission amount"
          />
        </Grid>

        {/* Maximum Commission */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="Maximum Commission"
            name="maxCommission"
            type="number"
            value={formik.values.maxCommission}
            onChange={formik.handleChange}
            helperText="Maximum commission amount"
          />
        </Grid>

        {/* Broker Program Details */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Broker Program Details"
            name="brokerProgramDetails"
            value={formik.values.brokerProgramDetails}
            onChange={formik.handleChange}
            helperText="Additional broker program information"
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Social Media Presence →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step12;
