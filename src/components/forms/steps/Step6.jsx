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

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const amountTypeOptions = [
  { label: "Flat Amount", value: "amount" },
  { label: "Percentage", value: "percentage" },
];

const Step6 = ({ formik, onBack, onNext }) => {
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
          6
        </Box>
        <Box>
          <Typography variant="h6">Investment + Ongoing Fees</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Financial requirements and fee structure.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Initial Investment */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Total Investment Low"
            name="investmentLow"
            value={formik.values.investmentLow}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Total Investment High"
            name="investmentHigh"
            value={formik.values.investmentHigh}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Franchise Fee"
            name="franchiseFee"
            value={formik.values.franchiseFee}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Minimum Liquid Capital"
            name="liquidCapital"
            value={formik.values.liquidCapital}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>

        {/* Financing */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            select
            fullWidth
            label="Do you offer Third Party Financing?"
            name="thirdPartyFinancing"
            value={formik.values.thirdPartyFinancing}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Ongoing Fees */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Ongoing Fees
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Royalty Fee (%)"
            name="royaltyFee"
            value={formik.values.royaltyFee}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Marketing Fee (%)"
            name="marketingFee"
            value={formik.values.marketingFee}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>

        {/* Local Ad Spend */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            National Ad Spend
          </Typography>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="Local Ad Spend Type"
            name="localAdType"
            value={formik.values.localAdType}
            onChange={formik.handleChange}
          >
            {amountTypeOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="Local Ad Spend Amount"
            name="localAdAmount"
            value={formik.values.localAdAmount}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="Local Ad Spend Required"
            name="localAdRequired"
            value={formik.values.localAdRequired}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* National Ad Spend */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="National Ad Spend Type"
            name="nationalAdType"
            value={formik.values.nationalAdType}
            onChange={formik.handleChange}
          >
            {amountTypeOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="National Ad Spend Amount"
            name="nationalAdAmount"
            value={formik.values.nationalAdAmount}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="National Ad Spend Required"
            name="nationalAdRequired"
            value={formik.values.nationalAdRequired}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Navigation */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Operational Requirements →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step6;
