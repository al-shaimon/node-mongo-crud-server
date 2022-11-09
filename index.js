const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// user: dbUser2
// pass: FzPvcOI8Pp7wzmTc

const uri =
  'mongodb+srv://dbUser2:FzPvcOI8Pp7wzmTc@cluster0.zeydczn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db('nodeMongoCrud').collection('users');
    const user = {
      name: 'dancing test',
      email: 'dancing@gmail.com',
    };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } finally {
  }
}

run().catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from node mongo crud server');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
