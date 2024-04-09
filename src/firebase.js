import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALUFssvT3JhpPik0S-1YUsbvry_b5n9p8",
  authDomain: "clone-react-dfee2.firebaseapp.com",
  databaseURL: "https://clone-react-dfee2.firebaseio.com",
  projectId: "clone-react-dfee2",
  storageBucket: "clone-react-dfee2.appspot.com",
  messagingSenderId: "102282803953",
  appId: "1:102282803953:web:5cf2dc19723a06b7034750",
  measurementId: "G-7SZZG7YB2C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
