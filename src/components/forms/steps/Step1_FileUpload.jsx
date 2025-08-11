import React from "react";
import { Box, Typography, Button, Paper, TextField } from "@mui/material";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { FaRegFilePdf, FaArrowRightLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoSaveOutline } from "react-icons/io5";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import FddUpload from "../../../assets/images/users/fdd-upload.svg";
import IcUpload from "../../../assets/images/users/ic-pdf.svg";

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
      className="shadow-none border step-forms"
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box mb={3}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={FddUpload} alt="FddUpload" />
            <Typography variant="h6" className="steps-heading">
              FDD Upload
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Upload your Franchise Disclosure Document or skip to complete
            manually.
          </Typography>
        </Box>

        {/* Issuance Date Selector */}
        <Box sx={{ mb: 3 }}>
          <label htmlFor="FDD Insurance date">FDD Issuance Date</label>
          <DatePicker
            value={
              formik.values.fddIssuanceDate
                ? dayjs(formik.values.fddIssuanceDate)
                : null
            }
            onChange={(newValue) => {
              if (newValue && dayjs(newValue).isValid()) {
                formik.setFieldValue(
                  "fddIssuanceDate",
                  dayjs(newValue).toISOString()
                );
              } else {
                formik.setFieldValue("fddIssuanceDate", null);
              }
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                size: "small",
                error:
                  formik.touched.fddIssuanceDate &&
                  Boolean(formik.errors.fddIssuanceDate),
                helperText:
                  formik.touched.fddIssuanceDate &&
                  formik.errors.fddIssuanceDate,
              },
            }}
          />
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

        {!formik.values.fddFile ? (
          <>
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
              <img src={IcUpload} alt="IcUpload" />
              PDF files only, max 10MB
            </Typography>
          </>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <FaRegFilePdf size={50} color="#6BBDEF" />
            <Typography variant="body1" sx={{ mt: 2 }}>
              {formik.values.fddFile.name}
            </Typography>
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={(e) => {
                e.stopPropagation();
                formik.setFieldValue("fddFile", null);
              }}
            >
              Remove File
            </Button>
          </Box>
        )}
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="d-flex gap-10 upload-save-button">
          <Button variant="outlined" color="secondary" onClick={onSkip}>
            cancel <RxCross1 />
          </Button>
          <Button variant="outlined" color="secondary" onClick={onSkip}>
            Save <IoSaveOutline />
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          className="step-next-button gap-10"
        >
          Next Step <FaArrowRightLong />
        </Button>
      </Box>
    </Paper>
  );
};

export default Step1_FileUpload;
