import React, { useState } from "react";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import { Box, Card, Typography, Avatar, IconButton, Divider, CardContent, Menu, MenuItem, ListItemIcon, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const LeadNote = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    // Open Menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close Menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Open Delete Confirmation Dialog
    const handleDeleteClick = () => {
        setOpenDeleteDialog(true);
        handleClose(); // Close the menu when delete is clicked
    };

    // Close Delete Dialog
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    return (
        <>
            <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
                <Box sx={{ pt: 3, pl: 1 }}>
                    <SpeakerNotesOutlinedIcon />
                </Box>
                <Card sx={{ width: "100%", flex: 8, ml: 4, m: 1, bgcolor: "white" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>
                        <Typography sx={{ fontWeight: "bold",fontSize:"var(--font-size-base)" }}>
                            Ajay Kumar Created a note
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <IconButton onClick={handleClick}>
                                <MoreHorizIcon />
                            </IconButton>
        <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
                            <Typography>Now</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <CardContent>
                        <Box>
                            <Typography component="span" sx={{ backgroundColor: "lightBlue",fontSize:"var(--font-size-base)"}} >
                                Phone menu and lead Call Routing
                            </Typography>
                            <Typography sx={{fontSize:"var(--font-size-base)"}}>
                                Check out our Phone Menu/IVR functionality. You can now configure and route your incoming calls...
                            </Typography>
                            <Typography color="primary" textAlign="center" variant="body2">
                                Show More
                            </Typography>
                        </Box>
                    </CardContent>

                    {/* Menu with Icons */}
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <EditIcon fontSize="small" />
                            </ListItemIcon>
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ContentCopyIcon fontSize="small" />
                            </ListItemIcon>
                            Copy Link
                        </MenuItem>
                        <MenuItem onClick={handleDeleteClick}>
                            <ListItemIcon>
                                <DeleteIcon fontSize="small" color="error" />
                            </ListItemIcon>
                            <Typography color="error">Delete</Typography>
                        </MenuItem>
                    </Menu>

                    {/* Delete Confirmation Dialog */}
                    <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                        <DialogTitle>Delete this Note</DialogTitle>
                        <DialogContent sx={{ backgroundColor: "#fdecea", padding: "16px" }}>
                            <Typography>Are you sure you want to permanently delete this Note?</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDeleteDialog} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCloseDeleteDialog} color="error" variant="contained">
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            </Box>
        </>
    );
};

export default LeadNote;
  