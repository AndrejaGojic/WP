import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm2tYGB6WQP1IQZ3ricEOvuS6ulKwWLFM",
    authDomain: "web-lv-9cf06.firebaseapp.com",
    projectId: "web-lv-9cf06",
    storageBucket: "web-lv-9cf06.appspot.com",
    messagingSenderId: "738253537676",
    appId: "1:738253537676:web:3f279b3d5f63203b22d6a9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig, "login");

  export const auth = getAuth(app);
  