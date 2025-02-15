import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FiArrowDownRight, FiLink } from "react-icons/fi";
import { Box, Card, IconButton, Typography, Avatar, CardContent, Divider, Menu, MenuItem } from "@mui/material";
import { PiClock } from "react-icons/pi";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FaRegComment, FaTrash } from "react-icons/fa6";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

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
            <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
                <Box sx={{ pt: 3, pl: 1 }}>
        <LocalPhoneOutlinedIcon />
    </Box>    
      <Card sx={{width:"100%",flex:8,ml:4, padding: 1, m: 1 }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Typography  sx={{fontSize:"var(--font-size-base)",fontWeight:"Bold"}}>
            Call from Sales Team
          </Typography>

          <IconButton aria-label="Call details">
            <FiArrowDownRight />
          </IconButton>
          <IconButton aria-label="Call duration">
            <PiClock />
          </IconButton>
          <Typography variant="body2" sx={{fontSize:"var(--font-size-base)"}}>6m 23s</Typography>

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

        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
          <Typography variant="caption" sx={{ marginLeft: 1 }}>2d ago</Typography>
        </Box>

        <Divider />
        <CardContent sx={{ ml: 0 }}>
          <Typography sx={{pl:0}}>
            This is a call. You can make calls straight from your browser, use our mobile app, or download our Mac/Windows application. Calls can have AI transcriptions and summaries.
          </Typography>
          {/* <Divider sx={{ my: 1 }} />
          <Typography>• Emily is exploring Close and has questions about finding new leads and following up on unresponsive leads.</Typography>
          <Typography>• Sam explains how to use smart views to automatically pull in new leads and leads who haven't responded.</Typography>
          <Typography>• Sam recommends other useful Close features like call transcription, collaboration tools, and snippets.</Typography> */}
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
