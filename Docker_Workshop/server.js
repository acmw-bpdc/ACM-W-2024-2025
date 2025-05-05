const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect(); // Removed URL argument
    console.log('Connected successfully to server');
    const db = client.db("bitspilani-db");
    const data = await db.collection('users').find({}).toArray();
    client.close();
    res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);

    try {
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db("bitspilani-db");
        const data = await db.collection('users').insertOne(userObj);
        console.log(data);
        console.log("Data inserted in DB");

        res.send("User added successfully!"); // ✅ Send response to browser
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding user.");
    } finally {
        await client.close();
    }
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});