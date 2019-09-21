const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// Matches with "/api/books" and adds the forwards slash to be localhost:3001/api/books/
// here we declare .get and .post that are able to be used under the same route.
// now we look into the booksController file
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
