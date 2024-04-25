const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// middlewire
const cors = require('cors');
app.use(cors());

// mongodb
// user: nomanswe130 &_password: obMIRKLqQb5QnRnj

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nomanswe130:obMIRKLqQb5QnRnj@cluster0.xmq0nwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");
        const user = { name: "shibly", email: "shibly@gmail.com" };
        const result = await (userCollection.insertOne(user));

        console.log(`user inserted with id : ${result.insertedId}`)
        // Send a ping to confirm a successful connection
        /* await client.db("foodExpress").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!"); */
    } finally {
        // Ensures that the client will close when you finish/error || connection k active rakhte chaile client.close() ta ke comment kore rakte hobe.
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Running CRUD server in Express');
})

app.listen(port, () => {
    console.log("CRUD server is running: ", port);
})