const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
// router.route("/")
//   .post(usersController.create);
  router.route("/")
  .post(usersController.signUp);

//Matches with "api/users/:username"
router.route("/:username")
  .get(usersController.findOne)

module.exports = router;