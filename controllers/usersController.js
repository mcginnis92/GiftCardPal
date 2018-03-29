const db = require("../models"); 

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
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //CREATE NEW USER AFTER CHECKING FOR DUPLICATES IN DB
  signUp: function (req, res) {
    console.log('user controller signup was hit')

    db.User
    .findOne({username: req.body.username})
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
