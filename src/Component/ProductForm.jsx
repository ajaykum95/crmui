// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleProductFormVisibility } from "../Store/ToggleSlice";
// import ProductItem from "./ProductItem"; // Assuming ProductItem is another component
// import { IoMdAdd } from "react-icons/io";
// import { FiMinus } from "react-icons/fi";

// const ProductForm = () => {
//   const dispatch = useDispatch();
//   const isFormVisible = useSelector((state) => state.toggle.isProductFormVisible); // Get visibility for ProductForm

//   const buttonStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "8px",
//     padding: "5px 15px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     cursor: "pointer",
//     backgroundColor: "#f9f9f9",
//     fontSize: "14px",
//     fontWeight: "500",
//   };

//   // Handle the toggle visibility of the form
//   const handleToggleVisibility = () => {
//     dispatch(toggleProductFormVisibility()); // Dispatch action to toggle visibility for ProductForm
//   };

//   return (
//     <>
//       <div
//         className="container-fluid"
//         style={{
//           marginLeft: "230px",
//           padding: "10px 10px",
//           width: "298px",
//           borderRadius:"10px",
//           height: isFormVisible ? "200px" : "40px", // Adjust height based on visibility
//           textAlign: "left",
//           marginTop: "40px",
//           border: "1px solid rgb(194,194,194)",
//           backgroundColor:"#DBF5EE",
//           transition: "all 0.3s ease", // Smooth transition for both height and background color
//         }}
//       >
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <h6>PRODUCT :&nbsp;&nbsp;3</h6>
//           <button
//             style={{
//               padding: "5px 10px",
//               cursor: "pointer",
//               fontSize: "18px",
//               lineHeight: "1",
//             }}

//             onClick={handleToggleVisibility} // Toggle the form visibility for ProductForm
//           >
//             {isFormVisible ? <FiMinus />: <IoMdAdd />
//             } {/* Toggle between "+" and "-" */}
//           </button>
//         </div>

//         {isFormVisible && ( // Show the form if isFormVisible is true
//           <form action="">
//             <select className="form-select" aria-label="Default select example" defaultValue="">
//               <option value="" disabled>
//                 Product Category
//               </option>
//               <option value="1">Business Certification</option>
//               <option value="2">Start Company</option>
//               <option value="3">Financial Services</option>
//             </select>
//             <br />
//             <select className="form-select" aria-label="Default select example" defaultValue="">
//               <option value="" disabled>
//                 Product
//               </option>
//               <option value="1">Business Certification</option>
//               <option value="2">Start Company</option>
//               <option value="3">Financial Services</option>
//             </select>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "10px",
//               }}
//             >
//               <button style={buttonStyle}>Cancel</button>
//               <button style={buttonStyle}>Save</button>
//             </div>
//           </form>
//         )}
//       </div>
//         <ProductItem /> 
//     </>
//   );
// };

// export default ProductForm;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleProductFormVisibility } from "../Store/ToggleSlice";
// import ProductItem from "./ProductItem"; // Assuming ProductItem is another component
// import { IoMdAdd } from "react-icons/io";
// import { FiMinus } from "react-icons/fi";
// import { Box, Button, Select, MenuItem, FormControl, InputLabel, Typography } from "@mui/material";

// const ProductForm = () => {
//   const dispatch = useDispatch();
//   const isFormVisible = useSelector((state) => state.toggle.isProductFormVisible); // Get visibility for ProductForm

//   // Handle the toggle visibility of the form
//   const handleToggleVisibility = () => {
//     dispatch(toggleProductFormVisibility()); // Dispatch action to toggle visibility for ProductForm
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           marginLeft: "230px",
//           padding: "10px 10px",
//           width: "300px",
//           borderRadius: "10px",
//           height: isFormVisible ? "300px" : "60px", // Adjust height based on visibility
//           textAlign: "left",
//           marginTop: "40px",
//           border: "1px solid rgb(194,194,194)",
//           backgroundColor: "#DBF5EE",
//           transition: "all 0.3s ease", // Smooth transition for both height and background color
//         }}
//       >
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6">PRODUCT : 3</Typography>
//           <Button
//             onClick={handleToggleVisibility} // Toggle the form visibility for ProductForm
//             sx={{
//               fontSize: "18px",
//               padding: "5px 10px",
//               minWidth: "auto",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             {isFormVisible ? <FiMinus /> : <IoMdAdd />} {/* Toggle between "+" and "-" */}
//           </Button>
//         </Box>

//         {isFormVisible && ( // Show the form if isFormVisible is true
//           <form>
//             <FormControl fullWidth sx={{ mt: 2 }}>
//               <InputLabel>Product Category</InputLabel>
//               <Select defaultValue="" label="Product Category">
//                 <MenuItem value="1">Business Certification</MenuItem>
//                 <MenuItem value="2">Start Company</MenuItem>
//                 <MenuItem value="3">Financial Services</MenuItem>
//               </Select>
//             </FormControl>

//             <FormControl fullWidth sx={{ mt: 2 }}>
//               <InputLabel>Product</InputLabel>
//               <Select defaultValue="" label="Product">
//                 <MenuItem value="1">Business Certification</MenuItem>
//                 <MenuItem value="2">Start Company</MenuItem>
//                 <MenuItem value="3">Financial Services</MenuItem>
//               </Select>
//             </FormControl>

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: "10px",
//               }}
//             >
//               <Button variant="outlined" sx={{ minWidth: "80px" }}>
//                 Cancel
//               </Button>
//               <Button variant="contained" color="success" sx={{ minWidth: "80px" }}>
//                 Save
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Box>

//       {/* Show ProductItem below */}
//       <ProductItem />
//     </>
//   );
// };

// export default ProductForm;
import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ProductForm = () => {
  const [category, setCategory] = React.useState('');
  const [product, setProduct] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Product Category Dropdown */}
      <FormControl fullWidth size="small">
        <InputLabel>Product Category</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          label="Product Category"
          sx={{
            color: "#333",
            backgroundColor: 'white', // Light grey background
            borderRadius: '8px', // Rounded corners
            '.MuiSelect-select': {
              color: '#333', // Text color
            },
          }}
        >
          <MenuItem value="1">Business Certification</MenuItem>
          <MenuItem value="2">Start Company</MenuItem>
          <MenuItem value="3">Financial Services</MenuItem>
        </Select>
      </FormControl>

      {/* Product Dropdown */}
      <FormControl fullWidth size="small">
        <InputLabel>Product</InputLabel>
        <Select
          value={product}
          onChange={handleProductChange}
          label="Product"
          sx={{
            color: "#333",
            backgroundColor: 'white', // Light grey background
            borderRadius: '8px', // Rounded corners
            '.MuiSelect-select': {
              color: '#333', // Text color
            },
          }}
        >
          <MenuItem value="1">Business Certification</MenuItem>
          <MenuItem value="2">Start Company</MenuItem>
          <MenuItem value="3">Financial Services</MenuItem>
        </Select>
      </FormControl>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="text" color="error">Cancel</Button>
        <Button variant="contained" color="success">Save</Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
