import React, { useState } from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

const Templates = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  // fallback demo data for preview if no real data is passed
  const demoData = {
    basicInfo: {
      fullName: "John Doe",
      email: "john.doe@email.com",
      phone: "+91 9876543210",
      location: "Mumbai, India",
    },
    careerObjective:
      "To work in a dynamic organization where I can contribute my skills and grow professionally.",
    education: [
      { degree: "B.Tech in Computer Science", institution: "IIT Bombay", year: "2024" },
      { degree: "Higher Secondary", institution: "XYZ Junior College", year: "2020" },
    ],
    internships: [
      { company: "Tech Corp", role: "Frontend Intern", duration: "Jan 2023 - Jun 2023" },
    ],
    projects: [
      { title: "Chat Application", description: "A real-time chat app using MERN stack." },
      { title: "Resume Builder AI", description: "AI-powered resume generation tool." },
    ],
    technicalSkills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "C++"],
    certifications: ["AWS Cloud Practitioner", "Google Data Analytics"],
    achievements: ["1st Prize - Hackathon 2023", "Dean's List - 2022"],
    coCurricular: ["Member - Coding Club", "Organized Tech Fest"],
    extraCurricular: ["Football Team Captain", "Volunteered at NGO"],
    languages: ["English", "Hindi", "Marathi"],
    strengths: ["Problem Solving", "Team Player", "Leadership"],
    hobbies: ["Reading", "Gaming", "Traveling"],
    declaration: "I hereby declare that the above information is true to the best of my knowledge.",
  };

  const finalData = data && Object.keys(data).length > 0 ? data : demoData;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "classic":
        return <ClassicTemplate data={finalData} />;
      case "modern":
        return <ModernTemplate data={finalData} />;
      case "minimal":
        return <MinimalTemplate data={finalData} />;
      default:
        return <ClassicTemplate data={finalData} />;
    }
  };

  return (
    <div>
      {/* Template Picker */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setSelectedTemplate("classic")}
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            backgroundColor: selectedTemplate === "classic" ? "#007bff" : "#f9f9f9",
            color: selectedTemplate === "classic" ? "#fff" : "#333",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Classic
        </button>

        <button
          onClick={() => setSelectedTemplate("modern")}
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            backgroundColor: selectedTemplate === "modern" ? "#28a745" : "#f9f9f9",
            color: selectedTemplate === "modern" ? "#fff" : "#333",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Modern
        </button>

        <button
          onClick={() => setSelectedTemplate("minimal")}
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            backgroundColor: selectedTemplate === "minimal" ? "#6c757d" : "#f9f9f9",
            color: selectedTemplate === "minimal" ? "#fff" : "#333",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Minimal
        </button>
      </div>

      {/* Resume Preview */}
      {renderTemplate()}
    </div>
  );
};

export default Templates;
