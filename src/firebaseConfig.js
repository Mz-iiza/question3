// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQAWrwlJfpcNX5GA4b1NCuhlv3kLqBeZc",
  authDomain: "fake-auth-1.firebaseapp.com",
  projectId: "fake-auth-1",
  storageBucket: "fake-auth-1.appspot.com",
  messagingSenderId: "339855552775",
  appId: "1:339855552775:web:6cd1e3202db16ba3d015a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;