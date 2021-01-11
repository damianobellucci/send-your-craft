const { MongoClient } = require('mongodb');
const loginInfo = require("./LOGIN_INFO")

const uri = `mongodb://${loginInfo.username}:${loginInfo.password}@localhost:2718`;

async function insertSongInfo(myObj) {
    try {
        const client = new MongoClient(uri)
        await client.connect();
        const database = client.db("sendyourcraft");
        const collection = database.collection("infoSongs");
        const result = await collection.insertOne(myObj);
        console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
        await client.close();
    } catch (e) {
        throw (e)
    }
};

module.exports = insertSongInfo