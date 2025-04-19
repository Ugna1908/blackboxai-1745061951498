const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  targetJob: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  technicalSkills: [String],
  experienceDetails: [
    {
      company: String,
      role: String,
      startDate: Date,
      endDate: Date,
      description: String
    }
  ],
  educationBackground: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date,
      description: String
    }
  ],
  projectHighlights: [
    {
      title: String,
      description: String,
      technologies: [String]
    }
  ],
  generatedResume: {
    type: String // Could be a URL or base64 encoded PDF string (prefer URL)
  },
  templateUsed: {
    type: String
  },
  resumeScore: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
