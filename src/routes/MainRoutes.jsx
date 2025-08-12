import { lazy } from "react";
import Loadable from "components/Loadable";
import ProtectedRoute from "../components/ProtectedRoute";

// Layouts
import DashboardLayout from "layout/Dashboard"; // for admin

// Pages
const DashboardDefault = Loadable(
  lazy(() => import("pages/dashboard/default"))
);

const Color = Loadable(lazy(() => import("pages/component-overview/color")));

const Opportunities = Loadable(
  lazy(() => import("pages/component-overview/FranchiseOpportunities"))
);

const AllFranchiseListing = Loadable(
  lazy(() => import("pages/component-overview/AllFranchiseListing"))
);

const UserManagement = Loadable(
  lazy(() => import("pages/component-overview/UserManagement"))
);

const LeadManagement = Loadable(
  lazy(() => import("pages/component-overview/Leadmanagement"))
);

const AddUserPage = Loadable(
  lazy(() => import("pages/component-overview/AddUserDialog"))
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
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ), // ✅ always use this wrapper
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "franchiseopportunities",
      element: <Opportunities />,
    },
    {
      path: "AllFranchiseListing",
      element: <AllFranchiseListing />,
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
    {
      path: "add-user",
      element: <AddUserPage />,
    },
  ],
};

export default MainRoutes;
