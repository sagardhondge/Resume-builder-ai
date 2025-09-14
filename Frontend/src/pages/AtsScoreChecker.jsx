import React, { useState } from "react";
import API from "../utils/axios";
import atsPreviewImg from "../assets/ats-preview.png";
import "./AtsScoreChecker.css"; // optional CSS for skeletons

const AtsScoreChecker = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState(null);
  const [checks, setChecks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => setResumeFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setError("Please upload your resume file.");
      return;
    }

    setLoading(true);
    setError("");
    setScore(null);
    setChecks([]);
    setSuggestions([]);

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("jobDescription", jobDescription);

      const { data } = await API.post("/ai/ats-score", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setScore(data.score);
      setChecks(data.checks || []);
      setSuggestions(data.suggestions || []);
    } catch (err) {
      setError("Error checking ATS score");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row align-items-center">
        {/* Left: Form */}
        <div className="col-md-6 px-5 mb-4 mb-md-0">
          <h2 className="fw-bold display-6 mb-3">Is your resume good enough?</h2>
          <p className="text-muted mb-4">
            A free AI resume checker performing crucial checks to help you get interview callbacks.
          </p>

          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
            <div className="mb-3 text-center">
              <label className="btn btn-primary">
                {resumeFile ? "Uploaded: " + resumeFile.name : "Upload Your Resume"}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label">Job Description</label>
              <textarea
                className="form-control"
                rows="6"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste job description here..."
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success" disabled={loading}>
                {loading ? "Checking..." : "Check ATS Score"}
              </button>
            </div>
          </form>

          {error && <p className="text-danger mt-3 text-center">{error}</p>}
        </div>

        {/* Right: Score / Image */}
        <div className="col-md-6 text-center">
          {loading ? (
            <div className="card shadow p-4">
              <p>Loading results...</p>
            </div>
          ) : score !== null ? (
            <div className="card shadow p-4">
              <h4 className="fw-bold mb-3">Resume Score</h4>
              <h2 className={score > 70 ? "text-success" : score > 40 ? "text-warning" : "text-danger"}>
                {score}/100
              </h2>

              <div className="progress my-3" style={{ height: "25px" }}>
                <div
                  className={`progress-bar ${score > 70 ? "bg-success" : score > 40 ? "bg-warning" : "bg-danger"}`}
                  role="progressbar"
                  style={{ width: `${score}%` }}
                  aria-valuenow={score}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {score}%
                </div>
              </div>

              {/* Checks */}
              <ul className="list-unstyled text-start mt-3">
                {checks.length > 0 ? checks.map((check, idx) => (
                  <li key={idx} className="mb-2">
                    {check.status === "pass" && <span className="text-success">✔ </span>}
                    {check.status === "fail" && <span className="text-danger">✘ </span>}
                    {check.status === "warn" && <span className="text-warning">⚠ </span>}
                    {check.name}
                  </li>
                )) : <p className="text-muted">No detailed checks available.</p>}
              </ul>

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="mt-4 text-start">
                  <h5 className="fw-bold">Suggestions to Improve:</h5>
                  <ul>
                    {suggestions.map((sugg, idx) => (
                      <li key={idx} className="text-muted">{sugg}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <img src={atsPreviewImg} alt="ATS Preview" className="img-fluid rounded shadow" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AtsScoreChecker;
