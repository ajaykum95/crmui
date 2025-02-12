// import React, { useState } from "react";
// import {
//   Card,
//   Typography,
//   CardContent,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
// import TaskData from "./TaskData";


// const Tasks = () => {
//   const [open, setOpen] = useState(true); // Open by default
//     const handleClick=()=>{
//         setOpen(!open);
//     }
//   return (
//     <Card sx={{ width:"100%", mt: 2, bgcolor: "#f5f5f5",p:1  }} >
//       {/* Header Section */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,px:1,height:"30px" }}  >
//             <Box onClick={handleClick}>
//             {open ? <ExpandLess /> : <ExpandMore />}
//             </Box>
//         <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1,fontSize:"14px" }}  >TASKS </Typography>

//         <Box>
//           <IconButton>
//             <Add />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Expandable Content */}
//       {open && (
//             <CardContent sx={{bgcolor:"white" ,borderRadius:2}} >
//                 <TaskData/>
//             </CardContent>
//       )}
//     </Card>
//   );
// };

// export default Tasks;
import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import TaskData from "./TaskData";

const Tasks = () => {
  const [open, setOpen] = useState(true); // Open by default

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card
      sx={{
        width: "100%",
        mt: 2,
        bgcolor: "var(--background-color)",
        p: 1,
        borderRadius: "var(--border-radius)",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1,
          height: "30px",
        }}
      >
        <Box onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            marginLeft: 1,
            fontSize: "var(--font-size-heading)",
          }}
        >
          TASKS
        </Typography>

        <Box>
          <IconButton>
            <Add />
          </IconButton>
        </Box>
      </Box>

      {/* Expandable Content */}
      {open && (
        <CardContent
          sx={{
            bgcolor: "var(--secondary-color)",
            borderRadius: "var(--border-radius)",
          }}
        >
          <TaskData />
        </CardContent>
      )}
    </Card>
  );
};

export default Tasks;
