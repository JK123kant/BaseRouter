// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAAMoyvo5n0-plr7yWaCej4K8uv65t5eCo",
    authDomain: "loginsystem1205.firebaseapp.com",
    projectId: "loginsystem1205",
    storageBucket: "loginsystem1205.firebasestorage.app",
    messagingSenderId: "1025856192124",
    appId: "1:1025856192124:web:facc9c62bf2b8875e5d3f9",
    measurementId: "G-6XLKBZH42Q"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };