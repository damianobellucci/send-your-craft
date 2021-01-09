const express = require("express");
const fileSystem = require("fs");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  let idFile = req.query.idFile
  let filePath = path.join('./', idFile + '.mp3');

  let stat = fileSystem.statSync(filePath);

  //header in response to the client, says how to transfer the datas
  res.status(200).header({
    "Content-Type": "audio/mpeg",
    "Content-Length": stat.size,
    "Accept-Ranges": "bytes",
  });

  let readStream = fileSystem.createReadStream(filePath);
  readStream.pipe(res);
});

app.listen(2000);

