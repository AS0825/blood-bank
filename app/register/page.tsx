"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bloodGroup: ""
  });

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(form.email, JSON.stringify(form));
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-700">
          Donor Registration
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setForm({...form, name: e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />

        <select
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setForm({...form, bloodGroup: e.target.value})}
        >
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800"
        >
          Register
        </button>
      </div>
    </div>
  );
}