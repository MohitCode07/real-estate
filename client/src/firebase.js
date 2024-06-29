// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernstate-1a1b7.firebaseapp.com",
  projectId: "mernstate-1a1b7",
  storageBucket: "mernstate-1a1b7.appspot.com",
  messagingSenderId: "446157443097",
  appId: "1:446157443097:web:f6cd80bb3a728ef5621a88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);