const db = require("../models"); 

module.exports = {
  //Find all gift cards in database
  findAll: function(req, res) {
    db.GiftCard
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Find a particular gift card by its id
  findById: function(req, res) {
    db.GiftCard
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Create a new gift card and associate it with a user
  create: function(req, res){
    db.GiftCard
      .create(req.body)
      .then(function(newCard) {
        return db.User.findOneAndUpdate(
          {_id: req.body.userId },
          { $push: { giftcards: newCard._id } }, 
          { new: true }
        );
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  },

  //Update a giftcard
  update: function(req, res) {
    db.GiftCard
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  //Remove a gift card
  remove: function(req, res) {
    db.GiftCard
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
