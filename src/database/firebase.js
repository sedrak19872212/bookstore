// database/firebaseDb.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBG9gXtDvK34Lzrpak78nwuGzAKO-QrDsQ",
  authDomain: "bookstore-f5b54.firebaseapp.com",
  projectId: "bookstore-f5b54",
  storageBucket: "bookstore-f5b54.appspot.com",
  messagingSenderId: "104410852992",
  appId: "1:104410852992:web:567c1322a9f2407202c065",
  measurementId: "G-H0N3GGLCRG"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;