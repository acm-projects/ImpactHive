//ECHO is on.
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB (ensure your MongoDB connection string is correct)
mongoose.connect('mongodb://localhost:27017/ImpactHive', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// Define a schema and model for badges
const badgeSchema = new mongoose.Schema({
    badgeName: String,
    investmentAmount: Number,
    description: String,
});

const Badge = mongoose.model('Badge', badgeSchema);

// Insert some sample badges if they don't exist (for testing)
async function insertSampleBadges() {
    const count = await Badge.countDocuments();
    if (count === 0) {
        await Badge.insertMany([
            { badgeName: "Badge 1", investmentAmount: 100, description: "Awarded for investing $100" },
            { badgeName: "Badge 2", investmentAmount: 200, description: "Awarded for investing $200" },
            { badgeName: "Badge 3", investmentAmount: 300, description: "Awarded for investing $300" },
            { badgeName: "Badge 4", investmentAmount: 400, description: "Awarded for investing $400" },
            { badgeName: "Badge 5", investmentAmount: 500, description: "Awarded for investing $500" }
        ]);
        console.log("Sample badges inserted");
    } else {
        console.log("Badges already exist in the database");
    }
}

// Insert badges if needed
insertSampleBadges();

// Test route to fetch badges
app.get('/api/badges', async (req, res) => {
    try {
        const badges = await Badge.find(); // Retrieve all badges
        console.log("Badges retrieved:", badges); // Log the badges to console
        res.json(badges); // Send badges as JSON response
    } catch (error) {
        console.error("Error retrieving badges:", error); // Log the error to console
        res.status(500).send('Error retrieving badges');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

