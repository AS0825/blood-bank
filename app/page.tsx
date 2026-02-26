import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 flex flex-col items-center justify-center text-white">

      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
        🩸 Blood Bank Management System
      </h1>

      <p className="text-lg mb-10">
        Connecting Donors with Lives in Need
      </p>

      <div className="flex gap-6">
        <Link href="/login">
          <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition">
            Sign Up
          </button>
        </Link>
      </div>

    </div>
  );
}