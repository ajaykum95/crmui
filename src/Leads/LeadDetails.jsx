import React from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import ProductForm from "../Component/ProductForm";
import ProductItem from "../Component/ProductItem";
import { Box } from "@mui/material";
import MyAccordion from "../Component/MyAccordion";
import TaskItem from "../Component/TaskItem";
import TaskForm from "../Component/TaskForm";
import OpportunitiesItem from "../Component/OpportunitiesItem";
import OpportunitiesForm from "../Component/OpportunitiesForm";
import ContactsForm from "../Component/ContactsForm";
import LeadActivity from "../Component/LeadActivity";
import TaskComplete from "../Component/TaskComplete";
import NotesBoxActivity from "../Component/NotesBoxActivity";
import OpportunityBox from "../Component/OpportunitiesBox";
import StatusChangedBox from "../Component/StatusChangedBox";
import ContactBox from "../Component/ContactBox";
import Sms from "../Component/Sms";
import EmailBox from "../Component/EmailBox";
import NotesBox from "../Component/NotesBox";

const LeadDetails = () => {

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "5px 15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
    fontWeight: "500",
  };

  const dropdownStyle = {
    padding: "5px 15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    backgroundColor: "#f9f9f9",
    fontWeight: "500",
  };

  const { id } = useParams();

  const leads = [
    { id: 1, lead: "John Doe", client: "XYZ Corp", contact: "john.doe@example.com", status: "Interested" },
    { id: 2, lead: "Jane Smith", client: "ABC Ltd", contact: "jane.smith@example.com", status: "Potential" },
    { id: 3, lead: "Sam Wilson", client: "PQR Inc", contact: "sam.wilson@example.com", status: "Loss" },
  ];

  const lead = leads.find((l) => l.id === parseInt(id));

  if (!lead) {
    return <div className="container">Lead not found</div>;
  }

  return (
    <div className="container-fluid" style={{ padding: "20px" }}>
      {/* Header Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr auto auto",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Left Section - Company Details */}
        <div style={{ marginLeft: "240px", paddingTop: "80px" }}>
          <h3 style={{ marginBottom: "5px" }}>Abha Empire Private Ltd.</h3>
          <a href="https://www.abhaempire.com/" style={{ textDecoration: "none", color: "#007bff" }}>
            abhaempire.com
          </a>
          <h6 style={{ marginTop: "8px", marginBottom: "8px", color: "#6c757d" }}>Real estate development company</h6>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6c757d" }}>
            <FaMapMarkerAlt />
            <span>India, Bihar, Bettiah</span>
          </div>
        </div>

        {/* Center Section - Action Buttons */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginLeft: "-690px" }}>
          <button style={buttonStyle} onClick={() => dispatch(toggleNotes())}>
            <MdOutlineSpeakerNotes size={18} /> Notes
          </button>
          <button style={buttonStyle} onClick={() => dispatch(toggleEmail())}>
            <MdOutlineMail size={18} /> Email
          </button>
          <button style={buttonStyle} onClick={() => dispatch(toggleSms())}>
            <LuMessageSquareMore size={18} /> SMS
          </button>
          <button style={buttonStyle} onClick={() => dispatch(toggleCall())}>
            <IoMdCall size={18} /> Call
          </button>
        </div>

        {/* Right Section - Status Dropdown */}
        <div>
          <select style={dropdownStyle}>
            <option>Interested</option>
            <option>Potential</option>
            <option>Loss</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", marginTop: "50px", marginLeft:"0px"}}>
        {/* Left Side */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <Box mt={-4} p="0 10px">
            <MyAccordion name={"PRODUCT :"} ItemComponent={ProductItem} FormComponent={ProductForm} />
          </Box>
          <Box mt={2} p="0 10px">
            <MyAccordion name={"TASK :"} ItemComponent={TaskItem} FormComponent={TaskForm} />
          </Box>
          <Box mt={2} p="0 10px">
            <MyAccordion name={"OPPORTUNITIES :"} ItemComponent={OpportunitiesItem} FormComponent={OpportunitiesForm} />
          </Box>
          <Box mt={2} p="0 10px">
            <MyAccordion name={"CONTACT :"} ItemComponent={TaskItem} FormComponent={ContactsForm} />
          </Box>
        </div>

        {/* Right Side */}
        <div style={{ flex: 1 }}>
          <LeadActivity />
          {showNotes && <NotesBox />}
          {showEmail && <EmailBox />}
          {showSms && <Sms />}
          {showCall && <ContactBox />}
          <TaskComplete />
          <NotesBoxActivity />
          <OpportunityBox />
          <StatusChangedBox />
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
