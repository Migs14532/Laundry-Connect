import React from "react";
import { ChevronLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Import images and icons like in Login.jsx
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import history from "../assets/history.png";
import booking from "../assets/booking-laundry.png";
import profile from "../assets/profile.png";

export default function Dashboard() {
  const navigate = useNavigate();

  const popularServices = [
    { id: 1, name: "Wash & Fold", rating: 4.8, image: popular1 },
    { id: 2, name: "Iron Only", rating: 4.5, image: popular2 },
  ];

  const services = [
    { id: 1, name: "Wash & Fold", icon: service1 },
    { id: 2, name: "Iron Only", icon: service2 },
    { id: 3, name: "Dry Cleaning", icon: service3 },
  ];

  const bottomNav = [
    { id: 1, icon: history, label: "History" },
    { id: 2, icon: booking, label: "Booking Laundry" },
    { id: 3, icon: profile, label: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
        </button>
      </div>

      {/* Popular Services */}
      <section className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Popular Services
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {popularServices.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow">
                <span className="text-sm font-semibold">{service.rating}</span>
                <FaStar className="text-yellow-400 text-sm" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Services</h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            See all
          </button>
        </div>

        <div className="flex justify-around sm:justify-start sm:gap-8 flex-wrap">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center bg-white rounded-2xl p-4 hover:shadow-md transition cursor-pointer w-24 sm:w-28"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="text-sm font-medium text-gray-700 text-center">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-3 shadow-inner flex justify-around items-center md:rounded-t-2xl">
        {bottomNav.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 mb-1 object-contain"
            />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
