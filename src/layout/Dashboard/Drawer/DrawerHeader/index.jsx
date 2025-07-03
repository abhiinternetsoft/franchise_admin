import PropTypes from "prop-types";
// project imports
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import adminLogo from "../../../../assets/images/users/Admin-logo.svg";

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
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
    >
      <img src={adminLogo} alt="Admin Main Logo" width={180} />
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
