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
          res.cookie('username', userRecord.username)
          res.json(userRecord);
          return res;
        }
        else {
          return res.status(401).json({ "error": "Username or Password is incorrect." })
        }
      }).catch(err => res.status(422).json(err));
  },

  findAndSaveArt: function (req, res) {
    console.log(`findAndSaveArt 
    req.query: ${(JSON.stringify(req.query))} 
    cookies: ${JSON.stringify(req.cookies)} 
    req.body: ${JSON.stringify(req.body)}`);

    var userLogin = req.cookies.username;
    db.User
      .findOneAndUpdate(
        { username: userLogin }, 
        req.body)
      .then(userArts => res.json(userArts))
      .catch(err => res.status(422).json(err));
  },
}