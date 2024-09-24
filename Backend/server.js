const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'https://museum-mate-vansh.vercel.app', // Removed trailing slash
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// MongoDB connection string
const uri = 'mongodb+srv://vansh:vansh123@vansh.xfgyxje.mongodb.net/';

async function fetchData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('Museum-data');
    const collection = database.collection('database');
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    console.error('Error occurred while fetching data:', err);
    throw err;  // Throw the error to be caught in the endpoint
  } finally {
    await client.close();
  }
}

// Create an endpoint to serve the data
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
