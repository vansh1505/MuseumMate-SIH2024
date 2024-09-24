const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://vansh123@vansh.xfgyxje.mongodb.net/?retryWrites=true&w=majority&appName=vansh';
const client = new MongoClient(uri);

async function fetchData() {
  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('Museum-data');
    const collection = database.collection('database');

    console.log('Fetching data...');
    const data = await collection.find({}).toArray();
    console.log('Data fetched successfully:', data);
    return data;
  } catch (err) {
    console.error('Error occurred while fetching data:', err);
    throw new Error('Failed to fetch data from the database.');
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
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
