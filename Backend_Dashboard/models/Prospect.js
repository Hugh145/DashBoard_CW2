const mongoose = require('mongoose');
const ProspectSchema = new mongoose.Schema({
  Region: String,
  division: String,
  type: String,
  data: Number
});

module.exports = mongoose.model('Prospect', ProspectSchema);