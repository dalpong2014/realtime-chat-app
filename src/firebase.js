import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8AE5S8tVwh9pdHFcnCv40I2cFqruLj28",
  authDomain: "chat-64c95.firebaseapp.com",
  projectId: "chat-64c95",
  storageBucket: "chat-64c95.appspot.com",
  messagingSenderId: "932390922720",
  appId: "1:932390922720:web:dbc455eef4870bc21ba385",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
