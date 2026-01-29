"use strict";

const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const pages = path.join(__dirname, "pages");
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(path.join(pages, "index.html"));
})

app.get("/", (req, res)=> {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
    console.log(`http://localhost:${port}`);
})