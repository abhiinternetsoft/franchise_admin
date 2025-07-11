import StepForm from "components/forms/StepForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function FranchiseOpportunities() {
  return (
    <div>
      <h1>Franchise Opportunities</h1>
      <p>Explore various franchise opportunities available.</p>
      {/* Add more content or components related to franchise opportunities here */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StepForm />
      </LocalizationProvider>

      {/* You can also include other components or forms related to franchise opportunities */}
    </div>
  );
}
