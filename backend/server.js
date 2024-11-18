//ECHO is on.
const express = require('express')
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors') // Add this line
const { addNewInvestment, getTotalInvestment, getInvestmentsList } = require('./investments');
const { addNewWatchlist, getWatchlist } = require('./watchlist');
const Investment = require('./investments'); 
const Watchlist = require('./watchlist'); 

//axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;


const app = express()   
//const port = process.env.PORT || 3002
const port = 3002;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()); // Use CORS middleware

/*const corsOptions = {
  origin: '*',  // For testing, you can allow all origins (replace '*' with your frontend URL later for security)
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};*/

//app.use(cors(corsOptions));  // Apply CORS to all routes

// Connect to MongoDB (ensure your MongoDB connection string is correct)
mongoose.connect('mongodb://localhost:27017/ImpactHive')
    //const inv1 = new Investment({ userId: "5", amount: 678 })
    //inv1.save()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

app.get('/', cors(), async (req, res) => {
    res.send("It worked!")
  });

// Route to add an investment
app.post('/api/investments', cors(), async (req, res) => {
    try {
      const { amount, company } = req.body;
      console.log(amount);
      const inv = await addNewInvestment(0, amount, company);
      res.status(201).json({ message: "Investment added successfully"});
    } catch (error) {
      res.status(500).json({ message: 'From post: Error adding investment' });
    }
  });

  
  // Route to get total investments
  app.get('/api/investments', async (req, res) => {
    try {
      const { userId } = req.query;
      const investments = await getTotalInvestment(Number(userId));
      res.status(200).json(investments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching investments' });
    }
  });

  // Route to get investments list
  app.get('/api/investmentsList', async (req, res) => {
    try {
      const investmentsList = await getInvestmentsList();
      res.status(200).json(investmentsList);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching investments list' });
    }
  });

  // Route to add a watchlist item
app.post('/api/watchlist', cors(), async (req, res) => {
  try {
    const { company } = req.body;
    console.log(company);
    const watchlistItem = await addNewWatchlist(company);
    res.status(201).json({ message: "Watchlist item added successfully"});
  } catch (error) {
    res.status(500).json({ message: 'From post: Error adding watchlist item' });
  }
});

// Route to get watchlist list
app.get('/api/watchlistList', async (req, res) => {
  try {
    const watchlistList = await getWatchlist();
    res.status(200).json(watchlistList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching watchlist list' });
  }
});
