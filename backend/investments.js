// backend/investments.js

const mongoose = require('mongoose');

// Define a schema for investments
const investmentSchema = new mongoose.Schema({
    userId: Number, // Assuming you'll track by user ID
    amount: Number,
    company: String,
});

// Create a model for investments
const Investment = mongoose.model('Investment', investmentSchema);

// Function to add a new investment
const addNewInvestment = async (userId, amount, company) => {
    try {
        const investment = new Investment({ userId, amount, company });
        await investment.save();
        console.log(`Investment of $${amount} added for user ${userId} for company named ${company}`);
    } catch (error) {
        console.error("In addNewInvestment function: Error adding investment:", error);
    }
};

// Function to calculate total investments for a user
const getTotalInvestment = async (userId) => {
    try {
        console.log(userId);
        let investments = await Investment.find({ userId });
        console.log("All investments for user:", investments);
        let total = await Investment.aggregate([
            { $match: { userId } },
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);
        console.log(total);
        return total[0] ? total[0].totalAmount : 0;
    } catch (error) {
        console.error("Error retrieving total investment:", error);
        return 0;
    }
};

const getInvestmentsList = async () => {
    try {
        console.log('In get investments list function');
        const investmentsList = await Investment.find();  // Fetch all documents in the investments collection as array
        return investmentsList;
    } catch (error) {
        console.error("Error retrieving investments list:", error);
        return [];
    }
};

// Export the Investment model
module.exports = Investment;
// Export the functions for use in other parts of your application
module.exports = { addNewInvestment, getTotalInvestment, getInvestmentsList };
