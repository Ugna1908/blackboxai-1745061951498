const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Super Admin routes
router.get('/system-overview', adminController.getSystemOverview);
router.get('/user-management', adminController.getUserManagement);
router.get('/revenue-analytics', adminController.getRevenueAnalytics);
router.post('/system-config', adminController.updateSystemConfig);
router.get('/data-privacy', adminController.getDataPrivacySettings);

// Training Institute Admin routes
router.post('/institute-onboarding', adminController.instituteOnboarding);
router.post('/billing-management', adminController.billingManagement);
router.get('/usage-analytics', adminController.getUsageAnalytics);
router.post('/support-ticket', adminController.handleSupportTicket);

// Job Consultancy Admin routes
router.post('/consultancy-verification', adminController.consultancyVerification);
router.post('/credit-package-management', adminController.creditPackageManagement);
router.post('/access-controls', adminController.accessControlsConfig);
router.post('/communication-template-approval', adminController.communicationTemplateApproval);
router.get('/usage-monitoring', adminController.getUsageMonitoring);

module.exports = router;
