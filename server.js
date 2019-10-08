//Dependancies
var express = require("express");
var mongoose = require("mongoose");
var router = require("./router");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var cors = require('cors');

var PORT = process.env.PORT || 3001;

//Initialize Express
var app = express();
app.use(cookieParser())

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000 }));
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 100000 }));

// Add routes, both API and view
app.use(router);

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
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});