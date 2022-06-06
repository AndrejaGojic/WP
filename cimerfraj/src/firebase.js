// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq7B5fvJhyzRQMgQW7yeA-EuaGrT_7QxA",
  authDomain: "cimerfraj-1f11c.firebaseapp.com",
  projectId: "cimerfraj-1f11c",
  storageBucket: "cimerfraj-1f11c.appspot.com",
  messagingSenderId: "162698954806",
  appId: "1:162698954806:web:facefe16d80fb07a767097",
  measurementId: "G-22P71NDP76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();
const storage = firebase.storage();

export {db, storage}
