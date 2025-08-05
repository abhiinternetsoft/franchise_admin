// material-ui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { PiCrownSimple } from "react-icons/pi";
import Footer from "../../Footer";

// project import
import MainCard from "components/MainCard";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard className="border-none">
      {/* <Stack alignItems="center">
        <a href="#" className="upgrade-link">
          <Button>
            <PiCrownSimple size={20} /> Upgrade Account{" "}
          </Button>
        </a>
      </Stack> */}
      {/* <Footer /> */}
    </MainCard>
  );
}
