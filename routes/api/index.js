const router = require("express").Router();
const giftcardRoutes = require("./giftcards");
const userRoutes = require("./users");

router.use("/giftcards", giftcardRoutes);
router.use("/users", userRoutes);

module.exports = router;
