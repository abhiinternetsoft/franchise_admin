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

const Step7 = ({ formik, onBack, onNext }) => {
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
          7
        </Box>
        <Box>
          <Typography variant="h6">Operational Requirements</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Space requirements, staffing, and operational details.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Space Requirements */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Space Required (sq ft) - Low"
            name="spaceLow"
            value={formik.values.spaceLow}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Space Required (sq ft) - High"
            name="spaceHigh"
            value={formik.values.spaceHigh}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>

        {/* Ownership */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Ownership Requirements
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Owner Operator Required"
            name="ownerOperatorRequired"
            value={formik.values.ownerOperatorRequired}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Absentee Ownership Allowed"
            name="absenteeOwnershipAllowed"
            value={formik.values.absenteeOwnershipAllowed}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Staffing */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Staffing Requirement
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            multiline
            fullWidth
            label="Staff Requirements"
            name="staffRequirements"
            value={formik.values.staffRequirements}
            onChange={formik.handleChange}
            rows={4}
            helperText="Describe staffing requirements, number of employees, roles, etc."
          />
        </Grid>

        {/* Operating Hours */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Operating Hours
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            multiline
            fullWidth
            label="Operational Days & Hours"
            name="operationalHours"
            value={formik.values.operationalHours}
            onChange={formik.handleChange}
            rows={2}
            helperText="e.g. Monday-Friday: 9AM-6PM, Saturday: 10AM-4PM, Sunday: Closed"
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Training and Support →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step7;
