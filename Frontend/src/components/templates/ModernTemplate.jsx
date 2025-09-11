// src/components/templates/ModernTemplate.jsx
import React from "react";

const ModernTemplate = ({ data = {} }) => {
  const {
    basicInfo = {},
    careerObjective = "",
    education = [],
    internships = [],
    projects = [],
    technicalSkills = [],
    certifications = [],
    achievements = [],
    coCurricular = [],
    extraCurricular = [],
    declaration = "",
    languages = [],
    strengths = [],
    hobbies = [],
    areaOfInterest = [],
    jobPreferences = "",
    familyBackground = "",
  } = data;

  const hasBasicInfo =
    basicInfo.firstName ||
    basicInfo.lastName ||
    basicInfo.middleName ||
    basicInfo.email ||
    basicInfo.phone ||
    basicInfo.currentAddress;

  const isNumber = (value) => /^\d+$/.test(value);

  return (
    <div style={{ fontFamily: "Helvetica", padding: "20px", background: "#f9f9f9", color: "#333" }}>
      {/* ===== Header / Basic Info ===== */}
      {hasBasicInfo && (
        <div style={{ textAlign: "center", borderBottom: "3px solid #333", marginBottom: "15px" }}>
          {(basicInfo.firstName || basicInfo.lastName) && (
            <h1 style={{ margin: 0, fontSize: "28px", color: "#222" }}>
              {basicInfo.firstName}{" "}
              {basicInfo.middleName && basicInfo.middleName + " "}
              {basicInfo.lastName}
            </h1>
          )}
          <p>
            {basicInfo.email && <>📧 {basicInfo.email} | </>}
            {basicInfo.phone && <>📞 {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <>📍 {basicInfo.currentAddress}</>}
          </p>
        </div>
      )}

      <div style={{ display: "flex", gap: "20px" }}>
        {/* ===== Left Column ===== */}
        <div style={{ flex: 1 }}>
          {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Skills</h3>
              <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Languages</h3>
              <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
            </>
          )}

          {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Strengths</h3>
              <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Hobbies</h3>
              <ul>{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
            </>
          )}
        </div>

        {/* ===== Right Column ===== */}
        <div style={{ flex: 2 }}>
          {careerObjective && careerObjective.trim() !== "" && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Career Objective</h3>
              <p>{careerObjective}</p>
            </>
          )}

          {education.length > 0 &&
            education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
              <>
                <h3 style={{ borderBottom: "2px solid #555" }}>Education</h3>
                {education.map(
                  (edu, i) =>
                    (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                      <p key={i}>
                        <strong>{edu.degree}</strong> - {edu.institution}{" "}
                        {isNumber(edu.year) && `(${edu.year})`}
                        {edu.grade && ` | Grade: ${edu.grade}`}
                      </p>
                    )
                )}
              </>
            )}

          {projects.length > 0 &&
            projects.some((p) => p.title || p.description || p.link) && (
              <>
                <h3 style={{ borderBottom: "2px solid #555" }}>Projects</h3>
                {projects.map(
                  (proj, i) =>
                    (proj.title || proj.description || proj.link) && (
                      <div key={i}>
                        <p><strong>{proj.title}</strong></p>
                        {proj.description && <p>{proj.description}</p>}
                        {proj.link && (
                          <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a>
                        )}
                      </div>
                    )
                )}
              </>
            )}

          {internships.length > 0 &&
            internships.some((intern) => intern.company || intern.role || intern.duration || intern.description) && (
              <>
                <h3 style={{ borderBottom: "2px solid #555" }}>Internships</h3>
                {internships.map(
                  (intern, i) =>
                    (intern.company || intern.role || intern.duration || intern.description) && (
                      <div key={i}>
                        <p><strong>{intern.role}</strong> - {intern.company}</p>
                        {intern.duration && <p>{intern.duration}</p>}
                        {intern.description && <p>{intern.description}</p>}
                      </div>
                    )
                )}
              </>
            )}

          {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Certifications</h3>
              <ul>{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
            </>
          )}

          {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Achievements / Awards</h3>
              <ul>{achievements.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
            </>
          )}

          {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Co-Curricular Activities</h3>
              <ul>{coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
            </>
          )}

          {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Extra-Curricular Activities</h3>
              <ul>{extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
            </>
          )}

          {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Area of Interest</h3>
              <ul>{areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
            </>
          )}

          {jobPreferences && jobPreferences.trim() !== "" && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Job Preferences</h3>
              <p>{jobPreferences}</p>
            </>
          )}

          {familyBackground && familyBackground.trim() !== "" && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Family Background</h3>
              <p>{familyBackground}</p>
            </>
          )}

          {declaration && declaration.trim() !== "" && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Declaration</h3>
              <p>{declaration}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
