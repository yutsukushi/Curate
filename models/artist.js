var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    nationality: {
        type: String
    }
});

var Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;