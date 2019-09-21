const router = require("express").Router();
const artistRoutes = require("./artist");

// Book routes
router.use("/artists", artistRoutes);
// setting up api route /api/books to look into the js file of books

module.exports = router;
