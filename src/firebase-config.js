import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA-Yex0CB8VjrnK5JiDd1q3YAtuFPi0obs",
  authDomain: "operaciju-zurnalas.firebaseapp.com",
  projectId: "operaciju-zurnalas",
  storageBucket: "operaciju-zurnalas.appspot.com",
  messagingSenderId: "82290127427",
  appId: "1:82290127427:web:c0bb9c98e9add4d918daf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)