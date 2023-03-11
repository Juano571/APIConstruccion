const mongoose = require("mongoose");


/**
 * Esquema de Mongoose para los animes.
 *
 * @typedef {Object} AnimeSchema
 * @property {String} title - El título del anime.
 * @property {String} writer - El nombre del escritor del anime.
 * @property {Number} year - El año de lanzamiento del anime.
 * @property {String} synopsis - Una breve descripción del anime.
 */

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