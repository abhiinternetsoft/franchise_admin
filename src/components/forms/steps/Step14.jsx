import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper } from "@mui/material";

const Step14 = ({ formik, onBack, onNext }) => {
  const handleFileChange = (e, fieldName) => {
    formik.setFieldValue(fieldName, e.currentTarget.files[0]);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
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
          14
        </Box>
        <Box>
          <Typography variant="h6">Media Content + Uploads</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Videos, testimonials, gallery, and marketing materials.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Brand Video URL"
            name="brandVideoUrl"
            value={formik.values.brandVideoUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://youtube.com/watch?v=..."
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Testimonial Video URL"
            name="testimonialVideoUrl"
            value={formik.values.testimonialVideoUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://youtube.com/watch?v=..."
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            label="Press Mentions"
            name="pressMentions"
            value={formik.values.pressMentions}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="List any press mentions, awards, or media coverage..."
            multiline
            rows={3}
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <Typography variant="subtitle2" gutterBottom>
            Upload Gallery Images (JPG/PNG, max 5MB each)
          </Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "galleryImages")}
          />
        </Grid>

        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <Typography variant="subtitle2" gutterBottom>
            Upload Marketing Brochure (PDF, max 10MB)
          </Typography>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, "marketingBrochure")}
          />
        </Grid>
      </Grid>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Lead Management →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step14;
