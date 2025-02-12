import React from "react";
import {Box,TextField} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import IconButton from "@mui/material/IconButton";

const NotesBox=()=>{
    return(
        <>
        <Box sx={{
            // marginLeft:"700px",
            border:"1px solid #ddd" ,bgcolor:"white" ,mt:2,mr:2}}>
            <TextField label="Notes" placeholder="Add a note about this lead" rows={3}   multiline
            sx={{m:2 ,width:"600px" ,          "& .MuiInputBase-input": {
                fontSize: "14px", // Reduce text size
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px", // Reduce label size
              },
    }}/>
    <div sx={{ml:5}}>
      {/* Delete Icon */}
      <IconButton color="error" sx={{}} size="small">
        <DeleteIcon sx={{ml:2}} />
      </IconButton>

      {/* Edit (Correct) Icon */}
      <IconButton color="primary" sx={{marginLeft:"530px"}}>
      <DoneOutlineOutlinedIcon />
        </IconButton>
         </div>
        </Box>
        </>
    )
}
export default NotesBox;