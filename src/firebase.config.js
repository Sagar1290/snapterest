// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "snapterest.firebaseapp.com",
    projectId: "snapterest",
    storageBucket: "snapterest.appspot.com",
    messagingSenderId: "320941811892",
    appId: "1:320941811892:web:d3d09da66a520a18f0cfe1",
    measurementId: "G-3KN9E3ZCM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);