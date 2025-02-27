import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdHome,
  MdContacts,
  MdTimeline,
  MdMenu,
  MdApartment,
  MdSettings,
  MdGroup,
  MdAccountCircle,
  MdStorage,
  MdLocalOffer,
  MdTrendingUp,
  MdInbox,
  MdEmojiEvents,
  MdEventNote,
} from "react-icons/md";
import user from "../Image/user.png";

const Sidebar = () => {
  return (
    <section
      className="bg-light border-end vh-100 position-fixed"
      style={{ width: "230px" }}
    >
      {/* Top Section */}
      <div className="d-flex align-items-center p-3 border-bottom">
        <img
          src={user}
          alt="User"
          className="rounded-circle border border-secondary me-3"
          style={{ width: "60px", height: "60px" }}
        />
        <MdMenu className="ms-auto text-secondary fs-4" />
      </div>

      {/* Dashboard Link */}
      <NavLink
        to="/"
        className="d-flex align-items-center text-secondary p-3 text-decoration-none border-bottom"
      >
        <MdHome className="me-2 fs-5" />
        <span className="small">Dashboard</span>
      </NavLink>

      {/* Sales Section */}
      <div className="px-3 py-2">
        <h6 className="text-muted text-uppercase small mb-2">Sales</h6>
        <ul className="list-unstyled">
          <li className="mb-1">
            <NavLink
              to="/inbox"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdInbox className="me-2 fs-5" />
              <span className="small">Inbox</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/opportunities"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdEmojiEvents className="me-2 fs-5" />
              <span className="small">Opportunities</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/leads"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdApartment className="me-2 fs-5" />
              <span className="small">Leads</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/contacts"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdContacts className="me-2 fs-5" />
              <span className="small">Contacts</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/reports"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdTimeline className="me-2 fs-5" />
              <span className="small">Reports</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Settings Section */}
      <div className="px-3 py-2">
        <h6 className="text-muted text-uppercase small mb-2">Settings</h6>
        <ul className="list-unstyled">
          <li className="mb-1">
            <NavLink
              to="/general"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdSettings className="me-2 fs-5" />
              <span className="small">General</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/team-management"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdGroup className="me-2 fs-5" />
              <span className="small">Team Management</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/roles"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdAccountCircle className="me-2 fs-5" />
              <span className="small">Roles & Permissions</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/pipelines"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdStorage className="me-2 fs-5" />
              <span className="small">Statuses & Pipelines</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/template-management"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdEventNote className="me-2 fs-5" />
              <span className="small">Template Management</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Billing Section */}
      <div className="px-3 py-2">
        <h6 className="text-muted text-uppercase small mb-2">Billing</h6>
        <ul className="list-unstyled">
          <li className="mb-1">
            <NavLink
              to="/plan"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdLocalOffer className="me-2 fs-5" />
              <span className="small">Plan</span>
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to="/usage"
              className="d-flex align-items-center text-secondary text-decoration-none"
            >
              <MdTrendingUp className="me-2 fs-5" />
              <span className="small">Usage</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

