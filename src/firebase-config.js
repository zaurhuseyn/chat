// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzxy8S1mDa4HqeXOJvxPRl0iYJzSAcqxU",
    authDomain: "explorer-ed352.firebaseapp.com",
    databaseURL: "https://explorer-ed352-default-rtdb.firebaseio.com",
    projectId: "explorer-ed352",
    storageBucket: "explorer-ed352.appspot.com",
    messagingSenderId: "710566287613",
    appId: "1:710566287613:web:358cf5f6a733b88a3e0694"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();