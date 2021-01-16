var express = require('express');
var formidable = require('formidable');
var fs = require("fs")

var app = express();
app.listen(5000)

app.post("/", function (req, res) {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) throw err
      else {
        var oldpath = files.filetoupload.path;
        var newpath = "./" + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.header("Access-Control-Allow-Origin", "*");
          res.status(200).send('File uploaded and moved!');
        });
      }
    })
  }
  catch (e) {
    res.send("fail")
    console.log(e)
  }
});
