// ForgotPasswordRoutes.js
import React from "react";
import ForgotPassword from "pages/auth/ForgotPassword";
import ResetPassword from "pages/auth/ResetPassword";

const ForgotPasswordRoutes = {
  path: "/",
  children: [
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
  ],
};

export default ForgotPasswordRoutes;
