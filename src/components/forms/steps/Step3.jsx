import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper } from "@mui/material";
import brandLogo from "../../../assets/images/users/brandLogo.svg";
import brandBanner from "../../../assets/images/users/brandbanner.svg";
import { FaRegUserCircle } from "react-icons/fa";

const Step3 = ({ formik, onBack, onNext }) => {
  const handleFileChange = (e, field) => {
    formik.setFieldValue(field, e.currentTarget.files[0]);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }} className="shadow-none">
      {/* Step Info */}
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
          <FaRegUserCircle size={20} />
          <Typography variant="h6 steps-heading">Branding</Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Upload your brand assets and essential brand information.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Brand Name */}
        <Grid sx={{ flexBasis: "50%" }}>
          <label htmlFor="Brand Name" className="listing-form-label">
            Brand Name
          </label>
          <TextField
            fullWidth
            name="brandName"
            value={formik.values.brandName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your brand name"
            error={formik.touched.brandName && Boolean(formik.errors.brandName)}
          />
        </Grid>

        {/* Brand Logo Upload */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <Box
            onClick={() => document.getElementById("brandLogo").click()}
            sx={{
              padding: 4,

              cursor: "pointer",
              borderRadius: 2,
            }}
            className="d-flex align-items-center gap-10"
          >
            <img src={brandLogo} alt="brand Logo" className="brandLogo-icon" />
            <div>
              <Typography className="fs-14 my-2 upload-title">
                {" "}
                Upload Brand Logo
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                className="fs-12 my-2 upload-description"
              >
                <span className="upload-blue">Click to upload</span> or drag and
                drop
              </Typography>
              <input
                type="file"
                id="brandLogo"
                name="brandLogo"
                accept=".png,.jpg,.jpeg,.svg"
                hidden
                onChange={(e) => handleFileChange(e, "brandLogo")}
                className=" upload-button "
              />
              <Typography variant="caption" className="upload-caption">
                PNG, JPG, SVG - Max 2MB
              </Typography>
            </div>
          </Box>
        </Grid>

        {/* Brand Banner Upload */}
        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <Box
            onClick={() => document.getElementById("brandBanner").click()}
            sx={{
              border: "2px dashed #62C2FF",
              padding: 4,
              cursor: "pointer",
              borderRadius: 2,
            }}
            className="d-flex align-items-center gap-10"
          >
            <img
              src={brandBanner}
              alt="brand Logo"
              className="brandBanner-icon"
            />
            <div>
              <Typography className="fs-14 my-2 upload-title">
                Upload Brand Banner
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                className="fs-12 my-2 upload-description"
              >
                <span className="upload-blue">Click to upload</span> or drag and
                drop
              </Typography>
              <input
                type="file"
                id="brandBanner"
                name="brandBanner"
                accept=".png,.jpg,.jpeg"
                hidden
                onChange={(e) => handleFileChange(e, "brandBanner")}
                className=" upload-button "
              />
              <Typography variant="caption" className="upload-caption">
                PNG, JPG - 1200x400px recommended
              </Typography>
            </div>
          </Box>
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

export default Step3;
