const loginInfo = require("./LOGIN_INFO")
const uri = `mongodb://${loginInfo.username}:${loginInfo.password}@localhost:2718`;
var MongoClient = require('mongodb').MongoClient;

//init database and run server
async function mc() {
    try {
        if (MongoClient === null) {
            throw new Error("no client")
        }
        else {
            let client = await MongoClient.connect(uri)
            return client.db("sendyourcraft")
        }
    }
    catch (e) {
        console.log(e)
    }
};

module.exports = mc