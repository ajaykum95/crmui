import React from "react";
import { Box, TextField,Button,Typography,Select,MenuItem,FormControl,InputLabel } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const Sms = () => {
  return (
    <Box
      sx={{
        mr:2,
        // marginLeft: "700px",
        border: "1px solid #ddd",
        bgcolor: "white",
        mt: 2,
        border:"1px solid #ddd"
        // p: 2,
        // borderRadius: "8px",
        // boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
        <FormControl  size="small" sx={{width:"600px" ,ml:2,mt:2 }}>
            <InputLabel>To:</InputLabel>
        <Select label="To:">
            <MenuItem value="1">Jon Snow@123456</MenuItem>
            <MenuItem value="2">herry Snow@123456</MenuItem>

        </Select>

        </FormControl>

      <TextField
        label="SMS"
        multiline
        placeholder="Write your message here"
        rows={3}

        sx={{
            width: "600px",
            m:2,
          "& .MuiInputBase-input": {
            fontSize: "14px", // Reduce text size
          },
          "& .MuiInputLabel-root": {
            fontSize: "14px", // Reduce label size
          },
        }}
      />
      <div>
      <Button variant="contained" color="success"  size="small" sx={{m:2}}>Send</Button>
      <Button variant="outlined" color="#333333" size="small" startIcon={<AccessTimeOutlinedIcon /> }> Send Later</Button>
      <IconButton color="error"  size="small">
        <Typography color="#333333">1000</Typography>
        <DeleteIcon sx={{ml:26}} size="small" />
      </IconButton>

      <Button variant="outlined" color="#333333" size="small" > Save Draft</Button>

      </div>
    </Box>
  );
};

export default Sms;
