import { TextField,Box,Button,Typography,IconButton } from "@mui/material";
import React from "react"
import {Add}  from "@mui/icons-material";


const ContactForm=()=>{
    return(
        <>
        <Box sx={{ml:30 ,border:"1px solid black", width:"300px" ,mt:2,backgroundColor:"white" }}>
            <Box sx={{p:2}} >
            <TextField label="Contact Name" size="small" variant="outlined" sx={{width:"270px"}}/>
            <TextField label="Role"  size="small" variant="outlined"  sx={{width:"270px" ,mt:2}}/>
        </Box>
        <Box sx={{display:"flex",border:"1px solid #ddd" ,alignItems:"center" ,ml:2,mr:2,pl:2,justifyContent:"space-between" ,borderRadius:1}}>
            <Typography>Details</Typography>
            <IconButton>
                <Add/>
            </IconButton>
        </Box>
        <Box sx={{ml:18,mt:2}}>
            <Button variant="text" color="error" >Cancel</Button>
            <Button variant="contained" color="success">Save</Button>
        </Box>
        </Box>
        </>
    )
}
export default ContactForm;
