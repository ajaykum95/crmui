import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FiArrowDownRight, FiLink } from "react-icons/fi";
import { Box, Card, IconButton, Typography, Avatar, CardContent, Divider, Menu, MenuItem } from "@mui/material";
import { PiClock } from "react-icons/pi";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FaRegComment, FaTrash } from "react-icons/fa6";

const CallLog = () => {
  const [hover, setHover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Card sx={{ padding: 1, mt: 2 }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px", m: 1 }}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <IoCallOutline />
          </Avatar>

          <Typography variant="body1" sx={{ fontWeight: "bold"}}>
            Call from Sales Team
          </Typography>

          <IconButton aria-label="Call details">
            <FiArrowDownRight />
          </IconButton>
          <IconButton aria-label="Call duration">
            <PiClock />
          </IconButton>
          <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>6m 23s</Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Hover Menu Icons */}
          <Box sx={{ display: hover ? "flex" : "none", gap: 1 }}>
            <IconButton onClick={handleMenuOpen}>
              <MoreHorizIcon />
            </IconButton>
            <IconButton>
              <FaRegComment />
            </IconButton>
          </Box>

          <Avatar sx={{ width: 32, height: 32, ml: 2 }}>AK</Avatar>
          <Typography variant="caption" sx={{ marginLeft: 1 }}>2d ago</Typography>
        </Box>

        <Divider />
        <CardContent sx={{ ml: 3 }}>
          <Typography>
            This is a call. You can make calls straight from your browser, use our mobile app, or download our Mac/Windows application. Calls can have AI transcriptions and summaries.
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography>• Emily is exploring Close and has questions about finding new leads and following up on unresponsive leads.</Typography>
          <Typography>• Sam explains how to use smart views to automatically pull in new leads and leads who haven't responded.</Typography>
          <Typography>• Sam recommends other useful Close features like call transcription, collaboration tools, and snippets.</Typography>
        </CardContent>

        {/* Popover Menu - Appears Below the MoreHorizIcon */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        //   anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // Opens Below
        //   transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={handleMenuClose}><FiLink size={16} style={{   marginRight: 8 }} /> Copy Link</MenuItem>
          <MenuItem onClick={handleMenuClose}><FaTrash size={16} style={{ marginRight: 8 }} /> Delete</MenuItem>
        </Menu>
      </Card>
    </Box>
  );
};

export default CallLog;
