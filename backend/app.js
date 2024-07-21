const express = require("express");
const { db_firestore, db_storage } = require("./firebase");
const cors = require("cors");

const app = express();

// Importer les routes
// const authRoutes = require("./routes/unprotected/auth");
// const photoRoutes = require("./routes/protected/photos");
// const videoRoutes = require("./routes/protected/videos");
// const collectionRoutes = require("./routes/protected/collections");

// Middleware pour parsing JSON
app.use(express.json());

app.use(
  cors({
    origin: "*", // Vous pouvez remplacer '*' par une liste d'origines spécifiques
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes pour l'authentification et les opérations globales
// app.use("/api/auth", authRoutes);
// app.use("/api/photos", photoRoutes);
// app.use("/api/videos", videoRoutes);
// app.use("/api/collections", collectionRoutes);
module.exports = app;
