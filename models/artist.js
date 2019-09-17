var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },

    name: {
        type: String,
        trim: true,
        required: true
    },

    nationality: {
        type: String
        [false, "This information in unavailable"]
    },

    gender: {
        type: String
        [false, "This information in unavailable"]
    },

    birth_year: {
        type: String
        [false, "This information in unavailable"]
    },

    death_year: {
        type: String
        [false, "This information in unavailable"]
    }
});

var Artists = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;