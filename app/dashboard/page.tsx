export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-red-700 mb-6">
        Blood Stock Overview
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-bold text-red-600">A+</h2>
          <p>Available Units: 25</p>
        </div>

        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-bold text-blue-600">B+</h2>
          <p>Available Units: 18</p>
        </div>

        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-bold text-green-600">O+</h2>
          <p>Available Units: 32</p>
        </div>

        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-bold text-purple-600">AB+</h2>
          <p>Available Units: 10</p>
        </div>
      </div>
    </div>
  );
}