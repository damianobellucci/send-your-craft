//init router
const express = require("express");
var router = express.Router()
const util = require('util')

//manage forme
var fs = require("fs")
const fsRename = util.promisify(fs.rename)
var formidable = require('formidable');
var form = new formidable.IncomingForm();

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
                await req.app.get("mongo").collection("infoSongs").insertOne(myObj);
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

module.exports = router
