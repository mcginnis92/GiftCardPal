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

  //LOGIN A USER
  login: function(req, res){
    console.log("you hit the login user route");
    console.log("req.body", req.body)

    var myPlaintextPassword = req.body.password;
    
    // bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
      db.User.findOne({
        username: req.body.username,
        password: req.body.password
      })
        .then(dbModel => res.send(dbModel))
        .catch(err => console.log(err.response));
    // })
  },




  // login: function(req, res) {
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   passport.use(
  //     new LocalStrategy(function(username, password, done) {
  //       User.findOne({ username: username }, function(err, user) {
  //         if (err) {
  //           return done(err);
  //         }
  //         if (!user) {
  //           return done(null, false, { message: "Incorrect username." });
  //         }

  //         if (!user.validPassword(password)) {
  //           return done(null, false, { message: "Incorrect password." });
  //         }
  //         return done(null, false, { message: "Incorrect password." });
  //       });
  //     })
  //   );
  // }
};
