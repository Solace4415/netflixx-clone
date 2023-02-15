// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSFCKvdj4MZe2iuD6qhDcW7JTvDNKLZTk",
  authDomain: "netflix-clone-90210.firebaseapp.com",
  projectId: "netflix-clone-90210",
  storageBucket: "netflix-clone-90210.appspot.com",
  messagingSenderId: "525963906880",
  appId: "1:525963906880:web:c536e02e59e97bccea74a5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
