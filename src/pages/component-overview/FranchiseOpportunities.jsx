import StepForm from "components/forms/StepForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaArrowRightLong } from "react-icons/fa6";
import fromIcon from "../../assets/images/users/form-icon.svg";

import { useState } from "react";

// All your step titles
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
  "Testimonials",
  "Gallery",
  "Final Review",
];

export default function FranchiseOpportunities() {
  const [step, setStep] = useState(1); // default: 1st index (step 2 visually)

  return (
    <div className="p-3 ">
      <div className="d-flex justify-content-between align-items-center rounded border p-4 mb-4">
        <div className="d-flex align-items-center justify-content-center gap-10">
          <div>
            <img src={fromIcon} alt="form Icon" />
          </div>
          <h1 className="franchisestepsform-mainheading m-0">
            Franchise Listing Builder
          </h1>
        </div>

        <div className="d-flex justify-content-between align-items-center gap-10">
          <div className="d-flex justify-content-between align-items-center gap-10 w-full border nextstep-buttons">
            <div className="text-lg font-bold gradient-text">
              Step {step + 1} of {stepTitles.length}: {stepTitles[step]}
            </div>
            <div className="text-sm rounded text-blue-500">URL Test</div>
          </div>
        </div>
      </div>

      <div className="border stepform-section">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StepForm step={step} setStep={setStep} steps={stepTitles} />
        </LocalizationProvider>
      </div>
    </div>
  );
}
