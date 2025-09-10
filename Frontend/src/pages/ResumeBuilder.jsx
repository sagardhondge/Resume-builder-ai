// src/pages/ResumeBuilder.jsx
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Templates from "../components/Templates";

const ResumeBuilder = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
    projects: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div style={{ display: "flex", gap: "30px", padding: "20px" }}>
      {/* Left: Form */}
      <div style={{ flex: 1 }}>
        <h2>Resume Form</h2>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} /><br />
        <textarea name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange}></textarea><br />
        <textarea name="experience" placeholder="Experience" value={form.experience} onChange={handleChange}></textarea><br />
        <textarea name="education" placeholder="Education" value={form.education} onChange={handleChange}></textarea><br />
        <textarea name="projects" placeholder="Projects" value={form.projects} onChange={handleChange}></textarea><br />
        <button onClick={handlePrint}>Download PDF</button>
      </div>

      {/* Right: Resume Preview */}
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px" }} ref={resumeRef}>
        <Templates data={form} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
