import React, { useState } from "react";
import API from "../utils/axios"; // your axios instance

const AtsScoreChecker = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setScore(null);

    try {
      const { data } = await API.post("/resume/ats-score", {
        resume,
        jobDescription,
      });
      setScore(data.score); // backend returns { score: number }
    } catch (err) {
      setError("Error checking ATS score");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "40px" }}>
      <h2 className="mb-3">ATS Score Checker</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Resume Text</label>
          <textarea
            className="form-control"
            rows="6"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume here..."
            required
          />
        </div>

        <div className="mb-3">
          <label>Job Description</label>
          <textarea
            className="form-control"
            rows="6"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste job description here..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Checking..." : "Check ATS Score"}
        </button>
      </form>

      {error && <p className="text-danger mt-3">{error}</p>}

      {score !== null && (
        <div className="mt-4">
          <h4>ATS Score: {score}%</h4>
          <div className="progress">
            <div
              className={`progress-bar ${
                score > 70 ? "bg-success" : score > 40 ? "bg-warning" : "bg-danger"
              }`}
              role="progressbar"
              style={{ width: `${score}%` }}
              aria-valuenow={score}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {score}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AtsScoreChecker;
