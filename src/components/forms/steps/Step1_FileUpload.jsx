import React from "react";
import { Box, Typography, Button, Paper, IconButton } from "@mui/material";
import { FaRegFilePdf } from "react-icons/fa";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { LuFileText } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { IoSaveOutline } from "react-icons/io5";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Step1_FileUpload = ({ formik, onSkip, onNext }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("fddFile", file);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, borderRadius: 2 }}
      className="shadow-none"
    >
      {/* Title */}

      <Box mb={3} display="flex" alignItems="center">
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            // bgcolor: "primary.main",
            color: "#535364",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <LuFileText size={30} />
        </Box>
        <Box>
          <Typography variant="h6 steps-heading">Step 1: FDD Upload</Typography>
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
        <span className="upload-icon">
          <BsCloudArrowUpFill size={120} />
        </span>
        <Typography variant="body1" sx={{ mt: 2 }} className="text-blue">
          Click to upload FDD document
        </Typography>
        <Typography
          variant="caption"
          className="text-blue py-1 px-2 mt-3 rounded fs-14 gap-10 d-flex align-items-center upload-file-btn"
        >
          <FaRegFilePdf />
          PDF files only, max 10MB
        </Typography>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className="d-flex gap-10 upload-save-button">
          <Button variant="outlined" color="secondary" onClick={onSkip}>
            cancle <RxCross1 />
          </Button>
          <Button variant="outlined" color="secondary" onClick={onSkip}>
            Save <IoSaveOutline />
          </Button>
          <Button variant="outlined" color="secondary" onClick={onSkip}>
            Skip FDD Upload
          </Button>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          className="step-next-button"
        >
          Continue to Custom URL & Identification →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step1_FileUpload;
