import {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
  UserAddOutlined,
  MessageOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { BiBuildingHouse, BiCategory } from "react-icons/bi";
import { SlWallet, SlCalender } from "react-icons/sl";
import { TbUsersGroup, TbMailSearch } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { LuStar } from "react-icons/lu";
import { RiNewsLine } from "react-icons/ri";

import Dashboard from "../assets/images/users/dashboard.svg";
import Franchise from "../assets/images/users/franchise.svg";
import Disclosures from "../assets/images/users/Disclosures.svg";
import usermanagement from "../assets/images/users/usermanagement.svg";
import leadmanagement from "../assets/images/users/leadmanagement.svg";

// Image-based icon components
const DashboardIcon = () => (
  <img src={Dashboard} alt="Dashboard" style={{ width: 20, height: 20 }} />
);

const FranchiseIcon = () => (
  <img src={Franchise} alt="Franchise" style={{ width: 20, height: 20 }} />
);

const DisclosuresIcon = () => (
  <img src={Disclosures} alt="Disclosures" style={{ width: 20, height: 20 }} />
);

const usermanagementIcon = () => (
  <img
    src={usermanagement}
    alt="User Management"
    style={{ width: 20, height: 20 }}
  />
);

const leadmanagementIcon = () => (
  <img
    src={leadmanagement}
    alt="Lead Management"
    style={{ width: 20, height: 20 }}
  />
);

// Icons collection
const icons = {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
  UserAddOutlined,
  MessageOutlined,
  ShopOutlined,
  BiBuildingHouse,
  SlWallet,
  TbUsersGroup,
  TbMailSearch,
  GrAnnounce,
  BiCategory,
  LuStar,
  SlCalender,
  RiNewsLine,
  Dashboard: DashboardIcon,
  Franchise: FranchiseIcon,
  Disclosures: DisclosuresIcon,
  usermanagement: usermanagementIcon,
  leadmanagement: leadmanagementIcon,
};

// Sidebar menu group
const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/", // ✅ Home route
      icon: icons.Dashboard,
      breadcrumbs: false,
    },
    {
      id: "franchise-opportunities",
      title: "Franchise Opportunities",
      type: "item",
      url: "/franchiseopportunities", // ✅ fixed path
      icon: icons.Franchise,
      breadcrumbs: false,
    },
    {
      id: "franchise-disclosures",
      title: "Franchise Disclosures",
      type: "item",
      url: "/disclosures", // ✅ fixed path
      icon: icons.Disclosures,
      breadcrumbs: false,
    },
    {
      id: "user-management",
      title: "User Management",
      type: "item",
      url: "/usermanagement", // ✅ fixed path
      icon: icons.usermanagement,
      breadcrumbs: false,
    },
    {
      id: "lead-management",
      title: "Lead Management",
      type: "item",
      url: "/leadmanagement", // ✅ fixed path
      icon: icons.leadmanagement,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
