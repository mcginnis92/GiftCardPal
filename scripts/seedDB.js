const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the GiftCard collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://mcginnis92:mong0db@ds123129.mlab.com:23129/heroku_z1npkg2s",
  {
    useMongoClient: true
  }
);

const giftcardSeed = [
  {
    name:"Bed Bath and Beyond", 
    amount: 25, 
    category: "Retail",
    date: new Date(Date.now())
  },
  {
    name:"Francesca's", 
    amount: 50, 
    category: "Dining",
    date: new Date(Date.now())
  },
  {
    name:"Divvy Bike", 
    amount: 100, 
    category: "Activities",
    date: new Date(Date.now())
  },
  {
    name:"CrossTown Fitness", 
    amount: 200, 
    category: "Health and Wellness",
    date: new Date(Date.now())
  }
];

db.GiftCard
  .remove({})
  .then(() => db.GiftCard.collection.insertMany(giftcardSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
