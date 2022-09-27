// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwT1NZL4Swe1LgI6hsuavKylIaMUB5lL4",
  authDomain: "pohle-commerce.firebaseapp.com",
  projectId: "pohle-commerce",
  storageBucket: "pohle-commerce.appspot.com",
  messagingSenderId: "158653764980",
  appId: "1:158653764980:web:30335a60c20ff7cb1b0821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
