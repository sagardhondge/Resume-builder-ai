import React from "react";

const MinimalTemplate = ({ data }) => {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", color: "#222" }}>
      {/* Header */}
      {(data.basicInfo?.firstName || data.basicInfo?.lastName) && (
        <h2 style={{ marginBottom: "5px" }}>
          {data.basicInfo?.firstName}{" "}
          {data.basicInfo?.middleName && data.basicInfo.middleName + " "}
          {data.basicInfo?.lastName}
        </h2>
      )}
      <p style={{ fontSize: "14px", color: "#555" }}>
        {data.basicInfo?.email && <>📧 {data.basicInfo.email} | </>}
        {data.basicInfo?.phone && <>📞 {data.basicInfo.phone} | </>}
        {data.basicInfo?.currentAddress && <>📍 {data.basicInfo.currentAddress}</>}
      </p>
      <hr />

      {data.careerObjective && <p><strong>Objective:</strong> {data.careerObjective}</p>}

      {data.education?.length > 0 && (
        <>
          <h4>Education</h4>
          {data.education.map((edu, i) => (
            <p key={i}>
              {edu.degree}, {edu.institution} ({edu.year}) {edu.grade && `- ${edu.grade}`}
            </p>
          ))}
        </>
      )}

      {data.projects?.length > 0 && (
        <>
          <h4>Projects</h4>
          {data.projects.map((proj, i) => (
            <p key={i}>
              <strong>{proj.title}</strong> {proj.description && `- ${proj.description}`}
              {proj.link && <span> 🔗 {proj.link}</span>}
            </p>
          ))}
        </>
      )}

      {data.skills?.length > 0 && (
        <>
          <h4>Skills</h4>
          <p>{data.skills.join(", ")}</p>
        </>
      )}

      {data.internships?.length > 0 && (
        <>
          <h4>Internships</h4>
          {data.internships.map((intern, i) => (
            <p key={i}>
              {intern.company} - {intern.role} ({intern.duration})
            </p>
          ))}
        </>
      )}

      {data.certifications?.length > 0 && (
        <>
          <h4>Certifications</h4>
          <p>{data.certifications.join(", ")}</p>
        </>
      )}

      {data.achievements?.length > 0 && (
        <>
          <h4>Achievements</h4>
          <p>{data.achievements.join(", ")}</p>
        </>
      )}

      {data.declaration && (
        <>
          <h4>Declaration</h4>
          <p>{data.declaration}</p>
        </>
      )}
    </div>
  );
};

export default MinimalTemplate;
