import React from 'react';
import { TextField, Box, Typography, Button, Grid } from '@mui/material';

const StepEducation = ({ data, onChange }) => {
  const handleEducationChange = (index, field, value) => {
    const newEducation = [...data.educationBackground];
    newEducation[index] = { ...newEducation[index], [field]: value };
    onChange('educationBackground', newEducation);
  };

  const addEducation = () => {
    const newEducation = [...(data.educationBackground || [])];
    newEducation.push({ institution: '', degree: '', startDate: '', endDate: '', description: '' });
    onChange('educationBackground', newEducation);
  };

  const removeEducation = (index) => {
    const newEducation = [...data.educationBackground];
    newEducation.splice(index, 1);
    onChange('educationBackground', newEducation);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Education Background
      </Typography>
      {(data.educationBackground || []).map((edu, index) => (
        <Box key={index} mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Institution"
                fullWidth
                margin="normal"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Degree"
                fullWidth
                margin="normal"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={edu.startDate}
                onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={edu.endDate}
                onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                margin="normal"
                value={edu.description}
                onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="error" onClick={() => removeEducation(index)}>
                Remove Education
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button variant="contained" onClick={addEducation}>
        Add Education
      </Button>
    </Box>
  );
};

export default StepEducation;
