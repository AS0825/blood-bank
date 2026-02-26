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
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-6">
          Government Portal Login
        </h2>

        <input
          type="email"
          placeholder="Official Email ID"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          Login
        </button>
      </div>
    </div>
  );
}