// // import React, { useState } from "react";
// // import { Box, Grid, Typography, Avatar } from "@mui/material";

// // const Customs = () => {
// //   const [fields] = useState([
// //     { id: 1, name: "Custom Field", value: "Use Custom Fields to track lead information." },
// //     { id: 2, name: "Lead Owner", value: "Ajay Kumar", avatar: "AK" },
// //     { id: 3, name: "Industry", value: "Software" },
// //     { id: 4, name: "Company Size", value: "100" },
// //     { id: 5, name: "Socials", value: "https://www.linkedin.com/" },
// //   ]);

// //   return (
// //     <Box sx={{ bgcolor: "white", padding: 0 }}>
// //       {fields.map((field) => (
// //         <Grid container key={field.id} alignItems="center" spacing={1} mb={1}>
// //           <Grid item xs={5}>
// //             <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "14px" }}>
// //               {field.name}
// //             </Typography>
// //           </Grid>
// //           <Grid item xs={7}>
// //             {field.avatar ? (
// //               <Box display="flex" alignItems="center">
// //                 <Avatar sx={{ width: 24, height: 24, fontSize: 12, mr: 1 }}>
// //                   {field.avatar}
// //                 </Avatar>
// //                 <Typography variant="body1" sx={{ fontSize: "14px" }}>
// //                   {field.value}
// //                 </Typography>
// //               </Box>
// //             ) : (
// //               <Typography variant="body1" sx={{ fontSize: "14px" }}>
// //                 {field.value}
// //               </Typography>
// //             )}
// //           </Grid>
// //         </Grid>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default Customs;
// import React, { useState } from "react";
// import { Box, Grid, Typography, Avatar } from "@mui/material";

// const Customs = () => {
//   const [fields] = useState([
//     { id: 1, name: "Custom Field", value: "Use Custom Fields to track lead information." },
//     { id: 2, name: "Lead Owner", value: "Ajay Kumar", avatar: "AK" },
//     { id: 3, name: "Industry", value: "Software" },
//     { id: 4, name: "Company Size", value: "100" },
//     { id: 5, name: "Socials", value: "https://www.linkedin.com/" },
//   ]);

//   return (
//     <Box sx={{ bgcolor: "var(--secondary-color)", padding: "var(--spacing-unit)" }}>
//       {fields.map((field) => (
//         <Grid container key={field.id} alignItems="center" spacing={1} mb={1}>
//           <Grid item xs={5}>
//             <Typography
//               variant="body1"
//               fontWeight="bold"
//               sx={{ fontSize: "var(--font-size-base)" }}  // Using global font size
//             >
//               {field.name}
//             </Typography>
//           </Grid>
//           <Grid item xs={7}>
//             {field.avatar ? (
//               <Box display="flex" alignItems="center">
//                 <Avatar sx={{ width: 24, height: 24, fontSize: "var(--font-size-avatar)", mr: 1 }}>
//                   {field.avatar}
//                 </Avatar>
//                 <Typography
//                   variant="body1"
//                   sx={{ fontSize: "var(--font-size-base)" }}  // Using global font size
//                 >
//                   {field.value}
//                 </Typography>
//               </Box>
//             ) : (
//               <Typography
//                 variant="body1"
//                 sx={{ fontSize: "var(--font-size-base)" }}  // Using global font size
//               >
//                 {field.value}
//               </Typography>
//             )}
//           </Grid>
//         </Grid>
//       ))}
//     </Box>
//   );
// };

// export default Customs;
// import React, { useState } from "react";
// import { Box, Grid, Typography, Avatar } from "@mui/material";
// import "../styles/custom.css";  // Import custom styles

// const Customs = () => {
//   const [fields] = useState([
//     { id: 1, name: "Custom Field", value: "Use Custom Fields to track lead information." },
//     { id: 2, name: "Lead Owner", value: "Ajay Kumar", avatar: "AK" },
//     { id: 3, name: "Industry", value: "Software" },
//     { id: 4, name: "Company Size", value: "100" },
//     { id: 5, name: "Socials", value: "https://www.linkedin.com/" },
//   ]);

//   return (
//     <Box className="custom-box">
//       {fields.map((field) => (
//         <Grid container key={field.id} className="custom-grid">
//           <Grid item xs={5}>
//             <Typography variant="body1" className="custom-field-name">
//               {field.name}
//             </Typography>
//           </Grid>
//           <Grid item xs={7}>
//             {field.avatar ? (
//               <Box display="flex" alignItems="center">
//                 <Avatar className="custom-avatar">{field.avatar}</Avatar>
//                 <Typography variant="body1" className="custom-field-value">
//                   {field.value}
//                 </Typography>
//               </Box>
//             ) : (
//               <Typography variant="body1" className="custom-field-value">
//                 {field.value}
//               </Typography>
//             )}
//           </Grid>
//         </Grid>
//       ))}
//     </Box>
//   );
// };

// export default Customs;

import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, TextField } from "@mui/material";

const Customs = ({ fields }) => {
  const handleEdit = (id, newValue) => {
    fields = fields.map((field) =>
      field.id === id ? { ...field, value: newValue } : field
    );
  };

  return (
    <Box sx={{ bgcolor: "var(--secondary-color)", padding: "var(--spacing-unit)" }}>
      {fields.map((field) => (
        <Grid container key={field.id} alignItems="center" spacing={1} mb={1}>
          <Grid item xs={5}>
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "var(--font-size-base)" }}>
              {field.name}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            {field.avatar ? (
              <Box display="flex" alignItems="center">
                <Avatar sx={{ width: 24, height: 24, fontSize: "var(--font-size-avatar)", mr: 1 }}>
                  {field.avatar}
                </Avatar>
                <EditableTextField
                  value={field.value}
                  onChange={(newValue) => handleEdit(field.id, newValue)}
                />
              </Box>
            ) : (
              <EditableTextField
                value={field.value}
                onChange={(newValue) => handleEdit(field.id, newValue)}
              />
            )}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

// EditableTextField component to toggle between Typography and TextField
const EditableTextField = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleDoubleClick = () => setIsEditing(true);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(tempValue); // Save the value when focus is lost
  };

  const handleChange = (event) => setTempValue(event.target.value);

  return isEditing ? (
    <TextField
      value={tempValue}
      onChange={handleChange}
      onBlur={handleBlur}
      autoFocus
      fullWidth
      variant="outlined"
      size="small"
    />
  ) : (
    <Typography
      variant="body1"
      sx={{ fontSize: "var(--font-size-base)" }}
      onDoubleClick={handleDoubleClick}
    >
      {value}
    </Typography>
  );
};

export default Customs;
