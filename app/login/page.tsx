"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      alert("User not found!");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
      alert("Login Successful!");
      router.push("/dashboard");
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
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