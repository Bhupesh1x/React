// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9cfWDUlH38lp6ey4o03KnM9O00wVhSk0",
  authDomain: "whatsapp-1e257.firebaseapp.com",
  databaseURL: "https://whatsapp-1e257-default-rtdb.firebaseio.com",
  projectId: "whatsapp-1e257",
  storageBucket: "whatsapp-1e257.appspot.com",
  messagingSenderId: "987640360942",
  appId: "1:987640360942:web:7ac0022ad7e5d107e9e8ff",
  measurementId: "G-NMB5MRR29F"
};

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;