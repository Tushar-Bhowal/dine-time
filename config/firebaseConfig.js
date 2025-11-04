// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfWepkJJtuuIQnI894BqsHwrQryl8tcJU",
  authDomain: "dine-time-ec8f6.firebaseapp.com",
  projectId: "dine-time-ec8f6",
  storageBucket: "dine-time-ec8f6.firebasestorage.app",
  messagingSenderId: "862020402084",
  appId: "1:862020402084:web:ca3be0291e0d0b37915f31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
