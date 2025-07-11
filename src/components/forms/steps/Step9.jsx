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

const protectionTypes = [
  { label: "Exclusive", value: "exclusive" },
  { label: "Non-Exclusive", value: "non-exclusive" },
  { label: "None", value: "none" },
];

const internationalOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
  { label: "Limited", value: "limited" },
];

const Step9 = ({ formik, onBack, onNext }) => {
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
          9
        </Box>
        <Box>
          <Typography variant="h6">Territory and Availability</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Territory protection and opportunity types.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Territory Protection */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Territory Protection"
            name="territoryProtection"
            value={formik.values.territoryProtection}
            onChange={formik.handleChange}
            helperText="Level of territory protection offered"
          >
            {protectionTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* International Opportunities */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="International Opportunities"
            name="internationalOpportunities"
            value={formik.values.internationalOpportunities}
            onChange={formik.handleChange}
            helperText="International franchise opportunities available"
          >
            {internationalOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Opportunity Types */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Opportunity Types"
            name="opportunityTypes"
            value={formik.values.opportunityTypes}
            onChange={formik.handleChange}
            helperText="Single unit, multi-unit, area development, master franchise, etc."
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Intellectual Property →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step9;
