import  firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgsDcEozrOrzgfiHD85aC7Kaw17CfgaxQ",
    authDomain: "clone-2f2f6.firebaseapp.com",
    projectId: "clone-2f2f6",
    storageBucket: "clone-2f2f6.appspot.com",
    messagingSenderId: "642893780239",
    appId: "1:642893780239:web:3eebff707db245908fda7a",
    measurementId: "G-7CWGZRJ9X7"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
export { auth };