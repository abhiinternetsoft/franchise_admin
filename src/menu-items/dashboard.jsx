import {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
  UserAddOutlined,
  MessageOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { BiBuildingHouse } from "react-icons/bi";
import { SlWallet } from "react-icons/sl";
import { TbUsersGroup, TbMailSearch } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { LuStar } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RiNewsLine } from "react-icons/ri";
import Dashboard from "../assets/images/users/dashboard.svg";
import Franchise from "../assets/images/users/franchise.svg";
import Disclosures from "../assets/images/users/Disclosures.svg";
import usermanagement from "../assets/images/users/usermanagement.svg";
import leadmanagement from "../assets/images/users/leadmanagement.svg";

// Wrap the image as a React component
const DashboardIcon = () => (
  <img src={Dashboard} alt="Dashboard" style={{ width: 20, height: 20 }} />
);

const FranchiseIcon = () => (
  <img src={Franchise} alt="Franchise" style={{ width: 20, height: 20 }} />
);

const DisclosuresIcon = () => (
  <img src={Disclosures} alt="Franchise" style={{ width: 20, height: 20 }} />
);

const usermanagementIcon = () => (
  <img src={usermanagement} alt="Franchise" style={{ width: 20, height: 20 }} />
);

const leadmanagementIcon = () => (
  <img src={leadmanagement} alt="Franchise" style={{ width: 20, height: 20 }} />
);

// icons object
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
  Dashboard: DashboardIcon, // use wrapped image component
  Franchise: FranchiseIcon,
  Disclosures: DisclosuresIcon,
  usermanagement: usermanagementIcon,
  leadmanagement: leadmanagementIcon,
};

// menu config
const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: icons.Dashboard,
      breadcrumbs: false,
    },
    {
      id: "Franchise Opportunities",
      title: "Franchise Opportunities",
      type: "item",
      url: "./franchiseopportunities",
      icon: icons.Franchise,
      breadcrumbs: false,
    },
    {
      id: "Disclosures",
      title: "Franchise Disclosures",
      type: "item",
      url: "./disclosures",
      icon: icons.Disclosures,
      breadcrumbs: false,
    },
    {
      id: "User Management",
      title: "User Management",
      type: "item",
      url: "./usermanagement",
      icon: icons.usermanagement,
      breadcrumbs: false,
    },
    {
      id: "Lead Management",
      title: "Lead Management",
      type: "item",
      url: "./leadmanagement",
      icon: icons.leadmanagement,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
