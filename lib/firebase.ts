import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxx",
  authDomain: "bloodbank-123.firebaseapp.com",
  projectId: "bloodbank-123",
  storageBucket: "bloodbank-123.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);