import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_REAL_KEY",
  authDomain: "YOUR_REAL_DOMAIN",
  projectId: "YOUR_REAL_ID",
  storageBucket: "YOUR_REAL_BUCKET",
  messagingSenderId: "YOUR_REAL_SENDER_ID",
  appId: "YOUR_REAL_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);