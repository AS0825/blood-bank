"use client";

import { useState } from "react";

export default function DonorPage() {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const handleSubmit = () => {
    if (!name || !bloodGroup) {
      alert("Please fill all details");
      return;
    }

    alert(`Thank you ${name} for registering as ${bloodGroup} donor 🩸`);
    setName("");
    setBloodGroup("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Donor Registration 🩸</h1>

      <br />

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <select
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
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

      <br /><br />

      <button onClick={handleSubmit}>
        Register as Donor
      </button>
    </div>
  );
}