const express = require('express');
const router = express.Router();
const consultancyController = require('../controllers/consultancyController');

// Advanced candidate search
router.get('/search', consultancyController.searchCandidates);

// Credit system management
router.post('/credits/purchase', consultancyController.purchaseCredits);
router.get('/credits/status', consultancyController.getCreditStatus);

// Candidate activity tracking
router.get('/candidate-activity', consultancyController.getCandidateActivity);

// ATS integration
router.post('/ats/integrate', consultancyController.integrateATS);

// Analytics on candidate response rates
router.get('/analytics/response-rates', consultancyController.getResponseRateAnalytics);

// Custom tagging and organization
router.post('/tags', consultancyController.createTag);
router.get('/tags', consultancyController.getTags);

module.exports = router;
