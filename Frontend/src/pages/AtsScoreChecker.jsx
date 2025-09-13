import React, { useState } from "react";
import API from "../utils/axios";
import { FaUpload, FaCheckCircle, FaTimesCircle, FaExclamationCircle } from "react-icons/fa";

const AtsScoreChecker = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState(null);
  const [checks, setChecks] = useState([]); // store details from backend
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
    setChecks([]);

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
      setChecks(data.checks || []); // expect checks array from backend
    } catch (err) {
      setError("Error checking ATS score");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="row w-100">
        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center px-5 mb-4 mb-md-0">
          <h2 className="fw-bold display-6 mb-3">Is your resume good enough?</h2>
          <p className="text-muted mb-4">
            A free and fast AI resume checker doing crucial checks to ensure your resume
            is ready to perform and get you interview callbacks.
          </p>

          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
            {/* Upload Resume */}
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

            {/* Job Description */}
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

          {/* Error */}
          {error && <p className="text-danger mt-3 text-center">{error}</p>}
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="card shadow w-100">
            <div className="card-body text-center">
              {score !== null ? (
                <>
                  <h4 className="fw-bold mb-3">Resume Score</h4>
                  <h2 className={`${score > 70 ? "text-success" : score > 40 ? "text-warning" : "text-danger"}`}>
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

                  {/* Detailed Checks */}
                  <ul className="list-unstyled mt-4 text-start">
                    {checks.length > 0 ? (
                      checks.map((check, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-2">
                          {check.status === "pass" && (
                            <FaCheckCircle className="text-success me-2" />
                          )}
                          {check.status === "fail" && (
                            <FaTimesCircle className="text-danger me-2" />
                          )}
                          {check.status === "warn" && (
                            <FaExclamationCircle className="text-warning me-2" />
                          )}
                          <span>{check.name}</span>
                        </li>
                      ))
                    ) : (
                      <p className="text-muted">No detailed checks available.</p>
                    )}
                  </ul>
                </>
              ) : (
                <p className="text-muted">Upload a resume and job description to see your ATS score.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtsScoreChecker;
