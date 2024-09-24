const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'https://museum-mate-vansh.vercel.app',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const uri = 'mongodb+srv://db:db1@vansh.xfgyxje.mongodb.net/Museum-data?retryWrites=true&w=majority&appName=vansh';

async function fetchData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('Museum-data');
    const collection = database.collection('database');
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    console.error('Error occurred while fetching data:', err);
    throw err;
  } finally {
    await client.close();
  }
}

// Create an endpoint for the root URL '/'
app.get('/', (req, res) => {
  res.send('Welcome to the Museum API!'); // Simple message for the root endpoint
});

// Create an endpoint for '/res' that returns JSON
app.get('/res', (req, res) => {
  res.json({ working: 'yes' }); // JSON response indicating that the service is working
});

// Create an endpoint to serve the data from MongoDB
app.get('/museums', async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
