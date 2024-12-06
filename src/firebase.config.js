
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-uZ1-wIsToBugeSyLB6DXNlXE049Ntic",
  authDomain: "house-marketplace-app-707fd.firebaseapp.com",
  projectId: "house-marketplace-app-707fd",
  storageBucket: "house-marketplace-app-707fd.firebasestorage.app",
  messagingSenderId: "96822653436",
  appId: "1:96822653436:web:4cab7700903aa3e5b6c279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();