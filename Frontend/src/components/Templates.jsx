// src/components/Templates.jsx
import React, { useState, useRef } from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import ExecutiveTemplate from "./templates/ExecutiveTemplate";
import ModernMinimalTemplate from "./templates/ModernMinimalTemplate";
import BlueHeaderTemplate from "./templates/BlueHeaderTemplate";
import BlackHeaderTemplate from "./templates/BlackHeaderTemplate";
import GreenSidebarTemplate from "./templates/GreenSidebarTemplate";

const Templates = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const printRef = useRef();

  // fallback demo data for preview if no real data is passed
  const demoData = {
    basicInfo: {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      email: "john.doe@email.com",
      phone: "+91 9876543210",
      currentAddress: "Mumbai, India",
      dob: "01/01/2000",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoe.com",
    },
    careerObjective:
      "To work in a dynamic organization where I can contribute my skills and grow professionally.",
    education: [
      { degree: "B.Tech in Computer Science", institute: "IIT Bombay", year: "2024", grade: "9.0 CGPA" },
      { degree: "Higher Secondary", institute: "XYZ Junior College", year: "2020", grade: "88%" },
    ],
    internships: [
      { company: "Tech Corp", role: "Frontend Intern", duration: "Jan 2023 - Jun 2023", description: "Worked on UI development." },
    ],
    projects: [
      { title: "Chat Application", description: "A real-time chat app using MERN stack.", link: "" },
      { title: "Resume Builder AI", description: "AI-powered resume generation tool.", link: "" },
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
    areaOfInterest: ["AI", "Web Development"],
    jobPreferences: "Full-time Software Developer role",
    familyBackground: "Father: John Sr., Mother: Jane Doe",
  };

  const finalData = data && Object.keys(data).length > 0 ? data : demoData;

  const templatesMap = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    creative: CreativeTemplate,
    executive: ExecutiveTemplate,
    modernminimal: ModernMinimalTemplate,
    blueheader: BlueHeaderTemplate,
    blackheader: BlackHeaderTemplate,
    greensidebar: GreenSidebarTemplate,
  };

  const renderTemplate = () => {
    const TemplateComponent = templatesMap[selectedTemplate] || ClassicTemplate;
    return <TemplateComponent ref={printRef} data={finalData} />;
  };

  return (
    <div>
      {/* Template Picker */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {Object.keys(templatesMap).map((tpl) => (
          <button
            key={tpl}
            onClick={() => setSelectedTemplate(tpl)}
            style={{
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor:
                selectedTemplate === tpl
                  ? tpl === "classic"
                    ? "#007bff"
                    : tpl === "modern"
                    ? "#28a745"
                    : tpl === "minimal"
                    ? "#6c757d"
                    : tpl === "blueheader"
                    ? "#22b7ceff"
                    : tpl === "blackheader"
                    ? "#000000"
                    : tpl === "greensidebar"
                    ? "#28a745"
                    : "#17a2b8"
                  : "#f9f9f9",
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
