import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNL2HbBbvHGF7Amr7jGvXDBDmrWu0CUCE",
  authDomain: "tinder-clone-c7c92.firebaseapp.com",
  projectId: "tinder-clone-c7c92",
  storageBucket: "tinder-clone-c7c92.appspot.com",
  messagingSenderId: "770213591488",
  appId: "1:770213591488:web:2be6f7f6c3528c4b1d3025",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
