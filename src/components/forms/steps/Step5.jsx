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
import { DatePicker } from "@mui/x-date-pickers";

const usStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const Step5 = ({ formik, onBack, onNext }) => {
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
          5
        </Box>
        <Box>
          <Typography variant="h6">Company Overview</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Essential company details and contact information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Entity Name"
            name="entityName"
            value={formik.values.entityName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Official legal business name"
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Website URL"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Company website URL"
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <DatePicker
            label="Founded Date"
            value={formik.values.foundedDate}
            onChange={(date) => formik.setFieldValue("foundedDate", date)}
            slotProps={{
              textField: {
                fullWidth: true,
                helperText: "When the company was founded",
              },
            }}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <DatePicker
            label="Franchising Since"
            value={formik.values.franchisingSince}
            onChange={(date) => formik.setFieldValue("franchisingSince", date)}
            slotProps={{
              textField: {
                fullWidth: true,
                helperText: "When franchising began",
              },
            }}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="Corporate Phone"
            name="corporatePhone"
            value={formik.values.corporatePhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Main corporate phone number"
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="# of Corporate Owned Locations"
            name="corporateLocations"
            type="number"
            value={formik.values.corporateLocations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Company-owned locations"
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="# of Franchise Locations"
            name="franchiseLocations"
            type="number"
            value={formik.values.franchiseLocations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Franchised locations"
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Corporate Address
          </Typography>
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            label="Street Address"
            name="streetAddress"
            value={formik.values.streetAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="State"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {usStates.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="ZIP Code"
            name="zipCode"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Investment + Ongoing Fees →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step5;
