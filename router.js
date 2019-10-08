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
  
  .get(saveArtController.findAndPopulate);

  router
  .route("/saved/:id")
  .delete(saveArtController.findAndDeleteArt)

router
  .route("/api/users/")
  .get(saveArtController.findUserAndPW);

module.exports = router;


