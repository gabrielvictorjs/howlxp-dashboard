import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBLf3bVWcFg2XjfZ6cGJRNZerCyrXPbm-s",
  authDomain: "whatsapptst-2a268.firebaseapp.com",
  databaseURL: "https://whatsapptst-2a268.firebaseio.com",
  projectId: "whatsapptst-2a268",
  storageBucket: "whatsapptst-2a268.appspot.com",
  messagingSenderId: "575783839683",
  appId: "1:575783839683:web:a2ed2312460c765c"
};

const app = firebase.initializeApp(config);

export const database = app.database();
