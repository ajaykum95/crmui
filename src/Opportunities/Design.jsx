// // import React, { useState } from "react";
// // import { Card, CardContent, Typography, Avatar, Chip, IconButton, Badge, Divider, Box, Menu, MenuItem } from "@mui/material";
// // import { Email, Phone, Edit, MoreVert, ChatBubble, Person, Delete } from "@mui/icons-material";

// // const Design = () => {
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   const handleMenuClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3, border: "1px solid #E0E0E0", p: 1 }}>
// //       <CardContent>
// //         <Box display="flex" alignItems="center" justifyContent="space-between">
// //           <Box display="flex" alignItems="center">
// //             <Avatar sx={{ bgcolor: "#FFCDD2", color: "#D32F2F", fontSize: 14, width: 32, height: 32, mr: 1 }}>AK</Avatar>
// //             <Box>
// //               <Typography variant="h6" fontWeight="bold">$500</Typography>
// //               <Typography variant="body2" color="textSecondary">Today</Typography>
// //             </Box>
// //           </Box>
// //           <Box display="flex" gap={1}>
// //             <IconButton size="small" onClick={handleMenuClick}>
// //               <MoreVert fontSize="small" />
// //             </IconButton>
// //             <Menu
// //               anchorEl={anchorEl}
// //               open={Boolean(anchorEl)}
// //               onClose={handleMenuClose}
// //               MenuListProps={{
// //                 "aria-labelledby": "basic-button",
// //               }}
// //             >
// //               <MenuItem onClick={handleMenuClose}>
// //                 <Edit fontSize="small" sx={{ mr: 1 }} />
// //                 Edit
// //               </MenuItem>
// //               <MenuItem onClick={handleMenuClose}>
// //                 <Delete fontSize="small" sx={{ mr: 1 }} />
// //                 Delete
// //               </MenuItem>
// //             </Menu>
// //             <Badge badgeContent={1} color="primary">
// //               <IconButton size="small"><ChatBubble fontSize="small" /></IconButton>
// //             </Badge>
// //           </Box>
// //         </Box>

// //         <Box display="flex" alignItems="center" gap={1} mt={1}>
// //           <Chip label="SALES PROCESS (EXAMPLE)" variant="outlined" size="small" sx={{ borderRadius: 2, fontSize: 12 }} />
// //           <Chip label="WON" color="success" size="small" sx={{ borderRadius: 2, fontSize: 12, backgroundColor: "#A5D6A7" }} />
// //         </Box>

// //         <Divider sx={{ my: 1 }} />

// //         <Box display="flex" alignItems="center" justifyContent="space-between">
// //           <Box display="flex" alignItems="center" gap={1}>
// //             <Person fontSize="small" color="action" />
// //             <Typography variant="subtitle2" fontWeight="bold">Nick Persico</Typography>
// //           </Box>
// //           <Box>
// //             <IconButton size="small"><Email fontSize="small" /></IconButton>
// //             <IconButton size="small"><Phone fontSize="small" /></IconButton>
// //           </Box>
// //         </Box>

// //         <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 1, p: 1, mt: 1 }}>
// //           <Typography variant="body2" color="textSecondary">
// //             Use opportunities to track which stage of the pipeline your deals are in and the revenue associated with them...
// //           </Typography>
// //         </Box>

// //         <Box display="flex" justifyContent="flex-start" mt={1}>
// //           <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>Show more</Typography>
// //         </Box>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default Design;
import React, { useState } from "react";
import {
  Typography,
  Avatar,
  Chip,
  IconButton,
  Badge,
  Divider,
  Box,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Email,
  Phone,
  Edit,
  MoreVert,
  ChatBubble,
  Person,
  Delete,
} from "@mui/icons-material";
import { FaRegComment } from "react-icons/fa";

import EditForm from "./EditForm";

const Design = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setEditFormOpen(true);
    setAnchorEl(null);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

  return (
    <div>
      {!isEditFormOpen ? (
        <Box >
          <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" >
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: "#FFCDD2", color: "#D32F2F", fontSize: 14, width: 32, height: 32, mr: 1 }}>
                  AK
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight="bold">$500</Typography>
                  <Typography variant="body2" color="textSecondary">Today</Typography>
                </Box>
              </Box>
              <Box display="flex" gap={1}>
                <IconButton size="small" onClick={handleMenuClick}>
                  <MoreVert fontSize="small" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleEditClick}>
                    <Edit fontSize="small" sx={{ mr: 1 }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleDeleteClick}>
                    <Delete fontSize="small" sx={{ mr: 1 }} />
                    Delete
                  </MenuItem>
                </Menu>
                <Badge badgeContent={1} color="primary">
                  <IconButton size="small"><ChatBubble fontSize="small" /></IconButton>
                </Badge>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Chip label="SALES PROCESS (EXAMPLE)" variant="outlined" size="small" sx={{ borderRadius: 2, fontSize: 12 }} />
              <Chip label="WON" color="success" size="small" sx={{ borderRadius: 2, fontSize: 12, backgroundColor: "#A5D6A7" }} />
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={1}>
                <Person fontSize="small" color="action" />
                <Typography variant="subtitle2" fontWeight="bold">Nick Persico</Typography>
              </Box>
              <Box>
                <IconButton size="small"><Email fontSize="small" /></IconButton>
                <IconButton size="small"><Phone fontSize="small" /></IconButton>
              </Box>
            </Box>

            <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 1, p: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Use opportunities to track which stage of the pipeline your deals are in and the revenue associated with them...
              </Typography>
            </Box>

            <Box display="flex" justifyContent="flex-start" mt={1}>
              <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>Show more</Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <EditForm />
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteModalOpen} onClose={closeDeleteModal}>
        <DialogTitle>Delete Opportunity</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this Opportunity?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteModal}>Cancel</Button>
          <Button color="error" onClick={closeDeleteModal}>Delete Opportunity</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Design;
// import React from "react";
// import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// const Design = ({ data, onEdit, onDelete }) => {
//   if (!data) {
//     return (
//       <Typography variant="body2" color="textSecondary">
//         No data available.
//       </Typography>
//     );
//   }

//   const { contact = "N/A", amount = 0, date = "N/A", salesProcess = "N/A", notes = "No notes provided." } = data;

//   return (
//     <Card sx={{ marginBottom: 2, boxShadow: 3 }}>
//       <CardContent>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Box>
//             <Typography variant="h6">{contact}</Typography>
//             <Typography variant="body2" color="textSecondary">
//               Amount: ${amount}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Date: {date}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Sales Process: {salesProcess}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Notes: {notes}
//             </Typography>
//           </Box>
//           <Box>
//             <IconButton color="primary" onClick={() => onEdit(data)}>
//               <Edit />
//             </IconButton>
//             <IconButton color="error" onClick={() => onDelete(data.id)}>
//               <Delete />
//             </IconButton>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default Design;
