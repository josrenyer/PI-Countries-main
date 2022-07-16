// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnQH-44LYLVSNkxXrh9us1HgMYQDXB8s",
  authDomain: "react-firebase-auth-9a0c0.firebaseapp.com",
  projectId: "react-firebase-auth-9a0c0",
  storageBucket: "react-firebase-auth-9a0c0.appspot.com",
  messagingSenderId: "119945936645",
  appId: "1:119945936645:web:ed384d5b558a494716c16c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;