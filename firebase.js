import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7lPGNWx1dK1TODdY9w8Y6Rmv3C_R_loI",
    authDomain: "chatapp-60e9b.firebaseapp.com",
    projectId: "chatapp-60e9b",
    storageBucket: "chatapp-60e9b.appspot.com",
    messagingSenderId: "703389069393",
    appId: "1:703389069393:web:c61fc8f76870f5a0eb0870",
    measurementId: "G-9MX8QCP27B"
  };

  let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

 