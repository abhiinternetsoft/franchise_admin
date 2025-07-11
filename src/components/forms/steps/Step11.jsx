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

const financialDisclosureOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Step11 = ({ formik, onBack, onNext }) => {
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
          11
        </Box>
        <Box>
          <Typography variant="h6">Financials</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Financial performance disclosure information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Item 19 Financial Performance Disclosure */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Item 19 Financial Performance Disclosure"
            name="financialDisclosure"
            value={formik.values.financialDisclosure}
            onChange={formik.handleChange}
            helperText="Do you provide financial performance representations?"
          >
            {financialDisclosureOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Financial Performance Details */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Financial Performance Details"
            name="financialDetails"
            value={formik.values.financialDetails}
            onChange={formik.handleChange}
            helperText="Details about financial performance (if applicable)"
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Broker Referrals →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step11;
