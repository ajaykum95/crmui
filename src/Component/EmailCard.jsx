import React from "react";
import { Box, Typography, Avatar, IconButton, Paper, CardActions } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";

const EmailCard = () => {
  return (
    <Box
      sx={{
        mt: 2,
        border: "1px solid #ddd", 
        backgroundColor: "white", 
        padding: "8px", 
        borderBottom: "1px solid #ddd", 
        // marginLeft: "700px", 
        mr: 2, 
        display: "flex", 
        justifyContent: "space-between",
      }}
    >
      {/* Left side - Message info */}
      <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          Hi Gob, I'm Liz with Wayne Enterprises. We help inside sales teams close more deals. I want
        </Typography>
      </Box>

      {/* Right side - User info */}
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ marginRight: "8px", fontSize: "14px" }}>
          Liz Kaur
        </Typography>
        <Avatar sx={{ bgcolor: "#1976d2", color: "#fff", width: 30, height: 30 }}>LK</Avatar>
      </Box>

      {/* Timestamp */}
      <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#757575" }}>
          7 days ago
        </Typography>
      </Box>

      {/* Actions Section */}
      <Paper sx={{ mt: 2, padding: 1, backgroundColor: "#fafafa", borderRadius: 1 }} elevation={1}>
        <CardActions sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}>
          <Box>
            <IconButton sx={{ color: "#1976d2" }}>
              <DraftsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: "#1976d2" }}>
              <SegmentOutlinedIcon />
            </IconButton>
          </Box>

          <IconButton sx={{ color: "#d32f2f" }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </CardActions>
      </Paper>
    </Box>
  );
};

export default EmailCard;
