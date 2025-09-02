import React from "react";
import { Box, Typography, TextField, Grid, Button, Paper } from "@mui/material";
import Facebook from "../../../assets/images/users/facebook.svg";

const Step13 = ({ formik, onBack, onNext }) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 4, borderRadius: 2 }}
      className="shadow-none border mb-4"
    >
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
          <img src={Facebook} alt="Broker Referrals icon" />
          <Typography variant="h6 steps-heading">
            Social Media Presence
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="fs-14 steps-short-desc"
          >
            Social media platform URLs and online presence.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} className="my-4">
        {/* Facebook URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label htmlFor="Facebook URL" className="listing-form-label">
            Facebook URL
          </label>
          <TextField
            fullWidth
            name="facebookUrl"
            value={formik.values.facebookUrl}
            onChange={formik.handleChange}
            placeholder="https://facebook.com/yourbrand"
            error={
              formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)
            }
            helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
          />
        </Grid>

        {/* Instagram URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label htmlFor="Instagram URL" className="listing-form-label">
            Instagram URL
          </label>
          <TextField
            fullWidth
            name="instagramUrl"
            value={formik.values.instagramUrl}
            onChange={formik.handleChange}
            placeholder="https://instagram.com/yourbrand"
            error={
              formik.touched.instagramUrl && Boolean(formik.errors.instagramUrl)
            }
            helperText={
              formik.touched.instagramUrl && formik.errors.instagramUrl
            }
          />
        </Grid>

        {/* Twitter URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label htmlFor="Twitter URL" className="listing-form-label">
            Twitter URL
          </label>
          <TextField
            fullWidth
            name="twitterUrl"
            value={formik.values.twitterUrl}
            onChange={formik.handleChange}
            placeholder="https://twitter.com/yourbrand"
            error={
              formik.touched.twitterUrl && Boolean(formik.errors.twitterUrl)
            }
            helperText={formik.touched.twitterUrl && formik.errors.twitterUrl}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="my-4">
        {/* LinkedIn URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label htmlFor="LinkedIn URL" className="listing-form-label">
            LinkedIn URL
          </label>
          <TextField
            fullWidth
            name="linkedinUrl"
            value={formik.values.linkedinUrl}
            onChange={formik.handleChange}
            placeholder="https://linkedin.com/company/yourbrand"
            error={
              formik.touched.linkedinUrl && Boolean(formik.errors.linkedinUrl)
            }
            helperText={formik.touched.linkedinUrl && formik.errors.linkedinUrl}
          />
        </Grid>

        {/* YouTube URL */}
        <Grid item sx={{ flexBasis: { xs: "100%", md: "30%" } }}>
          <label htmlFor="YouTube URL" className="listing-form-label">
            YouTube URL
          </label>
          <TextField
            fullWidth
            name="youtubeUrl"
            value={formik.values.youtubeUrl}
            onChange={formik.handleChange}
            placeholder="https://youtube.com/channel/yourbrand"
            error={
              formik.touched.youtubeUrl && Boolean(formik.errors.youtubeUrl)
            }
            helperText={formik.touched.youtubeUrl && formik.errors.youtubeUrl}
          />
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        {/* <Button variant="outlined" onClick={onBack}>
          ← Previous
        </Button> */}
        {/* <Button variant="contained" onClick={onNext}>
          Skip Button
        </Button> */}
      </Box>
    </Paper>
  );
};

export default Step13;
