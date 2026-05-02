import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800">
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-xl font-bold text-blue-600">CareClinic</h1>
        <button
          onClick={() => navigate("/schedule")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">
          Your Health, Our Priority
        </h2>
        <p className="text-lg mb-6">
          गुणवt care with easy online scheduling.
        </p>

        <button
          onClick={() => navigate("/schedule")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Schedule Now
        </button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow rounded-xl">
          <h3 className="font-semibold text-lg mb-2">General Checkups</h3>
          <p>Routine exams to keep you healthy.</p>
        </div>

        <div className="p-6 shadow rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Pediatrics</h3>
          <p>Care for infants, children, and teens.</p>
        </div>

        <div className="p-6 shadow rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Consultations</h3>
          <p>Talk with experienced doctors.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-6">
        <p>© 2026 CareClinic. All rights reserved.</p>
      </footer>
    </div>
  );
}
