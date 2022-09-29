// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNH42OhcB_0uhaBMjkb_byJnpopc-VaQ",
  authDomain: "react-cursos-eff47.firebaseapp.com",
  projectId: "react-cursos-eff47",
  storageBucket: "react-cursos-eff47.appspot.com",
  messagingSenderId: "469900217360",
  appId: "1:469900217360:web:f4ae509fa37c5e485dce95"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);