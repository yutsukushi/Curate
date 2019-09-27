const path = require("path");
const router = require("express").Router();
const artistsController = require("./controllers/artistsController");
const usersController = require("./controllers/usersController");

router.route("/api/artists")
  .get(artistsController.findAll)
  .post(artistsController.create);

router
  .route("/api/artists/:artists")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

router
  .route("/auth/createAccount")
  .post(usersController.create);

  
// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
