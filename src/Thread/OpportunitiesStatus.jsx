import React from "react";
import { Box, Chip, Typography, Avatar } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";

const OpportunityStatus = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        borderRadius: "2px",
        backgroundColor: "#f5f5f5",
        // flex: 8,
        mt: 2,
      }}
    >
      {/* Trophy Icon */}
      <EmojiEvents style={{ color: "#8BC34A", marginRight: "8px" }} />

      {/* Text Content */}
      <Box flex={8} display="flex" flexDirection="column">
        {/* First Line */}
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" fontWeight="bold" sx={{ fontSize: "12px" }} noWrap>
            Opportunity ($500) status changed from{" "}
          </Typography>
          <Chip
            label="SALES PROCESS (EXAMPLE)"
            size="small"
            sx={{
              backgroundColor: "#E3F2FD",
              color: "#1976D2",
              fontWeight: "bold",
              fontSize: "10px",
              height: "20px",
              marginLeft: "4px",
            }}
          />
          <Chip
            label="DEMO COMPLETED"
            size="small"
            sx={{
              backgroundColor: "#FFEB3B",
              color: "#000",
              fontWeight: "bold",
              fontSize: "10px",
              height: "20px",
              marginLeft: "4px",
            }}
          />
          <Typography variant="body2" fontWeight="bold" sx={{ fontSize: "12px", marginLeft: "4px" }}>
            →
          </Typography>
        </Box>

        {/* Second Line */}
        <Box display="flex" alignItems="center" flexWrap="wrap" mt={0.5}>
          <Chip
            label="SALES PROCESS (EXAMPLE)"
            size="small"
            sx={{
              backgroundColor: "#E3F2FD",
              color: "#1976D2",
              fontWeight: "bold",
              fontSize: "10px",
              height: "20px",
            }}
          />
          <Chip
            label="WON"
            size="small"
            sx={{
              backgroundColor: "#C8E6C9",
              color: "#388E3C",
              fontWeight: "bold",
              fontSize: "10px",
              height: "20px",
              marginLeft: "4px",
            }}
          />
        </Box>
      </Box>

      {/* User Initials and Time */}
      <Box display="flex" alignItems="center" marginLeft="8px">
        <Avatar
          sx={{
            width: "20px",
            height: "20px",
            fontSize: "10px",
            backgroundColor: "#FF5722",
          }}
        >
          AK
        </Avatar>
        <Typography variant="caption" sx={{ fontSize: "10px", marginLeft: "8px", color: "#757575" }}>
          1d ago
        </Typography>
        
      </Box>
    </Box>
    
  );
};

export default OpportunityStatus;
