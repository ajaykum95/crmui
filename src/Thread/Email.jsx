import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Box,IconButton,Card,Divider,Avatar,Typography, CardContent } from "@mui/material";
import { PiGreaterThan } from "react-icons/pi";
import { GoArrowDownRight } from "react-icons/go";

const Email=()=>{
    return(
        <>
        <Box sx={{display:"flex",mt:1 ,backgroundColor:"#f5f5f5"}}>
            <Box sx={{pt:2,pl:1 }}>
           <AiOutlineMail style={{fontSize:"25px"}}/>
            </Box>
            <Card sx={{width:"100%",flex:8,m:1,p:1}}>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",p:1}}>
                    <Typography variant="caption"  sx={{fontWeight:"bold"}}>This is an Email</Typography>
                    <Avatar sx={{width:"34px",height:"34px",fontSize:"14px"}}>AK</Avatar>
                </Box>
                <Divider/>
                <CardContent sx={{padding:"7px"}}>
                    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <Box sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                        <PiGreaterThan />
                        <Typography variant="caption">Close Sales Team</Typography>
                        <GoArrowDownRight />
                        <Typography variant="caption">As you begin using Close, we recommend you handle all your customer </Typography>
                        </Box>
                        <Typography variant="caption">1d ago</Typography>
                        </Box>
                </CardContent>
            </Card>
        </Box>
</>
    )
}
export default Email;