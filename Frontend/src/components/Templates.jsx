// src/components/Templates.jsx
import React, { useState, useRef } from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
const Templates = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const printRef = useRef(); // useful if you plan to use react-to-print

  // fallback demo data for preview if no real data is passed
  const demoData = {
    basicInfo: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+91 9876543210",
      location: "Mumbai, India",
    },
    careerObjective:
      "To work in a dynamic organization where I can contribute my skills and grow professionally.",
    education: [
      { degree: "B.Tech in Computer Science", institute: "IIT Bombay", year: "2024" },
      { degree: "Higher Secondary", institute: "XYZ Junior College", year: "2020" },
    ],
    internships: [
      { company: "Tech Corp", role: "Frontend Intern", duration: "Jan 2023 - Jun 2023" },
    ],
    projects: [
      { name: "Chat Application", description: "A real-time chat app using MERN stack." },
      { name: "Resume Builder AI", description: "AI-powered resume generation tool." },
    ],
    technicalSkills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "C++"],
    certifications: ["AWS Cloud Practitioner", "Google Data Analytics"],
    achievements: ["1st Prize - Hackathon 2023", "Dean's List - 2022"],
    coCurricular: ["Member - Coding Club", "Organized Tech Fest"],
    extraCurricular: ["Football Team Captain", "Volunteered at NGO"],
    languages: ["English", "Hindi", "Marathi"],
    strengths: ["Problem Solving", "Team Player", "Leadership"],
    hobbies: ["Reading", "Gaming", "Traveling"],
    declaration:
      "I hereby declare that the above information is true to the best of my knowledge.",
    areaOfInterest: "",
    jobPreferences: "",
    familyBackground: "",
  };

  // Use provided data if valid, else fallback to demo
  const finalData = data && Object.keys(data).length > 0 ? data : demoData;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "classic":
        return <ClassicTemplate ref={printRef} data={finalData} />;
      case "modern":
        return <ModernTemplate ref={printRef} data={finalData} />;
      case "minimal":
        return <MinimalTemplate ref={printRef} data={finalData} />;
      default:
        return <ClassicTemplate ref={printRef} data={finalData} />;
    }
  };

  return (
    <div>
      {/* Template Picker */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {["classic", "modern", "minimal"].map((tpl) => (
          <button
            key={tpl}
            onClick={() => setSelectedTemplate(tpl)}
            style={{
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: selectedTemplate === tpl ? (tpl === "classic" ? "#007bff" : tpl === "modern" ? "#28a745" : "#6c757d") : "#f9f9f9",
              color: selectedTemplate === tpl ? "#fff" : "#333",
            }}
          >
            {tpl.charAt(0).toUpperCase() + tpl.slice(1)}
          </button>
        ))}
      </div>

      {/* Resume Preview */}
      {renderTemplate()}
    </div>
  );
};

export default Templates;
