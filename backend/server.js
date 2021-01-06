var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

http.createServer(function (request, response) {
    var filePath = path.join("./", 'sound.mp3');
    var stat = fileSystem.statSync(filePath);


    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size,
        'Accept-Ranges': 'bytes'

    });

    var readStream = fileSystem.createReadStream(filePath,);
    readStream.on('data', function (data) {
        response.write(data);
    });

    readStream.on('end', function () {
        response.end();
    });
})
    .listen(2000);