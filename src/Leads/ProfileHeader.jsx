// import React, { useState } from "react";
// import {
//   Avatar,
//   Typography,
//   Box,
//   Button,
//   Select,
//   MenuItem,
//   IconButton,
//   Menu,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import EmailIcon from "@mui/icons-material/Email";
// import SmsIcon from "@mui/icons-material/Sms";
// import CallIcon from "@mui/icons-material/Call";
// import FlagIcon from "@mui/icons-material/Flag";
// import EditIcon from "@mui/icons-material/Edit";
// import ShareIcon from "@mui/icons-material/Share";
// import MergeTypeIcon from "@mui/icons-material/MergeType";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CloseIcon from "@mui/icons-material/Close";
// import LeadDetail from "./LeadDetail";

// const ProfileHeader = () => {
//   const [interest, setInterest] = useState("Interested");
//   const [callOption, setCallOption] = useState("");
//   const [activityOption, setActivityOption] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [leadName, setLeadName] = useState("Dunder Mifflin (Example)");

//   // Open menu
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Close menu
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // Open edit name dialog
//   const handleEditOpen = () => {
//     handleMenuClose();
//     setDialogOpen(true);
//   };

//   // Close edit name dialog
//   const handleEditClose = () => {
//     setDialogOpen(false);
//   };

//   // Handle save button
//   const handleSave = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <>

//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "12px 24px",
//         ml: 27,
//         pt:10,
//         backgroundColor: "#fff",
//         borderRadius: "8px",
//         boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       {/* Left Section */}
//       <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
//         <Avatar sx={{ bgcolor: "#bbb", width: "48px", height: "48px" }}>D</Avatar>
//         <Box>
//           <Typography fontWeight="bold">{leadName}</Typography>
//           <Select
//             value={interest}
//             onChange={(e) => setInterest(e.target.value)}
//             size="small"
//             sx={{
//               fontSize: "12px",
//               borderRadius: "16px",
//               borderColor: "#ddd",
//               height: "32px",
//             //   minWidth: "120px",
//             }}
//           >
//             <MenuItem value="Not Interested">Not Interested</MenuItem>
//             <MenuItem value="Interested">Interested</MenuItem>
//             <MenuItem value="Follow-up">Follow-up</MenuItem>
//           </Select>

//         {/* More Options Icon */}
//         <IconButton onClick={handleMenuOpen} sx={{  }}>
//           <MoreHorizIcon  />
//         </IconButton>
//         </Box>

//         {/* More Options Menu */}
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           <MenuItem onClick={handleEditOpen}>
//             <EditIcon sx={{ mr: 1 }} /> Edit Name
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose}>
//             <ShareIcon sx={{ mr: 1 }} /> Share
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose}>
//             <MergeTypeIcon sx={{ mr: 1 }} /> Merge
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose}>
//             <VisibilityIcon sx={{ mr: 1 }} /> Visibility Summary
//           </MenuItem>
//           <MenuItem onClick={handleMenuClose} sx={{ color: "red" }}>
//             <DeleteIcon sx={{ mr: 1, color: "red" }} /> Delete
//           </MenuItem>
//         </Menu>
//       </Box>

//       {/* Right Section - Buttons */}
//       <Box sx={{ display: "flex", gap: 1 }}>
//         <Button variant="outlined" startIcon={<ChatBubbleOutlineIcon />} sx={{ textTransform: "none", borderRadius: "16px" }}>
//           Note
//         </Button>
//         <Button variant="outlined" startIcon={<EmailIcon />} sx={{ textTransform: "none", borderRadius: "16px" }}>
//           Email
//         </Button>
//         <Button variant="outlined" startIcon={<SmsIcon />} sx={{ textTransform: "none", borderRadius: "16px" }}>
//           SMS
//         </Button>

//         {/* Call Select */}
//         <Select
//           value={callOption}
//           onChange={(e) => setCallOption(e.target.value)}
//           displayEmpty
//           sx={{ textTransform: "none", borderRadius: "16px", height: "36px" }}
//         >
//           <MenuItem value="" disabled>
//             <CallIcon sx={{ fontSize: 18, mr: 1 }} />
//             Call
//           </MenuItem>
//           <MenuItem value="Call Support">Call Support</MenuItem>
//           <MenuItem value="Contact Sales">Contact Sales</MenuItem>
//         </Select>

//         {/* Activity Select */}
//         <Select
//           value={activityOption}
//           onChange={(e) => setActivityOption(e.target.value)}
//           displayEmpty
//           sx={{ textTransform: "none", borderRadius: "16px", height: "36px" }}
//         >
//           <MenuItem value="" disabled>
//             <FlagIcon sx={{ fontSize: 18, mr: 1 }} />
//             Activity
//           </MenuItem>
//           <MenuItem value="View Activity Log">View Activity Log</MenuItem>
//           <MenuItem value="Recent Actions">Recent Actions</MenuItem>
//         </Select>
//       </Box>

//       {/* Edit Name Dialog */}
//       <Dialog open={dialogOpen} onClose={handleEditClose}>
//         <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           Edit Lead Name
//           <IconButton onClick={handleEditClose}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             fullWidth
//             label="Lead Name"
//             value={leadName}
//             onChange={(e) => setLeadName(e.target.value)}
//             variant="outlined"
//             sx={{ mt: 2 }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleEditClose} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSave} variant="contained">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//       </Box>

//           <Box sx={{mt:6 }}>
//           <LeadDetail/>
//         </Box>
  
//         </>

//   );
// };

// export default ProfileHeader;

import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  IconButton,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmailIcon from "@mui/icons-material/Email";
import SmsIcon from "@mui/icons-material/Sms";
import CallIcon from "@mui/icons-material/Call";
import FlagIcon from "@mui/icons-material/Flag";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import LeadDetail from "./LeadDetail";
import LeadDetaill from "./LeadDetaill";
import { toggleNotes, toggleCall, toggleEmail, toggleSms } from "../Store/VisibilitySlice";
import { useDispatch,useSelector } from "react-redux";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const showNotes = useSelector((state) => state.visibility.showNotes);
  const showEmail = useSelector((state) => state.visibility.showEmail);
  const showCall = useSelector((state) => state.visibility.showCall);
  const showSms = useSelector((state) => state.visibility.showSms);

  const [interest, setInterest] = useState("Interested");
  const [callOption, setCallOption] = useState("");
  const [activityOption, setActivityOption] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [leadName, setLeadName] = useState("Dunder Mifflin (Example)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditOpen = () => {
    handleMenuClose();
    setDialogOpen(true);
  };

  const handleEditClose = () => {
    setDialogOpen(false);
  };

  const handleSave = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 230,
          right: 0,
          background: "#fff",
          // boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          padding: "12px 24px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // height: "70px",
          pt:10,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ bgcolor: "#bbb", width: "48px", height: "48px" }}>D</Avatar>
          <Box>
            <Typography fontWeight="bold">{leadName}</Typography>
            <Select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              size="small"
              sx={{
                fontSize: "12px",
                borderRadius: "16px",
                borderColor: "#ddd",
                height: "32px",
              }}
            >
              <MenuItem value="Not Interested">Not Interested</MenuItem>
              <MenuItem value="Interested">Interested</MenuItem>
              <MenuItem value="Follow-up">Follow-up</MenuItem>
            </Select>
            <IconButton onClick={handleMenuOpen}>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button  onClick={() => dispatch(toggleNotes())}  variant="outlined" startIcon={<ChatBubbleOutlineIcon />} sx={{ textTransform: "none", borderRadius: "16px" }}>
            Note
          </Button>
          <Button   onClick={() => dispatch(toggleEmail())}  variant="outlined" startIcon={<EmailIcon />} sx={{ textTransform: "none", borderRadius: "16px" }}>
            Email
          </Button>
          <Button   onClick={() => dispatch(toggleCall())} variant="outlined" startIcon={<SmsIcon />} sx={{ textTransform: "none", borderRadius: "16px" }}>
            SMS
          </Button>
          <Select
            value={callOption}
            onChange={(e) => setCallOption(e.target.value)}
            displayEmpty
            sx={{ textTransform: "none", borderRadius: "16px", height: "36px" }}
          >
            <MenuItem value="" disabled>
              <CallIcon sx={{ fontSize: 18, mr: 1 }} /> Call
            </MenuItem>
            <MenuItem value="Call Support">Call Support</MenuItem>
            <MenuItem value="Contact Sales">Contact Sales</MenuItem>
          </Select>
          <Select
            value={activityOption}
            onChange={(e) => setActivityOption(e.target.value)}
            displayEmpty
            sx={{ textTransform: "none", borderRadius: "16px", height: "36px" }}
          >
            <MenuItem value="" disabled>
              <FlagIcon sx={{ fontSize: 18, mr: 1 }} /> Activity
            </MenuItem>
            <MenuItem value="View Activity Log">View Activity Log</MenuItem>
            <MenuItem value="Recent Actions">Recent Actions</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box >
        <LeadDetaill/>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
