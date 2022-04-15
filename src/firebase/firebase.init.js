// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCypR-QRCLWq-QJNS7KUQhgcwIP5ijqFOs",
  authDomain: "ema-john-b8810.firebaseapp.com",
  projectId: "ema-john-b8810",
  storageBucket: "ema-john-b8810.appspot.com",
  messagingSenderId: "164776455895",
  appId: "1:164776455895:web:b5f620627e1e2570658a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;