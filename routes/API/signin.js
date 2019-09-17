var express = require("express");
var passport = require("passport");
var app = express();

app.post('/login',
  passport
  .authenticate('local', 
    { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true 
    })
);

