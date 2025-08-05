import PropTypes from "prop-types";
// material-ui
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import fileIcon from "../../../assets/images/users/file-icon.svg";

// project imports
import MainCard from "components/MainCard";

// assets
import RiseOutlined from "@ant-design/icons/RiseOutlined";
import FallOutlined from "@ant-design/icons/FallOutlined";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const iconSX = {
  fontSize: "0.75rem",
  color: "inherit",
  marginLeft: 0,
  marginRight: 0,
};

export default function AnalyticEcommerce({
  color = "primary",
  title,
  count,
  percentage,
  isLoss,
  extra,
  icon,
}) {
  return (
    <MainCard
      className="dashboard-cards"
      sx={{
        position: "relative",
        borderRadius: "16px",
        padding: "2px", // thickness of gradient border
        background: `linear-gradient(to top, ${color}, white)`, // gradient border
      }}
    >
      <Box
        sx={{
          background: "#fff", // inner card background
          borderRadius: "14px",
          p: 2.25,
        }}
      >
        <div className="d-flex align-items-center justify-content-start gap-10 mb-2">
          <span
            style={{
              backgroundColor: color, // same as border color
              borderRadius: "50%",
              padding: "8px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </span>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </div>

        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="h2" color="inherit">
            {count}
          </Typography>
          {percentage && (
            <Chip
              variant="combined"
              color="primary"
              icon={
                isLoss ? (
                  <ArrowDownOutlined style={{ fontSize: "0.75rem" }} />
                ) : (
                  <ArrowUpOutlined style={{ fontSize: "0.75rem" }} />
                )
              }
              label={`${percentage}% this month`}
              size="small"
            />
          )}
        </Stack>
      </Box>
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string,
};
