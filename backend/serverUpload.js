const insertSongInfo = require("./insertSongInfo")

const express = require("express")
const app = express()

app.get("/", async function (req, res) {
    try {
        const myObj = {
            title: "prova titolo",
            description: "prova descrizione"
        }
        await insertSongInfo(myObj)
        res.send("ok")
    } catch (e) {
        console.error(e);
        res.send("fail")
    }
})

app.listen(5000)


