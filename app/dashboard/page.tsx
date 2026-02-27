"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Blood Bank Dashboard 🩸</h1>
        <p style={styles.subtitle}>
          Choose an option below
        </p>

        <button
          style={styles.donorBtn}
          onClick={() => router.push("/donor")}
        >
          🩸 Become a Donor
        </button>

        <button
          style={styles.requestBtn}
          onClick={() => router.push("/request")}
        >
          🆘 Request Blood
        </button>

        <button
          style={styles.logoutBtn}
          onClick={handleLogout}
        >
          🔐 Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "380px",
    textAlign: "center" as const,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#555",
  },
  donorBtn: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  requestBtn: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logoutBtn: {
    width: "100%",
    padding: "10px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};