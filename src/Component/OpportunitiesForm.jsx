// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleOpportunitiesFormVisibility } from "../Store/ToggleSlice"; // Import the action correctly
// import { IoMdAdd } from "react-icons/io";
// import { FiMinus } from "react-icons/fi";

// const OpportunitiesForm = () => {
//   const dispatch = useDispatch();
//   const isFormVisible = useSelector((state) => state.toggle.isOpportunitiesFormVisible); // Access Redux state

//   // Handler to toggle form visibility
//   const handleToggleVisibility = () => {
//     dispatch(toggleOpportunitiesFormVisibility());
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{
//         marginLeft: "230px",
//         padding: "10px",
//         width: "300px",
//         borderRadius: "10px",
//         height: isFormVisible ? "auto" : "40px", // Adjust height dynamically
//         textAlign: "left",
//         marginTop: "40px",
//         border: "1px solid rgb(194, 194, 194)",
//         backgroundColor: "#DBF5EE",
//         transition: "all 0.3s ease", // Smooth transitions for height
//       }}
//     >
//       {/* Header */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h6>OPPORTUNITIES : 2</h6>
//         <button
//           style={{
//             padding: "5px 10px",
//             cursor: "pointer",
//             fontSize: "18px",
//             lineHeight: "1",
//           }}
//           onClick={handleToggleVisibility} // Toggle form visibility
//         >
//             {isFormVisible ? <FiMinus />: <IoMdAdd /> }
//         </button>
//       </div>

//       {/* Form Section */}
//       {isFormVisible && (
//         <form>
//           {/* Status Field */}
//           <div className="mb-3">
//             <label className="form-label">Status</label>
//             <select className="form-select" defaultValue="Demo Scheduled">
//               <option value="Demo Scheduled">Demo Scheduled</option>
//               <option value="Demo Completed">Demo Completed</option>
//               <option value="Proposal Sent">Proposal Sent</option>
//             </select>
//           </div>

//           {/* Estimated Close and Confidence */}
//           <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
//             <div style={{ flex: 1 }}>
//               <label className="form-label">Estimated Close</label>
//               <input type="date" className="form-control" />
//             </div>
//             <div style={{ flex: 1 }}>
//               <label className="form-label">Confidence</label>
//               <input type="range" className="form-range" min="0" max="100" defaultValue="60" />
//             </div>
//           </div>

//           {/* Amount and Payment Term */}
//           <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
//             <div style={{ flex: 1 }}>
//               <label className="form-label">Amount</label>
//               <input type="number" className="form-control" placeholder="₹" />
//             </div>
//             <div style={{ flex: 1 }}>
//               <label className="form-label">Payment Term</label>
//               <select className="form-select" defaultValue="">
//                 <option value="" disabled>
//                   Select Payment Term
//                 </option>
//                 <option value="One-Time">One-Time</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Yearly">Yearly</option>
//               </select>
//             </div>
//           </div>

//           {/* Contact Field */}
//           <div className="mb-3">
//             <label className="form-label">Contact</label>
//             <select className="form-select" defaultValue="">
//               <option value="" disabled>
//                 Select Contact
//               </option>
//               <option value="1">Oliver Hansen</option>
//               <option value="2">Van Henry</option>
//               <option value="3">April Tucker</option>
//             </select>
//           </div>

//           {/* User Field */}
//           <div className="mb-3">
//             <label className="form-label">User</label>
//             <select className="form-select" defaultValue="">
//               <option value="" disabled>
//                 Select User
//               </option>
//               <option value="1">Oliver Hansen</option>
//               <option value="2">Van Henry</option>
//               <option value="3">April Tucker</option>
//             </select>
//           </div>

//           {/* Notes */}
//           <div className="mb-3">
//             <label className="form-label">Notes</label>
//             <textarea
//               className="form-control"
//               rows="3"
//               placeholder="Enter notes here..."
//             ></textarea>
//           </div>

//           {/* Action Buttons */}
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <button type="button" className="btn btn-secondary" style={{ width: "45%" }}>
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-success" style={{ width: "45%" }}>
//               Save
//             </button>
            
//           </div>
          
//         </form>
//       )}
//     </div>
    
//   );
// };

// export default OpportunitiesForm;
import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const OpportunitiesForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <form>
          {/* Status Field */}
          <FormControl fullWidth size="small" sx={{ marginTop: 2, backgroundColor: "white" }}>
            <InputLabel>Status</InputLabel>
            <Select defaultValue="Demo Scheduled" label="Status">
              <MenuItem value="Demo Scheduled">Demo Scheduled</MenuItem>
              <MenuItem value="Demo Completed">Demo Completed</MenuItem>
              <MenuItem value="Proposal Sent">Proposal Sent</MenuItem>
            </Select>
          </FormControl>

          {/* Estimated Close and Confidence in the same line */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <TextField
              sx={{ backgroundColor: "white" }}
              label="Estimated Close"
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Confidence"
              type="number"
              sx={{ backgroundColor: "white" }}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ min: 0, max: 100 }}
            />
          </Box>

          {/* Amount and Payment Term in the same line */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <TextField
              label="Amount"
              type="number"
              sx={{ backgroundColor: "white" }}
              variant="outlined"
              size="small"
              fullWidth
              placeholder="₹"
            />
            <FormControl fullWidth size="small">
              <InputLabel>Payment Term</InputLabel>
              <Select defaultValue="" label="Payment Term" sx={{ backgroundColor: "white" }}>
                <MenuItem value="One-Time">One-Time</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Contact Field */}
          <FormControl fullWidth size="small" sx={{ marginTop: 2, backgroundColor: "white" }}>
            <InputLabel>Contact</InputLabel>
            <Select defaultValue="" label="Contact">
              <MenuItem value="1">Oliver Hansen</MenuItem>
              <MenuItem value="2">Van Henry</MenuItem>
              <MenuItem value="3">April Tucker</MenuItem>
            </Select>
          </FormControl>

          {/* User Field */}
          <FormControl fullWidth size="small" sx={{ marginTop: 2, backgroundColor: "white" }}>
            <InputLabel>User</InputLabel>
            <Select defaultValue="" label="User">
              <MenuItem value="1">Oliver Hansen</MenuItem>
              <MenuItem value="2">Van Henry</MenuItem>
              <MenuItem value="3">April Tucker</MenuItem>
            </Select>
          </FormControl>

          {/* Notes */}
          <TextField
            label="Notes"
            multiline
            rows={2}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: 2, backgroundColor: "white" }}
            placeholder="Enter notes here..."
          />

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="text" color="error">
              Cancel
            </Button>
            <Button variant="contained" color="success">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default OpportunitiesForm;
