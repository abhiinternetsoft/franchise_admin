// material-ui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { PiCrownSimple } from "react-icons/pi";

// project import
import MainCard from "components/MainCard";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard>
      <Stack alignItems="center">
        <a href="#" className="upgrade-link">
          <Button>
            <PiCrownSimple size={20} /> Upgrade Account{" "}
          </Button>
        </a>
      </Stack>
    </MainCard>
  );
}
