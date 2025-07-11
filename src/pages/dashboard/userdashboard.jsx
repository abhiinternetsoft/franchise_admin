// material-ui
import Grid from "@mui/material/Grid";
import { LiaSitemapSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import Typography from "@mui/material/Typography";

// project imports
import AnalyticEcommerce from "components/cards/statistics/AnalyticEcommerce";
import UniqueVisitorCard from "sections/dashboard/default/UniqueVisitorCard";
import UserListing from "../../sections/dashboard/usercomponent/ListingTable";

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

export default function DashboardUser() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}

      <Grid sx={{ mb: -2.25 }} size={12} className="dashboard-title-container">
        <Typography className="dashboard-title overview-title" variant="h5">
          Overview
        </Typography>
        <Typography className="dashboard-title performance-title" variant="h5">
          Performance
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <AnalyticEcommerce
          title="Franchise opportunities"
          count="124"
          percentage={12}
          extra="35,000"
          icon={<LiaSitemapSolid />}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <AnalyticEcommerce
          title="FDD's"
          count="22"
          percentage={12}
          isLoss
          color="warning"
          extra="8,900"
          icon={<GrMapLocation />}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <AnalyticEcommerce
          title="Users"
          count="8"
          percentage={24}
          extra="1,943"
          icon={<IoDocumentTextOutline />}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <AnalyticEcommerce
          title="Leads"
          count="4.6K"
          percentage={12}
          extra="20,395"
          icon={<LuEye />}
        />
      </Grid>
      <Grid
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
        size={{ md: 8 }}
      />

      {/* row 2 */}
      <Grid size={{ xs: 12, md: 12, lg: 12 }}>
        <UserListing />
      </Grid>
    </Grid>
  );
}
