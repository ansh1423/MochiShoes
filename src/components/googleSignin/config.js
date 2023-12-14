// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByUXniU10XAq09BECmZdj8GhqN5cy5RFY",
  authDomain: "iconic-fountain-405111.firebaseapp.com",
  projectId: "iconic-fountain-405111",
  storageBucket: "iconic-fountain-405111.appspot.com",
  messagingSenderId: "113479256104",
  appId: "1:113479256104:web:898cb1fc50f2df38e24d1d",
  measurementId: "G-QYX9VGVD0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider= new GoogleAuthProvider();
export {auth, provider};