// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // ✅ import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBbcOEb31Vm0x2EZAmKp_D_eEkdM0dMEKo",
  authDomain: "drms-4858c.firebaseapp.com",
  projectId: "drms-4858c",
  storageBucket: "drms-4858c.firebase.app", // ✅ fix storageBucket
  messagingSenderId: "663937032373",
  appId: "1:663937032373:web:ece07bdb8d9bbd3341defc"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Get instances
const storage = getStorage(app);
const db = getFirestore(app); // ✅ Firestore instance

export { storage, db }; // ✅ export db for use in API routes or pages
