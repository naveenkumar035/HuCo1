// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC27TEUcpADXtmUoYnL2skcYJPyPY0v9mY",
  authDomain: "huco-8388a.firebaseapp.com",
  databaseURL: "https://huco-8388a-default-rtdb.firebaseio.com",
  projectId: "huco-8388a",
  storageBucket: "huco-8388a.appspot.com",
  messagingSenderId: "41974105388",
  appId: "1:41974105388:web:bc7c12098d04128b519889",
  measurementId: "G-YEGKM6P13Z"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();


export {db, storage};
export default app;