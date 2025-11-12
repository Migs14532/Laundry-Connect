import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BookingLaundry from "./components/BookingLaundry";
import Profile from "./components/Profile";
import History from "./components/History";
import Payment from "./components/Payment";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Loading, Auth */}
        <Route path="/" element={<Loading />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking-laundry" element={<BookingLaundry />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
