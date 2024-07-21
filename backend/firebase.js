const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getStorage } = require("firebase-admin/storage");
const dotenv = require("dotenv");
const fs = require("fs");

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Lire les informations d'identification du fichier JSON
const serviceAccount = JSON.parse(
  fs.readFileSync(process.env.FIREBASE_CRED_JSON_PATH, "utf8")
);

// Initialiser l'application Firebase
initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const db_firestore = getFirestore();
const db_storage = getStorage();

module.exports = { db_firestore, db_storage };
// UTILISER DB_FIRESTORE POUR STOCKER LES URLS ET DB_STORAGE POUR STOCKER LES FICHIERS
