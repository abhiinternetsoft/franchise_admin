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

const trainingLocations = [
  { label: "On-Site", value: "on-site" },
  { label: "Headquarters", value: "headquarters" },
  { label: "Online", value: "online" },
  { label: "Other", value: "other" },
];

const Step8 = ({ formik, onBack, onNext }) => {
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
          8
        </Box>
        <Box>
          <Typography variant="h6">Training and Support</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Training programs and ongoing support services.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Training Hours */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Corporate Address
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            type="number"
            label="Initial Training Hours"
            name="trainingHours"
            value={formik.values.trainingHours}
            onChange={formik.handleChange}
          />
        </Grid>

        {/* Training Location */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            select
            fullWidth
            label="Training Location"
            name="trainingLocation"
            value={formik.values.trainingLocation}
            onChange={formik.handleChange}
          >
            {trainingLocations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Training Description */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Corporate Address
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Training Program Description"
            name="trainingDescription"
            value={formik.values.trainingDescription}
            onChange={formik.handleChange}
            helperText="Describe the training program, curriculum, and what franchisees will learn..."
          />
        </Grid>

        {/* Ongoing Support */}

        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <Typography variant="subtitle1" gutterBottom>
            Corporate Address
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Ongoing Support Services"
            name="ongoingSupport"
            value={formik.values.ongoingSupport}
            onChange={formik.handleChange}
            helperText="Marketing support, operations assistance, technology support, field visits, etc."
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Territory and Availability →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step8;
