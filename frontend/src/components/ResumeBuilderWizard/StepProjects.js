import React from 'react';
import { TextField, Box, Typography, Button, Grid } from '@mui/material';

const StepProjects = ({ data, onChange }) => {
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...data.projectHighlights];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange('projectHighlights', newProjects);
  };

  const addProject = () => {
    const newProjects = [...(data.projectHighlights || [])];
    newProjects.push({ title: '', description: '', technologies: [] });
    onChange('projectHighlights', newProjects);
  };

  const removeProject = (index) => {
    const newProjects = [...data.projectHighlights];
    newProjects.splice(index, 1);
    onChange('projectHighlights', newProjects);
  };

  const handleTechnologiesChange = (index, value) => {
    const newProjects = [...data.projectHighlights];
    newProjects[index].technologies = value.split(',').map((tech) => tech.trim());
    onChange('projectHighlights', newProjects);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Project Highlights
      </Typography>
      {(data.projectHighlights || []).map((project, index) => (
        <Box key={index} mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={project.title}
                onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Technologies (comma separated)"
                fullWidth
                margin="normal"
                value={project.technologies.join(', ')}
                onChange={(e) => handleTechnologiesChange(index, e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                margin="normal"
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="error" onClick={() => removeProject(index)}>
                Remove Project
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button variant="contained" onClick={addProject}>
        Add Project
      </Button>
    </Box>
  );
};

export default StepProjects;
