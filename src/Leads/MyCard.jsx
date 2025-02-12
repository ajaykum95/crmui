import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";


const MyCard = ({name,ItemComponent}) => {
  const [open, setOpen] = useState(true); // Open by default
    const handleClick=()=>{
        setOpen(!open);
    }
  return (
    <Card sx={{ width: 300, mt: 2, bgcolor: "#f5f5f5",p:1  }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,px:1,height:"30px" }} >
            <Box onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1,fontSize:"16px" }}>{name} </Typography>

        <Box>
          <IconButton>
            <Add />
          </IconButton>
        </Box>
      </Box>

      {/* Expandable Content */}
      {open && (
            <CardContent sx={{bgcolor:"white" ,borderRadius:2}}>
                    <ItemComponent/>
            </CardContent>
      )}
    </Card>
  );
};

export default MyCard;
