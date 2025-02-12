// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTaskFormVisibility } from "../Store/ToggleSlice";
// import TaskItem from "./TaskItem";
// import { IoMdAdd } from "react-icons/io";
// import { FiMinus } from "react-icons/fi";

// const TaskForm = () => {
//   const dispatch = useDispatch();
//   const isFormVisible = useSelector((state) => state.toggle.isTaskFormVisible); // Get visibility for TaskForm

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
//     dispatch(toggleTaskFormVisibility()); // Dispatch action to toggle visibility for TaskForm
//   };

//   return (
//     <>
//     <div
//       className="container-fluid"
//       style={{
//         marginLeft: "230px",
//         padding: "10px 10px",
//         width: "298px",
//         borderRadius: "10px",
//         height: isFormVisible ? "300px" : "40px", // Adjust height based on visibility
//         textAlign: "left",
//         marginTop: "40px",
//         border: "1px solid rgb(194,194,194)",
//         backgroundColor: "#DBF5EE",
//         transition: "all 0.3s ease", // Smooth transition for both height and background color
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h6>TASK :&nbsp;&nbsp;2</h6>
//         <button
//           style={{
//             padding: "5px 10px",
//             cursor: "pointer",
//             fontSize: "18px",
//             lineHeight: "1",
//           }}
//           onClick={handleToggleVisibility} // Toggle the form visibility for TaskForm
//         >
//             {isFormVisible ? <FiMinus />: <IoMdAdd />}
//         </button>
//       </div>

//       {isFormVisible && ( // Show the form if isFormVisible is true
//         <form action="">
//           <div className="mb-3">
//             <input type="text" className="form-control" placeholder="Task Description" />
//           </div>

//           <div className="mb-3">
//             <input type="date" className="form-control" />
//           </div>

//           <div className="mb-3">
//             <input type="time" className="form-control" />
//           </div>

//           <div className="mb-3">
//             <select className="form-select" aria-label="Assign User">
//               <option value="" disabled>Assign User</option>
//               <option value="1">Oliver Hansen</option>
//               <option value="2">Van Henry</option>
//               <option value="3">April Tucker</option>
//             </select>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginTop: "10px",
//             }}
//             >
//             <button style={buttonStyle}>Cancel</button>
//             <button style={buttonStyle}>Save</button>
//           </div>
//         </form>
//       )}
//     </div>
//     <TaskItem/>
//             </>
//   );
// };

// export default TaskForm;
import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const TaskForm = () => {
  const [category, setCategory] = React.useState('');
  const [product, setProduct] = React.useState('');
  const [taskDescription, setTaskDescription] = React.useState('');
  const [taskDate, setTaskDate] = React.useState('');
  const [taskTime, setTaskTime] = React.useState('');
  const [assignedUser, setAssignedUser] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleTaskDateChange = (event) => {
    setTaskDate(event.target.value);
  };

  const handleTaskTimeChange = (event) => {
    setTaskTime(event.target.value);
  };

  const handleAssignedUserChange = (event) => {
    setAssignedUser(event.target.value);
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Task Description */}
      <TextField
        label="Task Description"
        variant="outlined"
        size="small"
        sx={{ backgroundColor: 'white' }}
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        fullWidth
      />

      {/* Task Date and Time in Same Line */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Task Date */}
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          size="small"
          sx={{ backgroundColor: 'white' }}
          value={taskDate}
          onChange={handleTaskDateChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Task Time */}
        <TextField
          label="Time"
          type="time"
          variant="outlined"
          size="small"
          sx={{ backgroundColor: 'white' }}
          value={taskTime}
          onChange={handleTaskTimeChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      {/* Assign User */}
      <FormControl fullWidth size="small">
        <InputLabel>Assign User</InputLabel>
        <Select
          value={assignedUser}
          onChange={handleAssignedUserChange}
          label="Assign User"
          sx={{
            color: '#333',
            backgroundColor: 'white',
            borderRadius: '8px',
            '.MuiSelect-select': {
              padding: '10px',
              color: '#333',
            },
          }}
        >
          <MenuItem value="1">Oliver Hansen</MenuItem>
          <MenuItem value="2">Van Henry</MenuItem>
          <MenuItem value="3">April Tucker</MenuItem>
        </Select>
      </FormControl>

      {/* Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="text" color="error">
          Cancel
        </Button>
        <Button variant="contained" color="success">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default TaskForm;
