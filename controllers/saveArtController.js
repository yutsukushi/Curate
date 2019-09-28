const db = require("../models");

const USER_FIELDS = 'username password';

module.exports = {
  findUserAndPW: function (req, res) {
    console.log('findAll req.query: ', req.query);
    var userName = req.query.username; // e.g. "usernameXYZ1"
    var passWord = req.query.password; // e.g. "password123"

    db.User
      .findOne({ username: userName }, USER_FIELDS)
      .then(userRecord => {
        console.log(userRecord);
        if (userRecord !== null && userRecord.password === passWord) {
          return res.json(userRecord);
        }
        else {
          return res.status(401).json({"error": "Username or Password is incorrect."})
        }
      }).catch(err => res.status(422).json(err));
  },

  findAndSaveArt: function (req, res) {
    console.log('findAll req.query: ', req.query);
    var userLogin = req.query.name;

    db.User
      .findOneAndUpdate({ username: userLogin }, { favorites: { artworks: req.body } }, { new: true })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
}