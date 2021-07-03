import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5WmnQx_UixLBOc4DY9NJztnjX2rMkYug",
    authDomain: "twitter-clone-91ed5.firebaseapp.com",
    projectId: "twitter-clone-91ed5",
    storageBucket: "twitter-clone-91ed5.appspot.com",
    messagingSenderId: "440962696700",
    appId: "1:440962696700:web:34d834845e3ea030d39e79",
    measurementId: "G-NJLZXCGX1E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
