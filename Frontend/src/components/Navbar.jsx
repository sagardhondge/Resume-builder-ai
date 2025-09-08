import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Resume Builder AI</h2>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Home</Link>
        <Link to="/ats-checker" style={styles.link}>ATS Score</Link>
        <Link to="/templates" style={styles.link}>Templates</Link>
        <button onClick={handleLogout} style={styles.logout}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#222",
    color: "white",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "15px" },
  link: { color: "white", textDecoration: "none" },
  logout: {
    background: "crimson",
    border: "none",
    padding: "6px 12px",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Navbar;
