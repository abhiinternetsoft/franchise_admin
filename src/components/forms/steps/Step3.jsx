import React, { useState, useCallback } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  Dialog,
  DialogContent,
  Button,
  Slider,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import brandLogo from "../../../assets/images/users/brandLogo.svg";
import brandBanner from "../../../assets/images/users/brandbanner.svg";
import Branding from "../../../assets/images/users/Branding.svg";
import { IconButton } from "@mui/material";

import Cropper from "react-easy-crop";
import getCroppedImg from "./getCroppedImg";

// You might need to import a CSS file or define styles for react-easy-crop
// import 'react-easy-crop/react-easy-crop.css'; // If you're using default styles, ensure this is imported

const Step3 = ({ formik }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewField, setPreviewField] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleFileChange = (e, field) => {
    const file = e.currentTarget.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setPreviewField(field);
      setSelectedFile(file);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const confirmUpload = async () => {
    if (previewImage && croppedAreaPixels) {
      const croppedImageBlob = await getCroppedImg(
        previewImage,
        croppedAreaPixels
      );
      const croppedFile = new File([croppedImageBlob], selectedFile.name, {
        type: selectedFile.type,
      });
      formik.setFieldValue(previewField, croppedFile);
    } else {
      formik.setFieldValue(previewField, selectedFile);
    }
    setPreviewImage(null);
    setPreviewField(null);
    setSelectedFile(null);
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewField(null);
    setSelectedFile(null);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, borderRadius: 2 }}
      className="shadow-none border mb-4 "
    >
      <Box mb={3} display="flex" alignItems="center" gap="10px">
        <img src={Branding} alt="Branding Image" />
        <Box>
          <Typography variant="h6 steps-heading">Branding</Typography>
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

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          {formik.values.brandLogo ? (
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              flexDirection="column"
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={URL.createObjectURL(formik.values.brandLogo)}
                  alt="Brand Logo"
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    border: "1px solid #000",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => formik.setFieldValue("brandLogo", null)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                  }}
                >
                  ✕
                </IconButton>
              </Box>

              <Typography
                variant="subtitle1"
                color="success.main"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <CheckCircle fontSize="small" /> Your Logo has been uploaded.
              </Typography>
            </Box>
          ) : (
            <Box
              onClick={() => document.getElementById("brandLogo").click()}
              sx={{
                padding: 4,
                border: "2px dashed #62C2FF",
                cursor: "pointer",
                borderRadius: 2,
              }}
              className="d-flex align-items-center gap-10"
            >
              <img
                src={brandLogo}
                alt="brand Logo"
                className="brandLogo-icon"
              />
              <div>
                <Typography className="fs-14 my-2 upload-title">
                  Upload Brand Logo
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="fs-12 my-2 upload-description"
                >
                  <span className="upload-blue">Click to upload</span> or drag
                  and drop
                </Typography>
                <input
                  type="file"
                  id="brandLogo"
                  name="brandLogo"
                  accept=".png,.jpg,.jpeg,.svg"
                  hidden
                  onChange={(e) => handleFileChange(e, "brandLogo")}
                  className="upload-button"
                />
                <Typography variant="caption" className="upload-caption">
                  PNG, JPG, SVG - Max 2MB
                </Typography>
              </div>
            </Box>
          )}
        </Grid>

        <Grid sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          {formik.values.brandBanner ? (
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              flexDirection="column"
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={URL.createObjectURL(formik.values.brandBanner)}
                  alt="Brand Banner"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <IconButton
                  size="small"
                  onClick={() => formik.setFieldValue("brandBanner", null)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                  }}
                >
                  ✕
                </IconButton>
              </Box>
              <Typography
                variant="subtitle1"
                color="success.main"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <CheckCircle fontSize="small" /> Your Banner has been uploaded.
              </Typography>
            </Box>
          ) : (
            <Box
              onClick={() => document.getElementById("brandBanner").click()}
              sx={{
                border: "2px dashed #62C2FF",
                padding: 4,
                cursor: "pointer",
                borderRadius: 2,
                height: "210px",
              }}
              className="d-flex align-items-center gap-10"
            >
              <img
                src={brandBanner}
                alt="brand Banner"
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
                  <span className="upload-blue">Click to upload</span> or drag
                  and drop
                </Typography>
                <input
                  type="file"
                  id="brandBanner"
                  name="brandBanner"
                  accept=".png,.jpg,.jpeg"
                  hidden
                  onChange={(e) => handleFileChange(e, "brandBanner")}
                  className="upload-button"
                />
                <Typography variant="caption" className="upload-caption">
                  PNG, JPG - 1200x400px recommended
                </Typography>
              </div>
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Preview and Cropping Popup */}
      <Dialog
        open={Boolean(previewImage)}
        onClose={closePreview}
        className="Preview-image-popup"
        PaperProps={{
          sx: {
            borderRadius: 4,
            backgroundColor: "#fff",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
            width: previewField === "brandLogo" ? 400 : 800,
            maxWidth: "95%",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
          }}
        >
          {/* Image Cropper */}
          {previewImage && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: previewField === "brandLogo" ? 200 : 250,
                mb: 3,
                // Add these styles to remove the grey background
                backgroundColor: "transparent", // Or match DialogContent background
                "& .react-easy-crop-container": {
                  backgroundColor: "transparent !important", // Override default
                },
                "& .react-easy-crop-image": {
                  objectFit:
                    previewField === "brandLogo" ? "contain" : "contain", // Use 'contain' to ensure full image is visible
                },
              }}
            >
              <Cropper
                image={previewImage}
                crop={crop}
                zoom={zoom}
                aspect={previewField === "brandLogo" ? 1 / 1 : 12 / 4}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                cropShape={previewField === "brandLogo" ? "round" : "rect"}
                showGrid={true} // Keep grid for better alignment
                // containerStyle={{ backgroundColor: 'transparent' }} // This might not be necessary with the above, but can be an alternative
              />
            </Box>
          )}

          {/* Zoom Slider */}
          <Box sx={{ width: "80%", mb: 3 }}>
            <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
              Zoom
            </Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="zoom-slider"
              onChange={(e, newZoom) => setZoom(newZoom)}
            />
          </Box>

          {/* Text */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            {previewField === "brandLogo"
              ? "Adjust Brand Logo"
              : "Adjust Brand Banner"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Drag and zoom to select the perfect area.
          </Typography>

          {/* Upload Button */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #00B4DB, #0083B0)",
              borderRadius: 5,
              px: 4,
              py: 1,
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={confirmUpload}
          >
            Upload File
          </Button>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default Step3;
