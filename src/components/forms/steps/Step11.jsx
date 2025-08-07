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
import Chart from "../../../assets/images/users/chart.svg";

const financialDisclosureOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Step11 = ({ formik, onBack, onNext }) => {
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
          <img src={Chart} alt="Intellectual Property icon" />
          <Typography variant="h6 steps-heading">Financials</Typography>
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

      <Grid container spacing={3}>
        {/* Item 19 Financial Performance Disclosure */}
        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "25%" } }}
          className="my-4"
        >
          <label
            htmlFor="Item 19 Financial Performance Disclosure"
            className="listing-form-label"
          >
            Item 19 Financial Performance Disclosure
          </label>
          <TextField
            select
            fullWidth
            name="financialDisclosure"
            value={formik.values.financialDisclosure}
            onChange={formik.handleChange}
            placeholder="Select Option"
          >
            {financialDisclosureOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Financial Performance Details */}
        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="my-4"
        >
          <label
            htmlFor="Financial Performance Details"
            className="listing-form-label"
          >
            Financial Performance Details
          </label>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="financialDetails"
            value={formik.values.financialDetails}
            onChange={formik.handleChange}
            placeholder="Provide details about your financials performance representations..."
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

export default Step11;
