// import React, { useState } from "react";
// import {
//   Card,
//   Typography,
//   CardContent,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
// import Customs from "./Customs";

// const CustomCard = () => {
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
//         <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1,fontSize:"14px" }} >CUSTOM FIELDS </Typography>
//         <Box>
//           <IconButton>
//             <Add />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Expandable Content */}
//       {open && (
//             <CardContent sx={{bgcolor:"white" ,borderRadius:2}}>
//                     <Customs/>
//             </CardContent>
//       )}
//     </Card>
//   );
// };

// export default CustomCard;
import React, { useState } from "react";
import { Card, Typography, CardContent, Box, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import Customs from "./Customs";

const CustomCard = () => {
  const [open, setOpen] = useState(true); // Open by default

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card
      sx={{
        width: "100%",
        mt: 2,
        bgcolor: "var(--background-color)", /* Global background color */
        p: "var(--spacing-unit)",           /* Global padding */
        borderRadius: "var(--border-radius)" /* Global border radius */
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "var(--spacing-unit)",  /* Global padding */
          height: "30px"
        }}
      >
        <Box onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            marginLeft: "var(--spacing-unit)", /* Global spacing */
            fontSize: "var(--font-size-heading)" /* Global font size */
          }}
        >
          CUSTOM FIELDS
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
            bgcolor: "white",
            borderRadius: "var(--border-radius)", /* Global border radius */
            padding: "var(--spacing-unit)" /* Global padding */
          }}
        >
          <Customs />
        </CardContent>
      )}
    </Card>
  );
};

export default CustomCard;
 
