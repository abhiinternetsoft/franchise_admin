import { createBrowserRouter } from "react-router-dom";

// project imports
import MainRoutes from "./MainRoutes";
import LoginRoutes from "./LoginRoutes";
import ForgotPasswordRoutes from "./ForgotPasswordRoutes"; // Add this line

const router = createBrowserRouter(
  [
    MainRoutes, // Main app routes (dashboard, etc.)
    LoginRoutes, // Auth/login routes
    ForgotPasswordRoutes, // Forgot/reset password routes
  ],
  {
    basename: import.meta.env.VITE_APP_BASE_NAME,
  }
);

export default router;
