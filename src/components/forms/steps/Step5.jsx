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
import { GoInfo } from "react-icons/go";
import countries from "world-countries";

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
          <GoInfo size={20} />
          <Typography variant="h6 steps-heading">Company Overview</Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Essential company details and contact information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label htmlFor="Entity Name" className="listing-form-label">
            Entity Name
          </label>
          <TextField
            fullWidth
            name="entityName"
            value={formik.values.entityName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Official legal business name"
          />
        </Grid>

        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Website URL"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Company website URL"
          />
        </Grid> */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "22%" } }}>
          <label htmlFor="Founded Date" className="listing-form-label">
            Founded Date
          </label>
          <DatePicker
            value={formik.values.foundedDate}
            onChange={(date) => formik.setFieldValue("foundedDate", date)}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "22%" } }}>
          <label htmlFor="Franchising Since" className="listing-form-label">
            Franchising Since
          </label>
          <DatePicker
            value={formik.values.franchisingSince}
            onChange={(date) => formik.setFieldValue("franchisingSince", date)}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        </Grid>

        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            fullWidth
            label="Corporate Phone"
            name="corporatePhone"
            value={formik.values.corporatePhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Main corporate phone number"
          />
        </Grid> */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label
            htmlFor="# of Corporate Owned Locations"
            className="listing-form-label"
          >
            # of Corporate Owned Locations
          </label>
          <TextField
            fullWidth
            name="corporateLocations"
            type="number"
            value={formik.values.corporateLocations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label
            htmlFor="# of Franchise Locations"
            className="listing-form-label"
          >
            # of Franchise Locations
          </label>
          <TextField
            fullWidth
            name="franchiseLocations"
            type="number"
            value={formik.values.franchiseLocations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Franchised locations"
          />
        </Grid>

        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Corporate Address
          </Typography>
        </Grid> */}

        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            label="Street Address"
            name="streetAddress"
            value={formik.values.streetAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid> */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Country" className="listing-form-label">
            Country
          </label>
          <TextField
            select
            fullWidth
            name="Country"
            value={formik.values.Country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {countries
              .sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => (
                <MenuItem key={country.cca2} value={country.name.common}>
                  {country.name.common}
                </MenuItem>
              ))}
          </TextField>
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Corporate Address 1" className="listing-form-label">
            Corporate Address 1
          </label>
          <TextField
            fullWidth
            name="CorporateAddress1"
            value={formik.values.CorporateAddress1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Corporate Address 2" className="listing-form-label">
            Corporate Address 2
          </label>
          <TextField
            fullWidth
            name="CorporateAddress2"
            value={formik.values.CorporateAddress2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        {/* <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button> */}
        <Button variant="contained" onClick={onNext}>
          Skip Button
        </Button>
      </Box>
    </Paper>
  );
};

export default Step5;
