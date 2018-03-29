const db = require("../models"); 
// var passport = require("../config/passport");
var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  //FIND A GIVEN USER'S GIFTCARDS
  findOne: function(req, res) {
    db.User
      .findOne(req.params)
      .populate("giftcards")
      .then(dbModel => res.json(dbModel))
      .catch(err =>  res.status(422).json(err));
  },

  
  //CREATE A NEW USER
  create: function(req, res) {
    console.log('you hit the create user route');
    console.log(req.body.password, "req body password")

    var myPlaintextPassword = req.body.password;

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      db.User
        .create({
          username: req.body.username,
          fullname: req.body.fullname,
          password: hash
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },


  //CREATE NEW USER AFTER CHECKING FOR DUPLICATES IN DB
  signUp: function (req, res) {
    console.log('user signup was hit')

    db.User
    .findOne({username: req.body.username})
    .then(dbModel => res.json(dbModel))

    .then(function(err, res){
      if (err){
          console.log('user already exists with that name');
          return res.status(403).json({error: 'Email is already in use!'})
        }
      else {
        db.User
        .create(req.body)
        console.log('user created')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
      }
    })
    .catch(err => res.status(422).json(err));
  }
};
