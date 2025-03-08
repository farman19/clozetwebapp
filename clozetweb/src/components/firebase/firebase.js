// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOhoOASLc3a6XnDO94-mBt4K4-6SOUce4",
  authDomain: "clozetauth.firebaseapp.com",
  projectId: "clozetauth",
  storageBucket: "clozetauth.firebasestorage.app",
  messagingSenderId: "585188676259",
  appId: "1:585188676259:web:97f42bd0925db7b1612516",
  measurementId: "G-R2BGTN4VY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;