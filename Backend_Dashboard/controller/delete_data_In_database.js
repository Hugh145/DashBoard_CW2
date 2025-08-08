const cron = require('node-cron');
const Company = require('./models/Company'); // adjust path to your model

// This script uses node-cron to schedule a job that deletes old records from the database
// This job will delete records older than one month from the database collection
cron.schedule('0 0 * * *', async () => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try {
    const result = await Company.deleteMany({ createdAt: { $lt: oneMonthAgo } });
    console.log(` Deleted ${result.deletedCount} old records`);
  } catch (err) {
    console.error(' Error deleting old records:', err);
  }
});
