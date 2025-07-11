import PropTypes from "prop-types";
// project imports
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import adminLogo from "../../../../assets/images/users/site-logo.svg";
import { useUser } from "../../../../contexts/UserContext";

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const { user } = useUser();
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
      <img src={adminLogo} alt="Admin Main Logo" width={30} />
      <div className="mx-3 mobile-content">
        <h4 className="Mainlogo_text">Franchise Listing</h4>
        <p className="user-role">{user?.role}</p>
      </div>
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
