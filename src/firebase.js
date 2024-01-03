import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDf26ie4a8V_9Fy7_UrlOJoTOZrRbbtwm8",
  authDomain: "todo-list-35f2a.firebaseapp.com",
  databaseURL: "https://todo-list-35f2a-default-rtdb.firebaseio.com",
  projectId: "todo-list-35f2a",
  storageBucket: "todo-list-35f2a.appspot.com",
  messagingSenderId: "456802960158",
  appId: "1:456802960158:web:6c0b1b5f77374b49903f0f",
});

export { firebaseConfig as firebase };
