import stream from "./routers/stream.js";
import upload from "./routers/upload.js";
import express from "express";

const app = express();

app.use("/stream", stream);
app.use("/upload", upload);

app.listen(5000);

