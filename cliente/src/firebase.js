// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hefe-9e084.firebaseapp.com",
  projectId: "hefe-9e084",
  storageBucket: "hefe-9e084.appspot.com",
  messagingSenderId: "770727508815",
  appId: "1:770727508815:web:1dbbe1e61ca7522a54e33a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

