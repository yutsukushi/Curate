const db = require("../models");

module.exports = {

findAndSaveArt: function(req, res) {
        console.log('findAll req.query: ', req.query);
        var userLogin= req.query.name; 
    
        db.User
          .findOneAndUpdate({ username: userLogin }, {favorites: {artworks: req.body}}, {new: true})
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
      },
    }