const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .post(usersController.create);

// Matches with "/api/users/login"
router.route("/login")
  .post(usersController.login);

//Matches with "api/users/:_id"
router.route("/:_id")
  .get(usersController.findOne)

//Matches with "api/users/:_id/:category"
router.route("/:_id/:category")
  .get(usersController.findCategory)

module.exports = router;