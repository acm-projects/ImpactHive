//ECHO is on.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json()); // To parse incoming JSON

mongoose.connect('mongodb://localhost:27017/ImpactHive')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Investment model
const investmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    totalAmount: { type: Number, default: 0 }
});

const Investment = mongoose.model('Investment', investmentSchema);

// Badge model
const badgeSchema = new mongoose.Schema({
    badgeName: String,
    investmentAmount: Number,
    description: String,
});

const Badge = mongoose.model('Badge', badgeSchema);

// Initialize or find investment document for a specific user
async function getInvestmentDoc(userId) {
    let investment = await Investment.findOne({ userId });
    if (!investment) {
        investment = new Investment({ userId, totalAmount: 0 });
        await investment.save();
    }
    return investment;
}

// GET total investments for a specific user
app.get('/api/investments/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const investment = await getInvestmentDoc(userId);
        res.json({ totalAmount: investment.totalAmount });
    } catch (error) {
        res.status(500).json({ error: "Error fetching investment total" });
    }
});

// POST to add investment for a specific user
app.post('/api/investments/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: "Invalid amount" });
    }

    try {
        const investment = await getInvestmentDoc(userId);
        const originalAmount = investment.totalAmount;
        investment.totalAmount += amount;
        await investment.save();

        res.json({
            message: "Investment added successfully",
            originalAmount: originalAmount,
            updatedTotal: investment.totalAmount
        });
    } catch (error) {
        res.status(500).json({ error: "Error updating investments" });
    }
});

// GET badges
app.get('/api/badges', async (req, res) => {
    try {
        const badges = await Badge.find(); // Fetch all badges
        res.json(badges); // Send badges as JSON response
    } catch (error) {
        res.status(500).json({ error: "Error fetching badges" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
