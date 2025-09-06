import React, { useState } from "react";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      setMessage("Login successful!");
      navigate("/dashboard"); // ✅ redirect
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
};

export default Login;
