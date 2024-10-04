// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import * as firebase from "firebase/compat";
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
apiKey: "AIzaSyC4j1GjU7W8Iw2W-6EuvunTuoHUHnijhQw",
authDomain: "impacthive1.firebaseapp.com",
projectId: "impacthive1",
storageBucket: "impacthive1.appspot.com",
messagingSenderId: "296503724987",
appId: "1:296503724987:web:195ccd185201d4d538d29e",
//measurementId: "G-SWZH9GEDY8"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };