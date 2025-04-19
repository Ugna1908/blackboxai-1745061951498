const Resume = require('../models/Resume');
const logger = require('../utils/logger');

// Placeholder for AI resume generation and scoring service
const resumeService = require('../services/resumeService');

exports.createResume = async (req, res, next) => {
  try {
    const resumeData = req.body;
    // Call AI service to generate optimized resume and score
    const { generatedResume, resumeScore, templateUsed } = await resumeService.generateResume(resumeData);

    const resume = new Resume({
      ...resumeData,
      generatedResume,
      resumeScore,
      templateUsed,
    });

    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getResumeById = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      res.status(404);
      throw new Error('Resume not found');
    }
    res.json(resume);
  } catch (error) {
    next(error);
  }
};

exports.updateResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      res.status(404);
      throw new Error('Resume not found');
    }
    Object.assign(resume, req.body);
    await resume.save();
    res.json(resume);
  } catch (error) {
    next(error);
  }
};
