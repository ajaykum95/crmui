import React, { useState } from "react";
import { Box, IconButton, Select, MenuItem, OutlinedInput } from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";

const LeadActivity = () => {
  const [activity, setActivity] = useState([]);
  const [user, setUser] = useState([]);
  const [contact, setContact] = useState([]);

  const handleChange = (setter) => (event) => {
    const {
      target: { value },
    } = event;
    setter(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box
      display="flex"
      gap={2}
      alignItems="center"
      sx={{
        marginLeft: "-70px",
        marginTop: "-95px",
        borderBottom: "1px solid #ccc",
        paddingBottom: "5px",
      }}
    >
      {/* Activity Filter */}
      <Box display="flex" alignItems="center">
        <IconButton size="small">
          <FilterListOutlinedIcon fontSize="small" />
        </IconButton>
        <Select
          multiple
          value={activity}
          onChange={handleChange(setActivity)}
          displayEmpty
          input={
            <OutlinedInput
              size="small"
              sx={{ border: "none", outline: "none", boxShadow: "none" }}
            />
          }
          renderValue={(selected) => {
            if (selected.length === 0) return "All Activities";
            if (selected.length === 1) return selected[0];
            return `${selected.length} Activities`;
          }}
          sx={{
            fontSize: "14px",
            color: "#333",
            minWidth: "140px",
            boxShadow: "none",
            "& fieldset": { border: "none" }, // Removes border
          }}
        >
          <MenuItem value="Activity 1">Activity 1</MenuItem>
          <MenuItem value="Activity 2">Activity 2</MenuItem>
          <MenuItem value="Activity 3">Activity 3</MenuItem>
        </Select>
      </Box>

      {/* Users Dropdown */}
      <Box display="flex" alignItems="center">
        <IconButton size="small">
          <PersonOutlineOutlinedIcon fontSize="small" />
        </IconButton>
        <Select
          multiple
          value={user}
          onChange={handleChange(setUser)}
          displayEmpty
          input={
            <OutlinedInput
              size="small"
              sx={{ border: "none", outline: "none", boxShadow: "none" }}
            />
          }
          renderValue={(selected) => {
            if (selected.length === 0) return "All Users";
            if (selected.length === 1) return selected[0];
            return `${selected.length} Users`;
          }}
          sx={{
            fontSize: "14px",
            color: "#333",
            minWidth: "120px",
            boxShadow: "none",
            "& fieldset": { border: "none" }, // Removes border
          }}
        >
          <MenuItem value="User 1">User 1</MenuItem>
          <MenuItem value="User 2">User 2</MenuItem>
          <MenuItem value="User 3">User 3</MenuItem>
        </Select>
      </Box>

      {/* Contacts Dropdown */}
      <Box display="flex" alignItems="center">
        <IconButton size="small">
          <PersonIcon fontSize="small" />
        </IconButton>
        <Select
          multiple
          value={contact}
          onChange={handleChange(setContact)}
          displayEmpty
          input={
            <OutlinedInput
              size="small"
              sx={{ border: "none", outline: "none", boxShadow: "none" }}
            />
          }
          renderValue={(selected) => {
            if (selected.length === 0) return "All Contacts";
            if (selected.length === 1) return selected[0];
            return `${selected.length} Contacts`;
          }}
          sx={{
            fontSize: "14px",
            color: "#333",
            minWidth: "140px",
            boxShadow: "none",
            "& fieldset": { border: "none" }, // Removes border
          }}
        >
          <MenuItem value="Contact 1">Contact 1</MenuItem>
          <MenuItem value="Contact 2">Contact 2</MenuItem>
          <MenuItem value="Contact 3">Contact 3</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default LeadActivity;
