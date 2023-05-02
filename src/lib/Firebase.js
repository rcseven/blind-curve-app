import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsLw03nCrB_S3YI9tysuYdAP4-xkKyIaM",
  authDomain: "blind-curve-app.firebaseapp.com",
  databaseURL:
    "https://blind-curve-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blind-curve-app",
  storageBucket: "blind-curve-app.appspot.com",
  messagingSenderId: "455484405498",
  appId: "1:455484405498:web:68430b906d51a4c638fb43",
  measurementId: "G-PW5LN8DBXD",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
