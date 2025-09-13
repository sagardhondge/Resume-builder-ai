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
    basicInfo.middleName ||
    basicInfo.lastName ||
    basicInfo.email ||
    basicInfo.phone ||
    basicInfo.currentAddress ||
    basicInfo.dob ||
    basicInfo.github ||
    basicInfo.linkedin ||
    basicInfo.portfolio;

  const isNumber = (value) => /^\d+$/.test(value);

  return (
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        padding: "25px",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        lineHeight: 1.5,
        background: "#f0f8ff",
        boxSizing: "border-box",
      }}
    >
      {/* ===== Basic Info ===== */}
      {hasBasicInfo && (
        <>
          {(basicInfo.firstName || basicInfo.lastName) && (
            <h1 style={{ color: "#2a52be" }}>
              {basicInfo.firstName} {basicInfo.middleName && basicInfo.middleName + " "} {basicInfo.lastName}
            </h1>
          )}
          <p>
            {basicInfo.email && <>📧 {basicInfo.email} | </>}
            {basicInfo.phone && <>📞 {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <>📍 {basicInfo.currentAddress} | </>}
            {basicInfo.dob && <>DOB: {basicInfo.dob} | </>}
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
              <>
                <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
              </>
            )}
          </p>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Career Objective ===== */}
      {careerObjective && careerObjective.trim() !== "" && (
        <>
          <h2>Career Objective</h2>
          <p>{careerObjective}</p>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Education ===== */}
      {education.length > 0 && education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
        <>
          <h2>Education</h2>
          {education.map(
            (edu, i) =>
              (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                <div key={i}>
                  <p><strong>{edu.degree}</strong> - {edu.institution} {isNumber(edu.year) && `(${edu.year})`}</p>
                  {edu.grade && <p>Grade: {edu.grade}</p>}
                </div>
              )
          )}
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Internships ===== */}
      {internships.length > 0 && internships.some((intern) => intern.role || intern.company || intern.duration || intern.description) && (
        <>
          <h2>Internships</h2>
          {internships.map(
            (intern, i) =>
              (intern.role || intern.company || intern.duration || intern.description) && (
                <div key={i}>
                  <p><strong>{intern.role}</strong> at {intern.company} {intern.duration && `(${intern.duration})`}</p>
                  {intern.description && <p>{intern.description}</p>}
                </div>
              )
          )}
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Projects ===== */}
      {projects.length > 0 && projects.some((proj) => proj.title || proj.description || proj.link) && (
        <>
          <h2>Projects</h2>
          {projects.map(
            (proj, i) =>
              (proj.title || proj.description || proj.link) && (
                <div key={i}>
                  <p><strong>{proj.title}</strong></p>
                  {proj.description && <p>{proj.description}</p>}
                  {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                </div>
              )
          )}
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Technical Skills ===== */}
      {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
        <>
          <h2>Technical Skills</h2>
          <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Certifications ===== */}
      {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Certifications</h2>
          <ul>{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Co-Curricular Activities ===== */}
      {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Co-Curricular Activities</h2>
          <ul>{coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Extra-Curricular Activities ===== */}
      {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Extra-Curricular Activities</h2>
          <ul>{extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Achievements / Awards ===== */}
      {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
        <>
          <h2>Achievements / Awards</h2>
          <ul>{achievements.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}


      {/* ===== Languages ===== */}
      {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
        <>
          <h2>Languages</h2>
          <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Strengths ===== */}
      {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
        <>
          <h2>Strengths</h2>
          <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Hobbies ===== */}
      {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
        <>
          <h2>Hobbies</h2>
          <ul>{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Area of Interest ===== */}
      {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
        <>
          <h2>Area of Interest</h2>
          <ul>{areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Job Preferences ===== */}
      {jobPreferences && jobPreferences.trim() !== "" && (
        <>
          <h2>Job Preferences</h2>
          <p>{jobPreferences}</p>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Family Background ===== */}
      {familyBackground && familyBackground.trim() !== "" && (
        <>
          <h2>Family Background</h2>
          <p>{familyBackground}</p>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

      {/* ===== Declaration ===== */}
      {declaration && declaration.trim() !== "" && (
        <>
          <h2>Declaration</h2>
          <p>{declaration}</p>
          <hr style={{ border: "1px dashed #2a52be" }} />
        </>
      )}

    </div>
  );
};

export default CreativeTemplate;
