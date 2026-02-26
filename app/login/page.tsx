"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}