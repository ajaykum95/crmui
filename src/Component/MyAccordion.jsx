import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const MyAccordion = ({ name, ItemComponent, FormComponent }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Box
    
      sx={{
        width: '310px',
        border: '1px solid #CCC',
        borderRadius: 2,
        marginBottom: 2,
        marginLeft: '230px',
        height: 'auto',
        backgroundColor: '#DBF5EE',
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 3,
        }}
      >
        <Typography variant="h6" sx={{fontSize:"14px",fontWeight:"bold"}}  >{name} 3 </Typography>
        <Button onClick={toggleForm} color="black">
          {showForm ? <Remove /> : <Add />}
        </Button>
      </Box>

      {/* Horizontal Rule */}
      <hr style={{ border: '1px solid #ccc', width: '100%', margin: '0' }} />

      {/* Conditionally render the FormComponent */}
      {showForm && (
        <Box sx={{ padding: 2, borderRadius: 1 }}>
          <FormComponent />
        </Box>
      )}

      {/* Render ItemComponent */}
      <Box sx={{  borderRadius: 1, backgroundColor: 'white', }}>
        <ItemComponent  />
      </Box>
    </Box>
  );
};

export default MyAccordion;
