const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const ObjectId = require('mongodb').ObjectId;

// middlewire
const cors = require('cors');
app.use(cors());
app.use(express.json());

// mongodb
// user: nomanswe130 &_password: obMIRKLqQb5QnRnj

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

        // Usrs API: load from db and send as api for showing in ui
        app.get('/user', async (req, res) => {
            try {
                const query = {};
                const cursor = userCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            } catch (error) {
                console.error("Error fetching users:", error);
                res.status(500).send("Internal Server Error");
            }
        })

        // 
        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        // POST usr: add a new user (Add)
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            // send to db
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // update
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            // find the user from DB by this params-id and update
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            };
            const result = await userCollection.updateOne(query, updatedDoc, options);
            res.send(result);

        })

        // Delete a user from ui and db
        app.delete('/user/:id', async (req, res) => {
            // picking the user id from parameter
            const id = req.params.id;

            // preparing the delete id
            const query = { _id: new ObjectId(id) }
            // deleting from db with deleteOne function
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })




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