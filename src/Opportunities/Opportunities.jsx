// import React, { useState } from "react";
// import {
//   Card,
//   Typography,
//   CardContent,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
// import Design from "./Design";


// const Opportunities = () => {
//   const [open, setOpen] = useState(true); // Open by default
//     const handleClick=()=>{
//         setOpen(!open);
//     }
//   return (
//     <Card sx={{ width: "100%", mt: 2, bgcolor: "#f5f5f5",p:1  }}>
//       {/* Header Section */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,px:1,height:"30px" }} >
//             <Box onClick={handleClick}>
//             {open ? <ExpandLess /> : <ExpandMore />}
//             </Box>
//         <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1,fontSize:"14px" }}>OPPORTUNITIES </Typography>

//         <Box>
//           <IconButton>
//             <Add />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Expandable Content */}
//       {open && (
//             <CardContent sx={{bgcolor:"white" ,borderRadius:2}}>
//               <Design/>
//             </CardContent>
//       )}
//     </Card>
//   );
// };

// export default Opportunities;



import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import Design from "./Design";
import "../styles/global.css";  // Import global CSS

const Opportunities = () => {
  const [open, setOpen] = useState(true); // Open by default

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card sx={{ width: "100%", mt: 2, bgcolor: "var(--background-color)", p: "var(--spacing-unit)" }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: "var(--spacing-unit)", height: "30px" }}>
        <Box onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: "var(--spacing-unit)", fontSize: "var(--font-size-base)" }}>
          OPPORTUNITIES
        </Typography>
        <Box>
          <IconButton>
            <Add />
          </IconButton>
        </Box>
      </Box>

      {/* Expandable Content */}
      {open && (
        <CardContent sx={{ bgcolor: "var(--secondary-color)", borderRadius: "var(--border-radius)" }}>
          <Design />
        </CardContent>
      )}
    </Card>
  );
};

export default Opportunities;
