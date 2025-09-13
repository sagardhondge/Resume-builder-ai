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
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Helvetica, sans-serif",
        background: "#f9f9f9",
        color: "#333",
        boxSizing: "border-box",
      }}
    >
      {/* ===== Header / Basic Info ===== */}
      {hasBasicInfo && (
        <div style={{ textAlign: "center", borderBottom: "3px solid #333", marginBottom: "15px", paddingBottom: "10px" }}>
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
              {basicInfo.github && (
                <>
                  <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 mr-1">
                    GitHub
                  </a>
                  |{" "}
                </>
              )}
              {basicInfo.linkedin && (
                <>
                  <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 mr-1">
                    LinkedIn
                  </a>
                  |{" "}
                </>
              )}
              {basicInfo.portfolio && (
                <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 mr-1">
                  Portfolio
                </a>
              )}
            {basicInfo.dob && <> | DOB: {basicInfo.dob}</>}
          </p>
        </div>
      )}

      {/* ===== Two Column Layout ===== */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* ===== Left Column ===== */}
        <div style={{ flex: 1 }}>
          {/* Technical Skills */}
          {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Skills</h3>
              <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {/* Languages */}
          {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Languages</h3>
              <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
            </>
          )}

          {/* Strengths */}
          {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Strengths</h3>
              <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Hobbies</h3>
              <ul>{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
            </>
          )}
        </div>

        {/* ===== Right Column ===== */}
        <div style={{ flex: 2 }}>
          {/* Career Objective */}
          {careerObjective && <Section title="Career Objective" content={careerObjective} />}

          {/* Education */}
          {education.length > 0 &&
            education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
              <Section
                title="Education"
                content={education.map(
                  (edu, i) =>
                    (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                      <p key={i}>
                        <strong>{edu.degree}</strong> - {edu.institution}{" "}
                        {isNumber(edu.year) && `(${edu.year})`}
                        {edu.grade && ` | Grade: ${edu.grade}`}
                      </p>
                    )
                )}
              />
            )}

          {/* Projects */}
          {projects.length > 0 &&
            projects.some((p) => p.title || p.description || p.link) && (
              <Section
                title="Projects"
                content={projects.map(
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
              />
            )}

          {/* Internships */}
          {internships.length > 0 &&
            internships.some((intern) => intern.company || intern.role || intern.duration || intern.description) && (
              <Section
                title="Internships"
                content={internships.map(
                  (intern, i) =>
                    (intern.company || intern.role || intern.duration || intern.description) && (
                      <div key={i}>
                        <p><strong>{intern.role}</strong> - {intern.company}</p>
                        {intern.duration && <p>{intern.duration}</p>}
                        {intern.description && <p>{intern.description}</p>}
                      </div>
                    )
                )}
              />
            )}

          {/* Certifications */}
          {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
            <Section title="Certifications" content={<ul>{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>} />
          )}

          {/* Achievements */}
          {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
            <Section title="Achievements / Awards" content={<ul>{achievements.map((a, i) => a && <li key={i}>{a}</li>)}</ul>} />
          )}

          {/* Co-Curricular */}
          {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
            <Section title="Co-Curricular Activities" content={<ul>{coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>} />
          )}

          {/* Extra-Curricular */}
          {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
            <Section title="Extra-Curricular Activities" content={<ul>{extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>} />
          )}

          {/* Area of Interest */}
          {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
            <Section title="Area of Interest" content={<ul>{areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}</ul>} />
          )}

          {/* Job Preferences */}
          {jobPreferences && <Section title="Job Preferences" content={jobPreferences} />}

          {/* Family Background */}
          {familyBackground && <Section title="Family Background" content={familyBackground} />}

          {/* Declaration */}
          {declaration && <Section title="Declaration" content={declaration} />}
        </div>
      </div>
    </div>
  );
};

// Helper Section Component
const Section = ({ title, content }) => (
  <div style={{ marginBottom: "20px" }}>
    <h3 style={{ borderBottom: "2px solid #555" }}>{title}</h3>
    <div>{content}</div>
  </div>
);

export default ModernTemplate;
