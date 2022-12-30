
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArOsOXLkC7WuVEjihMmQh7WOVHkvPdEGg",
    authDomain: "task-manager-app-27140.firebaseapp.com",
    projectId: "task-manager-app-27140",
    storageBucket: "task-manager-app-27140.appspot.com",
    messagingSenderId: "748649798530",
    appId: "1:748649798530:web:1c7a2e527a9eabd531cd9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;