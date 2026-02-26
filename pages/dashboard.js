import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data: donorData } = await supabase.from("donors").select("*");
    const { data: requestData } = await supabase.from("requests").select("*");

    setDonors(donorData);
    setRequests(requestData);
  }

  async function addDonor() {
    await supabase.from("donors").insert([
      { name: "Test", blood_group: "O+", age: 22, phone: "123456" },
    ]);
    fetchData();
  }

  async function addRequest() {
    await supabase.from("requests").insert([
      { patient_name: "Patient", blood_group: "A+", units: 2, hospital: "City Hospital", phone: "99999" },
    ]);
    fetchData();
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={addDonor}>Add Donor</button>
      <button onClick={addRequest}>Add Request</button>

      <h2>Donors</h2>
      {donors.map((d)=>(
        <p key={d.id}>{d.name} - {d.blood_group}</p>
      ))}

      <h2>Requests</h2>
      {requests.map((r)=>(
        <p key={r.id}>{r.patient_name} - {r.blood_group}</p>
      ))}
    </div>
  );
}