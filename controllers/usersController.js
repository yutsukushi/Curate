const db = require("../models");

const USER_FIELDS = 'username password';
module.exports = {
    findAll: function(req, res) {
        console.log('findAll req.query: ', req.query);
        var userLogin= req.query.name; 
    
        db.User
          .find({ userLogin: userLogin }, USER_FIELDS)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}