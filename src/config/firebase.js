import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBcjlxN6jeyG5KtJhp-mviLQ_CZcEKOCCY",
    authDomain: "student-management-proje-91f45.firebaseapp.com",
    projectId: "student-management-proje-91f45",
    storageBucket: "student-management-proje-91f45.appspot.com",
    messagingSenderId: "524582906118",
    appId: "1:524582906118:web:dce3f768c2741e31e7d687",
    measurementId: "G-XW5DEV66SR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage }