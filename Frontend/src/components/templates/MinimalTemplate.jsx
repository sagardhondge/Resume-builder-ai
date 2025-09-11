import React from "react";

const MinimalTemplate = ({ data }) => {
  if (!data) return null;

  const {
    basicInfo,
    careerObjective,
    education,
    projects,
    technicalSkills,
    achievements,
  } = data;

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        borderLeft: "5px solid #333",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Basic Info */}
      <h1 style={{ marginBottom: "5px" }}>{basicInfo?.fullName}</h1>
      <small style={{ color: "#555" }}>
        {basicInfo?.email} | {basicInfo?.phone} | {basicInfo?.location}
      </small>

      {/* Career Objective */}
      {careerObjective && (
        <section style={{ marginTop: "20px" }}>
          <h3>Objective</h3>
          <p>{careerObjective}</p>
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h3>Education</h3>
          {education.map((edu, idx) => (
            <p key={idx}>
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
            </p>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h3>Projects</h3>
          {projects.map((proj, idx) => (
            <p key={idx}>
              <strong>{proj.title}</strong>: {proj.description}
            </p>
          ))}
        </section>
      )}

      {/* Skills */}
      {technicalSkills?.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h3>Skills</h3>
          <p>{technicalSkills.join(", ")}</p>
        </section>
      )}

      {/* Achievements */}
      {achievements?.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h3>Achievements</h3>
          <ul>
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
