import React from "react";
import { Box, Typography, Tooltip, Button,Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { KeyboardArrowDown, Info } from "@mui/icons-material";

const columns = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 200,
    maxWidth: 300,
    renderCell: (params) => (
      <Box display="flex"  gap={1} paddingTop="12px">
        <Avatar sx={{ bgcolor: "#ddd", width: 30, height: 30 ,marginTop:"-5px"}}>
          {params.value.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="body2" fontWeight="bold" color="primary">
          {params.value}
        </Typography>
      </Box>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    // flex: 1,
    minWidth: 150,
    maxWidth: 200,
  
    // align: "center",
    // headerAlign: "center",
    renderCell: (params) => (
      <Typography variant="body2"sx={{paddingTop:"15px"}}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: "email",
    headerName: (
      <Box display="flex" alignItems="center" gap={1}>
        Email Address
        <Tooltip title="The primary email of the contact" arrow>
          <Info fontSize="small" />
        </Tooltip>
      </Box>
    ),
    flex: 1,
    sortable: false,
  },
  {
    field: "phone",
    headerName: (
      <Box display="flex" alignItems="center" gap={1}>
        Phone Number
        <Tooltip title="The primary phone number of the contact" arrow>
          <Info fontSize="small" />
        </Tooltip>
      </Box>
    ),
    flex: 1,
    sortable: false,
  },
];

const rows = [
  { id: 1, name: "John Doe", status: "Active", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", status: "Inactive", email: "jane@example.com", phone: "987-654-3210" },
  
];

const Opportunities = () => {
  return (
    <Box sx={{ marginLeft: "250px", pt: 10, pr: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Lead Management Page
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}>
          Leads <KeyboardArrowDown fontSize="small" />
        </Typography>
        <Box display="flex" gap={1}>
          <Button variant="contained" color="gray" startIcon={<Info />}>Export</Button>
          <Button variant="contained" color="gray">+ New Lead</Button>
        </Box>
      </Box>
      {/* <Box sx={{ height: 400, width: "100%", backgroundColor: "white", p: 2, borderRadius: 2, boxShadow: 2 }}> */}
        {/* <DataGrid  size="small"
          rows={rows} 
          columns={columns} 
          pageSize={5} 
          disableSelectionOnClick 
          sx={{
            "& .MuiDataGrid-footerContainer": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            },
          }}
        /> */}
       <DataGrid 
  rows={rows} 
  columns={columns} 
  pageSizeOptions={[5, 10]}  
  pagination
  hideFooter={true}  // This removes the footer
  disableSelectionOnClick 
  sx={{
    "& .MuiDataGrid-footerContainer": {
      display: "none",  // Hides the footer if needed
    },
  }}
/>


      </Box>
    // </Box>
  );
};

export default Opportunities;
