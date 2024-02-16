// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUvUkUvU0c8rV1sCm8HTx09VxzrBNTjWI",
  authDomain: "sports-items-management-2.firebaseapp.com",
  projectId: "sports-items-management-2",
  storageBucket: "sports-items-management-2.appspot.com",
  messagingSenderId: "1082567391217",
  appId: "1:1082567391217:web:5b3fba8758d19994b33650",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
