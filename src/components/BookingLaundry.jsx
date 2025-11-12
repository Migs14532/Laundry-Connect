import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingLaundry() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    serviceType: "",
    pickupDate: "",
    pickupTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    console.log("Booking details:", form);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center px-4 py-6">
      {/* Header */}
      <div className="w-full max-w-md flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
        Booking Laundry
      </h1>

      {/* Booking Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        {/* Service Type */}
        <label className="block text-gray-700 font-medium mb-2">
          Service Type
        </label>
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="w-full border border-blue-300 rounded-lg px-4 py-3 mb-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Choose an option</option>
          <option value="wash_fold">Wash & Fold</option>
          <option value="iron_only">Iron Only</option>
          <option value="dry_cleaning">Dry Cleaning</option>
        </select>

        {/* Pickup Date */}
        <label className="block text-gray-700 font-medium mb-2">
          Pickup Date
        </label>
        <input
          type="date"
          name="pickupDate"
          value={form.pickupDate}
          onChange={handleChange}
          className="w-full border border-blue-300 rounded-lg px-4 py-3 mb-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Pickup Time */}
        <label className="block text-gray-700 font-medium mb-2">
          Pickup Time
        </label>
        <input
          type="time"
          name="pickupTime"
          value={form.pickupTime}
          onChange={handleChange}
          className="w-full border border-blue-300 rounded-lg px-4 py-3 mb-6 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Book Button */}
        <div className="flex justify-center">
          <button
            onClick={handleBook}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-200"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
