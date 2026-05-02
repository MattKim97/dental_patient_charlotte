import React from "react";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="p-6 shadow bg-white flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">CareClinic</h1>
        <button onClick={() => navigate("/")} className="text-blue-600">
          ← Back
        </button>
      </div>

      {/* Form Card */}
      <div className="flex justify-center py-10 px-4">
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Book Your Appointment
          </h2>

          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            className="w-full h-[700px] border-none"
            title="Appointment Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
