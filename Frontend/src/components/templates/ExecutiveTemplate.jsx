// src/components/templates/ExecutiveTemplate.jsx
import React from "react";

const ExecutiveTemplate = ({ data = {} }) => {
  const {
    basicInfo = {},
    careerObjective,
    education = [],
    internships = [],
    projects = [],
    technicalSkills = [],
    certifications = [],
    achievements = [],
    coCurricular = [],
    extraCurricular = [],
    declaration,
    languages = [],
    strengths = [],
    hobbies = [],
    areaOfInterest = [],
    jobPreferences,
    familyBackground,
  } = data;

  const hasBasicInfo =
    basicInfo.firstName ||
    basicInfo.lastName ||
    basicInfo.middleName ||
    basicInfo.email ||
    basicInfo.phone ||
    basicInfo.currentAddress ||
    basicInfo.dob ||
    basicInfo.github ||
    basicInfo.linkedin ||
    basicInfo.portfolio;

  const isNumber = (value) => /^\d+$/.test(value);

  return (
    <div style={{ fontFamily: "Tahoma, sans-serif", padding: "25px", background: "#f5f5f5", color: "#111" }}>
      {/* Header */}
      {hasBasicInfo && (
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ fontSize: "30px", margin: "0", textTransform: "uppercase" }}>
            {basicInfo.firstName} {basicInfo.middleName && basicInfo.middleName + " "} {basicInfo.lastName}
          </h1>
          <p style={{ fontSize: "14px" }}>
            {basicInfo.email && <>📧 {basicInfo.email} | </>}
            {basicInfo.phone && <>📞 {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <>📍 {basicInfo.currentAddress}</>}
          </p>
          <hr style={{ border: "1px solid #333" }} />
        </div>
      )}

      {/* Sections */}
      {[["Career Objective", careerObjective],
        ["Education", education],
        ["Internships", internships],
        ["Projects", projects],
        ["Technical Skills", technicalSkills],
        ["Certifications", certifications],
        ["Achievements / Awards", achievements],
        ["Languages", languages],
        ["Strengths", strengths],
        ["Hobbies", hobbies],
        ["Job Preferences", jobPreferences],
        ["Family Background", familyBackground],
        ["Declaration", declaration]
      ].map(([title, content], idx) => {
        if (!content || (Array.isArray(content) && content.length === 0)) return null;
        return (
          <div key={idx} style={{ marginBottom: "15px" }}>
            <h2 style={{ borderBottom: "2px solid #222" }}>{title}</h2>
            {Array.isArray(content) ? (
              <ul>{content.map((item, i) => item && <li key={i}>{item.name || item.title || item}</li>)}</ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExecutiveTemplate;
