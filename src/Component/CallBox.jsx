import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";

const CallBox = () => {
  return (
    <Box
      sx={{
        mt: 2,
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        p: 2,
        borderBottom: "1px solid #ddd",
        // ml: "700px",//700
        backgroundColor: "white",
        mr: 2,
      }}
    >
      {/* Top Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Content */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            They seem like a good fit. We will send them a proposal later today.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Typography variant="body1" sx={{ mr: 1, fontSize: "14px" }}>
              Liz
            </Typography>
            <Avatar sx={{ bgcolor: "#1976d2", color: "#fff", width: 30, height: 30 }}>
              LA
            </Avatar>
          </Box>
        </Box>
      </Box>

      {/* Call Details */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
        <StraightOutlinedIcon />
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="body2" sx={{ fontSize: "12px" }}>
            Called Ajay Kumar - 5 Minutes
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: "12px" }}>
            2 months ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CallBox;
