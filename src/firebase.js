// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9eb78.firebaseapp.com",
  projectId: "mern-estate-9eb78",
  storageBucket: "mern-estate-9eb78.appspot.com",
  messagingSenderId: "853243562809",
  appId: "1:853243562809:web:8a79b8e80152a3f17d36e8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
