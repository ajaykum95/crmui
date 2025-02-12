// import React, { useState } from "react";
// import { Card, Box, IconButton, Typography, CardContent } from "@mui/material";
// import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";

// const Contact = () => {
//   const [open, setOpen] = useState(false);  // For expanding and collapsing the card
//   const [show, setShow] = useState(false);  // For showing and hiding additional sections

//   const handleClick = () => {
//     setOpen(!open);  // Toggles between open and closed
//   };

//   const showMore = () => {
//     setShow(true);  // Displays the extra sections
//   };

//   const hideMore = () => {
//     setShow(false);  // Hides the extra sections
//   };

//   return (
//     <>
//       <Box sx={{ pt: 18 }}>
//         <Card sx={{ width: "300px", boxShadow: 3, borderRadius: 2, ml: 30 }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Box
//               onClick={handleClick}
//               sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
//             >
//               {open ? <ExpandLess /> : <ExpandMore />}
//               <Typography sx={{ marginLeft: 2, fontWeight: "bold", fontSize: "16px" }}>
//                 Contacts
//               </Typography>
//             </Box>
//             <IconButton>
//               <Add />
//             </IconButton>
//           </Box>
//           {open && (
//             <CardContent sx={{ padding: 2 }}>
//               {/* First Sales Team */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   border: "1px solid black",
//                   justifyContent: "space-between",
//                   borderRadius: 2,
//                 }}
//               >
//                 <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
//                 <IconButton>
//                   <Add />
//                 </IconButton>
//                 <IconButton>
//                   <Add />
//                 </IconButton>
//               </Box>

//               {/* Show / Hide Button */}
//               <Typography
//                 textAlign="center"
//                 padding={2}
//                 onClick={show ? hideMore : showMore}
//                 sx={{
//                   cursor: "pointer",
//                   color: "#1976d2",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {show ? "Hide" : "Show 2 More"}
//               </Typography>

//               {/* Conditional Rendering for Additional Sections */}
//               {show && (
//                 <>
//                   {/* Second Sales Team */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       border: "1px solid black",
//                       justifyContent: "space-between",
//                       borderRadius: 2,
//                     }}
//                   >
//                     <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
//                     <IconButton>
//                       <Add />
//                     </IconButton>
//                     <IconButton>
//                       <Add />
//                     </IconButton>
//                   </Box>

//                   {/* Third Sales Team */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       border: "1px solid black",
//                       justifyContent: "space-between",
//                       borderRadius: 2,
//                     }}
//                   >
//                     <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
//                     <IconButton>
//                       <Add />
//                     </IconButton>
//                     <IconButton>
//                       <Add />
//                     </IconButton>
//                   </Box>
//                 </>
//               )}
//             </CardContent>
//           )}
//         </Card>
//       </Box>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { Card, Box, IconButton, Typography, CardContent } from "@mui/material";
import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";

const Contact = () => {
  const [open, setOpen] = useState(false);  // For expanding and collapsing the card
  const [show, setShow] = useState(false);  // For showing and hiding additional sections

  const handleClick = () => {
    setOpen(!open);  // Toggles between open and closed
  };

  const showMore = () => {
    setShow(true);  // Displays the extra sections
  };

  const hideMore = () => {
    setShow(false);  // Hides the extra sections
  };

  return (
    <>
      <Box sx={{ pt: 18 }}>
        <Card sx={{ width: "300px", boxShadow: 3, borderRadius: 2, ml: 30 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              onClick={handleClick}
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              {open ? <ExpandLess /> : <ExpandMore />}
              <Typography sx={{ marginLeft: 2, fontWeight: "bold", fontSize: "16px" }}>
                CONTACTS
              </Typography>
            </Box>
            <IconButton>
              <Add />
            </IconButton>
          </Box>
          {open && (
            <CardContent sx={{ padding: 2 }}>
              {/*  First Sales Team  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  justifyContent: "space-between",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
                <IconButton>
                  <Add />
                </IconButton>
                <IconButton>
                  <Add />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  justifyContent: "space-between",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
                <IconButton>
                  <Add />
                </IconButton>
                <IconButton>
                  <Add />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  justifyContent: "space-between",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
                <IconButton>
                  <Add />
                </IconButton>
                <IconButton>
                  <Add />
                </IconButton>
              </Box>

               {/* Show More Button  */}
              {!show ? (
                <Typography
                  textAlign="center"
                  padding={2}
                  onClick={showMore}
                  sx={{
                    cursor: "pointer",
                    color: "#1976d2",
                    fontWeight: "bold",
                  }}
                >
                  Show 2 More
                </Typography>
              ) : (
                <>
                   {/* Second Sales Team  */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid black",
                      justifyContent: "space-between",
                      borderRadius: 2,
                      mt:2
                    }}
                  >
                    <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
                    <IconButton>
                      <Add />
                    </IconButton>
                    <IconButton>
                      <Add />
                    </IconButton>
                  </Box>

                   {/* Third Sales Team  */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid black",
                      justifyContent: "space-between",
                      borderRadius: 2,
                      mt:2

                    }}
                  >
                    <Typography sx={{ ml: 1, p: 2 }}>Close Sales Team</Typography>
                    <IconButton>
                      <Add />
                    </IconButton>
                    <IconButton>
                      <Add />
                    </IconButton>
                  </Box>
                </>
              )}
            </CardContent>
          )}

           {/* Hide button at the bottom  */}
          {show && (
            <Box sx={{ textAlign: "center", padding: 2 }}>
              <Typography
                onClick={hideMore}
                sx={{
                  cursor: "pointer",
                  color: "#1976d2",
                  fontWeight: "bold",
                }}
              >
                Hide
              </Typography>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};

export default Contact; 
