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

const dashboard = {
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
      id: "dashboard",
      title: "Search Directory",
      type: "item",
      url: "#",
      icon: icons.SearchOutlined,
      breadcrumbs: false,
    },
    {
      id: "dashboard",
      title: "Franchise Listing",
      type: "item",
      url: "#",
      icon: icons.FileTextOutlined,
      breadcrumbs: false,
    },
    {
      id: "dashboard",
      title: "Sales Lead",
      type: "item",
      url: "#",
      icon: icons.FilterOutlined,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
