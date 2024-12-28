// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8hc_qILgihtWDeGJwH7-iJDhb2WK2Bhs",
  authDomain: "blog-4066e.firebaseapp.com",
  projectId: "blog-4066e",
  storageBucket: "blog-4066e.firebasestorage.app",
  messagingSenderId: "705915159368",
  appId: "1:705915159368:web:f3d7ce6bf295dbe4db297d",
  measurementId: "G-Z9R16SHDV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);