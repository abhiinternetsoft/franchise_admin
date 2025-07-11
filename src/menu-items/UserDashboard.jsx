// assets
import {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const userdashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Home",
      type: "item",
      url: "/",
      icon: icons.HomeOutlined,
      breadcrumbs: false,
    },
    {
      id: "search-directory",
      title: "Search Directory",
      type: "item",
      url: "#",
      icon: icons.SearchOutlined,
      breadcrumbs: false,
    },
    {
      id: "franchise-listing",
      title: "Franchise Listing",
      type: "item",
      url: "#",
      icon: icons.FileTextOutlined,
      breadcrumbs: false,
    },
    {
      id: "sales-lead",
      title: "Sales Lead",
      type: "item",
      url: "#",
      icon: icons.FilterOutlined,
      breadcrumbs: false,
    },
  ],
};

export default userdashboard;
