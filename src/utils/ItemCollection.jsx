// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4dGbdhiGSWFUEztdMuhed8LdCTmRBwaw",
  authDomain: "nintai-ecommerce.firebaseapp.com",
  projectId: "nintai-ecommerce",
  storageBucket: "nintai-ecommerce.appspot.com",
  messagingSenderId: "512594992591",
  appId: "1:512594992591:web:0d3f7532af03ea35dec6ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app);

