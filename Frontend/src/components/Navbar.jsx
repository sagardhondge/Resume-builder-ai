import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <h2 className="navbar-brand fw-bold mb-0">Resume Builder AI</h2>
        <div className="d-flex align-items-center gap-3">
          <Link to="/dashboard" className="nav-link text-dark fw-semibold">
            Home
          </Link>
          <Link
            to="/resume-builder"
            className="nav-link text-dark fw-semibold"
          >
            Builder
          </Link>
          <Link to="/ats-checker" className="nav-link text-dark fw-semibold">
            ATS Score
          </Link>
          <Link to="/templates" className="nav-link text-dark fw-semibold">
            Templates
          </Link>
          <button onClick={handleLogout} className="btn btn-danger btn-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
