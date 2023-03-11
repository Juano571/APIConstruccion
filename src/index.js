const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const animeRoutes = require("./routes/anime");

const app = express();
const port = process.env.PORT || 9000;


/**
 * Middleware para analizar los cuerpos de solicitud entrantes en JSON.
 *
 * @function
 * @param {Object} express.json - Analiza los cuerpos de solicitud entrantes en JSON.
 */
app.use(express.json());

/**
 * Middleware para utilizar las rutas de anime.
 *
 * @function
 * @param {Object} animeRoutes - Rutas para manipular datos de animes.
 */
app.use("/api", animeRoutes);

/**
 * Ruta principal del servidor.
 *
 * @function
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {String} - Mensaje de bienvenida al API.
 */
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

/**
 * Conexión a la base de datos MongoDB.
 *
 * @function
 * @param {String} process.env.MONGODB_URI - La URL de conexión de MongoDB.
 * @returns {String} - Mensaje de conexión exitosa.
 * @throws {Object} - Error de conexión.
 */
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

/**
 * Inicia el servidor en el puerto especificado.
 *
 * @function
 * @param {Number} port - El puerto en el que se iniciará el servidor.
 * @returns {String} - Mensaje de inicio del servidor.
 */
app.listen(port, () => console.log("server listening on port", port));


