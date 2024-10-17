// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGaVpAW9ESDGwlRj23H2-B_D9cximC3VY",
    authDomain: "impacthive-8bb73.firebaseapp.com",
    projectId: "impacthive-8bb73",
    storageBucket: "impacthive-8bb73.appspot.com",
    messagingSenderId: "1025960550121",
    appId: "1:1025960550121:web:bae471baea97f0556b1a78"
  };

// Initialize Firebase
 export const FIREBASE_APP = initializeApp(firebaseConfig);
 export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
