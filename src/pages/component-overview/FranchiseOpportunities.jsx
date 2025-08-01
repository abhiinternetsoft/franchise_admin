import { LinearProgress, Box, Typography } from "@mui/material";
import StepForm from "components/forms/StepForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import fromIcon from "../../assets/images/users/form-icon.svg";

const stepTitles = [
  "Business Details",
  "Company Details",
  "Branding",
  "Location",
  "Investment",
  "Target Audience",
  "Franchise Support",
  "Marketing Strategy",
  "Operational Model",
  "Training Programs",
  "Legal Requirements",
  "Revenue Projections",
  "Social Media Presence",
  "Gallery",
  "Final Review",
];

export default function FranchiseOpportunities() {
  const [step, setStep] = useState(0); // start at step 1 (0-indexed)
  const totalSteps = stepTitles.length;
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center rounded border p-4 mb-4">
        <div className="d-flex align-items-center justify-content-center gap-10">
          <img src={fromIcon} alt="form Icon" />
          <h1 className="franchisestepsform-mainheading m-0">
            Franchise Listing Builder
          </h1>
        </div>
        {/* Step Counter + Progress Bar */}
        <Box mb={3}>
          <Typography variant="h6" sx={{ color: "#535364", mb: 1 }}>
            <strong>
              {step + 1} of {totalSteps}
            </strong>{" "}
            - {stepTitles[step]}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 5,
              backgroundColor: "#E0E0E0",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(to right, #0084ff, #00ff84)",
              },
            }}
          />
        </Box>
      </div>

      <div className="border stepform-section">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StepForm step={step} setStep={setStep} steps={stepTitles} />
        </LocalizationProvider>
      </div>
    </div>
  );
}
