import React from "react";

const ClassicTemplate = ({ data }) => {
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
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: "1.5",
        maxWidth: "800px",
        margin: "auto",
        border: "1px solid #ddd",
      }}
    >
      {/* Basic Info */}
      <h1 style={{ margin: "0", fontSize: "28px" }}>{basicInfo?.fullName}</h1>
      <p style={{ margin: "5px 0" }}>
        📧 {basicInfo?.email} | 📞 {basicInfo?.phone} | 📍 {basicInfo?.location}
      </p>
      <hr style={{ margin: "10px 0" }} />

      {/* Career Objective */}
      {careerObjective && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            Career Objective
          </h2>
          <p>{careerObjective}</p>
        </>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>Education</h2>
          <ul>
            {education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Internships */}
      {internships?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>Internships</h2>
          <ul>
            {internships.map((intern, idx) => (
              <li key={idx}>
                <strong>{intern.company}</strong> - {intern.role} (
                {intern.duration})
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>Projects</h2>
          <ul>
            {projects.map((proj, idx) => (
              <li key={idx}>
                <strong>{proj.title}</strong> - {proj.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Technical Skills */}
      {technicalSkills?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            Technical Skills
          </h2>
          <p>{technicalSkills.join(", ")}</p>
        </>
      )}

      {/* Certifications */}
      {certifications?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            Certifications
          </h2>
          <ul>
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </>
      )}

      {/* Achievements */}
      {achievements?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            Achievements / Awards
          </h2>
          <ul>
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </>
      )}

      {/* Co-Curricular Activities */}
      {coCurricular?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            Co-Curricular Activities
          </h2>
          <ul>
            {coCurricular.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </>
      )}

      {/* Extra-Curricular Activities */}
      {extraCurricular?.length > 0 && (
        <>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            Extra-Curricular Activities
          </h2>
          <ul>
            {extraCurricular.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ClassicTemplate;
