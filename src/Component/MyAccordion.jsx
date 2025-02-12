import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const MyAccordion = ({ name, ItemComponent, FormComponent }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Box
    
      sx={{
        width: '310px',
        border: '1px solid #CCC',
        borderRadius: 2,
        marginBottom: 2,
        marginLeft: '-50px',
        height: 'auto',
        backgroundColor: '#DBF5EE',
        marginTop:"30px"
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 3,
        }}
      >
        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"bold"}}  >{name} 3 </Typography>
        <Button onClick={toggleForm} color="black">
          {showForm ? <Remove /> : <Add />}
        </Button>
      </Box>

      {/* Horizontal Rule */}
      <hr style={{ border: '1px solid #ccc', width: '100%', margin: '0' }} />

      {/* Conditionally render the FormComponent */}
      {showForm && (
        <Box sx={{ padding: 2, borderRadius: 1 }}>
          <FormComponent />
        </Box>
      )}

      {/* Render ItemComponent */}
      <Box sx={{  borderRadius: 1, backgroundColor: 'white', }}>
        <ItemComponent  />
      </Box>
    </Box>
  );
};

export default MyAccordion;
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   IconButton
// } from "@mui/material";
// import { ExpandMore, Add, Remove } from "@mui/icons-material";

// const MyAccordion = ({ name, ItemComponent, FormComponent }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Box sx={{ marginLeft: "230px", width: "310px" }}> {/* ✅ Fixed marginLeft here */}
//       <Accordion
//         expanded={expanded}
//         onChange={toggleExpand}
//         sx={{
//           width: "100%", // ✅ Ensure it stays inside parent container
//           border: "1px solid #CCC",
//           borderRadius: 2,
//           marginBottom: 2,
//           backgroundColor: "#DBF5EE",
//         }}
//       >
//         {/* Accordion Header */}
//         <AccordionSummary
//           expandIcon={<ExpandMore fontSize="small" />} // ✅ Small icon size
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             paddingLeft: 3,
//             minHeight: "32px", // ✅ Small size adjustment
//           }}
//         >
//           <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "bold" }}>
//             {name} 3
//           </Typography>
//           <IconButton size="small">{expanded ? <Remove fontSize="small" /> : <Add fontSize="small" />}</IconButton>
//         </AccordionSummary>

//         {/* Accordion Details */}
//         <AccordionDetails sx={{ backgroundColor: "white", borderRadius: 1 }}>
//           {expanded && (
//             <>
//               <Box sx={{ paddingBottom: 2 }}>
//                 <FormComponent />
//               </Box>
//               <ItemComponent />
//             </>
//           )}
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
// };

// export default MyAccordion;
