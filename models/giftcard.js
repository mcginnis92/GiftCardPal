const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftCardSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  // date: { type: Date, default: Date.now },
  // image: { data: Buffer, contentType: String }
});

const GiftCard = mongoose.model("giftcard", giftCardSchema);

module.exports = GiftCard;
