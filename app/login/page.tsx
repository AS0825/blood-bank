"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      alert("Login Successful ✅");
      router.push("/dashboard");
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Wrong password ❌");
      } 
      else if (error.code === "auth/user-not-found") {
        setErrorMessage("User not found. New user? Register now 👇");
      } 
      else {
        setErrorMessage("Invalid credentials");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Login</h1>

      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <br /><br />

      {errorMessage && (
        <div>
          <p style={{ color: "red" }}>{errorMessage}</p>

          {errorMessage.includes("Register") && (
            <button onClick={() => router.push("/register")}>
              Register Now
            </button>
          )}
        </div>
      )}
    </div>
  );
}