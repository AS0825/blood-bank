export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa"
    }}>
      <h1 style={{ fontSize: "40px", color: "#b30000" }}>
        🩸 Blood Bank Management System
      </h1>

      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        Donate Blood. Save Lives.
      </p>

      <div style={{ marginTop: "20px" }}>
        <a href="/login">
          <button style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#b30000",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}>
            Login
          </button>
        </a>

        <a href="/signup">
          <button style={{
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}>
            Signup
          </button>
        </a>
      </div>
    </div>
  );
}