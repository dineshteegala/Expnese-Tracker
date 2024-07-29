import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDHdAemeyLhcTOAqwO8_zFNNSnutdHqEF0",
  authDomain: "expense-tracker-afb32.firebaseapp.com",
  projectId: "expense-tracker-afb32",
  storageBucket: "expense-tracker-afb32.appspot.com",
  messagingSenderId: "2175771675",
  appId: "1:2175771675:web:c83d6d9c7639f9e56b44be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
