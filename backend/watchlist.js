const mongoose = require('mongoose');

// Define a schema for investments
const watchlistSchema = new mongoose.Schema({
    company: String,
});

// Create a model for investments
const Watchlist = mongoose.model('Watchlist', watchlistSchema);

// Function to add a new watchlisted company
const addNewWatchlist = async (company) => {
    try {
        const watchlistItem = new Watchlist({ company });
        await watchlistItem.save();
        console.log(`Watchlist entry added for company named ${company}`);
    } catch (error) {
        console.error("in addNewWatchlist function: Error adding watchlisted company:", error);
    }
};

// Function to calculate total investments for a user
const getWatchlist = async () => {
    try {
        console.log('In get watch list function');
        const watchlistList = await Watchlist.find();  // Fetch all documents in the watchlist collection as array
        return watchlistList;
    } catch (error) {
        console.error("Error retrieving watchlist list:", error);
        return [];
    }
};

module.exports = Watchlist;
module.exports = { addNewWatchlist, getWatchlist };