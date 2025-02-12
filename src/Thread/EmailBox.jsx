import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
  Tooltip,
  Menu,
  Avatar,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SaveIcon from "@mui/icons-material/Save";

const EmailBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
      <Box sx={{ pt: 2, pl: 1 }}>
        <SpeakerNotesOutlinedIcon />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", m:1 }}>
        <Card sx={{ p: 2, boxShadow: 3 }}>
          {/* Header */}
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="subtitle1" >(no subject)
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <IconButton>
                                <MoreHorizIcon />
                            </IconButton>
                            <Avatar sx={{ width: "34px", height: "34px", fontSize: "14px" }}>AK</Avatar>

          </Box>
          </Box>
          <Divider/>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt:1
            }}
          > 
          <IconButton>
            <KeyboardArrowDownIcon/>
          </IconButton>
            <Typography variant="caption" >
              From: Ajay Kumar {"<v-ajay.kumar@arya.ag>"}
            </Typography>
                      <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant="caption"
              sx={{ backgroundColor: "#FDD835", p: 0.5, borderRadius: 1 }}
            >
              DRAFT
            </Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Email Fields */}
          <TextField fullWidth variant="standard" placeholder="To" sx={{ mb: 1 }} />
          <TextField fullWidth variant="standard" placeholder="CC" sx={{ mb: 1 }} />
          <TextField fullWidth variant="standard" placeholder="BCC" sx={{ mb: 1 }} />
          <TextField fullWidth variant="standard" placeholder="Subject" sx={{ mb: 2 }} />

          {/* Text Editor */}
          <Box
            contentEditable
            sx={{
              minHeight: 100,
              border: "1px solid #ccc",
              borderRadius: 1,
              p: 1,
              outline: "none",
            }}
          />

          {/* Formatting Toolbar */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Tooltip title="Bold">
              <IconButton>
                <FormatBold fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Italic">
              <IconButton>
                <FormatItalic fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Underline">
              <IconButton>
                <FormatUnderlined fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Attach File">
              <IconButton>
                <AttachFileIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Insert Image">
              <IconButton>
                <ImageIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Footer Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ backgroundColor: "#1976D2", color: "white" }}
            >
              Send
            </Button>
            <Button variant="outlined" startIcon={<ScheduleIcon />}>
              Schedule
            </Button>
            <Button variant="outlined" startIcon={<SaveIcon />}>
              Save Draft
            </Button>
            <IconButton onClick={handleMenuOpen}>
              <MoreHorizIcon />
            </IconButton>

            {/* Options Menu */}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Delete Draft</MenuItem>
              <MenuItem onClick={handleMenuClose}>Copy Link</MenuItem>
            </Menu>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default EmailBox;
