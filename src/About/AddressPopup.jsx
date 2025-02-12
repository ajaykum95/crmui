// // AddressPopup.js
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Select,
//   MenuItem,
//   Button,
//   FormControl,
//   InputLabel,
//   Box,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const AddressPopup = ({ open, onClose, onSave }) => {
//   const [addressData, setAddressData] = useState({
//     type: "Business",
//     address: "",
//     addressCont: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddressData({ ...addressData, [name]: value });
//   };

//   const handleSave = () => {
//     onSave(addressData);
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle borderBottom="1px solid #ddd">
//         Addresses
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{ position: "absolute", right: 8, top: 8 }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
//           <FormControl fullWidth size="small">
//             <InputLabel>Type</InputLabel>
//             <Select
//               name="type"
//               label="Type"
//               size="small"
//               value={addressData.type}
//               onChange={handleChange}
//             >
//               <MenuItem value="Business">Business</MenuItem>
//               <MenuItem value="Home">Mailing</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//           size="small"
//             name="address"
//             label="Address"
//             value={addressData.address}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//           size="small"
//             name="addressCont"
//             label="Address (cont.)"
//             value={addressData.addressCont}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             name="city"
//             label="City"
//             size="small"
//             value={addressData.city}
//             onChange={handleChange}
//             fullWidth
//           />
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <TextField
//               name="state"
//               label="State"
//               size="small"
//               value={addressData.state}
//               onChange={handleChange}
//               fullWidth
//             />
//             <TextField
//             size="small"
//               name="postalCode"
//               label="Postal Code"
//               value={addressData.postalCode}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Box>
//           <FormControl fullWidth size="small">
//             <InputLabel>Country</InputLabel>
//             <Select
//             size="small"
//               name="country"
//               label="Country"
//               value={addressData.country}
//               onChange={handleChange}
//             >
//               <MenuItem value="USA">USA</MenuItem>
//               <MenuItem value="Canada">Canada</MenuItem>
//               <MenuItem value="Mexico">Mexico</MenuItem>
//               {/* Add more countries as needed */}
//             </Select>
//           </FormControl>
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="error">
//           Cancel
//         </Button>
//         <Button onClick={handleSave} variant="contained" color="primary">
//           Save
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddressPopup;

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddressPopup = ({ open, onClose, onSave }) => {
  const [addressData, setAddressData] = useState({
    type: "Business",
    address: "",
    addressCont: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSave = () => {
    onSave(addressData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle borderBottom="1px solid #ddd">
        Addresses
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              label="Type"
              size="small"
              value={addressData.type}
              onChange={handleChange}
            >
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Home">Mailing</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            name="address"
            label="Address"
            value={addressData.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            size="small"
            name="addressCont"
            label="Address (cont.)"
            value={addressData.addressCont}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="city"
            label="City"
            size="small"
            value={addressData.city}
            onChange={handleChange}
            fullWidth
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              name="state"
              label="State"
              size="small"
              value={addressData.state}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              size="small"
              name="postalCode"
              label="Postal Code"
              value={addressData.postalCode}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <FormControl fullWidth size="small">
            <InputLabel>Country</InputLabel>
            <Select
              size="small"
              name="country"
              label="Country"
              value={addressData.country}
              onChange={handleChange}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Mexico">Mexico</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddressPopup;
