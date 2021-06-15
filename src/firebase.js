import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDFTor9O5U1VmGLDEIXOwrweSjCUOYg10",
  authDomain: "react-crud-47d62.firebaseapp.com",
  databaseURL: "https://react-crud-47d62-default-rtdb.firebaseio.com",
  projectId: "react-crud-47d62",
  storageBucket: "react-crud-47d62.appspot.com",
  messagingSenderId: "117799474869",
  appId: "1:117799474869:web:296813141f252deaef90fc",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
