// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wuiVix8wE2oZ1DyotG-T0aJ0YSLxFzE",
  authDomain: "contact-app-v275.firebaseapp.com",
  projectId: "contact-app-v275",
  storageBucket: "contact-app-v275.firebasestorage.app",
  messagingSenderId: "387288489007",
  appId: "1:387288489007:web:0e0da34c7efc2e1cdebada"
};

// ✅ Initialize Firebase FIRST
export const app = initializeApp(firebaseConfig);

// ✅ THEN use app to get Firestore
export const db = getFirestore(app);
