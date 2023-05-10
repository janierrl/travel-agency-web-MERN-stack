const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Import Routings
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure static folder
app.use(express.static("uploads"));

// Configure Header HTTP - CORS
// ...

// Configure Routings
// ...

module.exports = app;
