import React, { useState } from "react";
import {
  Box,
  Select,
  Typography,
  MenuItem,
  FormControl,
  IconButton,
  Menu,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AvatarComponent from "../Component/AvatarComponent";

// Icons from react-icons
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import LeadDetail from "./LeadDetail";

const Company = () => {
  const [companyName, setCompanyName] = useState("Abha Empire Pvt.");
  const [editing, setEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState("1");

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

  // Handle menu open/close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle editing name
  const handleEdit = () => {
    handleMenuClose();
    setTimeout(() => setEditing(true), 200);
  };

  const handleSaveEdit = () => {
    setEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      handleSaveEdit();
    }
  };

  // Handle deleting name
  const handleDelete = () => {
    setCompanyName("");
    handleMenuClose();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Fixed Header */}
      <Box
        sx={{
          marginLeft:"230px",
          mt:7,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#fff",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          padding: "10px 20px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        {/* Avatar & Name */}
        <Box display="flex" alignItems="center" gap={2}>
          <AvatarComponent name={companyName} />
          {editing ? (
            <TextField
              variant="standard"
              value={companyName}
              autoFocus
              onChange={(e) => setCompanyName(e.target.value)}
              onBlur={handleSaveEdit}
              onKeyPress={handleKeyPress}
              sx={{ flexGrow: 1, minWidth: "150px" }}
            />
          ) : (
            <Typography sx={{ fontWeight: "bold", minWidth: "150px" }}>
              {companyName}
            </Typography>
          )}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <button style={buttonStyle}>
            <MdOutlineSpeakerNotes size={18} /> Notes
          </button>
          <button style={buttonStyle}>
            <MdOutlineMail size={18} /> Email
          </button>
          <button style={buttonStyle}>
            <LuMessageSquareMore size={18} /> SMS
          </button>
          <button style={buttonStyle}>
            <IoMdCall size={18} /> Call
          </button>
        </Box>

        {/* Status Dropdown & Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              autoWidth
              size="small"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{
                bgcolor: "rgba(0,0,0,0.04)",
                borderRadius: 2,
                fontSize: "0.85rem",
                fontWeight: "bold",
                height: "36px",
              }}
            >
              <MenuItem value="1">Potential</MenuItem>
              <MenuItem value="2">Qualified</MenuItem>
              <MenuItem value="3">Trial</MenuItem>
              <MenuItem value="4">Customer</MenuItem>
              <MenuItem value="5">Bad Fit</MenuItem>
              <MenuItem value="6">Not Interested</MenuItem>
              <MenuItem value="7">Canceled</MenuItem>
              <MenuItem value="8">DNC</MenuItem>
            </Select>
          </FormControl>

          {/* Menu Button */}
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleEdit}>
              <EditIcon fontSize="small" /> Edit Name
            </MenuItem>
            <MenuItem>
              <ShareIcon fontSize="small" /> Share
            </MenuItem>
            <MenuItem>
              <CompareArrowsIcon fontSize="small" /> Merge
            </MenuItem>
            <MenuItem>
              <VisibilityIcon fontSize="small" /> Visibility Summary
            </MenuItem>
            <MenuItem onClick={handleDelete} sx={{ color: "red", fontWeight: "bold" }}>
              <DeleteIcon fontSize="small" /> Delete
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Scrollable Content (LeadDetail) */}
      <Box >
        <LeadDetail />
      </Box>
    </Box>
  );
};

export default Company;
