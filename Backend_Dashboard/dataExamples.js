// dataExamples.js
// This script seeds sample data into the MongoDB database for testing purposes.
const mongoose = require('mongoose');
const User = require('./models/users.js');
const Company = require('./models/companies.js');
const CompanyGroupSum = require('./models/CompanyGroupSum.js');
const Prospect = require('./models/Prospect.js');
const CompanyTimeTableData = require('./models/CompanyTimeTableData.js');

// MongoDB connection URI (replace with your actual URI)
//const mongoURI = 'mongodb+srv://campbellh2711:QA6e6QauXQBFR5f3@dashboardcluster.i6p3lxg.mongodb.net/?retryWrites=true&w=majority&appName=DashboardCluster';
const mongoURI = 'mongodb+srv://campbellh2711:QA6e6QauXQBFR5f3@dashboardcluster.i6p3lxg.mongodb.net/media_scope';
async function dataExamples() {
  try {
   await mongoose.connect(mongoURI);

    // Clean existing data to avoid duplicates
    await User.deleteMany({});
    await Company.deleteMany({});
    await CompanyGroupSum.deleteMany({});
    await Prospect.deleteMany({});
    await CompanyTimeTableData.deleteMany({});

    // Sample users
    // These users are for testing purposes and can be modified as needed.

    const users = [
      { username: 'alice', email: 'alice@example.com', password: 'password123' },
      { username: 'bob', email: 'bob@example.com', password: 'securepass456' }
    ];

    // Sample companies
    // These companies are for testing purposes and can be modified as needed.
    const companies = [
  {
    "Region": "Europe",
    "name": "Carrefour",
    "type": "Retail",
    "country": "\u00a0France",
    "taxation": 6812150.505756527,
    "audit": 9400767.697944006,
    "advisory": 3406075.2528782636,
    "numTaxation": 2,
    "numAudit": 2,
    "numAdvisory": 4,
    "totalTaxation": 10,
    "totalAudit": 9,
    "totalAdvisory": 12,
    "region": "Europe",
    "rank": 1
  },
  {
    "Region": "Europe",
    "name": "Statoil",
    "type": "Oil and gas",
    "country": "\u00a0Norway",
    "taxation": 5274872.285927179,
    "audit": 7279323.754579506,
    "advisory": 2637436.1429635896,
    "numTaxation": 4,
    "numAudit": 4,
    "numAdvisory": 6,
    "totalTaxation": 14,
    "totalAudit": 12,
    "totalAdvisory": 17,
    "region": "Europe",
    "rank": 2
  },
  {
    "Region": "Europe",
    "name": "Banco Santander",
    "type": "Financial services",
    "country": "\u00a0Spain",
    "taxation": 7663669.318976094,
    "audit": 10575863.660187008,
    "advisory": 3831834.659488047,
    "numTaxation": 1,
    "numAudit": 1,
    "numAdvisory": 2,
    "totalTaxation": 9,
    "totalAudit": 8,
    "totalAdvisory": 10,
    "region": "Europe",
    "rank": 3
  },
  {
    "Region": "Europe",
    "name": "Exor",
    "type": "Investment",
    "country": "\u00a0Italy",
    "taxation": 4509112.879317396,
    "audit": 6222575.773458007,
    "advisory": 2254556.439658698,
    "numTaxation": 6,
    "numAudit": 6,
    "numAdvisory": 8,
    "totalTaxation": 16,
    "totalAudit": 15,
    "totalAdvisory": 19,
    "region": "Europe",
    "rank": 4
  },
  {
    "Region": "Europe",
    "name": "Siemens",
    "type": "Conglomerate",
    "country": "\u00a0Germany",
    "taxation": 6748080.0,
    "audit": 9312350.399999999,
    "advisory": 3374040.0,
    "numTaxation": 3,
    "numAudit": 3,
    "numAdvisory": 5,
    "totalTaxation": 11,
    "totalAudit": 10,
    "totalAdvisory": 14,
    "region": "Europe",
    "rank": 5
  },
  {
    "Region": "Europe",
    "name": "Assicurazioni Generali",
    "type": "Financial services",
    "country": "\u00a0Italy",
    "taxation": 2980315.8462684806,
    "audit": 1000456.0,
    "advisory": 4490157.92313424,
    "numTaxation": 8,
    "numAudit": 10,
    "numAdvisory": 1,
    "totalTaxation": 22,
    "totalAudit": 30,
    "totalAdvisory": 9,
    "region": "Europe",
    "rank": 6
  },
  {
    "Region": "Europe",
    "name": "Lukoil",
    "type": "Oil and gas",
    "country": "\u00a0Russia",
    "taxation": 4869112.879317396,
    "audit": 6719375.773458006,
    "advisory": 2434556.439658698,
    "numTaxation": 5,
    "numAudit": 5,
    "numAdvisory": 7,
    "totalTaxation": 15,
    "totalAudit": 14,
    "totalAdvisory": 18,
    "region": "Europe",
    "rank": 7
  },
  {
    "Region": "Europe",
    "name": "Enel",
    "type": "Electric utility",
    "country": "\u00a0Italy",
    "taxation": 3471834.6594880475,
    "audit": 4791131.830093505,
    "advisory": 1735917.3297440237,
    "numTaxation": 7,
    "numAudit": 7,
    "numAdvisory": 9,
    "totalTaxation": 19,
    "totalAudit": 17,
    "totalAdvisory": 21,
    "region": "Europe",
    "rank": 8
  },
  {
    "Region": "Europe",
    "name": "HSBC",
    "type": "Financial services",
    "country": "\u00a0United Kingdom",
    "taxation": 2489410.0,
    "audit": 3435385.8,
    "advisory": 1244705.0,
    "numTaxation": 9,
    "numAudit": 8,
    "numAdvisory": 10,
    "totalTaxation": 25,
    "totalAudit": 23,
    "totalAdvisory": 26,
    "region": "Europe",
    "rank": 9
  },
  {
    "Region": "Europe",
    "name": "Cr\u00e9dit Agricole",
    "type": "Financial services",
    "country": "\u00a0France",
    "taxation": 1303037.626439132,
    "audit": 1798191.924486002,
    "advisory": 3651518.81321956,
    "numTaxation": 10,
    "numAudit": 9,
    "numAdvisory": 3,
    "totalTaxation": 28,
    "totalAudit": 26,
    "totalAdvisory": 11,
    "region": "Europe",
    "rank": 10
  },
  {
    "Region": "Americas",
    "name": "General Motors",
    "type": "Motor",
    "country": "USA",
    "taxation": 11454975.0,
    "audit": 10807865.5,
    "advisory": 5727487.5,
    "numTaxation": 1,
    "numAudit": 2,
    "numAdvisory": 2,
    "totalTaxation": 3,
    "totalAudit": 6,
    "totalAdvisory": 5,
    "region": "Americas",
    "rank": 11
  },
  {
    "Region": "Americas",
    "name": "General Electric",
    "type": "Electric utility",
    "country": "USA",
    "taxation": 7831750.0,
    "audit": 10807815.0,
    "advisory": 13915875.0,
    "numTaxation": 3,
    "numAudit": 3,
    "numAdvisory": 1,
    "totalTaxation": 8,
    "totalAudit": 7,
    "totalAdvisory": 1,
    "region": "Americas",
    "rank": 12
  },
  {
    "Region": "Americas",
    "name": "Berkshire Hathaway",
    "type": "Financial services",
    "country": "USA",
    "taxation": 5280880.0,
    "audit": 7287614.3999999985,
    "advisory": 2640440.0,
    "numTaxation": 5,
    "numAudit": 4,
    "numAdvisory": 5,
    "totalTaxation": 13,
    "totalAudit": 11,
    "totalAdvisory": 16,
    "region": "Americas",
    "rank": 13
  },
  {
    "Region": "Americas",
    "name": "Fannie Mae",
    "type": "Financial services",
    "country": "USA",
    "taxation": 3184020.0,
    "audit": 4393947.6,
    "advisory": 1592010.0,
    "numTaxation": 7,
    "numAudit": 6,
    "numAdvisory": 7,
    "totalTaxation": 20,
    "totalAudit": 18,
    "totalAdvisory": 22,
    "region": "Americas",
    "rank": 14
  },
  {
    "Region": "Americas",
    "name": "Ford Motor",
    "type": "Motor",
    "country": "USA",
    "taxation": 11251380.0,
    "audit": 15526904.399999997,
    "advisory": 5625690.0,
    "numTaxation": 2,
    "numAudit": 1,
    "numAdvisory": 3,
    "totalTaxation": 4,
    "totalAudit": 2,
    "totalAdvisory": 6,
    "region": "Americas",
    "rank": 15
  },
  {
    "Region": "Americas",
    "name": "Hewlett-Packard",
    "type": "Technology",
    "country": "USA",
    "taxation": 5533640.0,
    "audit": 3818211.599999999,
    "advisory": 3383410.0,
    "numTaxation": 4,
    "numAudit": 8,
    "numAdvisory": 4,
    "totalTaxation": 12,
    "totalAudit": 21,
    "totalAdvisory": 13,
    "region": "Americas",
    "rank": 16
  },
  {
    "Region": "Americas",
    "name": "AT&T",
    "type": "Communications",
    "country": "USA",
    "taxation": 3036480.0,
    "audit": 4190342.3999999994,
    "advisory": 1518240.0,
    "numTaxation": 8,
    "numAudit": 7,
    "numAdvisory": 8,
    "totalTaxation": 21,
    "totalAudit": 19,
    "totalAdvisory": 23,
    "region": "Americas",
    "rank": 17
  },
  {
    "Region": "Americas",
    "name": "Apple",
    "type": "Technology",
    "country": "USA",
    "taxation": 923680.0,
    "audit": 1274678.4,
    "advisory": 1461840.0,
    "numTaxation": 10,
    "numAudit": 10,
    "numAdvisory": 9,
    "totalTaxation": 30,
    "totalAudit": 29,
    "totalAdvisory": 24,
    "region": "Americas",
    "rank": 18
  },
  {
    "Region": "Americas",
    "name": "Citigroup",
    "type": "Financial services",
    "country": "USA",
    "taxation": 2042460.0,
    "audit": 2818594.8,
    "advisory": 1021230.0,
    "numTaxation": 9,
    "numAudit": 9,
    "numAdvisory": 10,
    "totalTaxation": 27,
    "totalAudit": 25,
    "totalAdvisory": 28,
    "region": "Americas",
    "rank": 19
  },
  {
    "Region": "Americas",
    "name": "Walmart",
    "type": "Retail",
    "country": "USA",
    "taxation": 3834240.0,
    "audit": 5291251.2,
    "advisory": 1917120.0,
    "numTaxation": 6,
    "numAudit": 5,
    "numAdvisory": 6,
    "totalTaxation": 18,
    "totalAudit": 16,
    "totalAdvisory": 20,
    "region": "Americas",
    "rank": 20
  },
  {
    "Region": "Asia Pac",
    "name": "Adaro Energy",
    "type": "Materials",
    "country": "Indonesia",
    "taxation": 14409000.0,
    "audit": 12884420.0,
    "advisory": 7204500.0,
    "numTaxation": 1,
    "numAudit": 4,
    "numAdvisory": 2,
    "totalTaxation": 1,
    "totalAudit": 5,
    "totalAdvisory": 3,
    "region": "Asia Pac",
    "rank": 21
  },
  {
    "Region": "Asia Pac",
    "name": "Agile Property Holdings",
    "type": "Real Estate",
    "country": "China",
    "taxation": 11045120.0,
    "audit": 15242265.599999998,
    "advisory": 5522560.0,
    "numTaxation": 3,
    "numAudit": 2,
    "numAdvisory": 4,
    "totalTaxation": 5,
    "totalAudit": 3,
    "totalAdvisory": 7,
    "region": "Asia Pac",
    "rank": 22
  },
  {
    "Region": "Asia Pac",
    "name": "Anhui Conch Cement",
    "type": "Construction",
    "country": "China",
    "taxation": 13254940.0,
    "audit": 18291817.199999996,
    "advisory": 6627470.0,
    "numTaxation": 2,
    "numAudit": 1,
    "numAdvisory": 3,
    "totalTaxation": 2,
    "totalAudit": 1,
    "totalAdvisory": 4,
    "region": "Asia Pac",
    "rank": 23
  },
  {
    "Region": "Asia Pac",
    "name": "Asia Pacific Breweries",
    "type": "Food",
    "country": "Singapore",
    "taxation": 2813400.0,
    "audit": 3882491.999999999,
    "advisory": 1406700.0,
    "numTaxation": 7,
    "numAudit": 6,
    "numAdvisory": 7,
    "totalTaxation": 23,
    "totalAudit": 20,
    "totalAdvisory": 25,
    "region": "Asia Pac",
    "rank": 24
  },
  {
    "Region": "Asia Pac",
    "name": "Asian Paints",
    "type": "Chemicals",
    "country": "India",
    "taxation": 10162320.0,
    "audit": 14024001.6,
    "advisory": 5081160.0,
    "numTaxation": 4,
    "numAudit": 3,
    "numAdvisory": 5,
    "totalTaxation": 6,
    "totalAudit": 4,
    "totalAdvisory": 8,
    "region": "Asia Pac",
    "rank": 25
  },
  {
    "Region": "Asia Pac",
    "name": "Axiata Group",
    "type": "Technology",
    "country": "Malaysia",
    "taxation": 4153800.0,
    "audit": 3732244.0,
    "advisory": 8076900.0,
    "numTaxation": 6,
    "numAudit": 7,
    "numAdvisory": 1,
    "totalTaxation": 17,
    "totalAudit": 22,
    "totalAdvisory": 2,
    "region": "Asia Pac",
    "rank": 26
  },
  {
    "Region": "Asia Pac",
    "name": "Bank Central Asia",
    "type": "Banking",
    "country": "Indonesia",
    "taxation": 948960.0,
    "audit": 1309564.8,
    "advisory": 474480.0,
    "numTaxation": 10,
    "numAudit": 10,
    "numAdvisory": 10,
    "totalTaxation": 29,
    "totalAudit": 28,
    "totalAdvisory": 30,
    "region": "Asia Pac",
    "rank": 27
  },
  {
    "Region": "Asia Pac",
    "name": "Belle International Holdings",
    "type": "Retailing",
    "country": "China",
    "taxation": 2529520.0,
    "audit": 1490737.6,
    "advisory": 3264760.0,
    "numTaxation": 8,
    "numAudit": 9,
    "numAdvisory": 6,
    "totalTaxation": 24,
    "totalAudit": 27,
    "totalAdvisory": 15,
    "region": "Asia Pac",
    "rank": 28
  },
  {
    "Region": "Asia Pac",
    "name": "Bharti Airtel",
    "type": "Technology",
    "country": "India",
    "taxation": 2172720.0,
    "audit": 2998353.6,
    "advisory": 1086360.0,
    "numTaxation": 9,
    "numAudit": 8,
    "numAdvisory": 8,
    "totalTaxation": 26,
    "totalAudit": 24,
    "totalAdvisory": 27,
    "region": "Asia Pac",
    "rank": 29
  },
  {
    "Region": "Asia Pac",
    "name": "Changsha Zoomlion Heavy Industry",
    "type": "Capital Goods",
    "country": "China",
    "taxation": 8385120.0,
    "audit": 6911465.6,
    "advisory": 692560.0,
    "numTaxation": 5,
    "numAudit": 5,
    "numAdvisory": 9,
    "totalTaxation": 7,
    "totalAudit": 13,
    "totalAdvisory": 29,
    "region": "Asia Pac",
    "rank": 30
  }
  ];

    // Sample company group sums
    // These sums are for testing purposes and can be modified as needed.
    const CompanyGroupSumData = [
  {"region": "Europe", "rank": 1, "tax": "Banco Santander", "taxRev": 7663669, "taxOverall": 9, "audit": "Banco Santander", "auditRev": 10575864, "auditOverall": 8, "advisory": "Assicurazioni Generali", "advisoryRev": 4490158, "advisoryOverall": 9},
  { "region": "Europe", "rank": 2, "tax": "Carrefour", "taxRev": 6812151, "taxOverall": 10, "audit": "Carrefour", "auditRev": 9400768, "auditOverall": 9, "advisory": "Banco Santander", "advisoryRev": 3831835, "advisoryOverall": 10 },
  { "region": "Europe", "rank": 3, "tax": "Siemens", "taxRev": 6748080, "taxOverall": 11, "audit": "Siemens", "auditRev": 9312350, "auditOverall": 10, "advisory": "Crédit Agricole", "advisoryRev": 3651519, "advisoryOverall": 11 },
  { "region": "Europe", "rank": 4, "tax": "Statoil", "taxRev": 5274872, "taxOverall": 14, "audit": "Statoil", "auditRev": 7279324, "auditOverall": 12, "advisory": "Carrefour", "advisoryRev": 3406075, "advisoryOverall": 12 },
  { "region": "Europe", "rank": 5, "tax": "Lukoil", "taxRev": 4869113, "taxOverall": 15, "audit": "Lukoil", "auditRev": 6719376, "auditOverall": 14, "advisory": "Siemens", "advisoryRev": 3374040, "advisoryOverall": 14 },
  { "region": "Europe", "rank": 6, "tax": "Exor", "taxRev": 4509113, "taxOverall": 16, "audit": "Exor", "auditRev": 6222576, "auditOverall": 15, "advisory": "Statoil", "advisoryRev": 2637436, "advisoryOverall": 17 },
  { "region": "Europe", "rank": 7, "tax": "Enel", "taxRev": 3471835, "taxOverall": 19, "audit": "Enel", "auditRev": 4791132, "auditOverall": 17, "advisory": "Lukoil", "advisoryRev": 2434556, "advisoryOverall": 18 },
  { "region": "Europe", "rank": 8, "tax": "Assicurazioni Generali", "taxRev": 2980316, "taxOverall": 22, "audit": "HSBC", "auditRev": 3435386, "auditOverall": 23, "advisory": "Exor", "advisoryRev": 2254556, "advisoryOverall": 19 },
  { "region": "Europe", "rank": 9, "tax": "HSBC", "taxRev": 2489410, "taxOverall": 25, "audit": "Crédit Agricole", "auditRev": 1798192, "auditOverall": 26, "advisory": "Enel", "advisoryRev": 1735917, "advisoryOverall": 21 },
  { "region": "Europe", "rank": 10, "tax": "Crédit Agricole", "taxRev": 1303038, "taxOverall": 28, "audit": "Assicurazioni Generali", "auditRev": 1000456, "auditOverall": 30, "advisory": "HSBC", "advisoryRev": 1244705, "advisoryOverall": 26 },
  { "region": "Americas", "rank": 1, "tax": "General Motors", "taxRev": 11454975, "taxOverall": 3, "audit": "Ford Motor", "auditRev": 15526904, "auditOverall": 2, "advisory": "General Electric", "advisoryRev": 13915875, "advisoryOverall": 1 },
  { "region": "Americas", "rank": 2, "tax": "Ford Motor", "taxRev": 11251380, "taxOverall": 4, "audit": "General Motors", "auditRev": 10807866, "auditOverall": 6, "advisory": "General Motors", "advisoryRev": 5727488, "advisoryOverall": 5 },
  { "region": "Americas", "rank": 3, "tax": "General Electric", "taxRev": 7831750, "taxOverall": 8, "audit": "General Electric", "auditRev": 10807815, "auditOverall": 7, "advisory": "Ford Motor", "advisoryRev": 5625690, "advisoryOverall": 6 },
  { "region": "Americas", "rank": 4, "tax": "Hewlett-Packard", "taxRev": 5533640, "taxOverall": 12, "audit": "Berkshire Hathaway", "auditRev": 7287614, "auditOverall": 11, "advisory": "Hewlett-Packard", "advisoryRev": 3383410, "advisoryOverall": 13 },
  { "region": "Americas", "rank": 5, "tax": "Berkshire Hathaway", "taxRev": 5280880, "taxOverall": 13, "audit": "Walmart", "auditRev": 5291251, "auditOverall": 16, "advisory": "Berkshire Hathaway", "advisoryRev": 2640440, "advisoryOverall": 16 },
  { "region": "Americas", "rank": 6, "tax": "Walmart", "taxRev": 3834240, "taxOverall": 18, "audit": "Fannie Mae", "auditRev": 4393948, "auditOverall": 18, "advisory": "Walmart", "advisoryRev": 1917120, "advisoryOverall": 20 },
  { "region": "Americas", "rank": 7, "tax": "Fannie Mae", "taxRev": 3184020, "taxOverall": 20, "audit": "AT&T", "auditRev": 4190342, "auditOverall": 19, "advisory": "Fannie Mae", "advisoryRev": 1592010, "advisoryOverall": 22 },
  { "region": "Americas", "rank": 8, "tax": "AT&T", "taxRev": 3036480, "taxOverall": 21, "audit": "Hewlett-Packard", "auditRev": 3818212, "auditOverall": 21, "advisory": "AT&T", "advisoryRev": 1518240, "advisoryOverall": 23 },
  { "region": "Americas", "rank": 9, "tax": "Citigroup", "taxRev": 2042460, "taxOverall": 27, "audit": "Citigroup", "auditRev": 2818595, "auditOverall": 25, "advisory": "Apple", "advisoryRev": 1461840, "advisoryOverall": 24 },
  { "region": "Americas", "rank": 10, "tax": "Apple", "taxRev": 923680, "taxOverall": 30, "audit": "Apple", "auditRev": 1274678, "auditOverall": 29, "advisory": "Citigroup", "advisoryRev": 1021230, "advisoryOverall": 28 },
  { "region": "Asia Pac", "rank": 1, "tax": "Adaro Energy", "taxRev": 14409000, "taxOverall": 1, "audit": "Anhui Conch Cement", "auditRev": 18291817, "auditOverall": 1, "advisory": "Axiata Group", "advisoryRev": 8076900, "advisoryOverall": 2 },
  { "region": "Asia Pac", "rank": 2, "tax": "Anhui Conch Cement", "taxRev": 13254940, "taxOverall": 2, "audit": "Agile Property Holdings", "auditRev": 15242266, "auditOverall": 3, "advisory": "Adaro Energy", "advisoryRev": 7204500, "advisoryOverall": 3 },
  { "region": "Asia Pac", "rank": 3, "tax": "Agile Property Holdings", "taxRev": 11045120, "taxOverall": 5, "audit": "Asian Paints", "auditRev": 14024002, "auditOverall": 4, "advisory": "Anhui Conch Cement", "advisoryRev": 6627470, "advisoryOverall": 4 },
  { "region": "Asia Pac", "rank": 4, "tax": "Asian Paints", "taxRev": 10162320, "taxOverall": 6, "audit": "Adaro Energy", "auditRev": 12884420, "auditOverall": 5, "advisory": "Agile Property Holdings", "advisoryRev": 5522560, "advisoryOverall": 7 },
  { "region": "Asia Pac", "rank": 5, "tax": "Changsha Zoomlion Heavy Industry", "taxRev": 8385120, "taxOverall": 7, "audit": "Changsha Zoomlion Heavy Industry", "auditRev": 6911466, "auditOverall": 13, "advisory": "Asian Paints", "advisoryRev": 5081160, "advisoryOverall": 8 },
  { "region": "Asia Pac", "rank": 6, "tax": "Axiata Group", "taxRev": 4153800, "taxOverall": 17, "audit": "Asia Pacific Breweries", "auditRev": 3882492, "auditOverall": 20, "advisory": "Belle International Holdings", "advisoryRev": 3264760, "advisoryOverall": 15 },
  { "region": "Asia Pac", "rank": 7, "tax": "Asia Pacific Breweries", "taxRev": 2813400, "taxOverall": 23, "audit": "Axiata Group", "auditRev": 3732244, "auditOverall": 22, "advisory": "Asia Pacific Breweries", "advisoryRev": 1406700, "advisoryOverall": 25 },
  { "region": "Asia Pac", "rank": 8, "tax": "Belle International Holdings", "taxRev": 2529520, "taxOverall": 24, "audit": "Bharti Airtel", "auditRev": 2998354, "auditOverall": 24, "advisory": "Bharti Airtel", "advisoryRev": 1086360, "advisoryOverall": 27 },
  { "region": "Asia Pac", "rank": 9, "tax": "Bharti Airtel", "taxRev": 2172720, "taxOverall": 26, "audit": "Belle International Holdings", "auditRev": 1490738, "auditOverall": 27, "advisory": "Changsha Zoomlion Heavy Industry", "advisoryRev": 692560, "advisoryOverall": 29 },
  { "region": "Asia Pac", "rank": 10, "tax": "Bank Central Asia", "taxRev": 948960, "taxOverall": 29, "audit": "Bank Central Asia", "auditRev": 1309565, "auditOverall": 28, "advisory": "Bank Central Asia", "advisoryRev": 474480, "advisoryOverall": 30 }
];

  // Sample prospects
  const prospects = [
  {"Region": "Americas","division": "Taxation","type": "Leads","data": 1022.0},
  {"Region": "Americas","division": "Taxation","type": "Meetings","data": 140.0},
  {"Region": "Americas","division": "Taxation","type": "Submissions","data": 35.0},
  {  "Region": "Americas","division": "Taxation","type": "Shortlist","data": 23.0},
  {"Region": "Americas","division": "Audit","type": "Leads","data": 490.0},
  {  "Region": "Americas", "division": "Audit","type": "Meetings","data": 120.0},
  {"Region": "Americas","division": "Audit","type": "Submissions","data": 45.0},
  {"Region": "Americas","division": "Audit","type": "Shortlist","data": 12.0},
  {"Region": "Americas","division": "Advisory","type": "Leads","data": 560.0},
  {
    "Region": "Americas",
    "division": "Advisory",
    "type": "Meetings",
    "data": 58.0
  },
  {
    "Region": "Americas",
    "division": "Advisory",
    "type": "Submissions",
    "data": 28.0
  },
  {
    "Region": "Americas",
    "division": "Advisory",
    "type": "Shortlist",
    "data": 18.0
  },
  {
    "Region": "Europe",
    "division": "Taxation",
    "type": "Leads",
    "data": 449.68
  },
  {
    "Region": "Europe",
    "division": "Taxation",
    "type": "Meetings",
    "data": 61.6
  },
  {
    "Region": "Europe",
    "division": "Taxation",
    "type": "Submissions",
    "data": 30.0
  },
  {
    "Region": "Europe",
    "division": "Taxation",
    "type": "Shortlist",
    "data": 15.0
  },
  {
    "Region": "Europe",
    "division": "Audit",
    "type": "Leads",
    "data": 215.6
  },
  {
    "Region": "Europe",
    "division": "Audit",
    "type": "Meetings",
    "data": 52.8
  },
  {
    "Region": "Europe",
    "division": "Audit",
    "type": "Submissions",
    "data": 32.0
  },
  {
    "Region": "Europe",
    "division": "Audit",
    "type": "Shortlist",
    "data": 12.0
  },
  {
    "Region": "Europe",
    "division": "Advisory",
    "type": "Leads",
    "data": 246.4
  },
  {
    "Region": "Europe",
    "division": "Advisory",
    "type": "Meetings",
    "data": 25.52
  },
  {
    "Region": "Europe",
    "division": "Advisory",
    "type": "Submissions",
    "data": 16.0
  },
  {
    "Region": "Europe",
    "division": "Advisory",
    "type": "Shortlist",
    "data": 7.0
  },
  {
    "Region": "Asia Pac",
    "division": "Taxation",
    "type": "Leads",
    "data": 359.744
  },
  {
    "Region": "Asia Pac",
    "division": "Taxation",
    "type": "Meetings",
    "data": 49.28
  },
  {
    "Region": "Asia Pac",
    "division": "Taxation",
    "type": "Submissions",
    "data": 22.0
  },
  {
    "Region": "Asia Pac",
    "division": "Taxation",
    "type": "Shortlist",
    "data": 9.0
  },
  {
    "Region": "Asia Pac",
    "division": "Audit",
    "type": "Leads",
    "data": 172.48000000000002
  },
  {
    "Region": "Asia Pac",
    "division": "Audit",
    "type": "Meetings",
    "data": 42.24
  },
  {
    "Region": "Asia Pac",
    "division": "Audit",
    "type": "Submissions",
    "data": 15.840000000000002
  },
  {
    "Region": "Asia Pac",
    "division": "Audit",
    "type": "Shortlist",
    "data": 4.224
  },
  {
    "Region": "Asia Pac",
    "division": "Advisory",
    "type": "Leads",
    "data": 197.12
  },
  {
    "Region": "Asia Pac",
    "division": "Advisory",
    "type": "Meetings",
    "data": 20.416
  },
  {
    "Region": "Asia Pac",
    "division": "Advisory",
    "type": "Submissions",
    "data": 8.0
  },
  {
    "Region": "Asia Pac",
    "division": "Advisory",
    "type": "Shortlist",
    "data": 5.0
  }
];

// Sample company time table data
// This data is used to populate the time table with company performance metrics.

const CompanyTimeTableDatas = [
  {"region": "Americas","discipline": "Audit","month": "2013-01-01","revenue": 6812150.505756527,"pnl": 0.77,"map": 146},
  {"region": "Americas","discipline": "Taxation","month": "2013-01-01","revenue": 5274872.285927179,"pnl": 0.87,"map": 164},
  {"region": "Americas","discipline": "Advisory","month": "2013-01-01","revenue": 7663669.318976094,"pnl": 0.81,"map": 154},
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-02-01",
    "revenue": 4509112.879317396,
    "pnl": 0.88,
    "map": 165
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-02-01",
    "revenue": 6748080.0,
    "pnl": 0.76,
    "map": 144
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-02-01",
    "revenue": 2980315.8462684806,
    "pnl": 0.8300000000000001,
    "map": 157
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-03-01",
    "revenue": 4869112.879317396,
    "pnl": 0.8300000000000001,
    "map": 157
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-03-01",
    "revenue": 3471834.6594880475,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-03-01",
    "revenue": 2489410.0,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-04-01",
    "revenue": 1303037.626439132,
    "pnl": 0.93,
    "map": 174
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-04-01",
    "revenue": 11454975.0,
    "pnl": 0.79,
    "map": 150
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-04-01",
    "revenue": 7831750.0,
    "pnl": 0.92,
    "map": 172
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-05-01",
    "revenue": 5280880.0,
    "pnl": 0.65,
    "map": 126
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-05-01",
    "revenue": 3184020.0,
    "pnl": 0.7,
    "map": 134
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-05-01",
    "revenue": 11251380.0,
    "pnl": 0.76,
    "map": 144
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-06-01",
    "revenue": 5533640.0,
    "pnl": 0.91,
    "map": 171
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-06-01",
    "revenue": 3036480.0,
    "pnl": 0.8,
    "map": 152
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-06-01",
    "revenue": 923680.0,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-07-01",
    "revenue": 2042460.0,
    "pnl": 0.77,
    "map": 146
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-07-01",
    "revenue": 3834240.0,
    "pnl": 0.82,
    "map": 155
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-07-01",
    "revenue": 14409000.0,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-08-01",
    "revenue": 11045120.0,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-08-01",
    "revenue": 13254940.0,
    "pnl": 0.87,
    "map": 164
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-08-01",
    "revenue": 2813400.0,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-09-01",
    "revenue": 10162320.0,
    "pnl": 0.82,
    "map": 155
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-09-01",
    "revenue": 4153800.0,
    "pnl": 0.84,
    "map": 158
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-09-01",
    "revenue": 948960.0,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-10-01",
    "revenue": 2529520.0,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-10-01",
    "revenue": 2172720.0,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-10-01",
    "revenue": 1385120.0,
    "pnl": 0.92,
    "map": 172
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-11-01",
    "revenue": 9400767.697944006,
    "pnl": 0.73,
    "map": 139
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-11-01",
    "revenue": 7279323.754579506,
    "pnl": 0.76,
    "map": 144
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-11-01",
    "revenue": 10575863.660187008,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Americas",
    "discipline": "Audit",
    "month": "2013-12-01",
    "revenue": 6222575.773458007,
    "pnl": 0.63,
    "map": 122
  },
  {
    "region": "Americas",
    "discipline": "Taxation",
    "month": "2013-12-01",
    "revenue": 9312350.399999999,
    "pnl": 0.79,
    "map": 150
  },
  {
    "region": "Americas",
    "discipline": "Advisory",
    "month": "2013-12-01",
    "revenue": 4112835.867850503,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-01-01",
    "revenue": 3784528.058753626,
    "pnl": 0.74,
    "map": 140
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-01-01",
    "revenue": 2930484.6032928773,
    "pnl": 0.84,
    "map": 158
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-01-01",
    "revenue": 4257594.0660978295,
    "pnl": 0.88,
    "map": 165
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-02-01",
    "revenue": 2505062.710731887,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-02-01",
    "revenue": 3748933.333333333,
    "pnl": 0.73,
    "map": 139
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-02-01",
    "revenue": 1655731.0257047114,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-03-01",
    "revenue": 2705062.710731887,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-03-01",
    "revenue": 1928797.0330489152,
    "pnl": 0.83,
    "map": 157
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-03-01",
    "revenue": 1383005.5555555555,
    "pnl": 0.87,
    "map": 164
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-04-01",
    "revenue": 723909.7924661845,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-04-01",
    "revenue": 6363875.0,
    "pnl": 0.76,
    "map": 144
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-04-01",
    "revenue": 4350972.222222222,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-05-01",
    "revenue": 2933822.222222222,
    "pnl": 0.68,
    "map": 130
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-05-01",
    "revenue": 1768900.0,
    "pnl": 0.73,
    "map": 139
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-05-01",
    "revenue": 6250766.666666667,
    "pnl": 0.79,
    "map": 150
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-06-01",
    "revenue": 3074244.4444444445,
    "pnl": 0.9400000000000001,
    "map": 175
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-06-01",
    "revenue": 1686933.3333333333,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-06-01",
    "revenue": 513155.55555555556,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-07-01",
    "revenue": 1134700.0,
    "pnl": 0.7,
    "map": 134
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-07-01",
    "revenue": 2130133.3333333335,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-07-01",
    "revenue": 8005000.0,
    "pnl": 0.76,
    "map": 144
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-08-01",
    "revenue": 6136177.777777778,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-08-01",
    "revenue": 7363855.555555555,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-08-01",
    "revenue": 1563000.0,
    "pnl": 0.71,
    "map": 136
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-09-01",
    "revenue": 5645733.333333333,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-09-01",
    "revenue": 2307666.6666666665,
    "pnl": 0.87,
    "map": 164
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-09-01",
    "revenue": 527200.0,
    "pnl": 0.93,
    "map": 174
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-10-01",
    "revenue": 1405288.8888888888,
    "pnl": 0.92,
    "map": 172
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-10-01",
    "revenue": 1207066.6666666667,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-10-01",
    "revenue": 769511.1111111111,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-11-01",
    "revenue": 5222648.721080003,
    "pnl": 0.76,
    "map": 144
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-11-01",
    "revenue": 4044068.75254417,
    "pnl": 0.87,
    "map": 164
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-11-01",
    "revenue": 5875479.811215004,
    "pnl": 0.88,
    "map": 165
  },
  {
    "region": "Europe",
    "discipline": "Audit",
    "month": "2013-12-01",
    "revenue": 3456986.540810004,
    "pnl": 0.66,
    "map": 127
  },
  {
    "region": "Europe",
    "discipline": "Taxation",
    "month": "2013-12-01",
    "revenue": 5173527.999999999,
    "pnl": 0.8200000000000001,
    "map": 155
  },
  {
    "region": "Europe",
    "discipline": "Advisory",
    "month": "2013-12-01",
    "revenue": 2284908.815472502,
    "pnl": 0.81,
    "map": 154
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-01-01",
    "revenue": 5109112.879317395,
    "pnl": 0.8,
    "map": 152
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-01-01",
    "revenue": 3956154.214445384,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-01-01",
    "revenue": 5747751.989232071,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-02-01",
    "revenue": 3381834.6594880475,
    "pnl": 0.71,
    "map": 136
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-02-01",
    "revenue": 5061060.0,
    "pnl": 0.79,
    "map": 150
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-02-01",
    "revenue": 2235236.8847013605,
    "pnl": 0.91,
    "map": 171
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-03-01",
    "revenue": 3651834.6594880475,
    "pnl": 0.91,
    "map": 171
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-03-01",
    "revenue": 2603875.9946160354,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-03-01",
    "revenue": 1867057.5,
    "pnl": 0.93,
    "map": 174
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-04-01",
    "revenue": 977278.2198293491,
    "pnl": 0.87,
    "map": 164
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-04-01",
    "revenue": 8591231.25,
    "pnl": 0.8200000000000001,
    "map": 155
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-04-01",
    "revenue": 5873812.5,
    "pnl": 0.8,
    "map": 152
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-05-01",
    "revenue": 3960660.0,
    "pnl": 0.74,
    "map": 140
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-05-01",
    "revenue": 2388015.0,
    "pnl": 0.79,
    "map": 150
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-05-01",
    "revenue": 8438535.0,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-06-01",
    "revenue": 4150230.0,
    "pnl": 0.8200000000000001,
    "map": 155
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-06-01",
    "revenue": 2277360.0,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-06-01",
    "revenue": 692760.0,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-07-01",
    "revenue": 1531845.0,
    "pnl": 0.9,
    "map": 169
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-07-01",
    "revenue": 2875680.0,
    "pnl": 0.83,
    "map": 157
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-07-01",
    "revenue": 10806750.0,
    "pnl": 0.88,
    "map": 165
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-08-01",
    "revenue": 8283840.0,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-08-01",
    "revenue": 9941205.0,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-08-01",
    "revenue": 2110050.0,
    "pnl": 0.89,
    "map": 167
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-09-01",
    "revenue": 7621740.0,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-09-01",
    "revenue": 3115350.0,
    "pnl": 0.83,
    "map": 157
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-09-01",
    "revenue": 711720.0,
    "pnl": 0.84,
    "map": 158
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-10-01",
    "revenue": 1897140.0,
    "pnl": 0.8,
    "map": 152
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-10-01",
    "revenue": 1629540.0,
    "pnl": 0.85,
    "map": 160
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-10-01",
    "revenue": 1038840.0,
    "pnl": 0.86,
    "map": 162
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-11-01",
    "revenue": 7050575.773458004,
    "pnl": 0.8200000000000001,
    "map": 155
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-11-01",
    "revenue": 5459492.815934629,
    "pnl": 0.79,
    "map": 150
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-11-01",
    "revenue": 7931897.745140256,
    "pnl": 0.84,
    "map": 158
  },
  {
    "region": "Asia Pac",
    "discipline": "Audit",
    "month": "2013-12-01",
    "revenue": 4666931.830093505,
    "pnl": 0.72,
    "map": 137
  },
  {
    "region": "Asia Pac",
    "discipline": "Taxation",
    "month": "2013-12-01",
    "revenue": 6984262.799999999,
    "pnl": 0.78,
    "map": 148
  },
  {
    "region": "Asia Pac",
    "discipline": "Advisory",
    "month": "2013-12-01",
    "revenue": 3084626.900887877,
    "pnl": 0.88,
    "map": 165
  }
];

    await User.insertMany(users);
    await Company.insertMany(companies);
    await CompanyGroupSum.insertMany(CompanyGroupSumData);
    await Prospect.insertMany(prospects);
    await CompanyTimeTableData.insertMany(CompanyTimeTableDatas);

    console.log('Sample data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await mongoose.disconnect();
  }
}

dataExamples();