const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  //FIND A GIVEN USER'S GIFTCARDS
  findOne: function(req, res) {

    db.User.findOne(req.params)
      .populate("giftcards")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //CREATE A NEW USER
  create: function(req, res) {

    var myPlaintextPassword = req.body.password;

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      db.User.create({
        username: req.body.username,
        fullname: req.body.fullname,
        password: hash
      })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },

  login: function(req, res){
    // fetch user and test password verification
    db.User.findOne({ username: req.body.username }, function(err, user) {
      if (err) throw err;

        // test a matching password
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            console.log(req.body.password, isMatch); 
            if (isMatch){
              return res.json(user)
            }
            else {
              return res.send('no match found')
            }
        })
    })   
}

};
