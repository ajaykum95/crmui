// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // import {
// //   Box,
// //   Typography,
// //   Tooltip,
// //   Button,
// //   Avatar,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// // } from "@mui/material";
// // import { DataGrid } from "@mui/x-data-grid";
// // import { IoInformationCircleOutline } from "react-icons/io5";
// // import LeadPopup from "../Leads/LeadPopup";
// // import ExportPopup from "../Leads/ExportPopup";

// // const columns = [
// //   {
// //     field: "name",
// //     headerName: "Name",
// //     minWidth: 200,
// //     maxWidth: 300,
// //     renderCell: (params) => (
// //       <Box display="flex" gap={1} paddingTop="12px">
// //         <Avatar sx={{ bgcolor: "#ddd", width: 30, height: 30, marginTop: "-5px" }}>
// //           {params.value.charAt(0).toUpperCase()}
// //         </Avatar>
// //         <Typography variant="body2" fontWeight="bold" color="primary">
// //           {params.value}
// //         </Typography>
// //       </Box>
// //     ),
// //   },
// //   {
// //     field: "status",
// //     headerName: "Status",
// //     minWidth: 150,
// //     maxWidth: 200,
// //     renderCell: (params) => (
// //       <Typography variant="body2" sx={{ paddingTop: "15px" }}>
// //         {params.value}
// //       </Typography>
// //     ),
// //   },
// //   {
// //     field: "email",
// //     headerName: (
// //       <Box display="flex" alignItems="center" gap={1}>
// //         Email Address
// //         <Tooltip title="The primary email of the contact" arrow>
// //           <Box sx={{ display: "flex", alignItems: "center" }}>
// //             <IoInformationCircleOutline size={18} color="black" />
// //           </Box>
// //         </Tooltip>
// //       </Box>
// //     ),
// //     flex: 1,
// //     sortable: false,
// //   },
// //   {
// //     field: "phone",
// //     headerName: (
// //       <Box display="flex" alignItems="center" gap={1}>
// //         Phone Number
// //         <Tooltip title="The primary phone number of the contact" arrow>
// //           <Box sx={{ display: "flex", alignItems: "center" }}>
// //             <IoInformationCircleOutline size={18} color="black" />
// //           </Box>
// //         </Tooltip>
// //       </Box>
// //     ),
// //     flex: 1,
// //     sortable: false,
// //   },
// // ];

// // const rows = [
// //   { id: 1, name: "John Doe", status: "Active", email: "john@example.com", phone: "123-456-7890" },
// //   { id: 2, name: "Jane Smith", status: "Inactive", email: "jane@example.com", phone: "987-654-3210" },
// // ];

// // const ManageLeads = () => {
// //   const [openPopup, setOpenPopup] = useState(false);
// //   const [openExport, setOpenExport] = useState(false);

// //   const handleOpenPopup = () => {
// //     setOpenPopup(true);
// //   };

// //   const handleOpenExportPopup = () => {
// //     setOpenExport(true);
// //   };

// //   const handleClosePopup = () => {
// //     setOpenPopup(false);
// //   };

// //   const handleCloseExportPopup = () => {
// //     setOpenExport(false);
// //   };

// //   const handleExportLead = (exports) => {
// //     console.log("Export:", exports);
// //   };

// //   const handleAddLead = (newLead) => {
// //     console.log("New Lead Added:", newLead);
// //   };

// //   return (
// //     <Box sx={{ marginLeft: "250px", pt: 10, pr: 5 }}>
// //       <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
// //         Lead Management Page
// //       </Typography>
// //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
// //         <FormControl>
// //           <InputLabel      shrink={false}
// //  sx={{ color: "black", fontWeight: "bold" }}>Leads</InputLabel>
// //           <Select
// //             sx={{
// //               fontWeight: "bold",
// //               fontSize: "14px",
// //               color: "black",
// //               minWidth: "140px",
// //               boxShadow: "none",
// //               "& fieldset": { border: "none" },
// //             }}
// //           >
// //             <MenuItem value="1">Hot Leads:First Call</MenuItem>
// //             <MenuItem value="2">Daily Calling List</MenuItem>
// //             <MenuItem value="3">Opportunity Follow Up</MenuItem>
// //             <MenuItem value="4">Red Flag Opportunities</MenuItem>
// //           </Select>
// //         </FormControl>
// //         <Box display="flex" gap={1}>
// //           <Button variant="contained" color="primary" startIcon={<IoInformationCircleOutline />} onClick={handleOpenExportPopup}>
// //             Export
// //           </Button>
// //           <Button variant="contained" color="primary" onClick={handleOpenPopup}>
// //             + New Lead
// //           </Button>
// //         </Box>
// //       </Box>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         pageSizeOptions={[5, 10]}
// //         pagination
// //         hideFooter
// //         disableSelectionOnClick
// //       />
// //       <LeadPopup open={openPopup} handleClose={handleClosePopup} handleAddLead={handleAddLead} />
// //       <ExportPopup open={openExport} onClose={handleCloseExportPopup} handleExportLead={handleExportLead} />
// //     </Box>
// //   );
// // };

// // export default ManageLeads;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import {
//   Box,
//   Typography,
//   Tooltip,
//   Button,
//   Avatar,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { IoInformationCircleOutline } from "react-icons/io5";
// import LeadPopup from "../Leads/LeadPopup";
// import ExportPopup from "../Leads/ExportPopup";

// const columns = [
//   {
//     field: "name",
//     headerName: "Name",
//     minWidth: 200,
//     maxWidth: 300,
//     renderCell: (params) => (
//       <Box display="flex" gap={1} paddingTop="12px">
//         <Avatar sx={{ bgcolor: "#ddd", width: 30, height: 30, marginTop: "-5px" }}>
//           {params.value.charAt(0).toUpperCase()}
//         </Avatar>
//         <Typography variant="body2" fontWeight="bold" color="primary">
//           <Link
//             to={`/lead/${params.row.id}`}
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             {params.value}
//           </Link>
//         </Typography>
//       </Box>
//     ),
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     minWidth: 150,
//     maxWidth: 200,
//     renderCell: (params) => (
//       <Typography variant="body2" sx={{ paddingTop: "15px" }}>
//         {params.value}
//       </Typography>
//     ),
//   },
//   {
//     field: "email",
//     headerName: (
//       <Box display="flex" alignItems="center" gap={1}>
//         Email Address
//         <Tooltip title="The primary email of the contact" arrow>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <IoInformationCircleOutline size={18} color="black" />
//           </Box>
//         </Tooltip>
//       </Box>
//     ),
//     flex: 1,
//     sortable: false,
//   },
//   {
//     field: "phone",
//     headerName: (
//       <Box display="flex" alignItems="center" gap={1}>
//         Phone Number
//         <Tooltip title="The primary phone number of the contact" arrow>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <IoInformationCircleOutline size={18} color="black" />
//           </Box>
//         </Tooltip>
//       </Box>
//     ),
//     flex: 1,
//     sortable: false,
//   },
// ];

// const rows = [
//   { id: 1, name: "John Doe", status: "Active", email: "john@example.com", phone: "123-456-7890" },
//   { id: 2, name: "Jane Smith", status: "Inactive", email: "jane@example.com", phone: "987-654-3210" },
// ];

// const ManageLeads = () => {
//   const [openPopup, setOpenPopup] = useState(false);
//   const [openExport, setOpenExport] = useState(false);

//   const handleOpenPopup = () => {
//     setOpenPopup(true);
//   };

//   const handleOpenExportPopup = () => {
//     setOpenExport(true);
//   };

//   const handleClosePopup = () => {
//     setOpenPopup(false);
//   };

//   const handleCloseExportPopup = () => {
//     setOpenExport(false);
//   };

//   const handleExportLead = (exports) => {
//     console.log("Export:", exports);
//   };

//   const handleAddLead = (newLead) => {
//     console.log("New Lead Added:", newLead);
//   };

//   return (
//     <Box sx={{ marginLeft: "250px", pt: 10, pr: 5 }}>
//       <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//         Lead Management Page
//       </Typography>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//         <FormControl>
//           <InputLabel shrink={false} sx={{ color: "black", fontWeight: "bold" }}>
//             Leads
//           </InputLabel>
//           <Select
//             sx={{
//               fontWeight: "bold",
//               fontSize: "14px",
//               color: "black",
//               minWidth: "140px",
//               boxShadow: "none",
//               "& fieldset": { border: "none" },
//             }}
//           >
//             <MenuItem value="1">Hot Leads: First Call</MenuItem>
//             <MenuItem value="2">Daily Calling List</MenuItem>
//             <MenuItem value="3">Opportunity Follow Up</MenuItem>
//             <MenuItem value="4">Red Flag Opportunities</MenuItem>
//           </Select>
//         </FormControl>
//         <Box display="flex" gap={1}>
//           <Button variant="contained" color="primary" startIcon={<IoInformationCircleOutline />} onClick={handleOpenExportPopup}>
//             Export
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleOpenPopup}>
//             + New Lead
//           </Button>
//         </Box>
//       </Box>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSizeOptions={[5, 10]}
//         pagination
//         hideFooter
//         disableSelectionOnClick
//       />
//       <LeadPopup open={openPopup} handleClose={handleClosePopup} handleAddLead={handleAddLead} />
//       <ExportPopup open={openExport} onClose={handleCloseExportPopup} handleExportLead={handleExportLead} />
//     </Box>
//   );
// };

// export default ManageLeads;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import {
  Box,
  Typography,
  Tooltip,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { IoInformationCircleOutline } from "react-icons/io5";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 200,
    maxWidth: 300,
    renderCell: (params) => (
      <Box display="flex" gap={1} paddingTop="12px">
        <Avatar sx={{ bgcolor: "#ddd", width: 30, height: 30, marginTop: "-5px" }}>
          {params.value.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="body2" fontWeight="bold" color="primary">
          <Link
            to={`/lead/${params.row.id}`} // Link to company page using the ID
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {params.value}
          </Link>
        </Typography>
      </Box>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    maxWidth: 200,
    renderCell: (params) => (
      <Typography variant="body2" sx={{ paddingTop: "15px" }}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: "email",
    headerName: "Email Address",
    flex: 1,
    sortable: false,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
    sortable: false,
  },
];

const rows = [
  { id: 1, name: "John Doe", status: "Active", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", status: "Inactive", email: "jane@example.com", phone: "987-654-3210" },
];

const ManageLeads = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openExport, setOpenExport] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleOpenExportPopup = () => {
    setOpenExport(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleCloseExportPopup = () => {
    setOpenExport(false);
  };

  const handleExportLead = (exports) => {
    console.log("Export:", exports);
  };

  const handleAddLead = (newLead) => {
    console.log("New Lead Added:", newLead);
  };

  return (
    <Box sx={{ marginLeft: "250px", pt: 10, pr: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Lead Management Page
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <FormControl>
          <InputLabel shrink={false} sx={{ color: "black", fontWeight: "bold" }}>
            Leads
          </InputLabel>
          <Select
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "black",
              minWidth: "140px",
              boxShadow: "none",
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem value="1">Hot Leads: First Call</MenuItem>
            <MenuItem value="2">Daily Calling List</MenuItem>
            <MenuItem value="3">Opportunity Follow Up</MenuItem>
            <MenuItem value="4">Red Flag Opportunities</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" gap={1}>
          <Button variant="contained" color="primary" onClick={handleOpenExportPopup}>
            Export
          </Button>
          <Button variant="contained" color="primary" onClick={handleOpenPopup}>
            + New Lead
          </Button>
        </Box>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        pagination
        hideFooter
        disableSelectionOnClick
      />
    </Box>
  );
};

export default ManageLeads;
