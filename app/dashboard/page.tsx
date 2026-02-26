"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Blood Bank 🩸</h1>

      <br />

      <button onClick={() => router.push("/donor")}>
        Become a Donor
      </button>

      <br /><br />

      <button onClick={() => router.push("/request")}>
        Request Blood
      </button>
    </div>
  );
}