import React from "react";
import {
  ListItem,
  ListItemIcon,
  IconButton,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";

const CallItem = () => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: 2,
        borderBottom: "1px solid #ddd",
        // marginLeft: "650px", // Shift horizontally 650
      }}
    >
      {/* Call Icon */}
      <ListItemIcon>
        <IconButton>
          <CallOutlinedIcon />
        </IconButton>
      </ListItemIcon>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {/* Message */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            They seem like a good fit. We will send them a proposal later today.
          </Typography>
        </Box>

        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Liz
          </Typography>
          <Avatar sx={{ bgcolor: "#1976d2", color: "#fff", width: 32, height: 32 }}>
            LA
          </Avatar>
        </Box>

        {/* Call Details */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <StraightOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="body1" sx={{ mr: 2 }}>
            Called Ajay Kumar - 5 Minutes
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2 months ago
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default CallItem;
