import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 px-4 py-8 relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4 cursor-pointer">
        <ArrowLeft className="w-6 h-6 text-gray-700 hover:text-gray-900 transition" />
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-8">
        Payment
      </h1>

      {/* Payment Form */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="payment"
            className="text-gray-700 font-medium text-sm sm:text-base mb-2"
          >
            Payment Method
          </label>

          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border border-blue-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
          >
            <option value="">Select payment method</option>
            <option value="gcash">GCash</option>
            <option value="paypal">PayPal</option>
            <option value="card">Credit / Debit Card</option>
          </select>
        </div>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full text-sm sm:text-base font-medium transition"
          onClick={() => alert(`Selected: ${paymentMethod || "None"}`)}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
