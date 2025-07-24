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
import Lead from "../../../assets/images/users/lead.svg";

const responseTimes = [
  "Within 1 hour",
  "Within 4 hours",
  "Same day",
  "Next business day",
  "Within 2 business days",
];

const Step15 = ({ formik, onBack, onNext }) => {
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
          <img src={Lead} alt="Media Content + Uploads icon" />
          <Typography variant="h6 steps-heading">Lead Management</Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Contact preferences and lead handling information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "50%" } }}
          className="my-4"
        >
          <label htmlFor="Lead Contact Email" className="listing-form-label">
            Lead Contact Email
          </label>
          <TextField
            fullWidth
            name="leadEmail"
            value={formik.values.leadEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="leads@yourbrand.com"
            error={formik.touched.leadEmail && Boolean(formik.errors.leadEmail)}
            helperText={formik.touched.leadEmail && formik.errors.leadEmail}
          />
        </Grid>

        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "50%" } }}
          className="my-4"
        >
          <label
            htmlFor="Calendly Scheduling URL"
            className="listing-form-label"
          >
            Calendly Scheduling URL
          </label>
          <TextField
            fullWidth
            name="calendlyUrl"
            value={formik.values.calendlyUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://calendly.com/yourbrand"
            error={
              formik.touched.calendlyUrl && Boolean(formik.errors.calendlyUrl)
            }
            helperText={formik.touched.calendlyUrl && formik.errors.calendlyUrl}
          />
        </Grid>
      </Grid>

      {/* <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" type="submit">
          Complete Listing ✔
        </Button>
      </Box> */}
    </Paper>
  );
};

export default Step15;
