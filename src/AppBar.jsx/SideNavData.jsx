// src/data/sideNavData.js
import {
    MdHome, MdContacts, MdTimeline, MdApartment, MdSettings, MdGroup,
    MdAccountCircle, MdStorage, MdLocalOffer, MdTrendingUp, MdInbox, MdEmojiEvents, MdEventNote
  } from "react-icons/md";
  
  export const menuItems = [
    {
      items: [{ label: "Dashboard", icon: <MdHome size={18} />, path: "/" }],
    },
    {
      title: "Sales",
      items: [
        { label: "Inbox", icon: <MdInbox size={18} />, path: "/inbox" },
        { label: "Opportunities", icon: <MdEmojiEvents size={18} />, path: "/opportunities" },
        { label: "Leads", icon: <MdApartment size={18} />, path: "/leads" },
        { label: "Contacts", icon: <MdContacts size={18} />, path: "/contacts" },
        { label: "Reports", icon: <MdTimeline size={18} />, path: "/reports" },
      ],
    },
    {
      title: "Settings",
      items: [
        { label: "General", icon: <MdSettings size={18} />, path: "/general" },
        { label: "Team Management", icon: <MdGroup size={18} />, path: "/team-management" },
        { label: "Roles & Permissions", icon: <MdAccountCircle size={18} />, path: "/roles" },
        { label: "Statuses & Pipelines", icon: <MdStorage size={18} />, path: "/pipelines" },
        { label: "Template Management", icon: <MdEventNote size={18} />, path: "/template-management" },
      ],
    },
    {
      title: "Billing",
      items: [
        { label: "Plan", icon: <MdLocalOffer size={18} />, path: "/plan" },
        { label: "Usage", icon: <MdTrendingUp size={18} />, path: "/usage" },
      ],
    },
  ];
