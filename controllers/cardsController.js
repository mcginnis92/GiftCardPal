const db = require("../models"); 

module.exports = {
  findAll: function(req, res) {
    console.log('route hit');
    db.GiftCard
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.GiftCard
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.GiftCard
      .findOne({'name': req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.GiftCard
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res){
    console.log(req.body._id)
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
  update: function(req, res) {
    db.GiftCard
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.GiftCard
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
