const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Create a new resume
router.post('/create', resumeController.createResume);

// Get a resume by ID
router.get('/:id', resumeController.getResumeById);

// Update a resume by ID
router.put('/:id', resumeController.updateResume);

module.exports = router;
