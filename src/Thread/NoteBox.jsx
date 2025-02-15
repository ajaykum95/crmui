import React, { useState } from "react";
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import { Box, Card, Typography, Avatar, IconButton, Divider, CardContent, TextField, Button, Tooltip } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
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

const NoteBox = () => {
    const [text, setText] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [editorRef, setEditorRef] = useState(null);

    const handleFormat = (command) => {
        document.execCommand(command, false, null);
        editorRef?.focus();
    };

    const handleTextSelect = () => {
        const selection = window.getSelection();
        setSelectedText(selection.toString());
    };

    return (
        <>
            <Box sx={{ display: "flex", mt: 1, backgroundColor: "#f5f5f5" }}>
                <Box sx={{ pt: 3, pl: 1 }}>
                    <SpeakerNotesOutlinedIcon  />
                </Box>
                <Card sx={{ width: "100%", flex: 8, ml: 4, m: 1, bgcolor: "white" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>
                        <Typography  sx={{ fontWeight: "bold",fontSize:"var(--font-size-base)" }}>
                            Ajay Kumar Created a note
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <IconButton>
                                <MoreHorizIcon />
                            </IconButton>
         <Avatar sx={{ bgcolor: "red.300", width: 24, height: 24, fontSize: "var(--font-size-avatar)" }}> AK</Avatar>
                            <Typography>Now</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <CardContent>
                        {/* First TextField for "Add a note..." */}
                        <TextField
                            variant="standard"
                            placeholder="Add a note..."
                            fullWidth
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderColor: 'white',  // Set the border color to white
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottom: '1px solid white',  // Change the underline color to white
                                },
                            }}
                        />

                        {/* Second TextField for "Quick Insert Menu..." */}
                        {/* <TextField
                            placeholder="Type '/' to open the Quick Insert Menu..."
                            variant="standard"
                            multiline
                            rows={4}
                            fullWidth
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderColor: 'white',  // Set the border color to white
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottom: '1px solid white',  // Change the underline color to white
                                },
                            }}
                        /> */}
                        {/* <Box
                            sx={{
                                mb: 2,
                                border: "1px solid #e0e0e0",
                                borderRadius: 1,
                                "&:focus-within": {
                                    borderColor: "primary.main",
                                },
                            }}
                        > */}
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
                        {/* </Box> */}

                        <Box sx={{ mt: 2, borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                            <Button size="small" variant="contained" sx={{ borderRadius: 3 }}>
                                Done
                            </Button>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default NoteBox;
