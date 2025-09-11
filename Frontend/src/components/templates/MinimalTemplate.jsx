// src/components/templates/MinimalTemplate.jsx
import React from "react";

const MinimalTemplate = React.forwardRef(({ data = {} }, ref) => {
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
    basicInfo.phone;

  const isNumber = (value) => /^\d+$/.test(value);

  return (
    <div
      ref={ref}
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        padding: "30px",
        lineHeight: "1.5",
        color: "#333",
        background: "#fdfdfd",
      }}
    >
      {/* ===== Header ===== */}
      {hasBasicInfo && (
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", fontWeight: 600 }}>
            {basicInfo.firstName}{" "}
            {basicInfo.middleName && basicInfo.middleName + " "}
            {basicInfo.lastName}
          </h1>
          <p style={{ fontSize: "14px", marginTop: "5px", color: "#555" }}>
            {basicInfo.email && <>📧 {basicInfo.email} | </>}
            {basicInfo.phone && <>📞 {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <>📍 {basicInfo.currentAddress}</>}
          </p>
          <hr style={{ marginTop: "15px", border: "0.5px solid #ccc" }} />
        </div>
      )}

      {/* ===== Two Column Layout ===== */}
      <div style={{ display: "flex", gap: "40px" }}>
        {/* ===== Left Column ===== */}
        <div style={{ flex: 1, borderRight: "1px solid #eee", paddingRight: "20px" }}>
          {/* Technical Skills */}
          {technicalSkills.length > 0 && technicalSkills.some((s) => s.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Skills</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}
              </ul>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && languages.some((l) => l.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Languages</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {languages.map((l, i) => l && <li key={i}>{l}</li>)}
              </ul>
            </section>
          )}

          {/* Strengths */}
          {strengths.length > 0 && strengths.some((s) => s.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Strengths</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {strengths.map((st, i) => st && <li key={i}>{st}</li>)}
              </ul>
            </section>
          )}
        </div>

        {/* ===== Right Column ===== */}
        <div style={{ flex: 2 }}>
          {/* Career Objective */}
          {careerObjective && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Career Objective</h3>
              <p>{careerObjective}</p>
            </section>
          )}

          {/* Education */}
          {education.length > 0 &&
            education.some((edu) => edu.degree || edu.institute || isNumber(edu.year)) && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Education</h3>
                {education.map(
                  (edu, i) =>
                    (edu.degree || edu.institute || isNumber(edu.year)) && (
                      <p key={i}>
                        <strong>{edu.degree}</strong> - {edu.institute}{" "}
                        {isNumber(edu.year) && `(${edu.year})`}
                      </p>
                    )
                )}
              </section>
            )}

          {/* Projects */}
          {projects.length > 0 &&
            projects.some((proj) => proj.name || proj.description) && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Projects</h3>
                {projects.map(
                  (proj, i) =>
                    (proj.name || proj.description) && (
                      <div key={i}>
                        <p>
                          <strong>{proj.name}</strong>
                        </p>
                        {proj.description && <p>{proj.description}</p>}
                      </div>
                    )
                )}
              </section>
            )}

          {/* Internships */}
          {internships.length > 0 &&
            internships.some((intern) => intern.role || intern.company) && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Internships</h3>
                {internships.map(
                  (intern, i) =>
                    (intern.role || intern.company) && (
                      <div key={i}>
                        <p>
                          <strong>{intern.role}</strong> - {intern.company}
                        </p>
                        {intern.duration && <p>{intern.duration}</p>}
                        {intern.description && <p>{intern.description}</p>}
                      </div>
                    )
                )}
              </section>
            )}

          {/* Certifications */}
          {certifications.length > 0 && certifications.some((c) => c.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Certifications</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {certifications.map((c, i) => c && <li key={i}>{c}</li>)}
              </ul>
            </section>
          )}

          {/* Achievements */}
          {achievements.length > 0 && achievements.some((a) => a.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Achievements / Awards</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {achievements.map((a, i) => a && <li key={i}>{a}</li>)}
              </ul>
            </section>
          )}

          {/* Declaration */}
          {declaration && (
            <section style={{ marginTop: "25px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Declaration</h3>
              <p>{declaration}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

export default MinimalTemplate;
                