// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   Card,
//   CardContent,
//   Menu,
//   MenuItem,
//   Button,
// } from "@mui/material";
// import { ExpandMore, ExpandLess, Add, MoreVert, Email, Phone } from "@mui/icons-material";
// import ContactFormDialog from "./ContactFormDialog";

// const ContactCard = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, name: "Close Sales Team", role: "Sales", phone: "+18334625673", email: "sales@close.com" },
//     { id: 2, name: "Nick Persico", role: "Sr. Director of Business", phone: "+18334625674", email: "nick@close.com" },
//     { id: 3, name: "Close Customer Success", role: "Support", phone: "+18334625675", email: "support@close.com" },
//   ]);

//   const [showAll, setShowAll] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [editContact, setEditContact] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const [expanded, setExpanded] = useState(false); // To manage the expand/collapse state for the card

//   const handleToggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const handleMenuClick = (event, contact) => {
//     setAnchorEl(event.currentTarget);
//     setEditContact(contact);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setEditContact(null);
//   };

//   const handleAddContact = () => {
//     setEditContact(null);
//     setOpenDialog(true);
//   };

//   const handleSaveContact = (formData) => {
//     if (editContact) {
//       setContacts(
//         contacts.map((contact) => (contact.id === editContact.id ? { ...contact, ...formData } : contact))
//       );
//     } else {
//       setContacts([...contacts, { id: Date.now(), ...formData }]);
//     }
//     setOpenDialog(false);
//   };

//   const handleDeleteContact = (contactId) => {
//     setContacts(contacts.filter((contact) => contact.id !== contactId));
//     handleMenuClose();
//   };

//   return (
//     <Card sx={{ width: "100%", mt: 2, bgcolor: "#f5f5f5", p: 1 }}>
//       {/* Header Section */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 1, height: "30px" }}>
//         <Box onClick={handleToggleExpand}>
//           {expanded ? <ExpandLess /> : <ExpandMore />}
//         </Box>
//         <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1, fontSize: "14px" }}>
//           CONTACTS
//         </Typography>
//         <Box>
//           <IconButton onClick={handleAddContact}>
//             <Add />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Expandable Content */}
//       {expanded && (
//         <Box>
//           {contacts.slice(0, showAll ? contacts.length : 3).map((contact) => (
//             <Card key={contact.id} sx={{ mb: 1,mt:2 }}>
//               <CardContent sx={{ display: "flex", alignItems: "center", "&:hover": { bgcolor: "action.hover" } }}>
//                 <Box sx={{ flex: 1 }}>
//                   <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
//                     {contact.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ fontSize: "14px" }}>
//                     {contact.role}
//                   </Typography>
//                 </Box>
//                 <IconButton>
//                   <Email />
//                 </IconButton>
//                 <IconButton>
//                   <Phone />
//                 </IconButton>
//                 <IconButton onClick={(e) => handleMenuClick(e, contact)}>
//                   <MoreVert />
//                 </IconButton>
//               </CardContent>
//             </Card>
//           ))}
//           {!showAll && contacts.length > 3 && (
//             <Button onClick={() => setShowAll(true)} sx={{ fontSize: "14px" }}>
//               Show {contacts.length - 3} more
//             </Button>
//           )}
//         </Box>
//       )}

//       {/* Menu for Edit/Delete Options */}
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//         <MenuItem onClick={() => setOpenDialog(true)} sx={{ fontSize: "14px" }}>
//           <Add sx={{ mr: 1 }} /> Edit contact
//         </MenuItem>
//         <MenuItem onClick={() => handleDeleteContact(editContact?.id)} sx={{ fontSize: "14px" }}>
//           <Add sx={{ mr: 1 }} /> Delete
//         </MenuItem>
//       </Menu>

//       {/* Contact Form Dialog */}
//       <ContactFormDialog open={openDialog} onClose={() => setOpenDialog(false)} onSave={handleSaveContact} contact={editContact} />
//     </Card>
//   );
// };

// export default ContactCard;


import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add, MoreVert, Email, Phone } from "@mui/icons-material";
import ContactFormDialog from "./ContactFormDialog";
import "../styles/global.css";  // Import global CSS

const ContactCard = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Close Sales Team", role: "Sales", phone: "+18334625673", email: "sales@close.com" },
    { id: 2, name: "Nick Persico", role: "Sr. Director of Business", phone: "+18334625674", email: "nick@close.com" },
    { id: 3, name: "Close Customer Success", role: "Support", phone: "+18334625675", email: "support@close.com" },
  ]);

  const [showAll, setShowAll] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editContact, setEditContact] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [expanded, setExpanded] = useState(false); // To manage the expand/collapse state for the card

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = (event, contact) => {
    setAnchorEl(event.currentTarget);
    setEditContact(contact);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setEditContact(null);
  };

  const handleAddContact = () => {
    setEditContact(null);
    setOpenDialog(true);
  };

  const handleSaveContact = (formData) => {
    if (editContact) {
      setContacts(
        contacts.map((contact) => (contact.id === editContact.id ? { ...contact, ...formData } : contact))
      );
    } else {
      setContacts([...contacts, { id: Date.now(), ...formData }]);
    }
    setOpenDialog(false);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
    handleMenuClose();
  };

  return (
    <Card sx={{ width: "100%", mt: "var(--spacing-unit)", bgcolor: "var(--background-color)", p: "var(--spacing-unit)" }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: "var(--spacing-unit)", height: "30px" }}>
        <Box onClick={handleToggleExpand}>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: "var(--spacing-unit)", fontSize: "var(--font-size-base)" }}>
          CONTACTS
        </Typography>
        <Box>
          <IconButton onClick={handleAddContact}>
            <Add />
          </IconButton>
        </Box>
      </Box>

      {/* Expandable Content */}
      {expanded && (
        <Box>
          {contacts.slice(0, showAll ? contacts.length : 3).map((contact) => (
            <Card key={contact.id} sx={{ mb: "var(--spacing-unit)", mt: "var(--spacing-unit)" }}>
              <CardContent sx={{ display: "flex", alignItems: "center", "&:hover": { bgcolor: "action.hover" } }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontSize: "var(--font-size-base)" }}>
                    {contact.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "var(--font-size-base)" }}>
                    {contact.role}
                  </Typography>
                </Box>
                <IconButton>
                  <Email />
                </IconButton>
                <IconButton>
                  <Phone />
                </IconButton>
                <IconButton onClick={(e) => handleMenuClick(e, contact)}>
                  <MoreVert />
                </IconButton>
              </CardContent>
            </Card>
          ))}
          {!showAll && contacts.length > 3 && (
            <Button onClick={() => setShowAll(true)} sx={{ fontSize: "var(--font-size-base)" }}>
              Show {contacts.length - 3} more
            </Button>
          )}
        </Box>
      )}

      {/* Menu for Edit/Delete Options */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => setOpenDialog(true)} sx={{ fontSize: "var(--font-size-base)" }}>
          <Add sx={{ mr: 1 }} /> Edit contact
        </MenuItem>
        <MenuItem onClick={() => handleDeleteContact(editContact?.id)} sx={{ fontSize: "var(--font-size-base)" }}>
          <Add sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={openDialog} onClose={() => setOpenDialog(false)} onSave={handleSaveContact} contact={editContact} />
    </Card>
  );
};

export default ContactCard;
