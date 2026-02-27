import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC62zxpffQJjiMhz8PF_Kd7rHV-gybihZE",
  authDomain: "blood-bank-system-c0e6a.firebaseapp.com",
  projectId: "blood-bank-system-c0e6a",
  storageBucket: "blood-bank-system-c0e6a.firebasestorage.app",
  messagingSenderId: "187482739262",
  appId: "1:187482739262:web:fc30e96efaa6d59e8e376f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);