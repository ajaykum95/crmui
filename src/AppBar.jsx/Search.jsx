import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      fullWidth
      sx={{
        backgroundColor: "#f1f1f1",
        borderRadius: "8px",
        width: { xs: "100%", sm: "400px", md: "500px" }, // Responsive width
        maxWidth: "100%", // Ensures it doesn't exceed parent container
        "& .MuiOutlinedInput-root": {
          "& fieldset": { border: "none" },
        },
        "& .MuiInputBase-input": {
          padding: "11px 0 11px 36px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
