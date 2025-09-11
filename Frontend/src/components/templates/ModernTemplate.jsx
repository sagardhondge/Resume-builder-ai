import React from "react";

const ModernTemplate = ({ data }) => {
  return (
    <div style={{ fontFamily: "Helvetica", padding: "20px", background: "#f9f9f9", color: "#333" }}>
      {/* Header */}
      {(data.basicInfo?.firstName || data.basicInfo?.lastName) && (
        <div style={{ textAlign: "center", borderBottom: "3px solid #333", marginBottom: "15px" }}>
          <h1 style={{ margin: "0", fontSize: "28px", color: "#222" }}>
            {data.basicInfo?.firstName}{" "}
            {data.basicInfo?.middleName && data.basicInfo.middleName + " "}
            {data.basicInfo?.lastName}
          </h1>
          <p>
            {data.basicInfo?.email && <>📧 {data.basicInfo.email} | </>}
            {data.basicInfo?.phone && <>📞 {data.basicInfo.phone} | </>}
            {data.basicInfo?.currentAddress && <>📍 {data.basicInfo.currentAddress}</>}
          </p>
        </div>
      )}

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left Column */}
        <div style={{ flex: 1 }}>
          {data.skills?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Skills</h3>
              <ul>{data.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {data.languages?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Languages</h3>
              <ul>{data.languages.map((l, i) => <li key={i}>{l}</li>)}</ul>
            </>
          )}

          {data.strengths?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Strengths</h3>
              <ul>{data.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </>
          )}
        </div>

        {/* Right Column */}
        <div style={{ flex: 2 }}>
          {data.careerObjective && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Career Objective</h3>
              <p>{data.careerObjective}</p>
            </>
          )}

          {data.education?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Education</h3>
              {data.education.map((edu, i) => (
                <p key={i}>
                  <strong>{edu.degree}</strong> - {edu.institution} ({edu.year}) {edu.grade && `| Grade: ${edu.grade}`}
                </p>
              ))}
            </>
          )}

          {data.projects?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Projects</h3>
              {data.projects.map((proj, i) => (
                <div key={i}>
                  <p><strong>{proj.title}</strong></p>
                  {proj.description && <p>{proj.description}</p>}
                  {proj.link && <a href={proj.link}>{proj.link}</a>}
                </div>
              ))}
            </>
          )}

          {data.internships?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Internships</h3>
              {data.internships.map((intern, i) => (
                <div key={i}>
                  <p><strong>{intern.company}</strong> - {intern.role}</p>
                  {intern.duration && <p>{intern.duration}</p>}
                  {intern.description && <p>{intern.description}</p>}
                </div>
              ))}
            </>
          )}

          {data.certifications?.length > 0 && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Certifications</h3>
              <ul>{data.certifications.map((c, i) => <li key={i}>{c}</li>)}</ul>
            </>
          )}

          {data.declaration && (
            <>
              <h3 style={{ borderBottom: "2px solid #555" }}>Declaration</h3>
              <p>{data.declaration}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
