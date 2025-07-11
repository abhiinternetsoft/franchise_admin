import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper } from "@mui/material";

const Step3 = ({ formik, onBack, onNext }) => {
  const handleFileChange = (e, field) => {
    formik.setFieldValue(field, e.currentTarget.files[0]);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      {/* Step Info */}
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
          3
        </Box>
        <Box>
          <Typography variant="h6">Branding</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Upload your brand assets and essential brand information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Brand Name */}
        <Grid sx={{ flexBasis: "100%" }}>
          <TextField
            fullWidth
            label="Brand Name"
            name="brandName"
            value={formik.values.brandName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your brand name"
            helperText="Official brand name"
            error={formik.touched.brandName && Boolean(formik.errors.brandName)}
          />
        </Grid>

        {/* Brand Logo Upload */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
          <Box
            onClick={() => document.getElementById("brandLogo").click()}
            sx={{
              border: "2px dashed #ccc",
              padding: 4,
              textAlign: "center",
              cursor: "pointer",
              borderRadius: 2,
            }}
          >
            <input
              type="file"
              id="brandLogo"
              name="brandLogo"
              accept=".png,.jpg,.jpeg,.svg"
              hidden
              onChange={(e) => handleFileChange(e, "brandLogo")}
            />
            <Typography>🖼 Upload Brand Logo</Typography>
            <Typography variant="caption">PNG, JPG, SVG - Max 2MB</Typography>
          </Box>
        </Grid>

        {/* Brand Banner Upload */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
          <Box
            onClick={() => document.getElementById("brandBanner").click()}
            sx={{
              border: "2px dashed #a78bfa",
              padding: 4,
              textAlign: "center",
              cursor: "pointer",
              borderRadius: 2,
            }}
          >
            <input
              type="file"
              id="brandBanner"
              name="brandBanner"
              accept=".png,.jpg,.jpeg"
              hidden
              onChange={(e) => handleFileChange(e, "brandBanner")}
            />
            <Typography>🖼 Upload Brand Banner</Typography>
            <Typography variant="caption">
              PNG, JPG - 1200x400px recommended
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Brand Overview →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step3;
