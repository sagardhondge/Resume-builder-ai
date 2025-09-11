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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      {/* ===== Basic Info ===== */}
      {hasBasicInfo && (
        <>
          {(basicInfo.firstName || basicInfo.lastName) && (
            <h1>
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
                <a href={basicInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{" "}
                |{" "}
              </>
            )}
            {basicInfo.linkedin && (
              <>
                <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{" "}
                |{" "}
              </>
            )}
            {basicInfo.portfolio && (
              <>
                <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </>
            )}
          </p>
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
      {education.length > 0 &&
        education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
          <>
            <h2>Education</h2>
            {education.map(
              (edu, i) =>
                (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                  <div key={i}>
                    <p>
                      <strong>{edu.degree}</strong> - {edu.institution}{" "}
                      {isNumber(edu.year) && `(${edu.year})`}
                    </p>
                    {edu.grade && <p>Grade: {edu.grade}</p>}
                  </div>
                )
            )}
            <hr />
          </>
        )}

      {/* ===== Internships ===== */}
      {internships.length > 0 &&
        internships.some((intern) => intern.company || intern.role || intern.duration || intern.description) && (
          <>
            <h2>Internships</h2>
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

      {/* ===== Projects ===== */}
      {projects.length > 0 &&
        projects.some((proj) => proj.title || proj.description || proj.link) && (
          <>
            <h2>Projects</h2>
            {projects.map(
              (proj, i) =>
                (proj.title || proj.description || proj.link) && (
                  <div key={i}>
                    <p>
                      <strong>{proj.title}</strong>
                    </p>
                    {proj.description && <p>{proj.description}</p>}
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    )}
                  </div>
                )
            )}
            <hr />
          </>
        )}

      {/* ===== Technical Skills ===== */}
      {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
        <>
          <h2>Technical Skills</h2>
          <ul>
            {technicalSkills.map((skill, i) => skill && <li key={i}>{skill}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Languages ===== */}
      {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
        <>
          <h2>Languages</h2>
          <ul>
            {languages.map((lang, i) => lang && <li key={i}>{lang}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Strengths ===== */}
      {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
        <>
          <h2>Strengths</h2>
          <ul>
            {strengths.map((st, i) => st && <li key={i}>{st}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Hobbies ===== */}
      {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
        <>
          <h2>Hobbies</h2>
          <ul>
            {hobbies.map((hb, i) => hb && <li key={i}>{hb}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Area of Interest ===== */}
      {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
        <>
          <h2>Area of Interest</h2>
          <ul>
            {areaOfInterest.map((area, i) => area && <li key={i}>{area}</li>)}
          </ul>
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

      {/* ===== Certifications ===== */}
      {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((cert, i) => cert && <li key={i}>{cert}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Achievements ===== */}
      {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
        <>
          <h2>Achievements / Awards</h2>
          <ul>
            {achievements.map((ach, i) => ach && <li key={i}>{ach}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Co-Curricular ===== */}
      {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Co-Curricular Activities</h2>
          <ul>
            {coCurricular.map((act, i) => act && <li key={i}>{act}</li>)}
          </ul>
          <hr />
        </>
      )}

      {/* ===== Extra-Curricular ===== */}
      {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
        <>
          <h2>Extra-Curricular Activities</h2>
          <ul>
            {extraCurricular.map((act, i) => act && <li key={i}>{act}</li>)}
          </ul>
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
