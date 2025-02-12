import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
  Typography,
  Avatar,
  Paper,
  Box,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

export default function EditForm() {
  const [date, setDate] = useState("");
  const [confidence, setConfidence] = useState(50);

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, borderRadius: 2 }}>
      {/* Amount and Frequency */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          size="small"
          label="Amount"
          variant="outlined"
          fullWidth
          InputProps={{ startAdornment: <Typography sx={{ mr: 1 }}>$</Typography> }}
        />
        <FormControl fullWidth size="small">
          <InputLabel>Frequency</InputLabel>
          <Select defaultValue="one-time" size="small" label="Frequency">
            <MenuItem value="one-time">One-time</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="annual">Annual</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Sales Process */}
      <FormControl fullWidth sx={{ mt: 2 }} size="small">
        <InputLabel>Sales Process</InputLabel>
        <Select defaultValue="no-show" size="small" label="Sales Process">
          <MenuItem value="no-show">No Show</MenuItem>
          <MenuItem value="meeting">Demo Booked</MenuItem>
          <MenuItem value="contacted">Demo Completed</MenuItem>
          <MenuItem value="won">Won</MenuItem>
        </Select>
      </FormControl>

      {/* Estimated Close and Confidence */}
      <Box sx={{  mt: 2 }}>
        <TextField
          size="small"
          label="Estimated Close"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
          <Typography sx={{mt:2,ml:1,fontWeight:"bold"}}>Confidence:  {confidence }% </Typography>
        <Box sx={{ mt:2 , border:"1px solid #ddd" ,p:1 ,borderRadius:1,height:"40px"}}
        size="small"
        >
          <Slider
        
            size="small"
            value={confidence}
            onChange={(e, value) => setConfidence(value)}
            max={100}
            step={1}>            <Typography>{confidence }%</Typography>
             </Slider>
        </Box>
      </Box>

      {/* Assigned To */}
      <FormControl fullWidth sx={{ mt: 2 }} size="small">
        <InputLabel>Assigned to</InputLabel>
        <Select size="small" label="Assigned To" >
          <MenuItem value="1">
            {/* <Avatar >AK</Avatar> Ajay Kumar */}Akash
          </MenuItem>
          <MenuItem value="2">
            {/* <Avatar >AK</Avatar> Akash Kumar */}Ajay
          </MenuItem>

        </Select>
      </FormControl>

      {/* Contact */}
      <FormControl fullWidth sx={{ mt: 2 }} size="small">
        <InputLabel>Contact</InputLabel>
        <Select size="small" label="Contact">
          <MenuItem value="contact1">Contact 1</MenuItem>
          <MenuItem value="contact2">Contact 2</MenuItem>
        </Select>
      </FormControl>

      {/* Notes */}
      <TextField
        size="small"
        label="Add note"
        multiline
        rows={2}
        fullWidth
        variant="outlined"
        sx={{ mt: 2 }}
      />

      {/* Attachments */}
      <Box
        sx={{
          border: "2px dashed #ccc",
          p: 2,
          borderRadius: 2,
          textAlign: "center",
          mt: 2,
        }}
      >
        <Button variant="outlined" component="label" startIcon={<CloudUpload />} size="small">
          Browse or Upload Files
          <input type="file" hidden />
        </Button>
      </Box>
    </Paper>
  );
}

// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";

// const EditForm = ({ data, onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     id: null,
//     amount: "",
//     date: "",
//     salesProcess: "",
//     contact: "",
//     notes: "",
//   });

//   useEffect(() => {
//     if (data) {
//       setFormData(data);
//     }
//   }, [data]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     onSave(formData);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         {data ? "Edit Opportunity" : "Add Opportunity"}
//       </Typography>
//       <TextField
//         fullWidth
//         name="amount"
//         label="Amount"
//         value={formData.amount}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         fullWidth
//         name="date"
//         label="Date"
//         type="date"
//         value={formData.date}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         fullWidth
//         name="salesProcess"
//         label="Sales Process"
//         value={formData.salesProcess}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         fullWidth
//         name="contact"
//         label="Contact"
//         value={formData.contact}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         fullWidth
//         name="notes"
//         label="Notes"
//         multiline
//         rows={2}
//         value={formData.notes}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <Box display="flex" justifyContent="space-between">
//         <Button variant="outlined" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Save
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default EditForm;
