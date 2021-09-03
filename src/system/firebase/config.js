import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwp_cM_abPNxBymmK9I6GG75-6cjvhsf0",
    authDomain: "portfolio-web-e8931.firebaseapp.com",
    projectId: "portfolio-web-e8931",
    storageBucket: "portfolio-web-e8931.appspot.com",
    messagingSenderId: "359589023460",
    appId: "1:359589023460:web:d5a560061f6410a90aa6f1",
    measurementId: "G-B4ZB5M67NY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
export default  db;