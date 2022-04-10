// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkRYlz8ssCRBN7eGHcHZb5PbJgOKgdhw4",
    authDomain: "rauter-firebase-app.firebaseapp.com",
    projectId: "rauter-firebase-app",
    storageBucket: "rauter-firebase-app.appspot.com",
    messagingSenderId: "1013809319594",
    appId: "1:1013809319594:web:c3ad44bc4d877e49654ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;