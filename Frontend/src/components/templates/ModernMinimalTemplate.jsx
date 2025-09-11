// src/components/templates/ModernMinimalTemplate.jsx
import React from "react";

const ModernMinimalTemplate = ({ data = {} }) => {
  const {
    basicInfo = {},
    careerObjective,
    education = [],
    internships = [],
    projects = [],
    technicalSkills = [],
    certifications = [],
    achievements = [],
    declaration,
    languages = [],
    strengths = [],
    hobbies = [],
  } = data;

  const isNumber = (value) => /^\d+$/.test(value);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", padding: "20px", lineHeight: "1.5", background: "#fff", color: "#222" }}>
      {/* Basic Info */}
      {basicInfo.firstName && (
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <h1 style={{ margin: "0", fontWeight: "bold" }}>{basicInfo.firstName} {basicInfo.middleName && basicInfo.middleName + " "} {basicInfo.lastName}</h1>
          <p style={{ fontSize: "14px", color: "#555" }}>
            {basicInfo.email && <>📧 {basicInfo.email} | </>}
            {basicInfo.phone && <>📞 {basicInfo.phone}</>}
          </p>
          <hr />
        </div>
      )}

      {careerObjective && (
        <>
          <h2>Career Objective</h2>
          <p>{careerObjective}</p>
        </>
      )}

      {education.length > 0 && (
        <>
          <h2>Education</h2>
          {education.map((edu, i) => (
            <p key={i}><strong>{edu.degree}</strong> - {edu.institution} {isNumber(edu.year) && `(${edu.year})`}</p>
          ))}
        </>
      )}

      {projects.length > 0 && (
        <>
          <h2>Projects</h2>
          {projects.map((proj, i) => (
            <p key={i}><strong>{proj.title}</strong> {proj.description && `- ${proj.description}`}</p>
          ))}
        </>
      )}

      {technicalSkills.length > 0 && (
        <>
          <h2>Technical Skills</h2>
          <p>{technicalSkills.join(", ")}</p>
        </>
      )}

      {languages.length > 0 && (
        <>
          <h2>Languages</h2>
          <p>{languages.join(", ")}</p>
        </>
      )}

      {strengths.length > 0 && (
        <>
          <h2>Strengths</h2>
          <p>{strengths.join(", ")}</p>
        </>
      )}

      {hobbies.length > 0 && (
        <>
          <h2>Hobbies</h2>
          <p>{hobbies.join(", ")}</p>
        </>
      )}

      {certifications.length > 0 && (
        <>
          <h2>Certifications</h2>
          <ul>{certifications.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </>
      )}

      {achievements.length > 0 && (
        <>
          <h2>Achievements</h2>
          <ul>{achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </>
      )}

      {declaration && (
        <>
          <h2>Declaration</h2>
          <p>{declaration}</p>
        </>
      )}
    </div>
  );
};

export default ModernMinimalTemplate;
