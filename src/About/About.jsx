// import React, { useState } from "react";
// import {
//   Card,
//   Typography,
//   CardContent,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LinkIcon from "@mui/icons-material/Link";
// import DescriptionIcon from "@mui/icons-material/Description";
// import EditIcon from "@mui/icons-material/Edit";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import AddressPopup from "./AddressPopup";
// import Url from "./Url";
// import Description from "./Description";

// const About = () => {
//   const [open, setOpen] = useState(true); // Open by default
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [addressData, setAddressData] = useState(null);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleSave = (data) => {
//     setAddressData(data);
//     setPopupOpen(false);
//   };

//   const handleClose = () => {
//     setPopupOpen(false);
//   };

//   const handleCopyAddress = () => {
//     if (addressData) {
//       const address = `${addressData.address}, ${addressData.addressCont}, ${addressData.city}, ${addressData.state} - ${addressData.postalCode}, ${addressData.country}`;
//       navigator.clipboard.writeText(address);
//       alert("Address copied to clipboard!");
//     }
//   };

//   const handleEditAddress = () => {
//     setPopupOpen(true); // Reopen the popup to edit the address
//   };

//   return (
//     <Card sx={{ width: "100%", mt: 2, bgcolor: "#f5f5f5", p: 1 }} >
//       {/* Header Section */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 1, height: "30px" }} >
//         <Box onClick={handleClick}>
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </Box>
//         <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1, fontSize: "14px" }} >
//           ABOUT
//         </Typography>
//         <Box>
//           {/* <IconButton>
//             <Add />
//           </IconButton> */}
//         </Box>
//       </Box>

//       {/* Expandable Content */}
//       {open && (
//         <CardContent sx={{ bgcolor: "white", borderRadius: 2 }} >
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} >
//             {addressData ? (
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <LocationOnIcon fontSize="small" />
//                 <Typography sx={{ flexGrow: 1 }}>
//                   {addressData.address}, {addressData.addressCont}, {addressData.city}, {addressData.state} - {addressData.postalCode}, {addressData.country}
//                 </Typography>
//                 <IconButton onClick={handleEditAddress}>
//                   <EditIcon fontSize="small" />
//                 </IconButton>
//                 <IconButton onClick={handleCopyAddress}>
//                   <ContentCopyIcon fontSize="small" />
//                 </IconButton>
//               </Box>
//             ) : (
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <LocationOnIcon fontSize="small" />
//                 <Typography
//                   onClick={() => setPopupOpen(true)}
//                   sx={{
//                     cursor: "pointer",
//                     color: "#757575",
//                     "&:hover": { textDecoration: "underline" },
//                   }}
//                 >
//                   Add address...
//                 </Typography>
//               </Box>
//             )}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <LinkIcon fontSize="small" />
//               <Typography sx={{ cursor: "pointer", color: "red" }}>
//                 <Url />
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <DescriptionIcon fontSize="small" />
//               <Typography sx={{ cursor: "pointer", color: "#757575" }}>
//                 <Description />
//               </Typography>
//             </Box>
//           </Box>
//         </CardContent>
//       )}

//       {/* Address Popup Component */}
//       <AddressPopup open={isPopupOpen} onClose={handleClose} onSave={handleSave} />
//     </Card>
//   );
// };

// export default About;
import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddressPopup from "./AddressPopup";
import Url from "./Url";
import Description from "./Description";
import "../styles/global.css";  // Import the global CSS

const About = () => {
  const [open, setOpen] = useState(true); // Open by default
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [addressData, setAddressData] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSave = (data) => {
    setAddressData(data);
    setPopupOpen(false);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  const handleCopyAddress = () => {
    if (addressData) {
      const address = `${addressData.address}, ${addressData.addressCont}, ${addressData.city}, ${addressData.state} - ${addressData.postalCode}, ${addressData.country}`;
      navigator.clipboard.writeText(address);
      alert("Address copied to clipboard!");
    }
  };

  const handleEditAddress = () => {
    setPopupOpen(true); // Reopen the popup to edit the address
  };

  return (
    <Card sx={{ width: "100%", mt: 2, bgcolor: "var(--background-color)", p: "var(--spacing-unit)" }} >
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: "var(--spacing-unit)", height: "30px" }} >
        <Box onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: "var(--spacing-unit)", fontSize: "var(--font-size-base)" }} >
          ABOUT
        </Typography>
        <Box>
          {/* <IconButton>
            <Add />
          </IconButton> */}
        </Box>
      </Box>

      {/* Expandable Content */}
      {open && (
        <CardContent sx={{ bgcolor: "white", borderRadius: "var(--border-radius)" }} >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--spacing-unit)" }} >
            {addressData ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: "var(--spacing-unit)" }}>
                <LocationOnIcon fontSize="small" />
                <Typography sx={{ flexGrow: 1 }}>
                  {addressData.address}, {addressData.addressCont}, {addressData.city}, {addressData.state} - {addressData.postalCode}, {addressData.country}
                </Typography>
                <IconButton onClick={handleEditAddress}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleCopyAddress}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: "var(--spacing-unit)" }}>
                <LocationOnIcon fontSize="small" />
                <Typography
                  onClick={() => setPopupOpen(true)}
                  sx={{
                    cursor: "pointer",
                    color: "#757575",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Add address...
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", alignItems: "center", gap: "var(--spacing-unit)" }}>
              <LinkIcon fontSize="small" />
              <Typography sx={{ cursor: "pointer", color: "red" }}>
                <Url />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "var(--spacing-unit)" }}>
              <DescriptionIcon fontSize="small" />
              <Typography sx={{ cursor: "pointer", color: "#757575" }}>
                <Description />
              </Typography>
            </Box>
          </Box>
        </CardContent>
      )}

      {/* Address Popup Component */}
      <AddressPopup open={isPopupOpen} onClose={handleClose} onSave={handleSave} />
    </Card>
  );
};

export default About;
