// models/investment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvestmentSchema = new Schema({
  organization: { type: String, required: true }, // Assuming organization name is required
  amount: { type: String, required: true }, // Assuming amount is required
});

// Export the Investment model
module.exports = mongoose.model('Investment', InvestmentSchema);
