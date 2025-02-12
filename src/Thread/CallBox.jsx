import React, { useState } from "react";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box, Card, Typography, Avatar, IconButton, Divider, CardContent, TextField, Button, Tooltip, FormControl, Select, MenuItem, InputLabel, Menu } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { PiClock } from "react-icons/pi";
import CheckIcon from '@mui/icons-material/Check';
import {
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    FormatStrikethrough,
    Link,
    LinkOff,
    FormatListBulleted,
    FormatQuote,
    AlternateEmail,
} from "@mui/icons-material";

const CallBox = () => {
    const [text, setText] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [editorRef, setEditorRef] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor element

    const handleFormat = (command) => {
        document.execCommand(command, false, null);
        editorRef?.focus();
    };

    const handleTextSelect = () => {
        const selection = window.getSelection();
        setSelectedText(selection.toString());
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget); // Set the anchor for the menu
    };

    const handleMenuClose = () => {
        setAnchorEl(null); // Close the menu
    };

    const handleDelete = () => {
        console.log("Delete clicked");
        handleMenuClose();
    };

    const handleCopyLink = () => {
        console.log("Copy Link clicked");
        handleMenuClose();
    };

    return (
        <>
            <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
                <Box sx={{ pt: 2, pl: 1 }}>
                    <LocalPhoneOutlinedIcon />
                </Box>
                <Card sx={{ width: "100%", flex: 8, ml: 4, m: 1, bgcolor: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            Called Unknown Number                         
                        </Typography>
                        <IconButton aria-label="Call details">
                            <NorthEastIcon />
                        </IconButton>
                        <IconButton aria-label="Call duration">
                            <PiClock />
                        </IconButton>
                        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>0s</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <IconButton onClick={handleMenuOpen}>
                                <MoreHorizIcon />
                            </IconButton>
                            <Avatar sx={{ width: "34px", height: "34px", fontSize: "14px" }}>AK</Avatar>
                            <Typography>Now</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <CardContent>
                        <TextField
                            variant="standard"
                            placeholder="Add a note..."
                            fullWidth
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderColor: 'white',
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottom: '1px solid white',
                                },
                            }}
                        />
                        <Box
                            contentEditable
                            ref={(ref) => setEditorRef(ref)}
                            onSelect={handleTextSelect}
                            sx={{
                                minHeight: 100,
                                "&:focus": {
                                    outline: "none",
                                },
                            }}
                        />
                        <Divider />
                        <Box sx={{ display: "flex", alignItems: "center", p: 1, gap: 0.5 }}>
                            <Tooltip title="Bold">
                                <IconButton size="small" onClick={() => handleFormat("bold")}>
                                    <FormatBold fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Italic">
                                <IconButton size="small" onClick={() => handleFormat("italic")}>
                                    <FormatItalic fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Underline">
                                <IconButton size="small" onClick={() => handleFormat("underline")}>
                                    <FormatUnderlined fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Strikethrough">
                                <IconButton size="small" onClick={() => handleFormat("strikethrough")}>
                                    <FormatStrikethrough fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                            <Tooltip title="Add Link">
                                <IconButton size="small">
                                    <Link fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Remove Link">
                                <IconButton size="small">
                                    <LinkOff fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                            <Tooltip title="Bullet List">
                                <IconButton size="small" onClick={() => handleFormat("insertUnorderedList")}>
                                    <FormatListBulleted fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Quote">
                                <IconButton size="small">
                                    <FormatQuote fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Mention">
                                <IconButton size="small">
                                    <AlternateEmail fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        {/* Menu for options like delete and copy link */}
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleDelete}>
                                <IconButton size="small">
                                    <CheckIcon fontSize="small" />
                                </IconButton>
                                Delete
                            </MenuItem>
                            <MenuItem onClick={handleCopyLink}>
                                <IconButton size="small">
                                    <Link fontSize="small" />
                                </IconButton>
                                Copy Link
                            </MenuItem>
                        </Menu>

                        <Box sx={{ mt: 0, borderRadius: "0px", display: "flex", gap: "10px" }}>
                            <Button size="small" variant="outlined" color="gray" sx={{ borderRadius: 1 }}>
                                Done
                            </Button>
                            <FormControl size="small" sx={{ width: "100px" }}>
                                <InputLabel>Contact</InputLabel>
                                <Select label="Contact">
                                    <MenuItem value="1">Close Sales Team</MenuItem>
                                    <MenuItem value="2">Close Support Team</MenuItem>
                                    <MenuItem value="3">Close Customer Success Team</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField variant="outlined" label="Minutes" size="small" sx={{width:"100px"}} />
                            <Box sx={{ flexGrow: 1 }} />
                            <IconButton color="success" >
                                <CheckIcon />
                            </IconButton>
                            <Typography sx={{ textAlign: "center", mt: 1 }}>Changes Save Automatically</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default CallBox;
