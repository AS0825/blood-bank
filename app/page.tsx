import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="bg-red-700 text-white text-center py-2 text-sm">
        Government Blood Bank Management Portal
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-700">
          🩸 National Blood Portal
        </h1>

        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800">
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
          A Government Initiative to Ensure Timely Blood Availability
        </p>
      </div>

      {/* Information Section */}
      <div className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            24/7 Availability
          </h3>
          <p>
            Real-time tracking of blood stock across registered hospitals.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Verified Donors
          </h3>
          <p>
            Registered and medically verified blood donors nationwide.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">
            Emergency Support
          </h3>
          <p>
            Quick response system for emergency blood requirements.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2026 Government Blood Bank Portal | Ministry of Health
      </footer>

    </div>
  );
}