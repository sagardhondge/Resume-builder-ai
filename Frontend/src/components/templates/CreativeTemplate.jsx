// src/components/templates/CreativeTemplate.jsx
import React from "react";

const CreativeTemplate = ({ data = {} }) => {
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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.5", background: "#f0f8ff" }}>
      {/* Header */}
      {hasBasicInfo && (
        <div style={{ textAlign: "center", marginBottom: "20px", color: "#2a52be" }}>
          <h1 style={{ fontSize: "32px", margin: "0" }}>
            {basicInfo.firstName} {basicInfo.middleName && basicInfo.middleName + " "} {basicInfo.lastName}
          </h1>
          <p style={{ fontStyle: "italic" }}>
            {basicInfo.email && <>📧 {basicInfo.email} | </>}
            {basicInfo.phone && <>📞 {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <>📍 {basicInfo.currentAddress}</>}
          </p>
          <hr />
        </div>
      )}

      {/* Two-column layout */}
      <div style={{ display: "flex", gap: "25px" }}>
        {/* Left Column */}
        <div style={{ flex: 1 }}>
          {technicalSkills.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Technical Skills</h3>
              <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {languages.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Languages</h3>
              <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
            </>
          )}

          {strengths.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Strengths</h3>
              <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
            </>
          )}
        </div>

        {/* Right Column */}
        <div style={{ flex: 2 }}>
          {careerObjective && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Career Objective</h3>
              <p>{careerObjective}</p>
            </>
          )}

          {education.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Education</h3>
              {education.map((edu, i) =>
                (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                  <p key={i}>
                    <strong>{edu.degree}</strong> - {edu.institution} {isNumber(edu.year) && `(${edu.year})`}{" "}
                    {edu.grade && `| Grade: ${edu.grade}`}
                  </p>
                )
              )}
            </>
          )}

          {projects.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Projects</h3>
              {projects.map((proj, i) => (
                <div key={i}>
                  <p><strong>{proj.title}</strong></p>
                  {proj.description && <p>{proj.description}</p>}
                  {proj.link && <a href={proj.link}>{proj.link}</a>}
                </div>
              ))}
            </>
          )}

          {internships.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Internships</h3>
              {internships.map((intern, i) => (
                <div key={i}>
                  <p><strong>{intern.company}</strong> - {intern.role}</p>
                  {intern.duration && <p>{intern.duration}</p>}
                  {intern.description && <p>{intern.description}</p>}
                </div>
              ))}
            </>
          )}

          {certifications.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Certifications</h3>
              <ul>{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
            </>
          )}

          {declaration && (
            <>
              <h3 style={{ borderBottom: "2px dotted #2a52be" }}>Declaration</h3>
              <p>{declaration}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
