import React from 'react';
import { TextField, Box, Typography, Button, Grid } from '@mui/material';

const StepExperience = ({ data, onChange }) => {
  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...data.experienceDetails];
    newExperience[index] = { ...newExperience[index], [field]: value };
    onChange('experienceDetails', newExperience);
  };

  const addExperience = () => {
    const newExperience = [...(data.experienceDetails || [])];
    newExperience.push({ company: '', role: '', startDate: '', endDate: '', description: '' });
    onChange('experienceDetails', newExperience);
  };

  const removeExperience = (index) => {
    const newExperience = [...data.experienceDetails];
    newExperience.splice(index, 1);
    onChange('experienceDetails', newExperience);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Experience Details
      </Typography>
      {(data.experienceDetails || []).map((exp, index) => (
        <Box key={index} mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Company"
                fullWidth
                margin="normal"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Role"
                fullWidth
                margin="normal"
                value={exp.role}
                onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                margin="normal"
                value={exp.description}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="error" onClick={() => removeExperience(index)}>
                Remove Experience
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button variant="contained" onClick={addExperience}>
        Add Experience
      </Button>
    </Box>
  );
};

export default StepExperience;
