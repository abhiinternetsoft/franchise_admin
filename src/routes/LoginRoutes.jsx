import { lazy } from "react";

// project imports
import AuthLayout from "layout/Auth";
import Loadable from "components/Loadable";

// jwt auth
const LoginPage = Loadable(lazy(() => import("pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("pages/auth/Register")));
const VerifyEmailPage = Loadable(lazy(() => import("pages/auth/VerifyEmail")));
const ProfileSetupPage = Loadable(
  lazy(() => import("pages/auth/ProfileSetup"))
);
const BusinessSetupPage = Loadable(
  lazy(() => import("pages/auth/BusinessSetup"))
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        { path: "verify-email", element: <VerifyEmailPage /> },
        { path: "profile-setup", element: <ProfileSetupPage /> },
        { path: "business-setup", element: <BusinessSetupPage /> },
      ],
    },
  ],
};

export default LoginRoutes;
