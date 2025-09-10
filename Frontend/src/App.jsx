import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AtsScoreChecker from "./pages/AtsScoreChecker";
import Templates from "./components/Templates";
import ResumeBuilder from "./pages/ResumeBuilder"; // ✅ Import ResumeBuilder
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import { AuthProvider } from "./context/AuthContext";
import './index.css'   

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ats-checker" element={<AtsScoreChecker />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
