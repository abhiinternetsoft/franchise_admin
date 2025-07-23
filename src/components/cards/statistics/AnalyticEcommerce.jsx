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
    <MainCard contentSX={{ p: 2.25 }}>
      <div className=" ">
        <div className="d-flex align-items-center justify-content-start gap-10 mb-2 ">
          <span className="dashboard-icons-avtar">{icon}</span>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </div>
        <Stack sx={{ gap: 0.5 }}>
          <Grid container className="d-flex flex-column ">
            <Grid>
              <Typography variant="h2" color="inherit">
                {count}
              </Typography>
            </Grid>
            {percentage && (
              <Grid>
                <Chip
                  variant="combined"
                  color={color}
                  icon={
                    isLoss ? (
                      <ArrowDownOutlined style={iconSX} />
                    ) : (
                      <ArrowUpOutlined style={iconSX} />
                    )
                  }
                  label={`${percentage}%`}
                  size="small"
                />
              </Grid>
            )}
          </Grid>
        </Stack>
      </div>
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
