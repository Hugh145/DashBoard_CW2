const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  country: String,
  taxation: Number,
  audit: Number,
  advisory: Number,
  numTaxation: Number,
  numAudit: Number,
  numAdvisory: Number,
  totalTaxation: Number,
  totalAudit: Number,
  totalAdvisory: Number,
  region: String,
  rank: Number
});

module.exports = mongoose.model('Company', CompanySchema);