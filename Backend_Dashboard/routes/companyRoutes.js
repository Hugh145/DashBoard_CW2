const express = require('express');
const { getTopCompanies, getAllCompanies } = require('../controller/companyController'); 
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/top', verifyToken, getTopCompanies);
router.get('/', verifyToken, getAllCompanies); // ✅ This route serves all companies

module.exports = router;