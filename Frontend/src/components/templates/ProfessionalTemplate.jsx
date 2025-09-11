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
    basicInfo.middleName ||
    basicInfo.lastName ||
    basicInfo.email ||
    basicInfo.phone ||
    basicInfo.currentAddress;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", color: "#1a1a1a", backgroundColor: "#f3f3f3", lineHeight: 1.6 }}>
      
      {/* ===== Basic Info ===== */}
      {hasBasicInfo && (
        <>
          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <h1 style={{ margin: 0 }}>
              {basicInfo.firstName} {basicInfo.middleName || ""} {basicInfo.lastName}
            </h1>
            <p style={{ margin: "5px 0" }}>
              {basicInfo.email && <>📧 {basicInfo.email} | </>}
              {basicInfo.phone && <>📞 {basicInfo.phone} | </>}
              {basicInfo.currentAddress && <>📍 {basicInfo.currentAddress}</>}
            </p>
          </div>
          <hr />
        </>
      )}

      {/* ===== Career Objective ===== */}
      {careerObjective && careerObjective.trim() !== "" && (
        <>
          <h2>Career Objective</h2>
          <p>{careerObjective}</p>
          <hr />
        </>
      )}

      {/* ===== Education ===== */}
      {education.length > 0 && education.some((edu) => edu.degree || edu.institute || edu.year || edu.grade) && (
        <>
          <h2>Education</h2>
          {education.map(
            (edu, i) =>
              (edu.degree || edu.institute || edu.year || edu.grade) && (
                <p key={i}>
                  <strong>{edu.degree}</strong> - {edu.institute} {edu.year && `(${edu.year})`} {edu.grade && `| Grade: ${edu.grade}`}
                </p>
              )
          )}
          <hr />
        </>
      )}

      {/* ===== Internships ===== */}
      {internships.length > 0 && internships.some((intern) => intern.role || intern.company || intern.duration || intern.description) && (
        <>
          <h2>Internships</h2>
          {internships.map(
            (intern, i) =>
              (intern.role || intern.company || intern.duration || intern.description) && (
                <p key={i}>
                  <strong>{intern.role}</strong> at {intern.company} {intern.duration && `(${intern.duration})`}
                  {intern.description && ` - ${intern.description}`}
                </p>
              )
          )}
          <hr />
        </>
      )}

      {/* ===== Projects ===== */}
      {projects.length > 0 && projects.some((proj) => proj.title || proj.description || proj.link) && (
        <>
          <h2>Projects</h2>
          {projects.map(
            (proj, i) =>
              (proj.title || proj.description || proj.link) && (
                <p key={i}>
                  <strong>{proj.title}</strong>
                  {proj.description && ` - ${proj.description}`}
                  {proj.link && <> - <a href={proj.link} target="_blank" rel="noopener noreferrer">View</a></>}
                </p>
              )
          )}
          <hr />
        </>
      )}

      {/* ===== Technical Skills ===== */}
      {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
        <>
          <h2>Technical Skills</h2>
          <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Certifications ===== */}
      {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Certifications</h2>
          <ul>{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Achievements / Awards ===== */}
      {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
        <>
          <h2>Achievements / Awards</h2>
          <ul>{achievements.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Co-Curricular Activities ===== */}
      {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Co-Curricular Activities</h2>
          <ul>{coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Extra-Curricular Activities ===== */}
      {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Extra-Curricular Activities</h2>
          <ul>{extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Languages ===== */}
      {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
        <>
          <h2>Languages</h2>
          <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Strengths ===== */}
      {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
        <>
          <h2>Strengths</h2>
          <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Hobbies ===== */}
      {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
        <>
          <h2>Hobbies</h2>
          <ul>{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Area of Interest ===== */}
      {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
        <>
          <h2>Area of Interest</h2>
          <ul>{areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          <hr />
        </>
      )}

      {/* ===== Job Preferences ===== */}
      {jobPreferences && jobPreferences.trim() !== "" && (
        <>
          <h2>Job Preferences</h2>
          <p>{jobPreferences}</p>
          <hr />
        </>
      )}

      {/* ===== Family Background ===== */}
      {familyBackground && familyBackground.trim() !== "" && (
        <>
          <h2>Family Background</h2>
          <p>{familyBackground}</p>
          <hr />
        </>
      )}

      {/* ===== Declaration ===== */}
      {declaration && declaration.trim() !== "" && (
        <>
          <h2>Declaration</h2>
          <p>{declaration}</p>
          <hr />
        </>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
