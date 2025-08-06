import { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Custom components
import Avatar from "components/@extended/Avatar";
import MainCard from "components/MainCard";
import Transitions from "components/@extended/Transitions";
import { useUser } from "../../../../../contexts/UserContext";

// Icons
import EditOutlined from "@ant-design/icons/EditOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { LuUserRound } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

// Sample avatar
import avatar1 from "assets/images/users/avatar-1.png";

export default function Profile() {
  const theme = useTheme();
  const { user, logout } = useUser(); // Assuming logout function is in context
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = () => {
    if (logout) {
      logout(); // Clear user state
    } else {
      localStorage.removeItem("token"); // Fallback if no context logout
    }
    window.location.href = "admin/login"; // Redirect after logout
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? "grey.100" : "transparent",
          borderRadius: 1,
          "&:hover": { bgcolor: "secondary.lighter" },
        }}
        aria-label="open profile"
        ref={anchorRef}
        onClick={handleToggle}
      >
        <Stack direction="row" sx={{ gap: 1.25, alignItems: "center", p: 0.5 }}>
          <Avatar alt="profile user" src={avatar1} size="sm" />
        </Stack>
      </ButtonBase>

      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        popperOptions={{
          modifiers: [{ name: "offset", options: { offset: [0, 9] } }],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            type="grow"
            position="top-right"
            in={open}
            {...TransitionProps}
          >
            <Paper sx={{ boxShadow: theme.customShadows.z1, width: 240 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar
                        alt="profile user"
                        src={avatar1}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Stack>
                        <Typography variant="subtitle1">
                          {user?.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user?.role || "User"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>

                  <List component="nav" sx={{ p: 0 }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <LuUserRound />
                      </ListItemIcon>
                      <ListItemText primary="Edit Profile" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <SettingOutlined />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                    <hr className="m-0" />
                    <ListItemButton onClick={handleLogout}>
                      <ListItemIcon>
                        <IoIosLogOut />
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
