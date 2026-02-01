// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc , getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wuiVix8wE2oZ1DyotG-T0aJ0YSLxFzE",
  authDomain: "contact-app-v275.firebaseapp.com",
  projectId: "contact-app-v275",
  storageBucket: "contact-app-v275.firebasestorage.app",
  messagingSenderId: "387288489007",
  appId: "1:387288489007:web:0e0da34c7efc2e1cdebada"
};


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
