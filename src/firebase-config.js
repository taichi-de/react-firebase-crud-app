// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-firebase-crud-app-77472.firebaseapp.com",
  projectId: "react-firebase-crud-app-77472",
  storageBucket: "react-firebase-crud-app-77472.appspot.com",
  messagingSenderId: "834368278634",
  appId: "1:834368278634:web:a3f2282f5954b40202ba13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);