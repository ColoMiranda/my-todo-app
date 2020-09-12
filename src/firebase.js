import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjEvXBAAV39vvUPzwpsfSHdQltmxZA9Z8",
  authDomain: "marcos-todolist.firebaseapp.com",
  databaseURL: "https://marcos-todolist.firebaseio.com",
  projectId: "marcos-todolist",
  storageBucket: "marcos-todolist.appspot.com",
  messagingSenderId: "9412715257",
  appId: "1:9412715257:web:68fb5f27f3a2a6638ef828",
  measurementId: "G-XJ6B7WZLQY",
});

const db = firebaseApp.firestore();

export { db };
