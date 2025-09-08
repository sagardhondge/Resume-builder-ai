import React, { useEffect, useState } from "react";
import API from "./utils/axios";

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [title, setTitle] = useState("");

  const fetchResumes = async () => {
    try {
      const { data } = await API.get("/resume");
      setResumes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const createResume = async () => {
    if (!title.trim()) return;
    try {
      await API.post("/resume", { title, experience: [], skills: [] });
      setTitle("");
      fetchResumes();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "10px 20px", 
        backgroundColor: "#333", 
        color: "#fff" 
      }}>
        <h1>Resume Builder</h1>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Resume Title"
          />
          <button onClick={createResume} disabled={!title.trim()}>
            Create
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            style={{ marginLeft: "10px" }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div style={{ padding: "20px" }}>
        <h2>Your Resumes</h2>
        <ul>
          {resumes.map((r) => (
            <li key={r._id}>{r.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
