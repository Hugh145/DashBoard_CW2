const mongoose = require('mongoose');
const CompanyGroupSumSchema = new mongoose.Schema({
  region: String,
  rank: Number,
  tax: String,
  taxRev: Number,
  taxOverall: Number,
  audit: String,
  auditRev: Number,
  auditOverall: Number,
  advisory: String,
  advisoryRev: Number,
  advisoryOverall: Number
});

module.exports = mongoose.model('CompanyGroupSum', CompanyGroupSumSchema);
// This schema is used to summarize company data by region and rank, including financial metrics for taxation, audit, and advisory services.
// It is designed to aggregate data for reporting and analysis purposes, allowing for efficient retrieval of grouped company information.