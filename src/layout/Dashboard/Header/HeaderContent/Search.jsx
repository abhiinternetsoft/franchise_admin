// material-ui
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { useUser } from "../../../../contexts/UserContext";

// assets
import SearchOutlined from "@ant-design/icons/SearchOutlined";

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search() {
  const currentDate = new Date();
  const userEmail = localStorage.getItem("userEmail") || "User"; // Retrieve email

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Box sx={{ width: "90%", ml: { xs: 0, md: 1 } }}>
      <div className="Dashboard_loggeduser mr-3">
        <h5 className="m-0 user-name">
          Hello <span>{userEmail}</span>
        </h5>
        <p className="m-0 User-date">
          {formattedDate} - {formattedTime}
        </p>
      </div>
    </Box>
  );
}
