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
import Intellectual from "../../../assets/images/users/Intellectual.svg";

const trademarkStatuses = [
  { label: "Registered", value: "registered" },
  { label: "Pending", value: "pending" },
  { label: "Not Registered", value: "not_registered" },
];

const Step10 = ({ formik, onBack, onNext }) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 4, borderRadius: 2 }}
      className="shadow-none border mb-4"
    >
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
          <img src={Intellectual} alt="Intellectual Property icon" />
          <Typography variant="h6 steps-heading">
            Intellectual Property
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Trademark registration and intellectual property status.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} className="my-4">
        {/* Trademark Registration Status */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Trademark Registration Status"
            className="listing-form-label"
          >
            Trademark Registration Status
          </label>
          <TextField
            select
            fullWidth
            name="trademarkStatus"
            value={formik.values.trademarkStatus}
            onChange={formik.handleChange}
          >
            {trademarkStatuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Trademark Registration Number */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Trademark Registration Number"
            className="listing-form-label"
          >
            Trademark Registration Number
          </label>
          <TextField
            fullWidth
            name="trademarkNumber"
            value={formik.values.trademarkNumber}
            onChange={formik.handleChange}
            placeholder="Enter registration number"
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

export default Step10;
