// backend/models/CompanyTimeTableData.js
const mongoose = require('mongoose');
const CompanyTimeTableDataSchema = new mongoose.Schema({
  region: String,
  discipline: String,
  month: String,
  revenue: Number,
  pnl: Number,
  map: Number
});

module.exports = mongoose.model('CompanyTimeTableData', CompanyTimeTableDataSchema);