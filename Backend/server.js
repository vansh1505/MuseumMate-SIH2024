const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://vansh:vansh123@vansh.xfgyxje.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const data = await fetchData();
      res.status(200).json(data);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data: ' + err.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
