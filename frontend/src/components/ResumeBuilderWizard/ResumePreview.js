import React from 'react';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';

const ResumePreview = ({ resumeData, score, template }) => {
  if (!resumeData) {
    return <Typography variant="body1">No resume data to preview.</Typography>;
  }

  const handleDownload = () => {
    // Placeholder for download functionality (e.g., generate PDF)
    alert('Download functionality to be implemented.');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxHeight: '80vh', overflowY: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Resume Preview - Template: {template}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Resume Score: {score}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="h6">Target Job/Industry</Typography>
      <Typography>{resumeData.targetJob}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Technical Skills</Typography>
      <Typography>{(resumeData.technicalSkills || []).join(', ')}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Experience</Typography>
      {(resumeData.experienceDetails || []).map((exp, idx) => (
        <Box key={idx} mb={1}>
          <Typography variant="subtitle1">{exp.role} at {exp.company}</Typography>
          <Typography variant="body2">
            {exp.startDate} - {exp.endDate}
          </Typography>
          <Typography variant="body2">{exp.description}</Typography>
        </Box>
      ))}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Education</Typography>
      {(resumeData.educationBackground || []).map((edu, idx) => (
        <Box key={idx} mb={1}>
          <Typography variant="subtitle1">{edu.degree} at {edu.institution}</Typography>
          <Typography variant="body2">
            {edu.startDate} - {edu.endDate}
          </Typography>
          <Typography variant="body2">{edu.description}</Typography>
        </Box>
      ))}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Projects</Typography>
      {(resumeData.projectHighlights || []).map((proj, idx) => (
        <Box key={idx} mb={1}>
          <Typography variant="subtitle1">{proj.title}</Typography>
          <Typography variant="body2">Technologies: {proj.technologies.join(', ')}</Typography>
          <Typography variant="body2">{proj.description}</Typography>
        </Box>
      ))}
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleDownload}>
          Download Resume
        </Button>
      </Box>
    </Paper>
  );
};

export default ResumePreview;
