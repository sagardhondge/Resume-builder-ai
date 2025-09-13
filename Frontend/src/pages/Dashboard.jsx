import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import resumeImg from "../assets/resumehome.avif"; 
import altImg from "../assets/qwer.png"; // second image
import trustpilotLogo from "../assets/trustpilot.svg";
import { FaCommentDots } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);

  // Flip image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, [flipped]);

  const handleChatClick = () => {
    navigate("/ai-chat"); // AI chat route
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4 position-relative">
      {/* Hero Section */}
      <div
        className="container shadow-lg rounded-4 p-5"
        style={{ backgroundColor: "#4eaac1ff", maxWidth: "1300px", maxHeight: "1000px" }}
      >
        <div className="row align-items-center text-white">
          {/* Left - Resume Preview */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <div style={{ perspective: "1000px" }}>
              <img
                src={flipped ? altImg : resumeImg}
                alt="Resume Preview"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "500px",
                  borderRadius: "20px",
                  transition: "transform 1s",
                  transform: flipped ? "rotateY(360deg)" : "rotateY(0deg)",
                }}
              />
            </div>
          </div>

          {/* Right - Call to Action */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold mb-3 display-5">
              Build Your <span className="text-warning">AI Resume</span> Today
            </h1>
            <p className="mb-4 fs-5">
              Create your perfect resume with AI suggestions, ATS-friendly
              templates, and expert tips to get hired faster.
            </p>
            <div className="d-flex flex-column flex-lg-row gap-3">
              <button className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                Import Existing Resume
              </button>
              <button
                className="btn btn-warning btn-lg text-dark fw-bold px-4 py-2 rounded-pill"
                onClick={() => navigate("/resume-builder")}
              >
                Build My Resume
              </button>
            </div>
            <div className="mt-4">
              <p className="mb-1 fs-6">📈 30% higher chance of getting a job</p>
              <p className="mb-0 fs-6">
                ⚡ 42% higher response rate from recruiters
              </p>
            </div>
            Trustpilot Rating
            <div className="mt-4 d-flex align-items-center gap-3">
              <div>
                <h5 className="mb-1">Excellent</h5>
                <p className="mb-0 text-white-50">
                  <strong>4.5</strong> out of 5 based on{" "}
                  <strong>16,135 reviews</strong> on
                  <img
                    src={trustpilotLogo}
                    alt="Trustpilot"
                    style={{ height: "20px", marginLeft: "5px", filter: "invert(1)" }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Line Below Card */}
      <div className="text-center mt-4">
        <h4 style={{ fontFamily: "Consolas, sans-serif", fontWeight: "600", fontSize: "20px", color: "#1d1c1cff" }}>
          Pick a resume template and build your resume in minutes! <br />
          Get an ATS-friendly, AI-assisted resume.
        </h4>
      </div>

      {/* Floating Chat Icon with Text */}
      <div
        onClick={handleChatClick}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#ffc107",
          color: "#000",
          padding: "12px 20px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 1000,
          fontWeight: "bold",
          fontSize: "14px",
        }}
        title="Chat with us"
      >
        <FaCommentDots size={20} />
        <span>Chat with us</span>
      </div>
    </div>
  );
};

export default Dashboard;
