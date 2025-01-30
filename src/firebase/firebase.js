// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmbB7WRyzjkfkxYWgQMHCVoHwOhh6BTDs",
  authDomain: "food-delivery-e65ec.firebaseapp.com",
  projectId: "food-delivery-e65ec",
  storageBucket: "food-delivery-e65ec.firebasestorage.app",
  messagingSenderId: "71638609207",
  appId: "1:71638609207:web:a247bc6feea76dacfbbeb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db=getFirestore(app);

export {app, auth};