// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA93k1sDLAf2kkSTwsMvX-7RAworJtcaOo",
  authDomain: "streamifygpt.firebaseapp.com",
  projectId: "streamifygpt",
  storageBucket: "streamifygpt.appspot.com",
  messagingSenderId: "739448306522",
  appId: "1:739448306522:web:1531f52356bd4a9ea5d163",
  measurementId: "G-1Z9P7T2YHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();