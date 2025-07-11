import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
  FormHelperText,
} from "@mui/material";

const Step2 = ({ formik, onBack, onNext }) => {
  const baseURL = "https://franchisehub.com/opportunities/";

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      {/* Header */}

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
          2
        </Box>
        <Box>
          <Typography variant="h6">
            {" "}
            Step 2: Custom URL & Identification
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Set up your franchise listing URL and identification.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
          <TextField
            fullWidth
            label="Franchise Listing System Number (FLS #)"
            name="flsNumber"
            value={formik.values.flsNumber}
            InputProps={{ readOnly: true }}
            helperText="Auto-generated unique identifier"
            disabled
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
          <TextField
            fullWidth
            label="Custom URL Slug"
            name="customSlug"
            value={formik.values.customSlug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="my-franchise-opportunity"
            error={
              formik.touched.customSlug && Boolean(formik.errors.customSlug)
            }
            helperText={
              formik.touched.customSlug && formik.errors.customSlug
                ? formik.errors.customSlug
                : "Lowercase letters, numbers, and hyphens only"
            }
          />
        </Grid>

        <Grid sx={{ flexBasis: "100%" }}>
          <TextField
            fullWidth
            label="Preview URL"
            name="previewURL"
            value={`https://franchisehub.com/opportunities/${formik.values.customSlug}`}
            InputProps={{ readOnly: true }}
            helperText="This is how your listing URL will appear"
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" color="secondary" onClick={onBack}>
          ← Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          disabled={
            !formik.values.customSlug || Boolean(formik.errors.customSlug)
          }
        >
          Continue to Branding →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step2;
