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
import Training from "../../../assets/images/users/training.svg";
import Program from "../../../assets/images/users/program.svg";

const trainingLocations = [
  { label: "On-Site", value: "on-site" },
  { label: "Headquarters", value: "headquarters" },
  { label: "Online", value: "online" },
  { label: "Other", value: "other" },
];

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Step8 = ({ formik, onBack, onNext }) => {
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
          <img src={Training} alt=" Training and Support icon" />
          <Typography variant="h6 steps-heading">
            Training and Support
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Training programs and ongoing support services.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Training Hours */}

        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center my-4"
        >
          <img src={Program} alt=" initial Investment icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Training Program
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label
            htmlFor="Classroom Training Hours"
            className="listing-form-label"
          >
            Classroom Training Hours
          </label>
          <TextField
            fullWidth
            type="number"
            name="trainingHours"
            value={formik.values.trainingHours}
            onChange={formik.handleChange}
            placeholder="Input Numerical Character"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label
            htmlFor="On the Job Training Hours"
            className="listing-form-label"
          >
            On the Job Training Hours
          </label>
          <TextField
            fullWidth
            type="number"
            name="jobtrainighours"
            value={formik.values.jobtrainighours}
            onChange={formik.handleChange}
            placeholder="Input Numerical Character"
          />
        </Grid>

        {/* Training Location */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label
            htmlFor="Do You Offer Onsite Grand Opening Support"
            className="listing-form-label"
          >
            Do You Offer Onsite Grand Opening Support
          </label>
          <TextField
            select
            fullWidth
            name="openingsupport"
            value={formik.values.openingsupport}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Training Description */}

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label
            htmlFor="Training Program Description"
            className="listing-form-label"
          >
            Training Program Description
          </label>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="trainingDescription"
            value={formik.values.trainingDescription}
            onChange={formik.handleChange}
            placeholder="Input Character"
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

export default Step8;
