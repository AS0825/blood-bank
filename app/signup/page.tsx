"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSignup = () => {
    if (name) {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}