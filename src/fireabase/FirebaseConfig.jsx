// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv8suEbs3KrtYArX1x3xvNS2Yyf5wqKB0",
  authDomain: "shopswift-8d6f1.firebaseapp.com",
  projectId: "shopswift-8d6f1",
  storageBucket: "shopswift-8d6f1.appspot.com",
  messagingSenderId: "1002833186024",
  appId: "1:1002833186024:web:fec0d52f992bd2addc0d5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

