import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper } from "@mui/material";

const Step13 = ({ formik, onBack, onNext }) => {
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
          13
        </Box>
        <Box>
          <Typography variant="h6">Social Media Presence</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Social media platform URLs and online presence.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Facebook URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Facebook URL"
            name="facebookUrl"
            value={formik.values.facebookUrl}
            onChange={formik.handleChange}
            placeholder="https://facebook.com/yourbrand"
            helperText="Facebook page URL"
          />
        </Grid>

        {/* Instagram URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Instagram URL"
            name="instagramUrl"
            value={formik.values.instagramUrl}
            onChange={formik.handleChange}
            placeholder="https://instagram.com/yourbrand"
            helperText="Instagram profile URL"
          />
        </Grid>

        {/* Twitter URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="Twitter URL"
            name="twitterUrl"
            value={formik.values.twitterUrl}
            onChange={formik.handleChange}
            placeholder="https://twitter.com/yourbrand"
            helperText="Twitter profile URL"
          />
        </Grid>

        {/* LinkedIn URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "49%" } }}>
          <TextField
            fullWidth
            label="LinkedIn URL"
            name="linkedinUrl"
            value={formik.values.linkedinUrl}
            onChange={formik.handleChange}
            placeholder="https://linkedin.com/company/yourbrand"
            helperText="LinkedIn company page URL"
          />
        </Grid>

        {/* YouTube URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "100%" } }}>
          <TextField
            fullWidth
            label="YouTube URL"
            name="youtubeUrl"
            value={formik.values.youtubeUrl}
            onChange={formik.handleChange}
            placeholder="https://youtube.com/channel/yourbrand"
            helperText="YouTube channel URL"
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continue to Media Content + Uploads →
        </Button>
      </Box>
    </Paper>
  );
};

export default Step13;
