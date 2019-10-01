const path = require("path");
const router = require("express").Router();
const artistsController = require("./controllers/artistsController");
const usersController = require("./controllers/usersController");
const saveArtController = require("./controllers/saveArtController");

router.route("/api/artists")
  .get(artistsController.findAll)

router
  .route("/api/artists/:artists")
  .get(artistsController.findById)
 
router
  .route("/auth/createAccount")
  .post(usersController.create);

router
  .route("/saved")
  .post(saveArtController.findAndSaveArt)
  .delete(saveArtController.findAndDeleteArt);

router
  .route("/api/users/")
  .get(saveArtController.findUserAndPW);

module.exports = router;
// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


