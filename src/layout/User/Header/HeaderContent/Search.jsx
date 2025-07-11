// material-ui
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

// assets
import SearchOutlined from "@ant-design/icons/SearchOutlined";

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search({ user }) {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Box sx={{ width: "90%", ml: { xs: 0, md: 1 } }}>
      <div className="Dashboard_loggeduser mr-3">
        <h5 className="m-0 user-name">
          Hello <span>{user?.name || "User"}</span>
        </h5>
        <p className="m-0 User-date">
          {formattedDate} - {formattedTime}
        </p>
      </div>
    </Box>
  );
}
