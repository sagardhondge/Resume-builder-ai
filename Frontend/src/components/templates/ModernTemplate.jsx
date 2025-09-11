import React from "react";

const ModernTemplate = ({ data }) => {
  if (!data) return null;

  const {
    basicInfo,
    careerObjective,
    education,
    internships,
    projects,
    technicalSkills,
    certifications,
    achievements,
    coCurricular,
    extraCurricular,
  } = data;

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
        border: "2px solid #007bff",
        borderRadius: "8px",
        backgroundColor: "#fdfdfd",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "15px",
          borderRadius: "6px 6px 0 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "28px" }}>
          {basicInfo?.fullName}
        </h1>
        <p style={{ margin: "5px 0" }}>
          {basicInfo?.email} | {basicInfo?.phone} | {basicInfo?.location}
        </p>
      </div>

      <div style={{ padding: "20px" }}>
        {/* Career Objective */}
        {careerObjective && (
          <section>
            <h2 style={{ color: "#007bff" }}>Career Objective</h2>
            <p>{careerObjective}</p>
          </section>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <section>
            <h2 style={{ color: "#007bff" }}>Education</h2>
            {education.map((edu, idx) => (
              <p key={idx}>
                <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
              </p>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section>
            <h2 style={{ color: "#007bff" }}>Projects</h2>
            {projects.map((proj, idx) => (
              <p key={idx}>
                <strong>{proj.title}</strong>: {proj.description}
              </p>
            ))}
          </section>
        )}

        {/* Technical Skills */}
        {technicalSkills?.length > 0 && (
          <section>
            <h2 style={{ color: "#007bff" }}>Technical Skills</h2>
            <ul>
              {technicalSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications?.length > 0 && (
          <section>
            <h2 style={{ color: "#007bff" }}>Certifications</h2>
            <ul>
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {achievements?.length > 0 && (
          <section>
            <h2 style={{ color: "#007bff" }}>Achievements</h2>
            <ul>
              {achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
