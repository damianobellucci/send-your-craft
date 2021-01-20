var stream = require("./routers/stream");
var upload = require("./routers/upload");
const express = require("express");
const app = express();

const mongo = require("./mongo");
app.set("mongo", mongo());

app.use("/stream", stream);
app.use("/upload", upload);

app.listen(5000);
