const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const Company = require("./models/Company");
const Prospect = require("./models/Prospect");
const CompanyTimeTableData = require("./models/CompanyTimeTableData");
const CompanyGroupSum = require("./models/CompanyGroupSum");

const MONGO_URI = "mongodb+srv://campbellh2711:QA6e6QauXQBFR5f3@dashboardcluster.i6p3lxg.mongodb.net/media_scope"; // Update if using Atlas

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    return seedData();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const readJSON = (fileName) => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "models", "data", fileName), "utf-8")
  );
};

async function seedData() {
  try {
    await Company.deleteMany({});
    await Prospect.deleteMany({});
    await CompanyTimeTableData.deleteMany({});
    await CompanyGroupSum.deleteMany({});

    await Company.insertMany(readJSON("companies.json"));
    await Prospect.insertMany(readJSON("prospects.json"));
    await CompanyTimeTableData.insertMany(readJSON("companyTimeTableData.json"));
    await CompanyGroupSum.insertMany(readJSON("companyGroupSum.json"));

    console.log("🌱 Data seeding complete.");
  } catch (err) {
    console.error("❌ Error during seeding:", err);
  } finally {
    mongoose.disconnect();
  }
}
