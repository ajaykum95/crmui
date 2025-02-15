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
    <>
    
       <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
        <Box sx={{ pt: 2, pl: 1 }}>
      <ChatBubbleOutlineIcon color="primary" />
      </Box>    

    <Card sx={{  p:1, mt: 2 ,width:"100%",m:1 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between"  >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography  fontWeight="bold" sx={{fontSize:"var(--font-size-base)"}}>
            SMS with Ajay Kumar and Close Sales Team
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
          <Typography variant="caption" color="text.secondary">
            1d ago
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
        <Box display="flex"  alignItems="center" sx={{gap:"10px",ml:0}}>
          <Typography fontWeight="bold" color="text.primary" sx={{fontSize:"var(--font-size-base)"}}>
            Close Sales Team
          </Typography>
          <Typography   color="success.main" sx={{fontSize:"var(--font-size-base)"}}>
            6:39am
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          </Box>

        <Typography variant="body2" color="text.secondary" >
          This is how an SMS will appear on your feed. It will also populate in your inbox.
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          Remember, you can also use the SMS templates.
        </Typography>
        <Box >
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
    </Box>
    </>

  );
};

export default SMSCard;
