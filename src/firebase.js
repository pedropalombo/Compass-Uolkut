// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMHjgsWakjUnieCZjqSzg5CFIxNMfwi8",
  authDomain: "auth-uolkut.firebaseapp.com",
  projectId: "auth-uolkut",
  storageBucket: "auth-uolkut.appspot.com",
  messagingSenderId: "79580729146",
  appId: "1:79580729146:web:c2efa4ac7c9f5c70344a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth & get reference to the service
export const auth = getAuth(app);