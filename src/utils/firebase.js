// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCePHxnS2JT3ntSK6hjvX34nTPgH7375t4",
  authDomain: "netflixgpt-123abc.firebaseapp.com",
  projectId: "netflixgpt-123abc",
  storageBucket: "netflixgpt-123abc.firebasestorage.app",
  messagingSenderId: "97438258465",
  appId: "1:97438258465:web:00bfc3394a49b9eae55a60",
  measurementId: "G-QHMWCCCND4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();