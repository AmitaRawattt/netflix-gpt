// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc4iPYrW73u5iQ3eJtD449oMR0TYLjWTc",
  authDomain: "netflixgpt-ffdd9.firebaseapp.com",
  projectId: "netflixgpt-ffdd9",
  storageBucket: "netflixgpt-ffdd9.appspot.com",
  messagingSenderId: "1048752793353",
  appId: "1:1048752793353:web:bd65be560aa942b9dad5d8",
  measurementId: "G-DLNLK6ER52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
