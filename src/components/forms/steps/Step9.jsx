import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Shield from "../../../assets/images/users/shield.svg";

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

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const Step9 = ({ formik, onBack, onNext }) => {
  const handleStatesChange = (event) => {
    const {
      target: { value },
    } = event;

    if (value.includes("all")) {
      if (formik.values.notRegisteredStates.length === states.length) {
        formik.setFieldValue("notRegisteredStates", []);
      } else {
        formik.setFieldValue("notRegisteredStates", states);
      }
    } else {
      formik.setFieldValue("notRegisteredStates", value);
    }
  };

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
          <img src={Shield} alt=" Training and Support icon" />
          <Typography variant="h6 steps-heading">
            Territory and Availability
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Territory protection and opportunity types.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "24%" } }}>
          <label
            htmlFor="Do Your Offer an Exclusive Territory?"
            className="listing-form-label"
          >
            Do Your Offer an Exclusive Territory?
          </label>
          <TextField
            select
            fullWidth
            name="exclusiveterritory"
            value={formik.values.exclusiveterritory}
            onChange={formik.handleChange}
            helperText="Level of territory protection offered"
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "74%" } }}>
          <label htmlFor="Territory Description" className="listing-form-label">
            Territory Description
          </label>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="territorydescription"
            value={formik.values.territorydescription}
            onChange={formik.handleChange}
            className="mb-4"
            placeholder="Input Territory Description"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label
            htmlFor="Do You Offer Single Unit Franchise Opportunities?"
            className="listing-form-label"
          >
            Do You Offer Single Unit Franchise Opportunities?
          </label>
          <TextField
            select
            fullWidth
            name="singleunitfranchise"
            value={formik.values.singleunitfranchise}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label
            htmlFor="Do You Offer Multi Unit Franchise Opportunities?"
            className="listing-form-label"
          >
            Do You Offer Multi Unit Franchise Opportunities?
          </label>
          <TextField
            select
            fullWidth
            name="multiunitfranchise"
            value={formik.values.multiunitfranchise}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label
            htmlFor="Do You Offer Master Unit Franchise Opportunities?"
            className="listing-form-label"
          >
            Do You Offer Master Unit Franchise Opportunities?
          </label>
          <TextField
            select
            fullWidth
            name="masterunitfranchise"
            value={formik.values.masterunitfranchise}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "23%" } }}>
          <label
            htmlFor="Are You Open to International Expansion?"
            className="listing-form-label"
          >
            Are You Open to International Expansion?
          </label>
          <TextField
            select
            fullWidth
            name="internationalexpansion"
            value={formik.values.internationalexpansion}
            onChange={formik.handleChange}
          >
            {yesNoOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Multi-select states dropdown */}
        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "23%" } }}
          className="mt-4"
        >
          <label
            htmlFor="We Are Not Registered To Sell Franchises In:"
            className="listing-form-label"
          >
            We Are Not Registered To Sell Franchises In:
          </label>
          <FormControl fullWidth>
            <Select
              multiple
              value={formik.values.notRegisteredStates}
              onChange={handleStatesChange}
              renderValue={(selected) => selected.join(", ")}
            >
              <MenuItem value="all">
                <Checkbox
                  checked={
                    formik.values.notRegisteredStates.length === states.length
                  }
                  indeterminate={
                    formik.values.notRegisteredStates.length > 0 &&
                    formik.values.notRegisteredStates.length < states.length
                  }
                />
                <ListItemText primary="Select All" />
              </MenuItem>
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  <Checkbox
                    checked={
                      formik.values.notRegisteredStates.indexOf(state) > -1
                    }
                  />
                  <ListItemText primary={state} />
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
        <Button variant="contained" onClick={onNext}>
          Skip Button
        </Button>
      </Box>
    </Paper>
  );
};

export default Step9;
