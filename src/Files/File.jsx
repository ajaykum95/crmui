import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import LinkIcon from "@mui/icons-material/Link";
import NoteIcon from "@mui/icons-material/StickyNote2";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImageIcon from "@mui/icons-material/Image"; // Default image icon

const files = [
  { name: "lead-based.png", size: "105 KB", date: "Jan 29, 2025", preview: "https://via.placeholder.com/50" },
  { name: "commenting.png", size: "289 KB", date: "Jan 30, 2025", preview: "https://via.placeholder.com/50" },
];

const File = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleMenuOpen = (event, file) => {
    setAnchorEl(event.currentTarget);
    setSelectedFile(file);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedFile(null);
  };

  return (
    <Box sx={{  backgroundColor: "#f8f9fa", p: 2, borderRadius: 2,mt:2 }}>
      {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* File List */}
      <List sx={{ backgroundColor: "white", borderRadius: 2, p: 0 }}>
        {files.map((file, index) => (
          <React.Fragment key={index}>
            <ListItem
              secondaryAction={
                <>
                  <IconButton onClick={(e) => handleMenuOpen(e, file)} sx={{ ml: 1 }}>
                    <MoreVertIcon />
                  </IconButton>
                  <IconButton sx={{ ml: 1 }}>
                    <NoteIcon color="warning" />
                  </IconButton>
                </>
              }
              sx={{ padding: "8px 0", display: "flex", justifyContent: "space-between" }}
            >
              {/* Left-Side Image Preview */}
              <ListItemAvatar sx={{ml:1}}>
                <Avatar variant="rounded" src={file.preview}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>

              {/* File Name & Size */}
              <ListItemText  sx={{fontSize:"12px"}}  primary={file.name} secondary={`Image • ${file.size}` } />
            </ListItem>
            {index < files.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      {/* File Options Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {selectedFile && (
          <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
            <NoteIcon color="warning" sx={{ mr:1 }} />
            <Typography variant="body2">Used in a Note ({selectedFile.date})</Typography>
          </Box>
        )}
        <MenuItem onClick={handleMenuClose}>
          <VisibilityIcon sx={{ mr: 1 }} />
          View
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <DownloadIcon sx={{ mr: 1 }} />
          Download
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LinkIcon sx={{ mr: 1 }} />
          Copy activity link
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default File;
