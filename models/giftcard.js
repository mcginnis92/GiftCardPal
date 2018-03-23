const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftCardSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const GiftCard = mongoose.model("giftcard", giftCardSchema);

module.exports = GiftCard;
