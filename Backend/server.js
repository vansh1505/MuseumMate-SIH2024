const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000; // Use a fixed port for local development

// CORS options
const corsOptions = {
  origin: 'https://museum-mate-vansh.vercel.app', // Set your allowed origin
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// MongoDB connection string (directly inserted)
const uri = 'mongodb+srv://db:db1@vansh.xfgyxje.mongodb.net/Museum-data?retryWrites=true&w=majority&appName=vansh';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to fetch data from MongoDB
async function fetchData() {
  try {
    await client.connect();
    console.log('Connected to MongoDB'); // Log successful connection
    const database = client.db('Museum-data');
    const collection = database.collection('database');
    const data = await collection.find({}).toArray();
    console.log('Data fetched successfully:', data); // Log fetched data
    return data;
  } catch (err) {
    console.error('Error occurred while fetching data:', err); // Log the error
    throw new Error('Failed to fetch data from the database.');
  } finally {
    await client.close();
    console.log('MongoDB connection closed'); // Log connection closure
  }
}

// Endpoint to serve the museum data
app.get('/museums', async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Error fetching data: ' + err.message); // Send detailed error message
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
