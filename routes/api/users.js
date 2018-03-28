const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
// router.route("/")
//   .get(usersController.findAll)
//   .post(usersController.create);

//Matches with "api/users/:username"
router.route("/:username")
  .get(usersController.findOne)

module.exports = router;