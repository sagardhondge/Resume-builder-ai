import React, { useState } from "react";
import API from "../utils/axios";

const AtsScoreChecker = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setError("Please upload your resume file.");
      return;
    }

    setLoading(true);
    setError("");
    setScore(null);

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("jobDescription", jobDescription);

      const { data } = await API.post("/resume/ats-score", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setScore(data.score);
    } catch (err) {
      setError("Error checking ATS score");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "700px", marginTop: "50px" }}>
      <h2 className="mb-4 text-center">ATS Score Checker</h2>

      <form onSubmit={handleSubmit} className="shadow p-4 rounded" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Upload Resume */}
        <div className="mb-3 text-center">
          <label className="btn btn-primary">
            {resumeFile ? "Resume Uploaded: " + resumeFile.name : "Upload Your Resume"}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              hidden
            />
          </label>
        </div>

        {/* Job Description */}
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

        <div className="text-center">
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Checking..." : "Check ATS Score"}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && <p className="text-danger mt-3 text-center">{error}</p>}

      {/* Score Display */}
      {score !== null && (
        <div className="mt-4 text-center">
          <h4>ATS Score: {score}%</h4>
          <div className="progress" style={{ height: "25px" }}>
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
        </div>
      )}
    </div>
  );
};

export default AtsScoreChecker;
