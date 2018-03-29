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
};
