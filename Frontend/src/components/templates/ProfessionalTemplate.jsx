// src/components/templates/ProfessionalTemplate.jsx
import React from "react";

const ProfessionalTemplate = ({ data = {} }) => {
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
    <div style={{ fontFamily: "Georgia, serif", padding: "25px", lineHeight: "1.6" }}>
      {/* ===== Basic Info ===== */}
      {hasBasicInfo && (
        <>
          {(basicInfo.firstName || basicInfo.lastName) && (
            <h1 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>
              {basicInfo.firstName}{" "}
              {basicInfo.middleName && basicInfo.middleName + " "}
              {basicInfo.lastName}
            </h1>
          )}
          <p>
            {basicInfo.email && <> {basicInfo.email} | </>}
            {basicInfo.phone && <> {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <> {basicInfo.currentAddress} | </>}
            {basicInfo.dob && <> {basicInfo.dob} | </>}
            {basicInfo.github && (
              <>
                <a href={basicInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
              </>
            )}
            {basicInfo.linkedin && (
              <>
                <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
              </>
            )}
            {basicInfo.portfolio && (
              <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
            )}
          </p>
          <hr />
        </>
      )}

      {/* ===== Career Objective ===== */}
      {careerObjective && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Career Objective</h2>
          <p>{careerObjective}</p>
          <hr />
        </>
      )}

      {/* ===== Education ===== */}
      {education.length > 0 &&
        education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
          <>
            <h2 style={{ borderBottom: "1px solid #999" }}>Education</h2>
            {education.map((edu, i) =>
              (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                <div key={i}>
                  <p><strong>{edu.degree}</strong> - {edu.institution} {isNumber(edu.year) && `(${edu.year})`}</p>
                  {edu.grade && <p>Grade: {edu.grade}</p>}
                </div>
              )
            )}
            <hr />
          </>
        )}

      {/* ===== Internships ===== */}
      {internships.length > 0 && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Internships</h2>
          {internships.map((intern, i) =>
            (intern.company || intern.role || intern.duration || intern.description) && (
              <div key={i}>
                <p><strong>{intern.company}</strong> - {intern.role}</p>
                {intern.duration && <p>{intern.duration}</p>}
                {intern.description && <p>{intern.description}</p>}
              </div>
            )
          )}
          <hr />
        </>
      )}

      {/* ===== Projects ===== */}
      {projects.length > 0 && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Projects</h2>
          {projects.map((proj, i) =>
            (proj.title || proj.description || proj.link) && (
              <div key={i}>
                <p><strong>{proj.title}</strong></p>
                {proj.description && <p>{proj.description}</p>}
                {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>}
              </div>
            )
          )}
          <hr />
        </>
      )}

      {/* ===== Technical Skills ===== */}
      {technicalSkills.length > 0 && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Technical Skills</h2>
          <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Languages, Strengths, Hobbies ===== */}
      {languages.length > 0 && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Languages</h2>
          <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
          <hr />
        </>
      )}

      {strengths.length > 0 && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Strengths</h2>
          <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr />
        </>
      )}

      {hobbies.length > 0 && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Hobbies</h2>
          <ul>{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Job Preferences, Family Background, Declaration ===== */}
      {jobPreferences && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Job Preferences</h2>
          <p>{jobPreferences}</p>
          <hr />
        </>
      )}

      {familyBackground && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Family Background</h2>
          <p>{familyBackground}</p>
          <hr />
        </>
      )}

      {declaration && (
        <>
          <h2 style={{ borderBottom: "1px solid #999" }}>Declaration</h2>
          <p>{declaration}</p>
          <hr />
        </>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
