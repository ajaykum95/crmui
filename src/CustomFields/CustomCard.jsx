// // import React, { useState } from "react";
// // import {
// //   Card,
// //   Typography,
// //   CardContent,
// //   Box,
// //   IconButton,
// // } from "@mui/material";
// // import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
// // import Customs from "./Customs";

// // const CustomCard = () => {
// //   const [open, setOpen] = useState(true); // Open by default
// //     const handleClick=()=>{
// //         setOpen(!open);
// //     }
// //   return (
// //     <Card sx={{ width: "100%", mt: 2, bgcolor: "#f5f5f5",p:1  }}>
// //       {/* Header Section */}
// //       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,px:1,height:"30px" }} >
// //             <Box onClick={handleClick}>
// //             {open ? <ExpandLess /> : <ExpandMore />}
// //             </Box>
// //         <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1,fontSize:"14px" }} >CUSTOM FIELDS </Typography>
// //         <Box>
// //           <IconButton>
// //             <Add />
// //           </IconButton>
// //         </Box>
// //       </Box>

// //       {/* Expandable Content */}
// //       {open && (
// //             <CardContent sx={{bgcolor:"white" ,borderRadius:2}}>
// //                     <Customs/>
// //             </CardContent>
// //       )}
// //     </Card>
// //   );
// // };

// // export default CustomCard;
// import React, { useState } from "react";
// import { Card, Typography, CardContent, Box, IconButton } from "@mui/material";
// import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
// import Customs from "./Customs";

// const CustomCard = () => {
//   const [open, setOpen] = useState(true); // Open by default

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         mt: 2,
//         bgcolor: "var(--background-color)", /* Global background color */
//         p: "var(--spacing-unit)",           /* Global padding */
//         borderRadius: "var(--border-radius)" /* Global border radius */
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           px: "var(--spacing-unit)",  /* Global padding */
//           height: "30px"
//         }}
//       >
//         <Box onClick={handleClick}>
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </Box>
//         <Typography
//           variant="h6"
//           sx={{
//             flexGrow: 1,
//             marginLeft: "var(--spacing-unit)", /* Global spacing */
//             fontSize: "var(--font-size-heading)" /* Global font size */
//           }}
//         >
//           CUSTOM FIELDS
//         </Typography>
//         <Box>
//           <IconButton>
//             <Add />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Expandable Content */}
//       {open && (
//         <CardContent
//           sx={{
//             bgcolor: "white",
//             borderRadius: "var(--border-radius)", /* Global border radius */
//             padding: "var(--spacing-unit)" /* Global padding */
//           }}
//         >
//           <Customs />
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default CustomCard;
 
import React, { useState, useEffect, useRef } from "react";
import { Card, Typography, CardContent, Box, IconButton, TextField } from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import Customs from "./Customs";

const CustomCard = () => {
  const [open, setOpen] = useState(true); // Open by default
  const [newField, setNewField] = useState({ name: "", value: "" }); // New field inputs
  const [fields, setFields] = useState([
    { id: 1, name: "Custom Field", value: "Use Custom Fields to track lead information." },
    { id: 2, name: "Lead Owner", value: "Ajay Kumar", avatar: "AK" },
    { id: 3, name: "Industry", value: "Software" },
    { id: 4, name: "Company Size", value: "100" },
    { id: 5, name: "Socials", value: "https://www.linkedin.com/" },
  ]);
  const [showAddField, setShowAddField] = useState(false); // Track visibility of the input fields
  const inputRef = useRef(null); // Ref for the input fields container

  const handleClick = () => {
    setOpen(!open);
  };

  // Handle the Add button click
  const handleAddField = () => {
    setShowAddField(true); // Show the input fields when clicked
  };

  // Save and hide the input fields
  const saveField = () => {
    if (newField.name && newField.value) {
      setFields([
        { id: fields.length + 1, name: newField.name, value: newField.value },
        ...fields,
      ]);
      setNewField({ name: "", value: "" }); // Reset input fields after adding
    }
    setShowAddField(false); // Hide the input fields after saving
  };

  // Click outside to save and hide
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        saveField(); // Save and hide inputs when clicking outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [newField]); // Re-run effect when newField is updated

  return (
    <Card
      sx={{
        width: "100%",
        mt: 2,
        bgcolor: "var(--background-color)", /* Global background color */
        p: "var(--spacing-unit)", /* Global padding */
        borderRadius: "var(--border-radius)" /* Global border radius */
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "var(--spacing-unit)", /* Global padding */
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
            marginLeft: "var(--spacing-unit)", /* Global spacing */
            fontSize: "var(--font-size-heading)" /* Global font size */
          }}
        >
          CUSTOM FIELDS
        </Typography>
        <Box>
          <IconButton onClick={handleAddField}>
            <Add />
          </IconButton>
        </Box>
      </Box>

      {/* Add New Field Input (only shown when showAddField is true) */}
      {showAddField && (
        <Box
          ref={inputRef}
          sx={{
            padding: "var(--spacing-unit)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Field Name"
            value={newField.name}
            onChange={(e) => setNewField({ ...newField, name: e.target.value })}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mr: 3 }}
          />
          <TextField
            label="Field Value"
            value={newField.value}
            onChange={(e) => setNewField({ ...newField, value: e.target.value })}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
      )}

      {/* Expandable Content */}
      {open && (
        <CardContent
          sx={{
            bgcolor: "white",
            borderRadius: "var(--border-radius)", /* Global border radius */
            padding: "var(--spacing-unit)" /* Global padding */
          }}
        >
          {/* Pass the fields list to Customs component */}
          <Customs fields={fields} />
        </CardContent>
      )}
    </Card>
  );
};

export default CustomCard;
