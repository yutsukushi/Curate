import axios from "axios";

// creating method functions to be used on client-side
// notice the same routes being used on different methods

export default {
  // Gets all books
  getArtists: function() {
    return axios.get("/api/artists");
  },
  // Gets the book with the given id
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Deletes the book with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves a book to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  }
};
