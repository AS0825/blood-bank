"use client";

import { useState } from "react";

export default function RequestPage() {
  const [patientName, setPatientName] = useState("");
  const [requiredBlood, setRequiredBlood] = useState("");

  const handleRequest = () => {
    if (!patientName || !requiredBlood) {
      alert("Please fill all details");
      return;
    }

    alert(`Blood request submitted for ${patientName} (${requiredBlood}) 🆘`);
    setPatientName("");
    setRequiredBlood("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Request Blood 🆘</h1>

      <br />

      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <br /><br />

      <select
        value={requiredBlood}
        onChange={(e) => setRequiredBlood(e.target.value)}
      >
        <option value="">Select Required Blood Group</option>
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

      <button onClick={handleRequest}>
        Submit Request
      </button>
    </div>
  );
}