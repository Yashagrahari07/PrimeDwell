// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primedwell.firebaseapp.com",
  projectId: "primedwell",
  storageBucket: "primedwell.appspot.com",
  messagingSenderId: "300967965361",
  appId: "1:300967965361:web:bba220cff22bb21035a890"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);