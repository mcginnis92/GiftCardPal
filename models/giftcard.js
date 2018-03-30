const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftCardSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  number: { type: Number, required: true },
  pin: { type: Number, required: false },
  image: { type: Buffer},
  date: { type: Date, default: Date.now },
  userId: [{ type: Schema.Types.ObjectId, ref: 'GiftCard' }],
});

const GiftCard = mongoose.model("giftcard", giftCardSchema);

module.exports = GiftCard;
