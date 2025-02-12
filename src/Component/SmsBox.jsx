import React from "react";
import { Box, Typography, Avatar, IconButton, Paper, CardActions } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";

const SmsBox = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {/* List Item */}
      <Box sx={{ borderBottom: "1px solid #ddd", padding: 2 }}>
        {/* Message Content */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Email Icon */}
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>

          {/* Message */}
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              It was great meeting you
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ fontSize: "14px", mr: 1 }}>
                Ajay Kumar
              </Typography>
              <Avatar sx={{ bgcolor: "#1976d2", color: "#fff" }}>AK</Avatar>
            </Box>
          </Box>
        </Box>

        {/* Actions Section */}
        <Paper sx={{ mt: 1, padding: 1 }} elevation={1}>
          <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <IconButton>
                <DraftsOutlinedIcon />
              </IconButton>
              <IconButton>
                <SegmentOutlinedIcon />
              </IconButton>
            </Box>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </CardActions>
        </Paper>

        {/* Timestamp */}
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "textSecondary" }}>
            7 days ago
          </Typography>
        </Box>
      </Box>

      {/* Another Message */}
      <Box sx={{ borderBottom: "1px solid #ddd", padding: 2 }}>
        {/* Message Content */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Email Icon */}
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>

          {/* Message */}
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Hi Vijay, I'm Liz with Wayne Enterprises. We help inside sales teams close more deals. I want
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ fontSize: "14px", mr: 1 }}>
                Liz Kaur
              </Typography>
              <Avatar sx={{ bgcolor: "#1976d2", color: "#fff" }}>LK</Avatar>
            </Box>
          </Box>
        </Box>

        {/* Actions Section */}
        <Paper sx={{ mt: 1, padding: 1 }} elevation={1}>
          <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <IconButton>
                <DraftsOutlinedIcon />
              </IconButton>
              <IconButton>
                <SegmentOutlinedIcon />
              </IconButton>
            </Box>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </CardActions>
        </Paper>

        {/* Timestamp */}
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "textSecondary" }}>
            7 days ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SmsBox;
