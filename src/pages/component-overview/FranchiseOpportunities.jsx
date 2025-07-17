import StepForm from "components/forms/StepForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoSaveSharp } from "react-icons/io5";

export default function FranchiseOpportunities() {
  return (
    <div className="p-3 rounded border ">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="franchisestepsform-mainheading">
            Franchise Listing Builder
          </h1>
        </div>
        {/* <div className="formsstep_buttons">
          <button>
            {" "}
            <RxCross1 /> Cancle
          </button>
          <button>
            {" "}
            <IoSaveSharp /> Save Draft
          </button>
        </div> */}
        <div className="d-flex justify-content-between align-items-center gap-10 ">
          <div className="d-flex justify-content-between align-items-center gap-10 w-full border  nextstep-buttons">
            <div className="text-lg font-bold gradient-text">2 of 15 </div>
            <div className="text-sm   rounded text-blue-500 ">Url test</div>
          </div>
          <button className="border-0 bg-white fs-14 text-grey">
            skip <FaArrowRightLong />
          </button>
        </div>
      </div>
      <hr className="horizontal-line" />

      {/* Add more content or components related to franchise opportunities here */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StepForm />
      </LocalizationProvider>

      {/* You can also include other components or forms related to franchise opportunities */}
    </div>
  );
}
