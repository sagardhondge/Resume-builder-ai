import React, { useState } from "react";
import API from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/auth/register", form);
      localStorage.setItem("token", data.token);
      setMessage("Registration successful!");
      navigate("/dashboard"); // redirect to dashboard
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#fcfcfcff" }}
    >
      <div
        className="card shadow-lg p-4 rounded-4"
        style={{ width: "400px", backgroundColor: "#ffffff" }}
      >
        <h2 className="text-center mb-4" style={{ color: "#4eaac1" }}>
          Register
        </h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-control"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-control"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="form-control"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-warning text-dark fw-bold"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {message && <p className="mt-3 text-center text-danger">{message}</p>}

        <div className="mt-4 text-center">
          <p className="mb-0">
            Already have an account?{" "}
            <Link to="/login" className="text-warning fw-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
