const express = require('express');
const router = express.Router();
const instituteController = require('../controllers/instituteController');

// Candidate pool analytics
router.get('/analytics', instituteController.getCandidateAnalytics);

// Candidate matching
router.get('/candidate-matching', instituteController.getCandidateMatching);

// Batch planning tools
router.post('/batch-planning', instituteController.createBatchPlan);

// Communication center
router.post('/outreach', instituteController.sendOutreachCampaign);

// ROI tracking
router.get('/roi', instituteController.getROITracking);

module.exports = router;
