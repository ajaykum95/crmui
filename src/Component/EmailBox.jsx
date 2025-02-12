import React from "react"
import { Box,TextField,Button,Typography,FormControl,MenuItem,Select,InputLabel,Stack,Avatar,FormControlLabel,FormGroup,Checkbox } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";


const EmailBox=()=>{
    return(
        <>
        <Box sx={{
            // marginLeft:"700px",
            border:"1px solid #ddd" ,bgcolor:"white" ,mt:2,mr:2}}>   
            <div style={{marginLeft:"18px" ,marginTop:"10px",display:"flex"}}>
            <Typography variant="h6" sx={{fontSize:"15px" }} >Proposal of NBFC Registration</Typography>
                <Typography variant="h6" sx={{fontSize:"15px",marginLeft:"250px"}}>Ajay Kumar</Typography>
                <Avatar sx={{fontSize:"15px" ,width:"30px",height:"30px",ml:2}}>AK</Avatar>
                </div> 
                <Box sx={{  border: "1px solid #ddd", borderRadius: "1px", bgcolor: "white", bgcolor:"#ddd" ,pt:2,mt:2}}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ArrowDropDownOutlinedIcon />
          <Typography variant="body1" sx={{fontSize:"15px",color:"#333333"}} >
            Ajay Kumar &lt;ajay30935@gmail.com&gt;
          </Typography>
          <Button variant="contained" size="small" sx={{bgcolor:"gray",fontSize:"10px"}}>Draft</Button>
        </Box>
        <Typography variant="body2" color="gray">
          less than a minute ago
        </Typography>
      </Box>

      {/* Recipient Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        <Typography variant="body1" sx={{ml:4,fontSize:"15px"}}>
          To:
        </Typography>
        <Typography variant="body1">ajay30935@gmail.com</Typography>
      </Box>
    </Box>
            <div style={{display:"flex"}}>
        <FormControl  size="small" sx={{width:"400px" ,ml:2,mt:2 }}>
            <InputLabel >To:</InputLabel>
        <Select label="To:" >
            <MenuItem value="1">Jon Snow@123456</MenuItem>
            <MenuItem value="2">herry Snow@123456</MenuItem>
        </Select>
        </FormControl>
        <Stack spacing={0} direction="row" sx={{margin:"14px"}}>

            <Button variant="outlined" size="small" sx={{margin:1}}>ADD CC</Button>
            <Button variant="outlined" size="small" sx={{margin:1}}>ADD BCC</Button>
            </Stack>
            </div>

                <Box>
                <FormControl  size="small" sx={{width:"600px" ,ml:2,mt:1 }}>
                    <InputLabel>CC:</InputLabel>
                    <Select label="CC:" >
                    <MenuItem value="1">Jon Snow@123456</MenuItem>
                    <MenuItem value="2">herry Snow@123456</MenuItem>
                    </Select>
             </FormControl>
             <FormControl  size="small" sx={{width:"600px" ,ml:2,mt:1 }}>
                    <InputLabel>BCC:</InputLabel>
                    <Select label="BCC:" >
                    <MenuItem value="1">Jon Snow@123456</MenuItem>
                    <MenuItem value="2">herry Snow@123456</MenuItem>
                    </Select>
             </FormControl>

                </Box>
        <div>
        <TextField label="Subject" 
        size="small"
        sx={{m:2 ,width:"370px"    ,
            "& .MuiInputBase-input": {
                fontSize: "14px", // Reduce text size
            },
            "& .MuiInputLabel-root": {
                fontSize: "14px", // Reduce label size
            },
            }}/>

        <FormControl  size="small" sx={{width:"200px" ,ml:2,mt:2 }}>
            <InputLabel >Choose Template</InputLabel>
            <Select label="Chosse Template" >
            <MenuItem value="1">Welcome Template</MenuItem>
            <MenuItem value="2">Proposal Template</MenuItem>
            <MenuItem value="3">Review Template</MenuItem>
            </Select>
        </FormControl>
        </div>

            <TextField label="Email Body" placeholder="Write your message here" rows={4}   multiline
            sx={{m:2 ,width:"600px"    ,
                       "& .MuiInputBase-input": {
                fontSize: "14px", // Reduce text size
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px", // Reduce label size
              },
            }}/>
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* Checkbox */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="If no reply" sx={{ ml: 1 }} />
      </FormGroup>

      {/* Week Selection */}
      <FormControl size="small" sx={{ width: "150px" }}>
        <InputLabel>Week</InputLabel>
        <Select label="Week">
          <MenuItem value="1">In 1 Week</MenuItem>
          <MenuItem value="2">In 2 Weeks</MenuItem>
        </Select>
      </FormControl>

      {/* "Then" Text (Aligned in Center) */}
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        then
      </Typography>

      {/* Reminder Selection */}
      <FormControl size="small" sx={{ width: "200px" }}>
        <InputLabel>Reminder</InputLabel>
        <Select label="Reminder">
          <MenuItem value="1">Remind me to follow up</MenuItem>
          <MenuItem value="2">Remind me to check</MenuItem>
        </Select>
      </FormControl>
    </Box>
                      <div>
         <Button variant="contained" color="success"  size="small" sx={{m:2}}>Send</Button>
         <Button variant="outlined" color="#333333" size="small" startIcon={<AccessTimeOutlinedIcon /> }> Send Later</Button>
         <IconButton color="error"  size="small">
        <DeleteIcon sx={{ml:26}} size="small" />
        </IconButton>
         <AttachFileIcon sx={{  color: "gray", ml:2}} />

      <Button variant="outlined" color="#333333" size="small" > Save Draft</Button>
      </div>
            </Box>
        </>
    )
}
export default EmailBox;