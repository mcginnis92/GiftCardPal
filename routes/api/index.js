const router = require("express").Router();
const giftcardRoutes = require("./giftcards");
const userRoutes = require("./users");

// Book routes
router.use("/giftcards", giftcardRoutes);
router.use("/users", userRoutes);

module.exports = router;
