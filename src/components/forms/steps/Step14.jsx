import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper } from "@mui/material";
import Document from "../../../assets/images/users/document.svg";
import Vector from "../../../assets/images/users/Vector.svg";
import brandBanner from "../../../assets/images/users/brandbanner.svg";

const Step14 = ({ formik, onBack, onNext }) => {
  // const handleFileChange = (e, fieldName) => {
  //   formik.setFieldValue(fieldName, e.currentTarget.files[0]);
  // };

  const handleFileChange = (e, fieldName) => {
    const files = Array.from(e.currentTarget.files);
    if (fieldName === "galleryImages") {
      const updatedFiles = [...formik.values.galleryImages, ...files].slice(
        0,
        5
      ); // Max 5
      formik.setFieldValue("galleryImages", updatedFiles);
    } else {
      formik.setFieldValue(fieldName, files[0]);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }} className="shadow-none">
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
          <img src={Document} alt="Media Content + Uploads icon" />
          <Typography variant="h6 steps-heading">
            Media Content + Uploads
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Videos, testimonials, gallery, and marketing materials.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label
            htmlFor="Franchise Marketing Video"
            className="listing-form-label"
          >
            Franchise Marketing Video
          </label>
          <TextField
            fullWidth
            name="marketingVideoUrl"
            value={formik.values.marketingVideoUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://youtube.com/watch?v=..."
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <label
            htmlFor="Franchise Testimonial Video"
            className="listing-form-label"
          >
            Franchise Testimonial Video
          </label>
          <TextField
            fullWidth
            name="testimonialVideoUrl"
            value={formik.values.testimonialVideoUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://youtube.com/watch?v=..."
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <label htmlFor="Press Mentions Video" className="listing-form-label">
            Press Mentions
          </label>
          <TextField
            fullWidth
            name="pressMentions"
            value={formik.values.pressMentions}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            multiline
            rows={3}
          />
        </Grid>

        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "49%" } }}
          className="Gallry-Images-section"
          onClick={() => document.getElementById("uploadgallery").click()}
        >
          <img src={brandBanner} alt="Gallary image icon" />
          <Typography
            variant="subtitle2"
            gutterBottom
            className="fs-14 my-3 upload-title"
          >
            Drag your file(s) or <span className="upload-blue">browser</span>
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            className="fs-12 my-2 upload-description"
          >
            Upload up to 5 photos Max 10 MB files and JPEG or PNG
          </Typography>
          <input
            type="file"
            accept="image/*"
            id="uploadgallery"
            className="upload-button"
            multiple
            onChange={(e) => handleFileChange(e, "galleryImages")}
          />
          <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
            {formik.values.galleryImages.map((file, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: 100,
                  height: 100,
                  border: "1px dashed #ccc",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Button
                  size="small"
                  color="error"
                  onClick={() => {
                    const updated = [...formik.values.galleryImages];
                    updated.splice(index, 1);
                    formik.setFieldValue("galleryImages", updated);
                  }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    minWidth: 0,
                    padding: "2px 6px",
                  }}
                >
                  X
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          sx={{ flexBasis: { xs: "100%", md: "49%" } }}
          className="upload-brochure"
          onClick={() => document.getElementById("uploadbrocure").click()}
        >
          <img src={Vector} alt="Upload pdf Brochure" />
          <Typography
            variant="subtitle2"
            gutterBottom
            className="fs-14 my-3 upload-title"
          >
            Drag your file(s) or <span className="upload-blue">browser</span>
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            className="fs-12 my-2 upload-description"
          >
            Max 10 MB PDF files
          </Typography>
          <input
            type="file"
            accept="application/pdf"
            className="upload-button"
            id="uploadbrocure"
            onChange={(e) => handleFileChange(e, "marketingBrochure")}
          />
        </Grid>
      </Grid>

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

export default Step14;
