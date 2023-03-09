const mongoose = require("mongoose");

const animeSchema = mongoose.Schema({
    title: {
        type: String,
    },
    writer: {
        type: String,
    },
    year: {
        type: Number,
    },
    synopsis: {
        type: String,
    }
});

module.exports = mongoose.model("Anime", animeSchema);