const Company = require('../models/companies');

exports.getTopCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ rank: 1 }).limit(10);
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all companies', error });
  }
};