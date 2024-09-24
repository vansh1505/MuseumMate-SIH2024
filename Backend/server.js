const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

// MongoDB connection string
const uri = 'mongodb+srv://db:db1@vansh.xfgyxje.mongodb.net/Museum-data?retryWrites=true&w=majority&appName=vansh';
const client = new MongoClient(uri);

// Middleware to handle JSON requests
app.use(express.json());

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

app.get('/museums', async (req, res) => {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Error fetching data: ' + err.message });
  }
});

// Default route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Museum API!');
});

// Export the Express app
module.exports = app; 
