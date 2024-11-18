import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkiDsQ7wfNH5LpgRfgFRq_J6qiDwEe_vw",
  authDomain: "impacthive-415db.firebaseapp.com",
  projectId: "impacthive-415db",
  storageBucket: "impacthive-415db.firebasestorage.app",
  messagingSenderId: "221633427464",
  appId: "1:221633427464:web:d1ed0bc926aa0dc2def9bd"
};

// Initialize Firebaser
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);