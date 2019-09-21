const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
// setting up api route /api/books to look into the js file of books

module.exports = router;
