"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();

    // ✅ FIX: Check password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      
      // ✅ FIX: Redirect to login page
      router.push("/login");

    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      {/* your inputs */}
    </form>
  );
}