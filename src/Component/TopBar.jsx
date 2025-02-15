// import React, { useState, useEffect } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// const TopBar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Update body styles for dark mode
//   useEffect(() => {
//     document.body.style.backgroundColor = darkMode ? "#333" : "#f4f4f4";
//     document.body.style.color = darkMode ? "#fff" : "#000";
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: "230px", // Adjust to fit your existing sidebar width
//         right: 0,
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px 20px",
//         backgroundColor: darkMode ? "#444" : "#fff",
//         color: darkMode ? "#fff" : "#000",
//         height: "60px",
//         boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//         zIndex: 1000,
//       }}
//     >
//       {/* Title or Logo */}
//       <h1 style={{ margin: 0 }}>CRM Dashboard</h1>

//       {/* Search Bar */}
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <input
//           type="text"
//           placeholder="Search"
//           style={{
//             padding: "8px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//             backgroundColor: darkMode ? "#555" : "#fff",
//             color: darkMode ? "#fff" : "#000",
//           }}
//         />
//         <button
//           style={{
//             padding: "8px 12px",
//             marginLeft: "5px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             backgroundColor: darkMode ? "#666" : "#ddd",
//             color: darkMode ? "#fff" : "#000",
//           }}
//         >
//           🔍
//         </button>
//       </div>

//       {/* Dark Mode Toggle */}
//       <div onClick={toggleDarkMode} style={{ cursor: "pointer", fontSize: "20px" }}>
//         {darkMode ? <FaSun /> : <FaMoon />}
//       </div>
//     </div>
//   );
// };

// export default TopBar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CallIcon from "@mui/icons-material/Call";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopBar = () => {
  const [anchorElHelp, setAnchorElHelp] = useState(null);
  const [anchorElCall, setAnchorElCall] = useState(null);

  const handleOpenHelp = (event) => setAnchorElHelp(event.currentTarget);
  const handleOpenCall = (event) => setAnchorElCall(event.currentTarget);

  const handleClose = () => {
    setAnchorElHelp(null);
    setAnchorElCall(null);
  };

  return (
    <AppBar  sx={{ backgroundColor: "#fff", boxShadow: 0 ,
              position: "fixed",
        top: 0,
        left: 230, // Adjust to fit your existing sidebar width
        right: 0,
        width: "calc(100% - 230px)", // Take remaining space after sidebar
        borderBottom:"1px solid #f1f1f1",
    }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        
        {/* Search Bar */}
        <TextField
  variant="outlined"
  placeholder="Search..."
  sx={{
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    width: "500px",
    height:"40px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "none" },
    },
    "& .MuiInputBase-input": {
      padding: "11px 0 11px 36px", // Targeting input specifically
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
/>

        {/* Icons on Right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Call Icon */}
          <IconButton onClick={handleOpenCall}>
            <CallIcon />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu anchorEl={anchorElCall} open={Boolean(anchorElCall)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Call Support</MenuItem>
            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
          </Menu>

          {/* Help Icon */}
          <IconButton onClick={handleOpenHelp}>
            <HelpOutlineIcon />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu anchorEl={anchorElHelp} open={Boolean(anchorElHelp)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>FAQ</MenuItem>
            <MenuItem onClick={handleClose}>Support</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
