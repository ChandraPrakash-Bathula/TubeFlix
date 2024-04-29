// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRxS8wxKyGkv0ZA2kapPRjHnsiXKIv7lQ",
  authDomain: "utubeflix-79845.firebaseapp.com",
  projectId: "utubeflix-79845",
  storageBucket: "utubeflix-79845.appspot.com",
  messagingSenderId: "487146553247",
  appId: "1:487146553247:web:4df0d8ff3d01ff685b87aa",
  measurementId: "G-J3HZDG39HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);