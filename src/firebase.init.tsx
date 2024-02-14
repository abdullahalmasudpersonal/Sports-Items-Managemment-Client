// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH7ruYXKFz0xSzgdjvaSXWY9V-C_q8xgc",
  authDomain: "sports-items-management.firebaseapp.com",
  projectId: "sports-items-management",
  storageBucket: "sports-items-management.appspot.com",
  messagingSenderId: "605044293831",
  appId: "1:605044293831:web:20232a12786c24d190fee2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
