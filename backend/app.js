const express = require("express");
const cors = require("cors");

const app = express();

// Configuration de CORS
app.use(
  cors({
    origin: "*", // Vous pouvez remplacer '*' par une liste d'origines spécifiques
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

module.exports = app;
