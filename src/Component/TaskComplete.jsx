import React from "react";
import { Box, Typography,Avatar} from "@mui/material";

const TaskComplete = () => {
  return (
    <Box
      sx={{
        marginTop:"15px",
        border:"1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #ddd",
        // marginLeft: "700px",
        mr:2,
        backgroundColor:"white"
      }}
    >
      {/* Left side - Task info */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{fontSize:"14px"}}>
          Task Completed: Follow up
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ borderBottom: "1px dotted #ddd", marginLeft: "8px" }}
        >
          5 days ago
        </Typography>
      </Box>

      {/* Right side - User info */}
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ marginRight: "8px", fontSize:"14px" }}>
          Ajay Kumar
        </Typography>
        <Avatar style={{ marginLeft: "8px", backgroundColor: "#BDBDBD", fontSize:"14px",width:"25px" ,height:"25px" }}>AK</Avatar>

      </Box>
    </Box>
  );
};

export default TaskComplete;
