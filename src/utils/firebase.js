// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSmmVD6xgnwoYrAGRtZE4Wq51iFA76xSs",
  authDomain: "new-project-40325.firebaseapp.com",
  projectId: "new-project-40325",
  storageBucket: "new-project-40325.firebasestorage.app",
  messagingSenderId: "290232215630",
  appId: "1:290232215630:web:e1b515875eff9f840a7b1f",
  measurementId: "G-JTXF1K36JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export{
  app,
  auth
 };
