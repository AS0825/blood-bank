"use client";

import { useState } from "react";

export default function RequestBlood() {
  const [bloodGroup, setBloodGroup] = useState("");

  const handleRequest = () => {
    alert(`Blood request sent for ${bloodGroup}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Request Blood
        </h2>

        <select
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option>Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <button
          onClick={handleRequest}
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}