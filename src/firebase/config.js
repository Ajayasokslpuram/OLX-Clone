import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi6gTwnwxU6tFrWubyrBmrKMdLA6m3IXE",
  authDomain: "olx-clone-aed8f.firebaseapp.com",
  projectId: "olx-clone-aed8f",
  storageBucket: "olx-clone-aed8f.appspot.com",
  messagingSenderId: "976916838254",
  appId: "1:976916838254:web:3971bcb8b87400ab2b337f"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

