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
import { CiLink } from "react-icons/ci";
import linkIcon from "../../../assets/images/users/linkIcon.png";

const Step2 = ({ formik, onBack, onNext }) => {
  const baseURL = "https://franchisehub.com/opportunities/";

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, borderRadius: 2 }}
      className="shadow-none border mb-4 Listing-stepforms"
    >
      {/* Header */}

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
          <img src={linkIcon} alt="linkIcon" />
          <Typography variant="h6 steps-heading">
            {" "}
            Custom URL & Identification
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Set up your unique franchise listing identifier and custom URL for
            easy discovery.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="Custom URL Slug" className="listing-form-label">
            Custom URL Slug
          </label>
          <TextField
            fullWidth
            name="customSlug"
            value={formik.values.customSlug}
            onChange={(e) => {
              const formatted = e.target.value
                .replace(/\s+/g, "-") // spaces → dash
                .replace(/[^a-zA-Z0-9-]/g, "") // remove invalid chars
                .toLowerCase();
              formik.setFieldValue("customSlug", formatted);
            }}
            onBlur={formik.handleBlur}
            placeholder="my-brand-name"
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

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label
            htmlFor="Franchise Listing System Number (FLS #)"
            className="listing-form-label"
          >
            Franchise Listing System Number (FLS #)
          </label>
          <TextField
            fullWidth
            name="flsNumber"
            value={formik.values.flsNumber}
            InputProps={{ readOnly: true }}
            disabled
          />
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label htmlFor="Preview URL" className="listing-form-label">
            Preview URL
          </label>
          <TextField
            fullWidth
            name="previewURL"
            value={`https://franchiselistings.com/${formik.values.customSlug}`}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        {/* <Button variant="outlined" color="secondary" onClick={onBack}>
          ← Previous
        </Button> */}
        {/* <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          disabled={
            !formik.values.customSlug || Boolean(formik.errors.customSlug)
          }
        >
          Skip Button
        </Button> */}
      </Box>
    </Paper>
  );
};

export default Step2;
