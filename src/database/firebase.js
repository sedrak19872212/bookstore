// database/firebaseDb.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBG9gXtDvK34Lzrpak78nwuGzAKO-QrDsQ",
  authDomain: "bookstore-f5b54.firebaseapp.com",
  projectId: "bookstore-f5b54",
  storageBucket: "bookstore-f5b54.appspot.com",
  messagingSenderId: "104410852992",
  appId: "1:104410852992:web:567c1322a9f2407202c065",
  measurementId: "G-H0N3GGLCRG",
 databaseURL: "https://bookstore-f5b54-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export { db };


/*
  function writeUserData(userId, name, email) {
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email
    });
  };

  const starCountRef = ref(db, 'posts/' + postId + '/starCount');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
  });
*/

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;