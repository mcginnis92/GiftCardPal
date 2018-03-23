const router = require("express").Router();
const giftcardRoutes = require("./giftcards");

// Book routes
router.use("/giftcards", giftcardRoutes);

module.exports = router;
