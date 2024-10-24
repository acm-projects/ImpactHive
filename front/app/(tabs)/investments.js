const mongoose = require('mongoose');

// Define a schema for investments
const investmentSchema = new mongoose.Schema({
    userId: String, // Assuming you'll track by user ID
    amount: Number,
});

// Create a model for investments
const Investment = mongoose.model('Investment', investmentSchema);

// Function to add a new investment
const addInvestment = async (userId, amount) => {
    try {
        const investment = new Investment({ userId, amount });
        await investment.save();
        console.log(`Investment of $${amount} added for user ${userId}`);
    } catch (error) {
        console.error("Error adding investment:", error);
    }
};

// Function to calculate total investments for a user
const getTotalInvestment = async (userId) => {
    try {
        const total = await Investment.aggregate([
            { $match: { userId } },
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);
        return total[0] ? total[0].totalAmount : 0;
    } catch (error) {
        console.error("Error retrieving total investment:", error);
        return 0;
    }
};

// Export the functions for use in other parts of your application
module.exports = { addInvestment, getTotalInvestment };
