// assets
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
import { TbUsersGroup } from "react-icons/tb";
import { TbMailSearch } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { LuStar } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RiNewsLine } from "react-icons/ri";

// icons
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
      icon: icons.UserAddOutlined,
      breadcrumbs: false,
    },
    {
      id: "conversations",
      title: "Conversations",
      type: "item",
      url: "#",
      icon: icons.MessageOutlined,
      breadcrumbs: false,
    },
    {
      id: "Disclosures",
      title: "Franchise Disclosures",
      type: "item",
      url: "#",
      icon: icons.FileTextOutlined,
      breadcrumbs: false,
    },
    {
      id: "Franchise Opportunities",
      title: "Franchise Opportunities",
      type: "item",
      url: "./FranchiseOpportunities",
      icon: icons.ShopOutlined,
      breadcrumbs: false,
    },
    {
      id: "Franchise Resales",
      title: "Franchise Resales",
      type: "item",
      url: "#",
      icon: icons.FilterOutlined,
      breadcrumbs: false,
    },
    {
      id: "CRE Listings",
      title: "CRE Listings",
      type: "item",
      url: "#",
      icon: icons.BiBuildingHouse,
      breadcrumbs: false,
    },
    {
      id: "Company Pages",
      title: "Company Pages",
      type: "item",
      url: "#",
      icon: icons.BiBuildingHouse,
      breadcrumbs: false,
    },
    {
      id: "Premium Subscriptions",
      title: "Premium Subscriptions",
      type: "item",
      url: "#",
      icon: icons.SlWallet,
      breadcrumbs: false,
    },
    {
      id: "User Management",
      title: "User Management",
      type: "item",
      url: "#",
      icon: icons.TbUsersGroup,
      breadcrumbs: false,
    },
    {
      id: "Franchisee Management",
      title: "Franchisee Management",
      type: "item",
      url: "#",
      icon: icons.FilterOutlined,
      breadcrumbs: false,
    },
    {
      id: "Lead Management",
      title: "Lead Management",
      type: "item",
      url: "#",
      icon: icons.TbMailSearch,
      breadcrumbs: false,
    },
    {
      id: "Marketing Management",
      title: "Marketing Management",
      type: "item",
      url: "#",
      icon: icons.GrAnnounce,
      breadcrumbs: false,
    },
    {
      id: "Category Management",
      title: "Category Management",
      type: "item",
      url: "#",
      icon: icons.BiCategory,
      breadcrumbs: false,
    },
    {
      id: "Review Management",
      title: "Review Management",
      type: "item",
      url: "#",
      icon: icons.LuStar,
      breadcrumbs: false,
    },
    {
      id: "Events Management",
      title: "Events Management",
      type: "item",
      url: "#",
      icon: icons.SlCalender,
      breadcrumbs: false,
    },
    {
      id: "News Management",
      title: "News Management",
      type: "item",
      url: "#",
      icon: icons.RiNewsLine,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
