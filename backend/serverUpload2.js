//init database client
const loginInfo = require("./LOGIN_INFO")
const uri = `mongodb://${loginInfo.username}:${loginInfo.password}@localhost:2718`;
var MongoClient = require('mongodb').MongoClient;
var db //will be used for all the app

//init server
var express = require('express');
var app = express();

//init database and run server
(async () => {
  try {
    if (MongoClient === null) {
      throw new Error("no client")
    }
    else {
      let client = await MongoClient.connect(uri)
      db = client.db("sendyourcraft")
      app.listen(5000)
    }
  }
  catch (e) {
    console.log(e)
  }
})();

// Reuse database object in requests
app.get("/", async function (req, res) {
  const myObj = {
    title: "prova titolo",
    description: "prova descrizione"
  }
  try {
    let result = await db.collection("infoSongs").insertOne(myObj);
    console.log(result)
    res.send("ok")
  }
  catch (e) {
    res.send("fail")
    console.log(e)
  }
});
//https://stackoverflow.com/questions/47370487/node-js-mongodb-driver-async-await-queries