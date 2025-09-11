import React from "react";

const ExecutiveTemplate = ({ data = {} }) => {
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
        fontFamily: "'Georgia', serif",
        padding: "30px",
        lineHeight: "1.6",
        color: "#1a1a1a",
        background: "#fff",
      }}
    >
      {/* Basic Info */}
      {hasBasicInfo && (
        <>
          {(basicInfo.firstName || basicInfo.lastName) && (
            <h1 style={{ textAlign: "center", fontSize: "32px" }}>
              {basicInfo.firstName}{" "}
              {basicInfo.middleName && basicInfo.middleName + " "}
              {basicInfo.lastName}
            </h1>
          )}
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            {basicInfo.email && <>{basicInfo.email} | </>}
            {basicInfo.phone && <>{basicInfo.phone} | </>}
            {basicInfo.currentAddress && <>{basicInfo.currentAddress} | </>}
            {basicInfo.dob && <>{basicInfo.dob} | </>}
            {basicInfo.github && (
              <>
                <a
                  href={basicInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                |{" "}
              </>
            )}
            {basicInfo.linkedin && (
              <>
                <a
                  href={basicInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
              </>
            )}
            {basicInfo.portfolio && (
              <a
                href={basicInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            )}
          </p>
          <hr style={{ border: "2px solid #1a1a1a" }} />
        </>
      )}

      {/* Career Objective */}
      {careerObjective && (
        <>
          <h2>Career Objective</h2>
          <p>{careerObjective}</p>
          <hr />
        </>
      )}

      {/* Education */}
      {education.some(
        (edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade
      ) && (
        <>
          <h2>Education</h2>
          {education.map(
            (edu, i) =>
              (edu.degree ||
                edu.institution ||
                isNumber(edu.year) ||
                edu.grade) && (
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

      {/* Internships */}
      {internships.some(
        (intern) =>
          intern.company || intern.role || intern.duration || intern.description
      ) && (
        <>
          <h2>Internships</h2>
          {internships.map(
            (intern, i) =>
              (intern.company ||
                intern.role ||
                intern.duration ||
                intern.description) && (
                <div key={i}>
                  <p>
                    <strong>{intern.role}</strong> - {intern.company}
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
      {projects.some((proj) => proj.title || proj.description || proj.link) && (
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
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
      {technicalSkills.some((s) => s) && (
        <>
          <h2>Technical Skills</h2>
          <ul>{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Languages */}
      {languages.some((l) => l) && (
        <>
          <h2>Languages</h2>
          <ul>{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Strengths */}
      {strengths.some((s) => s) && (
        <>
          <h2>Strengths</h2>
          <ul>{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Hobbies */}
      {hobbies.some((h) => h) && (
        <>
          <h2>Hobbies</h2>
          <ul>{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Area of Interest */}
      {areaOfInterest.some((a) => a) && (
        <>
          <h2>Area of Interest</h2>
          <ul>{areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Job Preferences */}
      {jobPreferences && (
        <>
          <h2>Job Preferences</h2>
          <p>{jobPreferences}</p>
          <hr />
        </>
      )}

      {/* Family Background */}
      {familyBackground && (
        <>
          <h2>Family Background</h2>
          <p>{familyBackground}</p>
          <hr />
        </>
      )}

      {/* Certifications */}
      {certifications.some((c) => c) && (
        <>
          <h2>Certifications</h2>
          <ul>{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Achievements */}
      {achievements.some((a) => a) && (
        <>
          <h2>Achievements / Awards</h2>
          <ul>{achievements.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Co-Curricular */}
      {coCurricular.some((c) => c) && (
        <>
          <h2>Co-Curricular Activities</h2>
          <ul>{coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Extra-Curricular */}
      {extraCurricular.some((c) => c) && (
        <>
          <h2>Extra-Curricular Activities</h2>
          <ul>{extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          <hr />
        </>
      )}

      {/* Declaration */}
      {declaration && (
        <>
          <h2>Declaration</h2>
          <p>{declaration}</p>
        </>
      )}
    </div>
  );
};

export default ExecutiveTemplate;
