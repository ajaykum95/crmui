import React, { useState } from 'react';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CallIcon from "@mui/icons-material/Call";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, IconButton, Menu, MenuItem } from '@mui/material';

export default function NavbarIcon() {
  const [anchorElHelp, setAnchorElHelp] = useState(null);
  const [anchorElCall, setAnchorElCall] = useState(null);

  const handleOpenHelp = (event) => setAnchorElHelp(event.currentTarget);
  const handleOpenCall = (event) => setAnchorElCall(event.currentTarget);

  const handleClose = () => {
    setAnchorElHelp(null);
    setAnchorElCall(null);
  };

  return (
    <Box sx={{ display: {xs:"none",md:"flex"}, alignItems: "center", gap: 2 }}>
      {/* Call Icon */}
      <IconButton onClick={handleOpenCall}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CallIcon />
          <ArrowDropDownIcon />
        </Box>
      </IconButton>
      <Menu anchorEl={anchorElCall} open={Boolean(anchorElCall)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Call Support</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
      </Menu>

      {/* Help Icon */}
      <IconButton onClick={handleOpenHelp}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HelpOutlineIcon />
          <ArrowDropDownIcon />
        </Box>
      </IconButton>
      <Menu anchorEl={anchorElHelp} open={Boolean(anchorElHelp)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>FAQ</MenuItem>
        <MenuItem onClick={handleClose}>Support</MenuItem>
      </Menu>
    </Box>
  );
}
