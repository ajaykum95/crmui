import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, InputAdornment } from '@mui/material';

const ContactsForm = () => {
  const [contacts, setContacts] = useState([{ contactType: '', contactDetail: '' }]);

  const handleAddMore = () => {
    setContacts([...contacts, { contactType: '', contactDetail: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Name Field */}
      <TextField label="Name" variant="outlined" fullWidth size="small" />

      {/* Title Field */}
      <TextField label="Title" variant="outlined" fullWidth size="small" />

      {/* Contact Fields */}
      {contacts.map((contact, index) => (
        <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {/* Select Contact Type */}
          <FormControl sx={{ width:"100px"}} size="small">
            <InputLabel id={`contact-type-label-${index}`}>Contact</InputLabel>
            <Select
              labelId={`contact-type-label-${index}`}
              value={contact.contactType}
              onChange={(e) => handleChange(index, 'contactType', e.target.value)}
              label="Contact"
              >
              <MenuItem value="Mobile">Mobile</MenuItem>
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Direct">Direct</MenuItem>
            </Select>
          </FormControl>

          {/* Contact Detail TextField */}
          <TextField
            id={`outlined-adornment-contact-${index}`}
            variant="outlined"
            fullWidth
            size="small"
            value={contact.contactDetail}
            onChange={(e) => handleChange(index, 'contactDetail', e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
        </Box>
      ))}

      {/* Add More Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="outlined" onClick={handleAddMore}>
          Add More
        </Button>
      </Box>

      {/* Action Buttons */}
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

export default ContactsForm;
