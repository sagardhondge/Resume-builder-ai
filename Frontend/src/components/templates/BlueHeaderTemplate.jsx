// src/components/templates/BlueHeaderTemplate.jsx
import React from "react";

const BlueHeaderTemplate = ({ data = {} }) => {
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
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        background: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
    >
      {/* ===== Blue Header ===== */}
      {hasBasicInfo && (
        <div
          style={{
            background: "#3a8a95ff",
            color: "white",
            padding: "30px 20px",
            textAlign: "center",
          }}
        >
          {(basicInfo.firstName || basicInfo.lastName) && (
            <h1 style={{ margin: 0, fontSize: "28px" }}>
              {basicInfo.firstName}{" "}
              {basicInfo.middleName && basicInfo.middleName + " "}
              {basicInfo.lastName}
            </h1>
          )}

          <p style={{ margin: "8px 0 0" }}>
            {basicInfo.email && <> {basicInfo.email} | </>}
            {basicInfo.phone && <> {basicInfo.phone} | </>}
            {basicInfo.currentAddress && <> {basicInfo.currentAddress} | </>}
            {basicInfo.dob && <> {basicInfo.dob} | </>}
            {basicInfo.github && (
              <>
                <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                  GitHub
                </a>{" "}
                |{" "}
              </>
            )}
            {basicInfo.linkedin && (
              <>
                <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                  LinkedIn
                </a>{" "}
                |{" "}
              </>
            )}
            {basicInfo.portfolio && (
              <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                Portfolio
              </a>
            )}
          </p>
        </div>
      )}

      {/* ===== Content ===== */}
      <div style={{ padding: "20px" }}>
        {/* Career Objective */}
        {careerObjective && careerObjective.trim() !== "" && (
          <>
            <h3>Career Objective</h3>
            <p>{careerObjective}</p>
            <hr />
          </>
        )}

        {/* Education */}
        {education.length > 0 &&
          education.some((edu) => edu.degree || edu.institute || isNumber(edu.year) || edu.grade) && (
            <>
              <h3>Education</h3>
              {education.map(
                (edu, i) =>
                  (edu.degree || edu.institute || isNumber(edu.year) || edu.grade) && (
                    <p key={i}>
                      <strong>{edu.degree}</strong> - {edu.institute}{" "}
                      {isNumber(edu.year) && `(${edu.year})`}{" "}
                      {edu.grade && ` | Grade: ${edu.grade}`}
                    </p>
                  )
              )}
              <hr />
            </>
          )}

        {/* Internships */}
        {internships.length > 0 &&
          internships.some((intern) => intern.company || intern.role || intern.duration || intern.description) && (
            <>
              <h3>Internships</h3>
              {internships.map(
                (intern, i) =>
                  (intern.company || intern.role || intern.duration || intern.description) && (
                    <div key={i}>
                      <p>
                        <strong>{intern.company}</strong> - {intern.role}
                      </p>
                      {intern.duration && <p>{intern.duration}</p>}
                      {intern.description && <p>{intern.description}</p>}
                    </div>
                  )
              )}
              <hr />
            </>
          )}

        {/* Projects */}
        {projects.length > 0 &&
          projects.some((proj) => proj.title || proj.description || proj.link) && (
            <>
              <h3>Projects</h3>
              {projects.map(
                (proj, i) =>
                  (proj.title || proj.description || proj.link) && (
                    <div key={i}>
                      <p>
                        <strong>{proj.title}</strong>
                      </p>
                      {proj.description && <p>{proj.description}</p>}
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer " style={{ color: "Blue" }}>
                          View Project
                        </a>
                      )}
                    </div>
                  )
              )}
              <hr />
            </>
          )}

        {/* Technical Skills */}
        {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
          <>
            <h3>Technical Skills</h3>
            <ul>
              {technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Languages */}
        {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
          <>
            <h3>Languages</h3>
            <ul>
              {languages.map((l, i) => l && <li key={i}>{l}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Strengths */}
        {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
          <>
            <h3>Strengths</h3>
            <ul>
              {strengths.map((s, i) => s && <li key={i}>{s}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Hobbies */}
        {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
          <>
            <h3>Hobbies</h3>
            <ul>
              {hobbies.map((h, i) => h && <li key={i}>{h}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Area of Interest */}
        {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
          <>
            <h3>Areas of Interest</h3>
            <ul>
              {areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Job Preferences */}
        {jobPreferences && jobPreferences.trim() !== "" && (
          <>
            <h3>Job Preferences</h3>
            <p>{jobPreferences}</p>
            <hr />
          </>
        )}

        {/* Family Background */}
        {familyBackground && familyBackground.trim() !== "" && (
          <>
            <h3>Family Background</h3>
            <p>{familyBackground}</p>
            <hr />
          </>
        )}

        {/* Certifications */}
        {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
          <>
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c, i) => c && <li key={i}>{c}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Achievements */}
        {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
          <>
            <h3>Achievements / Awards</h3>
            <ul>
              {achievements.map((a, i) => a && <li key={i}>{a}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Co-Curricular */}
        {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
          <>
            <h3>Co-Curricular Activities</h3>
            <ul>
              {coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Extra-Curricular */}
        {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
          <>
            <h3>Extra-Curricular Activities</h3>
            <ul>
              {extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}
            </ul>
            <hr />
          </>
        )}

        {/* Declaration */}
        {declaration && declaration.trim() !== "" && (
          <>
            <h3>Declaration</h3>
            <p>{declaration}</p>
            <hr />
          </>
        )}
      </div>
    </div>
  );
};

export default BlueHeaderTemplate;
