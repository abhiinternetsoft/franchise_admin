import React from "react";
import { Box, Typography, Button, Paper, IconButton } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Step1_FileUpload = ({ formik, onSkip, onNext }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("fddFile", file);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
      {/* Title */}

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
          1
        </Box>
        <Box>
          <Typography variant="h6">Step 1: FDD Upload</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Upload your Franchise Disclosure Document or skip to complete
            manually.
          </Typography>
        </Box>
      </Box>

      {/* Upload Box */}
      <Box
        sx={{
          border: "2px dashed #ccc",
          padding: 4,
          textAlign: "center",
          borderRadius: 2,
          cursor: "pointer",
          my: 4,
        }}
        onClick={() => document.getElementById("fdd-upload").click()}
      >
        <input
          id="fdd-upload"
          type="file"
          name="fddFile"
          accept=".pdf"
          hidden
          onChange={handleFileChange}
        />
        {/* <CloudUploadIcon sx={{ fontSize: 40, color: "#888" }} /> */}
        <Typography variant="body1" sx={{ mt: 2 }}>
          Click to upload FDD document
        </Typography>
        <Typography variant="caption" color="text.secondary">
          PDF files only, max 10MB
        </Typography>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="secondary" onClick={onSkip}>
          Skip FDD Upload
        </Button>
        <Button variant="contained" color="primary" onClick={onNext}>
          Continue to Custom URL & Identification →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step1_FileUpload;
