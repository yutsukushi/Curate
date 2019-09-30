var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
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

// module.exports = mongoose.model('User',{
//     username: String,
//     password: String
// });

module.exports = User;