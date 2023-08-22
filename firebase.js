// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ZfKhidgOLiZVwOYujO3pSqjV9AA7E5A",
  authDomain: "panther-print-station.firebaseapp.com",
  projectId: "panther-print-station",
  storageBucket: "panther-print-station.appspot.com",
  messagingSenderId: "506804555061",
  appId: "1:506804555061:web:01e63c51ca217e747f907c",
  measurementId: "G-44JP12WS30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);