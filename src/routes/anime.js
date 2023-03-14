const express = require("express");
const animeSchema = require("../models/anime");

const router = express.Router();

//Add movie
router.post("/animes", (req, res) => {
    const anime = animeSchema(req.body);
    anime
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Get all
router.get("/animes", (req, res) => {
    animeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Get one
router.get("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Update one
router.put("/animes/:id", (req, res) => {
    const { id } = req.params;
    const { title, writer, year, synopsis } = req.body;
    animeSchema
        .updateOne({_id: id}, {$set: {title, writer, year, synopsis}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Delete one
router.delete("/animes/:id", (req, res) => {
    const { id } = req.params;
    animeSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;