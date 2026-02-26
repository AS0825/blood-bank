"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully 🔐");
    router.push("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Welcome to Blood Bank 🩸</h1>

      <br />

      <button onClick={() => router.push("/donor")}>
        Become a Donor
      </button>

      <br /><br />

      <button onClick={() => router.push("/request")}>
        Request Blood
      </button>

      <br /><br />

      <button onClick={handleLogout}>
        Logout 🔐
      </button>
    </div>
  );
}