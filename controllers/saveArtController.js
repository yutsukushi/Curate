const db = require("../models");
const _ = require("lodash");

const USER_FIELDS = 'username password';
const ARTIST_FIELDS = 'Title Artist Nationality Date URL Medium ThumbnailURL';

module.exports = {
  findUserAndPW: function (req, res) {
    // console.log('findAll req.query: ', req.query);
    var userName = req.query.username; // e.g. "usernameXYZ1"
    var passWord = req.query.password; // e.g. "password123"

    db.User
      .findOne({ username: userName }, USER_FIELDS)
      .then(userRecord => {
        // console.log(userRecord);
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

  findAndSaveArt: async function (req, res) {
    // console.log(`findAndSaveArt 
    // req.query: ${(JSON.stringify(req.query))} 
    // cookies: ${JSON.stringify(req.cookies)} 
    // req.body: ${JSON.stringify(req.body)}`);
    var userLogin = req.cookies.username;
    var favArtworkId = req.body._id;

    try {
      let userArts = await db.User.findOne({ username: userLogin });
      // console.log("userArts: " + userArts);
      // console.log("userArts: " + userArts.favorite_artworks)
      let artID = _.find(userArts.favorite_artworks, { _id: favArtworkId });
      console.log("artID: " + artID)
      if (artID === undefined) {
        // insert new fav art into user record
        let userArts2 = await db.User.findOneAndUpdate(
          { username: userLogin },
          { $push: { favorite_artworks: req.body } });
        // console.log("userArts2: " + userArts2)
        return res.json(userArts2);
      }
      else {
        // this artwork is already favorited by this user
        return res.status(400).json({ "error": "This has already been saved." });
      }

    }
    catch (err) {
      console.log(err)
      return res.status(422).json(err);
    }
  },

  findAndDeleteArt: async function (req, res) {
    var userLogin = req.cookies.username;
    try {
      let result = await db.User.findOneAndUpdate({ username: userLogin }, { $pull: { favorite_artworks: { _id: req.params.id } } });
      return res.json({});
    }
    catch (e) {
      console.log(e)
      return res.status(422).json(e);
    }

  },
  catch(err) {
    console.log(err)
    return res.status(422).json(err);
    // }

  },

  findAndPopulate: function (req, res) {
    // console.log('findAndPopulate req.query: ', req.query);
    // console.log('findAndPopulate req.cookies: ', req.cookies);
    var userLogin = req.cookies.username;

    db.User
      .findOne({ username: userLogin }, 'favorite_artworks')
      .then(displayArt => {
        // console.log("displayArt: " + displayArt);
        return res.json(displayArt);
      })
      .catch(err => res.status(422).json(err));
  }
};
