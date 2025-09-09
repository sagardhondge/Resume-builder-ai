import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios";
import { useAuth } from "../context/AuthContext"; // assuming you have auth context

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [title, setTitle] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  // Fetch resumes only if logged in
  const fetchResumes = async () => {
    try {
      if (!user) return;
      const { data } = await API.get("/resume");
      setResumes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const createResume = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      await API.post("/resume", { title, experience: [], skills: [] });
      setTitle("");
      fetchResumes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckATS = async () => {
    if (!resumeText.trim()) {
      alert("Please paste your resume text first.");
      return;
    }
    try {
      setLoading(true);
      const { data } = await API.post("/ats/score", { resume: resumeText });
      setScore(data.score);
    } catch (err) {
      console.error(err);
      alert("Error checking ATS score.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, [user]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Dashboard</h1>

      {/* --- ATS Score Checker (Public) --- */}
      <div className="card p-3 mb-4">
        <h3>Check Your ATS Score (No Login Required)</h3>
        <textarea
          className="form-control mb-3"
          rows="6"
          placeholder="Paste your resume text here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleCheckATS}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check ATS Score"}
        </button>

        {score !== null && (
          <div className="alert alert-info mt-3">
            <h4>ATS Score: {score}%</h4>
            <p>
              {score >= 80
                ? "✅ Great! Your resume is highly ATS-friendly."
                : "⚠️ Needs improvement. Try editing to increase the score."}
            </p>
          </div>
        )}
      </div>

      {/* --- Resume List & Create (Login Required) --- */}
      {user ? (
        <div className="card p-3">
          <h3>Your Resumes</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Resume Title"
            className="form-control mb-2"
          />
          <button className="btn btn-success mb-3" onClick={createResume}>
            Create Resume
          </button>

          <ul className="list-group">
            {resumes.map((r) => (
              <li className="list-group-item" key={r._id}>
                {r.title}
              </li>
            ))}
          </ul>

          <button
            className="btn btn-danger mt-3"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="alert alert-warning">
          ⚠️ Login to create, edit, or save resumes.
        </div>
      )}
    </div>
  );
};

export default Dashboard;
