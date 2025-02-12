// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Tab,
//   Tabs,
//   Paper,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   Avatar,
//   Link,
// } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// const ImportPopup = () => {
//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "80%", margin: "auto", mt: 4, ml: "250px" }}>
//       {/* Title and Tabs */}
//       <Typography variant="h6" fontWeight="bold">Import</Typography>
//       <Tabs value={tabValue} onChange={handleTabChange} aria-label="Import Tabs">
//         <Tab label="New import" />
//         <Tab label="History" />
//       </Tabs>

//       {/* NEW IMPORT TAB */}
//       {tabValue === 0 && (
//         <Box mt={3}>
//           {/* Upload Section */}
//           <Typography variant="h5" textAlign="center" fontWeight="bold">
//             Easily add or update your Leads
//           </Typography>
//           <Typography textAlign="center">
//             <Link href="#" sx={{ color: "#007bff", textDecoration: "none" }}>
//               Download an example file (.csv)
//             </Link>
//           </Typography>

//           <Paper sx={{ mt: 2, p: 3, textAlign: "center", border: "2px dashed #ccc" }}>
//             <CloudUploadIcon sx={{ fontSize: 50, color: "#888" }} />
//             <Typography variant="body1">Upload a CSV</Typography>
//             <Typography variant="caption">Drag & drop or browse. We only support .csv</Typography>
//           </Paper>

//           {/* Importing Tips */}
//           <Box mt={4}>
//             <Typography variant="h6" fontWeight="bold" sx={{ ml: 56 }}>IMPORTING TIPS</Typography>
//             <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
//               {[
//                 { title: "Header Rows", desc: "Make sure the first row of your data is a header row, i.e. contains the column names." },
//                 { title: "International Phone Prefix", desc: "International phone numbers must start with a '+' in order to be recognized properly." },
//                 { title: "Duplicate Detection", desc: "You can re-upload copies of existing Leads and choose to skip them later in the process." },
//                 { title: "Help & Support", desc: "Importing from a file • Migrating from a CRM • Contact Us" }
//               ].map((tip, index) => (
//                 <Box key={index} sx={{ display: "flex", alignItems: "center", width: "20%" }}>
//                   <IconButton>
//                     <InfoOutlinedIcon />
//                   </IconButton>
//                   <Box>
//                     <Typography fontWeight="bold">{tip.title}</Typography>
//                     <Typography variant="body2">{tip.desc}</Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         </Box>
//       )}

//       {/* HISTORY TAB */}
//       {tabValue === 1 && (
//         <Box mt={3}>
//           {/* Filter Tabs */}
//           <Tabs sx={{ borderBottom: 1, borderColor: "divider" }}>
//             <Tab label="Mine" />
//             <Tab label="Everyone" />
//           </Tabs>

//           {/* History Table */}
//           <TableContainer component={Paper} sx={{ mt: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell><b>Date & Time</b></TableCell>
//                   <TableCell><b>Status</b></TableCell>
//                   <TableCell><b>Imported By</b></TableCell>
//                   <TableCell><b>File</b></TableCell>
//                   <TableCell><b>Skipped</b></TableCell>
//                   <TableCell><b>Failed</b></TableCell>
//                   <TableCell><b>Updated</b></TableCell>
//                   <TableCell><b>Created</b></TableCell>
//                   <TableCell><b>Actions</b></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {/* Example Data */}
//                 {[
//                   {
//                     time: "4m ago",
//                     status: "Success",
//                     importedBy: "Ajay Kumar",
//                     file: "example_import.csv",
//                     skipped: 0,
//                     failed: 0,
//                     updated: 0,
//                     created: 3,
//                   }
//                 ].map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row.time}</TableCell>
//                     <TableCell>
//                       <Chip label={row.status} color="success" size="small" />
//                     </TableCell>
//                     <TableCell>
//                       <Box display="flex" alignItems="center">
//                         <Avatar sx={{ width: 24, height: 24, mr: 1 }}>A</Avatar>
//                         {row.importedBy}
//                       </Box>
//                     </TableCell>
//                     <TableCell>{row.file}</TableCell>
//                     <TableCell>{row.skipped}</TableCell>
//                     <TableCell>{row.failed}</TableCell>
//                     <TableCell>{row.updated}</TableCell>
//                     <TableCell sx={{ color: "#007bff", fontWeight: "bold" }}>{row.created}</TableCell>
//                     <TableCell>
//                       <Link href="#" sx={{ marginRight: 2 }}>Details</Link>
//                       <Link href="#">Undo</Link>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ImportPopup;
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Tab,
  Tabs,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  Link,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ImportPopup = ({ open, handleClose }) => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Import Leads
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
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="New import" />
          <Tab label="History" />
        </Tabs>

        {tabValue === 0 && (
          <Box mt={3}>
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              Easily add or update your Leads
            </Typography>
            <Typography textAlign="center">
              <Link href="#" sx={{ color: "#007bff", textDecoration: "none" }}>
                Download an example file (.csv)
              </Link>
            </Typography>

            <Paper sx={{ mt: 2, p: 3, textAlign: "center", border: "2px dashed #ccc" }}>
              <CloudUploadIcon sx={{ fontSize: 50, color: "#888" }} />
              <Typography variant="body1">Upload a CSV</Typography>
              <Typography variant="caption">Drag & drop or browse. We only support .csv</Typography>
            </Paper>
                      <Box mt={4}>
         <Typography variant="h6" fontWeight="bold" sx={{ ml: 40 }}>IMPORTING TIPS</Typography>
          <Box display="flex" flexWrap="wrap" gap={2} mt={5}>
             {[
                { title: "Header Rows", desc: "Make sure the first row of your data is a header row, i.e. contains the column names." },
                { title: "International Phone Prefix", desc: "International phone numbers must start with a '+' in order to be recognized properly." },
                { title: "Duplicate Detection", desc: "You can re-upload copies of existing Leads and choose to skip them later in the process." },
                { title: "Help & Support", desc: "Importing from a file • Migrating from a CRM • Contact Us" }
              ].map((tip, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", width: "20%" }}>
                  <IconButton>
                    <InfoOutlinedIcon />
                  </IconButton>
                  <Box>
                    <Typography fontWeight="bold">{tip.title}</Typography>
                    <Typography variant="body2">{tip.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        
      

          </Box>
        )}

        {tabValue === 1 && (
          <Box mt={3}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Date & Time</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell><b>Imported By</b></TableCell>
                    <TableCell><b>File</b></TableCell>
                    <TableCell><b>Actions</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>4m ago</TableCell>
                    <TableCell><Chip label="Success" color="success" size="small" /></TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ width: 24, height: 24, mr: 1 }}>A</Avatar>
                        Ajay Kumar
                      </Box>
                    </TableCell>
                    <TableCell>example_import.csv</TableCell>
                    <TableCell>
                      <Link href="#" sx={{ marginRight: 2 }}>Details</Link>
                      <Link href="#">Undo</Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ textTransform: "none" }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImportPopup;
