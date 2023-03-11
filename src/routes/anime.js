const express = require("express");
const animeSchema = require("../models/anime");

const router = express.Router();

/**
 * Crea un nuevo anime en la base de datos.
 *
 * @param {Object} req.body - Un objeto que contiene los datos del anime a agregar.
 * @returns {Object} - El objeto del anime creado.
 * @throws {Error} - Si ocurre un error al intentar agregar el anime.
 */
router.post("/animes", (req, res) => {
    const anime = animeSchema(req.body);
    anime
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/**
 * Obtiene una lista de todos los animes almacenados en la base de datos.
 *
 * @returns {Array} - Un array de objetos que representan los animes almacenados.
 * @throws {Error} - Si ocurre un error al intentar obtener los animes.
 */
router.get("/animes", (req, res) => {
    animeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/**
 * Obtiene un anime específico de la base de datos según su ID.
 *
 * @param {String} req.params.id - El ID del anime que se desea obtener.
 * @returns {Object} - El objeto del anime solicitado.
 * @throws {Error} - Si ocurre un error al intentar obtener el anime.
 */
router.get("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/**
 * Actualiza un anime específico en la base de datos según su ID.
 *
 * @param {String} req.params.id - El ID del anime que se desea actualizar.
 * @param {Object} req.body - Un objeto que contiene los datos actualizados del anime.
 * @returns {Object} - El objeto del anime actualizado.
 * @throws {Error} - Si ocurre un error al intentar actualizar el anime.
 */
router.put("/animes/:id", (req, res) => {
    const { id } = req.params;
    const { title, writer, year, synopsis } = req.body;
    animeSchema
        .updateOne(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/**
 * Elimina un anime específico de la base de datos según su ID.
 *
 * @param {String} req.params.id - El ID del anime que se desea eliminar.
 * @returns {Object} - El objeto del anime eliminado.
 * @throws {Error} - Si ocurre un error al intentar eliminar el anime.
 */
router.delete("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .remove(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;