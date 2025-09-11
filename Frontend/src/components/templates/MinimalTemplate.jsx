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
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "'Helvetica Neue', sans-serif",
        lineHeight: "1.5",
        color: "#333",
        background: "#fdfdfd",
        boxSizing: "border-box",
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
            {basicInfo.dob && <> | DOB: {basicInfo.dob}</>}
            {basicInfo.github && <> | GitHub: {basicInfo.github}</>}
            {basicInfo.linkedin && <> | LinkedIn: {basicInfo.linkedin}</>}
            {basicInfo.portfolio && <> | Portfolio: {basicInfo.portfolio}</>}
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

          {/* Hobbies */}
          {hobbies.length > 0 && hobbies.some((h) => h.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Hobbies</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {hobbies.map((h, i) => h && <li key={i}>{h}</li>)}
              </ul>
            </section>
          )}

          {/* Area of Interest */}
          {areaOfInterest.length > 0 && areaOfInterest.some((a) => a.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Area of Interest</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}
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
                        {proj.link && <p>Link: <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a></p>}
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

          {/* Co-Curricular */}
          {coCurricular.length > 0 && coCurricular.some((c) => c.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Co-Curricular Activities</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}
              </ul>
            </section>
          )}

          {/* Extra-Curricular */}
          {extraCurricular.length > 0 && extraCurricular.some((c) => c.trim() !== "") && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Extra-Curricular Activities</h3>
              <ul style={{ paddingLeft: "15px" }}>
                {extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}
              </ul>
            </section>
          )}

          {/* Job Preferences */}
          {jobPreferences && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Job Preferences</h3>
              <p>{jobPreferences}</p>
            </section>
          )}

          {/* Family Background */}
          {familyBackground && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", borderBottom: "1px solid #ddd" }}>Family Background</h3>
              <p>{familyBackground}</p>
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
