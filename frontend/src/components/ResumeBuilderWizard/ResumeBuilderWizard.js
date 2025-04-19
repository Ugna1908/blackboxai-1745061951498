import React, { useState } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography } from '@mui/material';
import StepPersonalInfo from './StepPersonalInfo';
import StepExperience from './StepExperience';
import StepEducation from './StepEducation';
import StepSkills from './StepSkills';
import StepProjects from './StepProjects';
import ResumePreview from './ResumePreview';
import axios from 'axios';

const steps = [
  'Personal Info',
  'Experience',
  'Education',
  'Skills',
  'Projects',
  'Preview',
];

const ResumeBuilderWizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    targetJob: '',
    fullName: '',
    email: '',
    phone: '',
    experienceDetails: [],
    educationBackground: [],
    technicalSkills: [],
    projectHighlights: [],
  });
  const [resumeScore, setResumeScore] = useState(null);
  const [templateUsed, setTemplateUsed] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);

  const handleNext = async () => {
    if (activeStep === steps.length - 2) {
      // On moving to Preview step, submit data to backend for AI resume generation
      try {
        setSubmissionError(null);
        const response = await axios.post('/api/resumes/create', formData);
        setResumeScore(response.data.resumeScore);
        setTemplateUsed(response.data.templateUsed);
        setActiveStep((prev) => prev + 1);
      } catch (error) {
        setSubmissionError(error.response?.data?.message || 'Failed to generate resume');
      }
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepPersonalInfo data={formData} onChange={handleChange} />;
      case 1:
        return <StepExperience data={formData} onChange={handleChange} />;
      case 2:
        return <StepEducation data={formData} onChange={handleChange} />;
      case 3:
        return <StepSkills data={formData} onChange={handleChange} />;
      case 4:
        return <StepProjects data={formData} onChange={handleChange} />;
      case 5:
        return <ResumePreview resumeData={formData} score={resumeScore} template={templateUsed} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Resume Builder Wizard
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3, mb: 2 }}>
        {getStepContent(activeStep)}
        {submissionError && (
          <Typography color="error" sx={{ mt: 2 }}>
            {submissionError}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeBuilderWizard;
