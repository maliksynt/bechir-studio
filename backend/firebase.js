const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getStorage } = require("firebase-admin/storage");
const serviceAccount = require("./creds.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db_firestore = getFirestore();
const db_storage = getStorage();

module.exports = { db_firestore, db_storage };
