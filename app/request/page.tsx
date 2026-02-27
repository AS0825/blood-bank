"use client";

import { useState } from "react";

export default function RequestPage() {
  const [form, setForm] = useState({
    patientName: "",
    bloodGroup: "",
    units: "",
    hospital: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Blood Request Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-200 p-6">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Request Blood 🩸
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-medium">Patient Name</label>
            <input
              type="text"
              name="patientName"
              placeholder="Enter patient name"
              value={form.patientName}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Blood Group Required</label>
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
            <label className="block font-medium">Units Required</label>
            <input
              type="number"
              name="units"
              placeholder="Enter units required"
              value={form.units}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Hospital Name</label>
            <input
              type="text"
              name="hospital"
              placeholder="Enter hospital name"
              value={form.hospital}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Contact Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter contact phone number"
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
            Submit Blood Request
          </button>

        </form>
      </div>
    </div>
  );
}