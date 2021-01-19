//init database client
const loginInfo = require("./LOGIN_INFO")
const uri = `mongodb://${loginInfo.username}:${loginInfo.password}@localhost:2718`;
var MongoClient = require('mongodb').MongoClient;
var db //will be used for all the app
const util = require('util')
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

var fs = require("fs")
const fsRename = util.promisify(fs.rename)

var formidable = require('formidable');
var form = new formidable.IncomingForm();

app.post("/upload", async function (req, res) {
  try {
    form.parse(req, async function (err, fields, files) {
      if (err) throw err
      else {
        var oldpath = files.filetoupload.path;
        var newpath = "./songs/" + files.filetoupload.name;
        await fsRename(oldpath, newpath)
        let myObj = {
          'name': files.filetoupload.name
        }
        await db.collection("infoSongs").insertOne(myObj);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send('File uploaded and moved!');
      }
    })
  }
  catch (e) {
    res.send("fail")
    console.log(e)
  }
});