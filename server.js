//Dependancies
var express = require("express");
var mongoose =  require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var path = require("path");


var PORT = process.env.PORT || 3000;

//Initialize Express
var app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to Mongo
mongoose.connect("mongodb://localhost/...", { useNewUrlParser:true });

//Scrape...

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });