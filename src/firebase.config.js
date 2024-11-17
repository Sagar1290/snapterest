import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "snapterest.firebaseapp.com",
    projectId: "snapterest",
    storageBucket: "snapterest.appspot.com",
    messagingSenderId: "320941811892",
    appId: "1:320941811892:web:d3d09da66a520a18f0cfe1",
    measurementId: "G-3KN9E3ZCM4"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// export const analytics = getAnalytics(app);