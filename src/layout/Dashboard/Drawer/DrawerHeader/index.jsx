import PropTypes from "prop-types";
// project imports
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import adminLogo from "../../../../assets/images/users/site-logo.svg";
import { useUser } from "../../../../contexts/UserContext";
import IconButton from "components/@extended/IconButton";
import { handlerDrawerOpen, useGetMenuMaster } from "api/menu";
// assets
import MenuFoldOutlined from "@ant-design/icons/MenuFoldOutlined";
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import Sidebar from "../../../../assets/images/users/sidebar.svg";

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const { user } = useUser();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: "60px",
        width: "initial",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: open ? "24px" : 0,
      }}
      className="sidebar-header"
    >
      <img src={adminLogo} alt="Admin Main Logo" width={26} />
      <div className="mx-1 mobile-content d-flex justify-contents-between align-items-center">
        <div className="Franchise-naming">
          <h4 className="Mainlogo_text">Franchise Listing</h4>
          {/* <p className="user-role">Super Admin</p> */}
          <p className="user-role">{user?.role}</p>
        </div>

        <IconButton
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          edge="start"
          color="secondary"
          variant="light"
          sx={(theme) => ({
            color: "text.primary",
            bgcolor: drawerOpen ? "transparent" : "grey.100",
            ...theme.applyStyles("dark", {
              bgcolor: drawerOpen ? "transparent" : "background.default",
            }),
            ml: { xs: 0, lg: -2 },
          })}
          className="sidebar-close-logo"
        >
          {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          <img src={Sidebar} alt="sidebar icon" />
        </IconButton>
      </div>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
