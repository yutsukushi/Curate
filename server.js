//Dependancies
var express = require("express");
var mongoose =  require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var path = require("path");
var logger = require("morgan");
var request = require("request");


var PORT = process.env.PORT || 3000;

//Initialize Express
var app = express();

// Middleware
app.use(logger("dev"));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to Mongo
mongoose.connect("mongodb://localhost/...", { useNewUrlParser:true });

//Request
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });