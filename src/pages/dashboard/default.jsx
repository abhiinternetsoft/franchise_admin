// material-ui
import Grid from "@mui/material/Grid";
import { LiaSitemapSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import Typography from "@mui/material/Typography";
import scanImage from "../../assets/images/users/scan-barcode.png";
import { MdOutlineAssignment } from "react-icons/md";
import Note from "../../assets/images/users/note.svg";

// project imports
import AnalyticEcommerce from "components/cards/statistics/AnalyticEcommerce";
import UniqueVisitorCard from "sections/dashboard/default/UniqueVisitorCard";

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <div className="d-flex w-100 align-items-center gap-10 homeSection-dashboard">
        <div>
          <img src={scanImage} alt="" />
        </div>
        <div>
          <h3 className="fs-16 m-0 fw-semibold">Customizable Dashboard</h3>
          <p className="fs-14 m-0">
            Drag and drop the cards below to rearrange them according to your
            preference. Your layout will be automatically saved.
          </p>
        </div>
      </div>

      {/* row 1 */}

      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
        <AnalyticEcommerce
          title="Franchise opportunities"
          count="124"
          percentage={12}
          extra="35,000"
          color="#667EEA"
          icon={<img src={Note} alt="Note" style={{ width: 24, height: 24 }} />}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
        <AnalyticEcommerce
          title="FDD's"
          count="22"
          percentage={12}
          isLoss
          color="#29A846"
          icon={<img src={Note} alt="Note" style={{ width: 24, height: 24 }} />}
          extra="8,900"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
        <AnalyticEcommerce
          title="Total Users"
          count="8"
          percentage={24}
          color="#17A2B8"
          extra="1,943"
          icon={<img src={Note} alt="Note" style={{ width: 24, height: 24 }} />}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
        <AnalyticEcommerce
          title="Total Leads"
          count="4.6K"
          percentage={12}
          color="#FFC107"
          extra="20,395"
          icon={<img src={Note} alt="Note" style={{ width: 24, height: 24 }} />}
        />
      </Grid>
      {/* <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
        <AnalyticEcommerce
          title="Total Listing"
          count="4.6K"
          percentage={12}
          color="#7129A8"
          extra="20,395"
          icon={<img src={Note} alt="Note" style={{ width: 24, height: 24 }} />}
        />
      </Grid> */}
      <Grid
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
        size={{ md: 8 }}
      />

      {/* row 2 */}
      {/* <Grid size={{ xs: 12, md: 12, lg: 12 }}>
        <UniqueVisitorCard />
      </Grid> */}
    </Grid>
  );
}
