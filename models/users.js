var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  username: {
    type: String,
    trim: true,
    required: "Username is Required",
    unique: true
  },
 
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password must be more than 5 characters."
    ]
  }, 

  favorite_artworks: [{
      _id: String,
      Artist: [String],
      Title: String,
      Nationality: [String],
      Medium: String,
      Date: String,
      ThumbnailURL: String,
      URL: String 
  }]
});

var User = mongoose.model("User", UserSchema);

var bcrypt = require('bcrypt');

exports.cryptPassword = function(password, callback) {
   bcrypt.genSalt(10, function(err, salt) {
    if (err) 
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash);
    });
  });
};

exports.comparePassword = function(plainPass, hashword, callback) {
   bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
       return err == null ?
           callback(null, isPasswordMatch) :
           callback(err);
   });
};

module.exports = User;