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

const trademarkStatuses = [
  { label: "Registered", value: "registered" },
  { label: "Pending", value: "pending" },
  { label: "Not Registered", value: "not_registered" },
];

const Step10 = ({ formik, onBack, onNext }) => {
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
          10
        </Box>
        <Box>
          <Typography variant="h6">Intellectual Property</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Trademark registration and intellectual property status.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Trademark Registration Status */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Trademark Registration Status"
            name="trademarkStatus"
            value={formik.values.trademarkStatus}
            onChange={formik.handleChange}
            helperText="Current trademark registration status"
          >
            {trademarkStatuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Trademark Registration Number */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Trademark Registration Number"
            name="trademarkNumber"
            value={formik.values.trademarkNumber}
            onChange={formik.handleChange}
            helperText="USPTO registration number (if applicable)"
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Financials →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step10;
