import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Paper,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Setting from "../../../assets/images/users/setting.svg";
import Space from "../../../assets/images/users/space.svg";
import Ownership from "../../../assets/images/users/ownership.svg";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const locationTypes = [
  { value: "dollor", label: "Lorem Ipsum Dollor" },
  { value: "quest", label: "Lorem Ipsum Quest" },
  { value: "noir", label: "Lorem Ipsum Noir" },
];

const hourOptions = [
  "08:00 AM - 19:00 PM",
  "08:30 AM - 19:00 PM",
  "09:00 AM - 19:00 PM",
  "09:30 AM - 19:00 PM",
  "10:00 AM - 19:00 PM",
  "10:30 AM - 19:00 PM",
  "11:00 AM - 19:00 PM",
  "11:30 AM - 19:00 PM",
];

const stafftime = [
  { value: "fulltime", label: "Full Time" },
  { value: "parttime", label: "Part Time" },
  { value: "Seasonal", label: "Seasonal" },
];

const Step7 = ({ formik, onBack, onNext }) => {
  const { values, handleChange, setFieldValue } = formik;

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
          <img src={Setting} alt=" Operational Requirements icon" />
          <Typography variant="h6 steps-heading">
            Operational Requirements
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Space requirements, staffing, and operational details.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} className="stepform-container">
        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center my-4"
        >
          <img src={Space} alt=" initial Investment icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Space Requirements
          </Typography>
        </Grid>
        {/* Space Requirements */}

        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label htmlFor="location Type" className="listing-form-label">
            location Type
          </label>
          <TextField
            select
            fullWidth
            name="locationType"
            value={formik.values.locationType}
            onChange={formik.handleChange}
          >
            {locationTypes.map((loc) => (
              <MenuItem key={loc.value} value={loc.value}>
                {loc.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label
            htmlFor="Min. Space Requirement"
            className="listing-form-label"
          >
            Min. Space Requirement
          </label>
          <TextField
            fullWidth
            name="spaceLow"
            value={formik.values.spaceLow}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label
            htmlFor="Max. Space Requirement"
            className="listing-form-label"
          >
            Max. Space Requirement
          </label>
          <TextField
            fullWidth
            name="spaceHigh"
            value={formik.values.spaceHigh}
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>

        {/* Ownership */}

        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center my-4"
        >
          <img src={Ownership} alt=" initial Investment icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Ownership Requirements
          </Typography>
        </Grid>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Owner Operator Required"
            className="listing-form-label"
          >
            Owner Operator Required
          </label>
          <TextField
            Select
            fullWidth
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
        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Absentee Ownership Allowed"
            className="listing-form-label"
          >
            Absentee Ownership Allowed
          </label>
          <TextField
            select
            fullWidth
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

        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center my-4"
        >
          <img src={Space} alt=" initial Investment icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Staffing Requirements
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label htmlFor="Staff Requirements" className="listing-form-label">
            Staff Requirements
          </label>
          <TextField
            select
            fullWidth
            name="staffRequirements"
            value={formik.values.staffRequirements}
            onChange={formik.handleChange}
          >
            {stafftime.map((time) => (
              <MenuItem key={time.value} value={time.value}>
                {time.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Operating Hours */}

        <Grid
          sx={{ flexBasis: { xs: "100%", md: "100%" } }}
          className="d-flex gap-10 align-items-center my-4"
        >
          <img src={Space} alt=" initial Investment icon" />
          <Typography variant="subtitle1" gutterBottom className="m-0">
            Operating Hours
          </Typography>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Operational Days & Hours"
            className="listing-form-label"
          >
            Operational Days & Hours
          </label>
          <DatePicker
            value={formik.values.operationalDay}
            onChange={(newValue) => setFieldValue("operationalDay", newValue)}
            format="MM/DD/YYYY"
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
          <label
            htmlFor="Training Program Description"
            className="listing-form-label"
          >
            Training Program Description
          </label>
          <FormControl fullWidth>
            <InputLabel>Select Hour</InputLabel>
            <Select
              value={formik.values.operationalHour}
              onChange={(e) => setFieldValue("operationalHour", e.target.value)}
            >
              {hourOptions.map((hour, index) => (
                <MenuItem key={index} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default Step7;
