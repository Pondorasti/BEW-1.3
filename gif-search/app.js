// Require Libraries
const express = require("express");

// App Setup
const app = express();

// Middleware

// Routes

app.get("/", (req, res) => {
  res.send("Helo Squirrel");
});

// Start Server

app.listen(3000, () => {
  console.log("Hey! Gif search is up and running!");
});
