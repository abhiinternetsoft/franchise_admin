import { lazy } from "react";
import Loadable from "components/Loadable";

// Layouts
import DashboardLayout from "layout/Dashboard"; // for admin

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

const UserManagement = Loadable(
  lazy(() => import("pages/component-overview/UserManagement"))
);

const LeadManagement = Loadable(
  lazy(() => import("pages/component-overview/Leadmanagement"))
);

const Disclosures = Loadable(
  lazy(() => import("pages/component-overview/Disclosures"))
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
  element: <DashboardLayout />, // ✅ always use this wrapper
  children: [
    {
      path: "/",
      element: <DashboardDefault />, // This is for franchisee
    },
    {
      path: "franchiseopportunities",
      element: <Opportunities />,
    },
    {
      path: "usermanagement",
      element: <UserManagement />,
    },
    {
      path: "LeadManagement",
      element: <LeadManagement />,
    },
    {
      path: "Disclosures",
      element: <Disclosures />,
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
