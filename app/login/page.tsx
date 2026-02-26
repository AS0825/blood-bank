"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      alert("Login Successful ✅");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        alert("User not registered");
      } else if (error.code === "auth/wrong-password") {
        alert("Wrong password");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}