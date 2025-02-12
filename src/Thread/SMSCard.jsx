import React from "react";
import { Box, Avatar, Typography, Card, CardContent, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const SMSCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ backgroundColor: "#f9f9f9", p: 1, borderRadius: 2, mt: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" px={2} py={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <ChatBubbleOutlineIcon color="primary" />
          <Typography variant="body1" fontWeight="bold">
            SMS with Ajay Kumar and Close Sales Team
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ width: 24, height: 24, fontSize: "12px", bgcolor: "red.300" }}>AK</Avatar>
          <Typography variant="caption" color="text.secondary">
            1d ago
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ backgroundColor: "#fff", borderRadius: 2, mx: 2, p: 1.5, position: "relative" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight="bold" color="text.primary">
            Close Sales Team
          </Typography>
          <Typography variant="caption" color="success.main">
            6:39am
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" mt={1}>
          This is how an SMS will appear on your feed. It will also populate in your inbox.
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Remember, you can also use the SMS templates.
        </Typography>
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
              <LinkIcon fontSize="small" sx={{ mr: 1 }} /> Copy link
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>
              <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Delete SMS
            </MenuItem>
          </Menu>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SMSCard;
