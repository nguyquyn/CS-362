// CS 361-400 Individual Project
// Quynh Nguyen

'use strict';

const PORT = 9127;

// Express
const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// Request handlers
// [GET] Root page (home: index.html)
app.get("/", (req, res) => {
    res.send("./index.html");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

