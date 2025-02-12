import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const NotesBoxActivity = () => {
  return (
    <Box
      sx={{
        mt: "15px",
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        p: "8px",
        borderBottom: "1px solid #ddd",
        // ml: "700px",
        backgroundColor: "white",
        mr:2
      }}
    >
      {/* Top Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          I had a call here, It went well.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          
          <Typography variant="body1" sx={{ mr: "8px", fontSize: "14px" }}>
            Ajay Kumar
          </Typography>
          
          <Avatar
            sx={{
              ml: "8px",
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
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "14px" }}>
          Notes Written
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ borderBottom: "1px dotted #ddd", fontSize: "12px" }}
        >
          2 months ago
        </Typography>

      </Box>
    </Box>
  );
};

export default NotesBoxActivity;
