import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

const StepPersonalInfo = ({ data, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <TextField
        label="Target Job/Industry"
        fullWidth
        margin="normal"
        value={data.targetJob || ''}
        onChange={(e) => onChange('targetJob', e.target.value)}
      />
      <TextField
        label="Full Name"
        fullWidth
        margin="normal"
        value={data.fullName || ''}
        onChange={(e) => onChange('fullName', e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={data.email || ''}
        onChange={(e) => onChange('email', e.target.value)}
      />
      <TextField
        label="Phone Number"
        fullWidth
        margin="normal"
        value={data.phone || ''}
        onChange={(e) => onChange('phone', e.target.value)}
      />
    </Box>
  );
};

export default StepPersonalInfo;
