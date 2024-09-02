// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXTPUBLIC_FB_API_KEY,
    authDomain: "stocks-for-noobs.firebaseapp.com",
    projectId: "stocks-for-noobs",
    storageBucket: "stocks-for-noobs.appspot.com",
    messagingSenderId: "475743371526",
    appId: "1:475743371526:web:1e2528b6b6a9054a1b9e87",
    measurementId: "G-W9NJX8FWMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);