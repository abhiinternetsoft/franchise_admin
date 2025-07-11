import { lazy } from "react";
import Loadable from "components/Loadable";

// Layouts
import DashboardLayout from "layout/Dashboard"; // for admin
import UserLayout from "layout/User"; // for user
import RoleBasedLayout from "layout/Auth/RoleBasedLayout"; // for role-based layout

// Pages
const DashboardDefault = Loadable(
  lazy(() => import("pages/dashboard/default"))
);
const DashboardUser = Loadable(
  lazy(() => import("pages/dashboard/userdashboard"))
);
const Color = Loadable(lazy(() => import("pages/component-overview/color")));
const Opportunities = Loadable(
  lazy(() => import("pages/component-overview/FranchiseOpportunities"))
);
const Typography = Loadable(
  lazy(() => import("pages/component-overview/typography"))
);
const Shadow = Loadable(lazy(() => import("pages/component-overview/shadows")));
const SamplePage = Loadable(
  lazy(() => import("pages/extra-pages/sample-page"))
);

// Get role from localStorage
const role = localStorage.getItem("userRole");

// Define route children
const MainRoutes = {
  path: "/",
  element: <RoleBasedLayout />, // ✅ always use this wrapper
  children: [
    role === "franchisee"
      ? {
          path: "/",
          element: <DashboardUser />, // This is for franchisee
        }
      : {
          path: "/",
          element: <DashboardDefault />, // This is for franchisor
        },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element:
            role === "franchisee" ? <DashboardUser /> : <DashboardDefault />,
        },
      ],
    },
    {
      path: "FranchiseOpportunities",
      element: <Opportunities />,
    },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "shadow",
      element: <Shadow />,
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
