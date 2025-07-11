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

const responseTimes = [
  "Within 1 hour",
  "Within 4 hours",
  "Same day",
  "Next business day",
  "Within 2 business days",
];

const Step15 = ({ formik, onBack, onNext }) => {
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
          15
        </Box>
        <Box>
          <Typography variant="h6">Lead Management</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Contact preferences and lead handling information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Lead Contact Email"
            name="leadEmail"
            value={formik.values.leadEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="leads@yourbrand.com"
            helperText="Email address for receiving leads"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Calendly Scheduling URL"
            name="calendlyUrl"
            value={formik.values.calendlyUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://calendly.com/yourbrand"
            helperText="Calendly or scheduling link for prospects"
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            select
            fullWidth
            label="Response Time Commitment"
            name="responseTime"
            value={formik.values.responseTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="How quickly you respond to leads"
          >
            {responseTimes.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" type="submit">
          Complete Listing ✔
        </Button>
      </Box>
    </Paper>
  );
};

export default Step15;
