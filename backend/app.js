const express = require("express");
const { db_firestore, db_storage } = require("./firebase");
const cors = require("cors");

const app = express();

// Importer les routes
// TO DOOOOOOO

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
// TO DOOOOOOO

app.get("/api/images", async (req, res) => {
  try {
    const [files] = await db_storage.bucket().getFiles();

    const imageUrls = await Promise.all(
      files.map(async (file) => {
        // Générer une URL signée pour chaque fichier
        const [url] = await file.getSignedUrl({
          action: "read",
          expires: Date.now() + 1000 * 60 * 60, // URL valide pour 1 heure
        });
        return {
          name: file.name,
          url: url,
        };
      })
    );

    res.json(imageUrls);
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des images" });
  }
});

module.exports = app;
