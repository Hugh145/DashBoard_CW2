// this the index.js file for the application to run the server of express,nodejs, and mongodb
require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 30001;  // Define the port number for the server
const bodyParser = require('body-parser');
const cors = require('cors');
// Import routes 
const companyRoutes = require('./routes/companyRoutes');
const userRoutes = require('./routes/userRoutes');
const aiRoutes = require('./routes/aiRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
// Replace the connection string with your MongoDB Atlas connection string or local MongoDB URI

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Define routes
app.get('/', (req, res) => res.send('Media Scope API running!'));
// Use the imported routes 
app.use('/api/companies', companyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api', dashboardRoutes);


// Error handling ai tool 
console.log("OpenAI Key:", process.env.OPENAI_API_KEY ? "✅ Loaded" : "❌ Not found");


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port 3001 to quit the application Ctrl+C ${port}`);
}); 