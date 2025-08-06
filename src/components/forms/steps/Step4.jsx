import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Button,
  Paper,
  Chip,
} from "@mui/material";
import { GoInfo } from "react-icons/go";
import { useState } from "react";
import { useFormik } from "formik";
import Brand from "../../../assets/images/users/Brand.svg";

const Step4 = ({ formik, onBack, onNext }) => {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (chipToDelete) => {
    setKeywords((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

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
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }} className="shadow-none">
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
          <img src={Brand} alt="Brand" />
          <Typography variant="h6 steps-heading">Brand Overview</Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Provide comprehensive brand description and categorization.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* About Us */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="About Us Description" className="listing-form-label">
            About Us Description
          </label>
          <TextField
            fullWidth
            name="aboutUs"
            placeholder="Enter your brand about us description"
            multiline
            rows={5}
            value={formik.values.aboutUs}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.aboutUs && Boolean(formik.errors.aboutUs)}
          />
        </Grid>

        {/* Category */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "32%" } }}>
          <label htmlFor="Category" className="listing-form-label">
            Category
          </label>
          <TextField
            select
            fullWidth
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category && Boolean(formik.errors.category)}
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
          <label htmlFor="Subcategory" className="listing-form-label">
            Subcategory
          </label>
          <TextField
            select
            fullWidth
            name="subcategory"
            value={formik.values.subcategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!formik.values.category}
            error={
              formik.touched.subcategory && Boolean(formik.errors.subcategory)
            }
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
          <label htmlFor="Business Model" className="listing-form-label">
            Business Model
          </label>
          <TextField
            select
            fullWidth
            name="businessModel"
            value={formik.values.businessModel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.businessModel &&
              Boolean(formik.errors.businessModel)
            }
          >
            {businessModels.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Keywords */}
        {/* <Grid sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="Keywords" className="listing-form-label">
            Keywords
          </label>
          <TextField
            fullWidth
            name="keywords"
            value={formik.values.keywords}
            onChange={(e) => {
              formik.handleChange(e);
              if (e.target.value.trim() !== "") {
                setOpenSnackbar(true); // show popup
              }
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.keywords && Boolean(formik.errors.keywords)}
          />
        </Grid> */}

        <Box sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="Keywords" className="listing-form-label">
            Keywords
          </label>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "6px",
            }}
          >
            {formik.values.keywords.map((keyword, index) => (
              <Chip
                key={index}
                label={keyword}
                onDelete={() => {
                  const updated = formik.values.keywords.filter(
                    (_, i) => i !== index
                  );
                  formik.setFieldValue("keywords", updated);
                }}
                sx={{
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                }}
              />
            ))}

            <TextField
              variant="standard"
              placeholder="Type and press Enter"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue.trim() !== "") {
                  e.preventDefault();
                  formik.setFieldValue("keywords", [
                    ...formik.values.keywords,
                    inputValue.trim(),
                  ]);
                  setInputValue("");
                }
              }}
              sx={{ flex: 1, minWidth: "100px" }}
              InputProps={{ disableUnderline: true }}
            />
          </Box>

          {formik.touched.keywords && formik.errors.keywords && (
            <Typography color="error" variant="body2">
              {formik.errors.keywords}
            </Typography>
          )}
        </Box>
      </Grid>

      {/* Buttons */}
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

export default Step4;
