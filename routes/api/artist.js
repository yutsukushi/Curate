const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");


// Matches with "/api/artists" and adds the forwards slash to be localhost:3001/api/artists/
// here we declare .get and .post that are able to be used under the same route.
// now we look into the booksController file
router.route("/")
  .get(artistsController.findAll)
  .post(artistsController.create);


// Matches with "/api/artists/:Artist"
router
  .route("/:artists")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

module.exports = router;
