//init mongo db client
import Connection from "../lib/db-mongo/Connection.js";
let mongo = null;
(async function () {
    mongo = await Connection.connectToMongo();
})()

//init router
import express from "express";
var router = express.Router()

//manage form
import { rename } from "fs";
import { promisify } from 'util';
const fsRename = promisify(rename)
import IncomingForm from 'formidable';
var form = new IncomingForm();

router.post("/", async function (req, res) {
    try {
        form.parse(req, async function (err, fields, files) {
            if (err) throw err
            else {
                var oldpath = files.filetoupload.path;
                var newpath = "../songs/" + files.filetoupload.name;
                await fsRename(oldpath, newpath)
                let myObj = {
                    'name': files.filetoupload.name
                }
                mongo.db("sendyourcraft").collection("infoSongs").insertOne(myObj)
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

export default router
