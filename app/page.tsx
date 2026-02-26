import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Header */}
      <div className="bg-red-700 text-white text-center py-2 text-sm">
        Ministry of Health & Family Welfare | Government Blood Portal
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-700">
          🩸 National Blood Bank Portal
        </h1>

        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-red-600 to-blue-700 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Safe Blood Saves Lives
        </h2>
        <p className="text-lg">
          A Nationwide Initiative to Ensure Timely Blood Availability
        </p>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            24/7 Blood Tracking
          </h3>
          <p>
            Real-time monitoring of blood stock across registered hospitals.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Verified Donors
          </h3>
          <p>
            Secure and verified blood donor registration system.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">
            Emergency Support
          </h3>
          <p>
            Immediate assistance for emergency blood requirements.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2026 National Blood Bank Portal | Government Initiative
      </footer>

    </div>
  );
}