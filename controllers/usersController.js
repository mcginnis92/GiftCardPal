const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  //Find the gift cards belonging to one user
  findOne: function(req, res) {
    db.User.findOne(req.params)
      .populate("giftcards")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Find the gift cards by category
  findCategory: function(req, res) {
    console.log(req.params);

    db.User.findOne(req.params._id)
    .populate({
      path: "giftcards",
      match: { category: req.params.category },
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  //Create a new user and hash their password
  create: function(req, res) {
    var myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      db.User.create({
        username: req.body.username,
        fullname: req.body.fullname,
        password: hash
      })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },

  //Validate a user login
  login: function(req, res){
    db.User.findOne({ username: req.body.username }, function(err, user) {
      if (err) throw err;
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
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
