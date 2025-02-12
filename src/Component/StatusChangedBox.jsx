import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const StatusChangedBox = () => {
  return (
    <Box
      sx={{
        mt: 2,
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        p: 2,
        borderBottom: "1px solid #ddd",
        // ml: "700px",
        backgroundColor: "white",
        mr: 2,
      }}
    >
      {/* Top Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Status Change Info */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Status changed from
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Typography variant="body1" sx={{ mr: 1, fontWeight: "bold", color: "#1976d2", fontSize: "14px" }}>
              Potential
            </Typography>
            <IconButton size="small">
              <EastOutlinedIcon />
            </IconButton>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#1976d2", fontSize: "14px" }}>
              Interested
            </Typography>
          </Box>
        </Box>

        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <Typography variant="body1" sx={{ mr: 1, fontSize: "14px" }}>
            Ajay Kumar
          </Typography>
          <Avatar sx={{ bgcolor: "#BDBDBD", color: "#fff", width: 30, height: 30,fontSize:"14px" }}>
            AK
          </Avatar>
        </Box>
      </Box>

      {/* Bottom Section - Timestamp */}
      <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: "12px", borderBottom: "1px dotted #ddd" }}>
          5 days ago
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusChangedBox;
