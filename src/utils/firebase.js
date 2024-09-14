// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBibGR4VB_90eXcZOXwnGWc-1ZvI9DBaWM",
    authDomain: "first-project-15fc3.firebaseapp.com",
    projectId: "first-project-15fc3",
    storageBucket: "first-project-15fc3.appspot.com",
    messagingSenderId: "904073007465",
    appId: "1:904073007465:web:e5fad8a8ee227f7da46df8",
    measurementId: "G-NCQ9GPKRC1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export{
  app,
  auth
 };