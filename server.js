//Dependancies
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var path = require("path");
var logger = require("morgan");
mongoose.set('useCreateIndex', true);

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
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googenheimapp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

var Artist = require("./models/artist");

app.get("/", function (req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  Artist.find({ Artist: "Otto Wagner"}, function (err, found) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});
// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});