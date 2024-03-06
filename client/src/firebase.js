// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cba26.firebaseapp.com",
  projectId: "mern-estate-cba26",
  storageBucket: "mern-estate-cba26.appspot.com",
  messagingSenderId: "919334215586",
  appId: "1:919334215586:web:ba5810a11ab63583279cfb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);