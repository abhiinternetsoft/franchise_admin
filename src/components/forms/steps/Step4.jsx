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

const Step4 = ({ formik, onBack, onNext }) => {
  const categories = [
    "Home Services",
    "Food & Beverage",
    "Healthcare",
    "Children & Family Services",
    "Beauty and Wellness",
    "Retail",
  ];
  const subcategories = {
    "Home Services": [
      "Property Management",
      "Cleaning Services",
      "Roofing & Exterior",
    ],
    "Food & Beverage": [
      "Tex-Mex/Mexican",
      "Pizza & Sandwiches",
      "Healthy Food & Smoothies",
      "Specialty Food",
      "Greek/Mediterranean",
    ],
    Healthcare: ["Urgent Care"],
    "Children & Family Services": ["Kids Entertainment & Spa"],
    "Beauty and Wellness": ["Hair Removal & Beauty"],
    Retail: ["Tobacco & Vape"],
  };
  const businessModels = [
    "Franchise",
    "License",
    "Partnership",
    "Direct Sales",
  ];

  const selectedSubcategories = subcategories[formik.values.category] || [];

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
          4
        </Box>
        <Box>
          <Typography variant="h6">Brand Overview</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Provide comprehensive brand description and categorization.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* About Us */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            label="About Us Description"
            name="aboutUs"
            multiline
            rows={5}
            value={formik.values.aboutUs}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Minimum 200 characters, maximum 2000 characters"
            error={formik.touched.aboutUs && Boolean(formik.errors.aboutUs)}
          />
        </Grid>

        {/* Category */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="Category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText="Primary business category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Subcategory */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="Subcategory"
            name="subcategory"
            value={formik.values.subcategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!formik.values.category}
            error={
              formik.touched.subcategory && Boolean(formik.errors.subcategory)
            }
            helperText="Specific business subcategory"
          >
            {selectedSubcategories.map((sub) => (
              <MenuItem key={sub} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Business Model */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <TextField
            select
            fullWidth
            label="Business Model"
            name="businessModel"
            value={formik.values.businessModel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.businessModel &&
              Boolean(formik.errors.businessModel)
            }
            helperText="Primary business model"
          >
            {businessModels.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Keywords */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            label="Keywords"
            name="keywords"
            value={formik.values.keywords}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText="Enter keywords separated by commas (e.g., fast food, burgers, family dining)"
            error={formik.touched.keywords && Boolean(formik.errors.keywords)}
          />
        </Grid>
      </Grid>

      {/* Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Company Overview →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step4;
