import React from "react";
import { render } from "react-dom";
import { App } from "./App";
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf26ie4a8V_9Fy7_UrlOJoTOZrRbbtwm8",
  authDomain: "todo-list-35f2a.firebaseapp.com",
  databaseURL: "https://todo-list-35f2a-default-rtdb.firebaseio.com",
  projectId: "todo-list-35f2a",
  storageBucket: "todo-list-35f2a.appspot.com",
  messagingSenderId: "456802960158",
  appId: "1:456802960158:web:6c0b1b5f77374b49903f0f",
  measurementId: "G-8DWFN7CVY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
render(<App />, document.getElementById("root"));
