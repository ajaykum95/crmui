// // import React, { useState } from "react";
// // import {
// //   Box,
// //   Avatar,
// //   Typography,
// //   IconButton,
// //   Button,
// //   TextField,
// //   Menu,
// //   MenuItem,
// // } from "@mui/material";
// // import AddIcon from "@mui/icons-material/Add";
// // import CheckIcon from "@mui/icons-material/Check";
// // import ReplayIcon from "@mui/icons-material/Replay";
// // import EventIcon from "@mui/icons-material/Event";
// // import CancelIcon from "@mui/icons-material/Cancel";
// // import EditIcon from "@mui/icons-material/Edit";
// // import SnoozeIcon from "@mui/icons-material/Snooze";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import MoreVertIcon from "@mui/icons-material/MoreVert";

// // const TaskData = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [newTask, setNewTask] = useState("");
// //   const [newDate, setNewDate] = useState("");
// //   const [newName, setNewName] = useState("");
// //   const [showInput, setShowInput] = useState(false);
// //   const [hoveredTask, setHoveredTask] = useState(null);
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

// //   const handleAddTask = () => {
// //     if (newTask.trim() && newName.trim()) {
// //       setTasks([
// //         ...tasks,
// //         { text: newTask, date: newDate, name: newName, completed: false },
// //       ]);
// //       setNewTask("");
// //       setNewDate("");
// //       setNewName("");
// //       setShowInput(false);
// //     }
// //   };

// //   const handleCompleteTask = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[index].completed = !updatedTasks[index].completed;
// //     setTasks(updatedTasks);
// //     handleCloseMenu();
// //   };

// //   const handleEditTask = (index) => {
// //     const taskToEdit = tasks[index];
// //     setNewTask(taskToEdit.text);
// //     setNewDate(taskToEdit.date);
// //     setNewName(taskToEdit.name);
// //     setShowInput(true);
// //     setTasks(tasks.filter((_, idx) => idx !== index)); // Temporarily remove the task
// //     handleCloseMenu();
// //   };

// //   const handleDeleteTask = (index) => {
// //     setTasks(tasks.filter((_, idx) => idx !== index));
// //     handleCloseMenu();
// //   };

// //   const handleSnoozeTask = () => {
// //     alert("Snooze functionality here");
// //     handleCloseMenu();
// //   };

// //   const handleOpenMenu = (event, index) => {
// //     setAnchorEl(event.currentTarget);
// //     setSelectedTaskIndex(index);
// //   };

// //   const handleCloseMenu = () => {
// //     setAnchorEl(null);
// //     setSelectedTaskIndex(null);
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 400, marginTop: "-20px", padding: 2 }}>
// //       {tasks.length === 0 && !showInput ? (
// //         <Box sx={{ textAlign: "center" }}>
// //           <Typography variant="body2">
// //             Assign actions to yourself or team members.
// //           </Typography>
// //           <Button
// //             variant="text"
// //             // startIcon={<AddIcon />}
// //             onClick={() => setShowInput(true)}
// //             sx={{ mt: 1 }}
// //           >
// //             Add Task
// //           </Button>
// //         </Box>
// //       ) : (
// //         <Box>
// //           {tasks.map((task, index) => (
// //             <Box
// //               key={index}
// //               onMouseEnter={() => setHoveredTask(index)}
// //               onMouseLeave={() => setHoveredTask(null)}
// //               sx={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "space-between",
// //                 border: "1px solid #ddd",
// //                 borderRadius: 2,
// //                 p: 2,
// //                 mb: 1,
// //                 wordBreak: "break-word",
// //                 backgroundColor: task.completed ? "#f9f9f9" : "#fff",
// //                 boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
// //               }}
// //             >
// //               <Box sx={{ flex: 1 }}>
// //                 <Typography
// //                   variant="body1"
// //                   sx={{
// //                     textDecoration: task.completed ? "line-through" : "none",
// //                     overflowWrap: "break-word",
// //                   }}
// //                 >
// //                   {task.text}
// //                 </Typography>
// //                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
// //                   <EventIcon fontSize="small" />
// //                   <Typography variant="caption">
// //                     {task.date || "No Date"}
// //                   </Typography>
// //                   <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>
// //                     {task.name.charAt(0).toUpperCase()}
// //                   </Avatar>
// //                 </Box>
// //               </Box>
// //               {hoveredTask === index && (
// //                 <IconButton onClick={(e) => handleOpenMenu(e, index)}>
// //                   <MoreVertIcon />
// //                 </IconButton>
// //               )}
// //               {selectedTaskIndex === index && (
// //                 <Menu
// //                   anchorEl={anchorEl}
// //                   open={Boolean(anchorEl)}
// //                   onClose={handleCloseMenu}
// //                 >
// //                   <MenuItem onClick={() => handleCompleteTask(index)}>
// //                     {task.completed ? "Undo Complete" : "Mark Complete"}
// //                   </MenuItem>
// //                   <MenuItem onClick={() => handleSnoozeTask()}>
// //                     <SnoozeIcon /> Snooze
// //                   </MenuItem>
// //                   <MenuItem onClick={() => handleEditTask(index)}>
// //                     <EditIcon /> Edit
// //                   </MenuItem>
// //                   <MenuItem onClick={() => handleDeleteTask(index)}>
// //                     <DeleteIcon color="error" /> Delete
// //                   </MenuItem>
// //                 </Menu>
// //               )}
// //             </Box>
// //           ))}

// //           {showInput ? (
// //             <Box sx={{ mb: 2 }}>
// //               <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
// //                 <TextField
// //                   label="Task Description"
// //                   variant="outlined"
// //                   size="small"
// //                   fullWidth
// //                   value={newTask}
// //                   onChange={(e) => setNewTask(e.target.value)}
// //                 />
// //               </Box>
// //               <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
// //                 <TextField
// //                   label="Due Date"
// //                   type="date"
// //                   variant="outlined"
// //                   size="small"
// //                   fullWidth
// //                   InputLabelProps={{ shrink: true }}
// //                   value={newDate}
// //                   onChange={(e) => setNewDate(e.target.value)}
// //                 />
// //               </Box>
// //               <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
// //                 <TextField
// //                   label="Assigned To"
// //                   variant="outlined"
// //                   size="small"
// //                   fullWidth
// //                   value={newName}
// //                   onChange={(e) => setNewName(e.target.value)}
// //                 />
// //               </Box>
// //               <Box sx={{ display: "flex", gap: 1 }}>
// //                 <Button
// //                   variant="contained"
// //                   onClick={handleAddTask}
// //                   sx={{ flex: 1 }}
// //                 >
// //                   Save Task
// //                 </Button>
// //                 <IconButton onClick={() => setShowInput(false)}>
// //                   <CancelIcon color="error" />
// //                 </IconButton>
// //               </Box>
// //             </Box>
// //           ) : (
// //             <Button
// //               variant="contained"
// //               startIcon={<AddIcon />}
// //               onClick={() => setShowInput(true)}
// //               sx={{ mt: 2, display: "block", width: "100%" }}
// //             >
// //               Add Task
// //             </Button>
// //           )}
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default TaskData;
import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EventIcon from "@mui/icons-material/Event";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SnoozeIcon from "@mui/icons-material/Snooze";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TaskData = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newName, setNewName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [hoveredTask, setHoveredTask] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() && newName.trim()) {
      setTasks([
        ...tasks,
        { text: newTask, date: newDate, name: newName, completed: false },
      ]);
      setNewTask("");
      setNewDate("");
      setNewName("");
      setShowInput(false);
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
    handleCloseMenu();
  };

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedTaskIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedTaskIndex(null);
  };

  return (
    <Box sx={{ maxWidth: 400, mt: "-20px", p: 2 }}>
      {tasks.length === 0 && !showInput ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            Assign actions to yourself or team members.
          </Typography>
          <Button
            variant="text"
            onClick={() => setShowInput(true)}
            sx={{ mt: 1 }}
          >
            Add Task
          </Button>
        </Box>
      ) : (
        <Box>
          {tasks.map((task, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredTask(index)}
              onMouseLeave={() => setHoveredTask(null)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--border-radius)",
                p: "var(--spacing-unit)",
                mb: 1,
                backgroundColor: task.completed ? "#f9f9f9" : "var(--secondary-color)",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EventIcon fontSize="small" />
                  <Typography variant="caption">
                    {task.date || "No Date"}
                  </Typography>
                  <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>
                    {task.name.charAt(0).toUpperCase()}
                  </Avatar>
                </Box>
              </Box>
              {hoveredTask === index && (
                <IconButton onClick={(e) => handleOpenMenu(e, index)}>
                  <MoreVertIcon />
                </IconButton>
              )}
              {selectedTaskIndex === index && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={() => handleDeleteTask(index)}>
                    <DeleteIcon color="error" /> Delete
                  </MenuItem>
                </Menu>
              )}
            </Box>
          ))}

          {showInput ? (
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
                <TextField
                  label="Task Description"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <TextField
                  label="Due Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
                <TextField
                  label="Assigned To"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  onClick={handleAddTask}
                  sx={{ flex: 1 }}
                >
                  Save Task
                </Button>
                <IconButton onClick={() => setShowInput(false)}>
                  <CancelIcon color="error" />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setShowInput(true)}
              sx={{ mt: 2, display: "block", width: "100%" }}
            >
              Add Task
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default TaskData;

