const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  //FIND A GIVEN USER'S GIFTCARDS
  findOne: function(req, res) {
    console.log("req params", req.params)

    db.User.findOne(req.params)
      .populate("giftcards")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //CREATE A NEW USER
  create: function(req, res) {
    console.log("you hit the create user route");

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
    });

    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); 
    });
  });
}

};
