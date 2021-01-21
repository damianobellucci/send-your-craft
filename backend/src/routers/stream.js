import express from "express";
var router = express.Router()
import path from "path"
import fileSystem from "fs"

router.get("/", (req, res) => {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Require range header")
    }
    else {
        const idFile = req.query.idFile;
        const filePath = path.join('./', idFile + '.mp3');
        const stat = fileSystem.statSync(filePath);

        const start = Number(range.replace(/\D/g, ""))
        const CHUNK_SIZE = (10 ** 6) / 4 //1MB chunks
        const end = Math.min(start + CHUNK_SIZE, stat.size - 1)
        const contentLength = end - start + 1
        console.log(start, end)
        const headers = {
            "Content-Type": "audio/mpeg",
            "Content-Length": contentLength,
            "Accept-Ranges": "bytes",
            "Content-Range": `bytes ${start}-${end}/${stat.size}`
        }
        res.status(206).header(headers);
        let readStream = fileSystem.createReadStream(filePath, { start, end });
        readStream.pipe(res);
    }
});

export default router