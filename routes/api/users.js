const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .post(usersController.create);

// Matches with "/api/users/login"
router.route("/login")
  .post(usersController.login);

//Matches with "api/users/:username"
router.route("/:username")
  .get(usersController.findOne)

module.exports = router;