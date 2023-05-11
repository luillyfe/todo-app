// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6c4NQpBUNPFtnWFgy1or1D5dA9NA0_d4",
  authDomain: "perfume-11124.firebaseapp.com",
  projectId: "perfume-11124",
  storageBucket: "perfume-11124.appspot.com",
  messagingSenderId: "625368018242",
  appId: "1:625368018242:web:679bbdac5dbe127985acdb",
  measurementId: "G-ZD0BNM4FC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
