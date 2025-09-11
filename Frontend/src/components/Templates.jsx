import React from "react";

const Templates = ({ data = {} }) => {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", lineHeight: "1.6" }}>
      {/* Basic Info */}
      <h1>{data.name || "Your Name"}</h1>
      <p>{data.email || "your@email.com"} | {data.phone || "123-456-7890"}</p>
      <hr />

      {/* Career Objective */}
      {data.careerObjective && (
        <>
          <h2>Career Objective</h2>
          <p>{data.careerObjective}</p>
        </>
      )}

      {/* Skills */}
      <h2>Skills</h2>
      <ul>
        {data.skills && data.skills.length > 0 ? (
          data.skills.map((skill, i) => <li key={i}>{skill}</li>)
        ) : (
          <li>Add your skills</li>
        )}
      </ul>

      {/* Experience / Internships */}
      {data.internships && data.internships.length > 0 && (
        <>
          <h2>Internships</h2>
          {data.internships.map((intern, i) => (
            <div key={i}>
              <p><strong>{intern.company}</strong> - {intern.role}</p>
              <p>{intern.duration}</p>
              <p>{intern.description}</p>
            </div>
          ))}
        </>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <>
          <h2>Education</h2>
          {data.education.map((edu, i) => (
            <div key={i}>
              <p>
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </p>
              <p>{edu.grade}</p>
            </div>
          ))}
        </>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <>
          <h2>Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i}>
              <p><strong>{proj.title}</strong></p>
              <p>{proj.description}</p>
              {proj.link && <a href={proj.link}>{proj.link}</a>}
            </div>
          ))}
        </>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <>
          <h2>Certifications</h2>
          <ul>
            {data.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </>
      )}

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <>
          <h2>Achievements</h2>
          <ul>
            {data.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
          </ul>
        </>
      )}

      {/* Co-Curricular Activities */}
      {data.coCurricular && data.coCurricular.length > 0 && (
        <>
          <h2>Co-Curricular Activities</h2>
          <ul>
            {data.coCurricular.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>
      )}

      {/* Extra-Curricular Activities */}
      {data.extraCurricular && data.extraCurricular.length > 0 && (
        <>
          <h2>Extra-Curricular Activities</h2>
          <ul>
            {data.extraCurricular.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <>
          <h2>Languages</h2>
          <ul>
            {data.languages.map((lang, i) => <li key={i}>{lang}</li>)}
          </ul>
        </>
      )}

      {/* Strengths */}
      {data.strengths && data.strengths.length > 0 && (
        <>
          <h2>Strengths</h2>
          <ul>
            {data.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </>
      )}

      {/* Hobbies */}
      {data.hobbies && data.hobbies.length > 0 && (
        <>
          <h2>Hobbies</h2>
          <ul>
            {data.hobbies.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </>
      )}

      {/* Declaration */}
      {data.declaration && (
        <>
          <h2>Declaration</h2>
          <p>{data.declaration}</p>
        </>
      )}
    </div>
  );
};

export default Templates;
