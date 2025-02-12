// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Box,
//   Divider,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// const LeadPopup = ({ open, handleClose, handleAddLead }) => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     contactName: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       console.log("Selected File:", file);
//       // Process the file here, e.g., parse and upload the leads data
//     }
//   };

//   const handleSubmit = () => {
//     if (formData.companyName && formData.contactName) {
//       handleAddLead(formData);
//       setFormData({ companyName: "", contactName: "" });
//       handleClose();
//     }
//   };

//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//       <DialogTitle>
//         New Lead
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <Box display="flex" gap={2} mb={2}>
//           <TextField
//             sx={{ marginTop: "10px" }}
//             size="small"
//             label="Company Name"
//             name="companyName"
//             variant="outlined"
//             fullWidth
//             value={formData.companyName}
//             onChange={handleChange}
//           />
//           <TextField
//             sx={{ marginTop: "10px" }}
//             size="small"
//             label="Contact Name"
//             name="contactName"
//             variant="outlined"
//             fullWidth
//             value={formData.contactName}
//             onChange={handleChange}
//           />
//         </Box>
//         <Divider>OR</Divider>
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           my={2}
//         >
//           <Button
//             variant="outlined"
//             component="label" // Makes the button act as a file upload trigger
//             startIcon={<CloudUploadIcon />}
//             sx={{ textTransform: "none" }}
//           >
//             Import Leads & Data
//             {/* <input
//               type="file"
//               hidden
//               accept=".csv, .xlsx,.png" // Accept CSV and Excel files
//               onChange={handleFileUpload}
//             /> */}
//           </Button>
//         </Box>
//       </DialogContent>
//       {/* <Typography
//         variant="body2"
//         color="textSecondary"
//         align="center"
//         sx={{ marginLeft: "-380px", mb: -5 }}
//       >
//         No potential duplicates found.
//       </Typography>
//  */}
//       <DialogActions>
//         <Button onClick={handleClose} sx={{ textTransform: "none" }}>
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSubmit}
//           sx={{ textTransform: "none" }}
//         >
//           Create Lead
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default LeadPopup;
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImportPopup from "./ImportPopup"; // Import the ImportPopup component

const LeadPopup = ({ open, handleClose, handleAddLead }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
  });

  const [openImportPopup, setOpenImportPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.companyName && formData.contactName) {
      handleAddLead(formData);
      setFormData({ companyName: "", contactName: "" });
      handleClose();
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          New Lead
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" gap={2} mb={2}>
            <TextField
              sx={{ marginTop: "10px" }}
              size="small"
              label="Company Name"
              name="companyName"
              variant="outlined"
              fullWidth
              value={formData.companyName}
              onChange={handleChange}
            />
            <TextField
              sx={{ marginTop: "10px" }}
              size="small"
              label="Contact Name"
              name="contactName"
              variant="outlined"
              fullWidth
              value={formData.contactName}
              onChange={handleChange}
            />
          </Box>
          <Divider>OR</Divider>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={2}>
            <Button
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              sx={{ textTransform: "none" }}
              onClick={() => setOpenImportPopup(true)} // Open Import Popup
            >
              Import Leads & Data
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ textTransform: "none" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ textTransform: "none" }}
          >
            Create Lead
          </Button>
        </DialogActions>
      </Dialog>

      {/* Import Popup */}
      <ImportPopup open={openImportPopup} handleClose={() => setOpenImportPopup(false)} />
    </>
  );
};

export default LeadPopup;
