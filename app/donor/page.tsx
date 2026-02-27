"use client";

import { useState } from "react";

export default function DonorPage() {
  const [form, setForm] = useState({
    name: "",
    bloodGroup: "",
    age: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Donor Registered Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 p-6">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Become a Donor ❤️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Blood Group</label>
            <select
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            >
              <option value="">Select blood group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Register as Donor
          </button>

        </form>
      </div>
    </div>
  );
}