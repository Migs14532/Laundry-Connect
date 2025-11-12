import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      {/* Back Button */}
      <div className="absolute top-4 left-4 cursor-pointer">
        <ArrowLeft className="w-6 h-6 text-gray-700 hover:text-gray-900 transition" />
      </div>

      {/* Card Container */}
      <div className="w-full max-w-sm sm:max-w-md bg-white/70 backdrop-blur-sm shadow-md rounded-2xl p-6 flex flex-col items-center space-y-6">
        {/* Profile Icon */}
        <div className="flex flex-col items-center space-y-1">
          {/* Placeholder for your image */}
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-blue-400 flex items-center justify-center">
            <img
              src="/your-profile-icon.png"
              alt="Profile Icon"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-blue-600">
            Personal Details
          </h1>
        </div>

        {/* Edit Profile Button */}
        <button className="w-75 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full text-sm sm:text-base font-medium transition">
          Edit Profile
        </button>

        {/* User Info */}
        <div className="w-full text-gray-800 space-y-3 text-center sm:text-left">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-base break-words">
              Miguel Paolo D. Barafon
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-base break-words">
              example14532@gmail.com
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-30 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full text-sm sm:text-base font-medium transition mt-4">
          Logout
        </button>
      </div>
    </div>
  );
}
