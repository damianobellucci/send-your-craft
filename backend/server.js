


const express = require('express')
const fileSystem = require('fs')
const path = require('path')
const { send } = require('process')

const app = express()

app.get("/", (req, res) => {
    console.log(req.query)
    var filePath = path.join("./", 'sound.mp3');
    var stat = fileSystem.statSync(filePath);
    var readStream = fileSystem.createReadStream(filePath);

    res.status(200).header({
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size,
        'Accept-Ranges': 'bytes'
    })

    readStream.on('end', function () {
        console.log('stream ended...');
    });

    readStream.pipe(res);
})

app.listen(2000)