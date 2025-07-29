const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboardController');

router.get('/dashboard-metrics', dashboardController.getDashboardMetrics);

module.exports = router;