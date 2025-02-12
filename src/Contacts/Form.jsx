import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Search, Add, ExpandMore, ExpandLess, Edit, MoreVert, Email, Phone, Delete } from "@mui/icons-material";

const initialContacts = [
  {
    id: 1,
    name: "Close Sales Team",
    role: "Sales",
    phone: "+18334625673",
    email: "sales@close.com",
  },
  {
    id: 2,
    name: "Nick Persico",
    role: "Sr. Director of Business",
    phone: "+18334625674",
    email: "nick@close.com",
  },
  {
    id: 3,
    name: "Close Customer Success",
    role: "Support",
    phone: "+18334625675",
    email: "support@close.com",
  },
];

export default function Form() {
  const [contacts, setContacts] = useState(initialContacts);
  const [showAll, setShowAll] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editContact, setEditContact] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [expanded, setExpanded] = useState(false); // To manage the expand/collapse state for the card

  const handleAddContact = () => {
    setEditContact(null);
    setOpenDialog(true);
  };

  const handleEditContact = (contact) => {
    setEditContact(contact);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
    handleMenuClose();
  };

  const handleMenuClick = (event, contact) => {
    setAnchorEl(event.currentTarget);
    setSelectedContact(contact);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedContact(null);
  };

  const handleSave = (formData) => {
    if (editContact) {
      setContacts(contacts.map((contact) => (contact.id === editContact.id ? { ...contact, ...formData } : contact)));
    } else {
      setContacts([...contacts, { id: Date.now(), ...formData }]);
    }
    setOpenDialog(false);
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded); // Toggle the expand state
  };

  return (
    <Box sx={{ minWidth: 300, mx: "auto" ,backgroundColor:"#f5f5f5" ,borderRadius:2,mt:2,ml:-4 ,height:"48px",pt:1,boxShadow:3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <IconButton onClick={handleToggleExpand}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            CONTACTS
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ ml: 1, color: "text.secondary" }}>
            {contacts.length}
          </Typography>
        </Box>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton onClick={handleAddContact}>
          <Add />
        </IconButton>
      </Box>

      {/* Expanded Contact List */}
      {expanded && (
        <Box sx={{ border: "1px solid #ccc", borderRadius: 2, padding: 2 }}>
          {contacts.slice(0, showAll ? contacts.length : 3).map((contact) => (
            <Card key={contact.id} sx={{ mb: 1 }}>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { bgcolor: "action.hover" },
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1">{contact.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
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
            <Button onClick={() => setShowAll(true)}>Show {contacts.length - 3} more</Button>
          )}
        </Box>
      )}

      {/* Menu for Edit/Delete Options */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleEditContact(selectedContact)}>
          <Edit sx={{ mr: 1 }} /> Edit contact
        </MenuItem>
        <MenuItem onClick={() => handleDeleteContact(selectedContact?.id)}>
          <Delete sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      {/* Contact Dialog */}
      <ContactDialog open={openDialog} onClose={() => setOpenDialog(false)} onSave={handleSave} contact={editContact} />
    </Box>
  );
}

function ContactDialog({ open, onClose, onSave, contact }) {
  const [formData, setFormData] = useState({
    name: contact?.name || "",
    role: contact?.role || "",
    phone: contact?.phone || "",
    email: contact?.email || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{contact ? "Edit Contact" : "Add Contact"}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Role"
            fullWidth
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              DETAILS
            </Typography>
            <TextField
              margin="dense"
              label="Phone"
              fullWidth
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Email"
              fullWidth
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
