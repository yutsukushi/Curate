//Dependancies
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var router = require("./router")
// var path = require("path");
// var logger = require("morgan");
// var mongojs = require("mongojs")
// var bodyparser = require("body-parser")
// var fileupload = require("express-fileupload")
mongoose.set('useCreateIndex', true);
// var cors = require('cors')

var PORT = process.env.PORT || 3001;

//Initialize Express
var app = express();

// Add routes, both API and view
app.use(router);

// Middleware
// app.use(logger("dev"));
// app.use(cors())

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

// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//   extended: true,
//   limit: '50mb',
//   parameterLimit: 100000
// }))
// app.use(bodyParser.json({
//   limit: '50mb',
//   parameterLimit: 100000
// }))


// var databaseUrl = "googenheimapp";
// var collections = ["artists"];

// Use mongojs to hook the database to the db variable
// var db = mongojs(databaseUrl, collections);

// // function handleArtistSubmit() {
  // app.get("/", function (req, res) {
  //   console.log(res);
    // Query: In our database, go to the animals collection, then "find" everything
    // console.log("help:", res)
    // db.Artist.find({ Artist: "Otto Wagner" }, function (err, found) {
    //   // Log any errors if the server encounters one
    //   if (err) {
    //     console.log(err);
    //   }
    //   // Otherwise, send the result of this query to the browser
    //   else {
    //     res.json(found);
      // })
  //   });
  // });
// }
// app.get('/search', (req, res) => {
//   console.log(res);
//   db.collection('artists')
//     .find(res, (err, data) => {
//       if (err) 
//       return console.log(err);
//       res.send(('saved to db: ' + data));
//   })
// });

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});