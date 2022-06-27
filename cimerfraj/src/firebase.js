import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig2 = {
  apiKey: "AIzaSyCq7B5fvJhyzRQMgQW7yeA-EuaGrT_7QxA",
  authDomain: "cimerfraj-1f11c.firebaseapp.com",
  databaseURL: "https://cimerfraj-1f11c-default-rtdb.firebaseio.com",
  projectId: "cimerfraj-1f11c",
  storageBucket: "cimerfraj-1f11c.appspot.com",
  messagingSenderId: "162698954806",
  appId: "1:162698954806:web:facefe16d80fb07a767097",
  measurementId: "G-22P71NDP76"
};

firebase.initializeApp(firebaseConfig2)
const fs = firebase.firestore();

export {fs};
export default firebase;