import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const OpportunityBox = () => {
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
        mr:2
        // width: "100%",
      }}
    >
      {/* Top Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Opportunity Status Message */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Opportunity ($6000) status changed from
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Typography variant="body1" sx={{ mr: 1, fontWeight: "bold", color: "#1976d2", fontSize: "14px" }}>
              SALES
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#1976d2", fontSize: "14px" }}>
              {/* DEMO SCHEDULED */}
            </Typography>
          </Box>
          <IconButton sx={{ ml: 1 }}>
            <EastOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <Typography variant="body1" sx={{ mr: 1, fontSize: "14px" }}>
            Ajay Kumar
          </Typography>
          <Avatar
            sx={{
              bgcolor: "#BDBDBD",
              fontSize: "14px",
              width: "25px",
              height: "25px",
            }}
          >
            AK
          </Avatar>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
        {/* Status Progress */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ mr: 1, fontWeight: "bold", color: "#1976d2", fontSize: "14px" }}>
            SALES
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#1976d2", fontSize: "14px" }}>
            DEMO COMPLETED
          </Typography>
        </Box>

        {/* Time Ago */}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ borderBottom: "1px dotted #ddd", fontSize: "12px" }}
        >
          5 days ago
        </Typography>
      </Box>
    </Box>
  );
};

export default OpportunityBox;
