import React from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const skillsByIndustry = {
  'Software Development': [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'React',
    'Node.js',
    'Django',
    'SQL',
    'NoSQL',
  ],
  'Data Science': [
    'Python',
    'R',
    'TensorFlow',
    'PyTorch',
    'SQL',
    'Data Visualization',
    'Machine Learning',
  ],
  'Marketing': [
    'SEO',
    'Content Marketing',
    'Google Analytics',
    'Social Media',
    'Email Marketing',
  ],
  // Add more industries and skills as needed
};

const StepSkills = ({ data, onChange }) => {
  const industry = data.industry || 'Software Development';
  const skills = skillsByIndustry[industry] || [];

  const handleSkillChange = (skill) => {
    const currentSkills = data.technicalSkills || [];
    if (currentSkills.includes(skill)) {
      onChange(
        'technicalSkills',
        currentSkills.filter((s) => s !== skill)
      );
    } else {
      onChange('technicalSkills', [...currentSkills, skill]);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Technical Skills (Select all that apply)
      </Typography>
      <FormGroup>
        {skills.map((skill) => (
          <FormControlLabel
            key={skill}
            control={
              <Checkbox
                checked={(data.technicalSkills || []).includes(skill)}
                onChange={() => handleSkillChange(skill)}
              />
            }
            label={skill}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default StepSkills;
