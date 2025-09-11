import React from "react";

const GreenSidebarTemplate = ({ data }) => {
  if (!data) return null;

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

  return (
    <div
      style={{
        display: "flex",
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
      {/* Sidebar */}
      <div
        style={{
          width: "30%",
          background: "#2e7d32",
          color: "white",
          padding: "20px",
        }}
      >
        {basicInfo?.fullName && (
          <>
            <h2 style={{ marginBottom: "10px" }}>{basicInfo.fullName}</h2>
            <hr />
          </>
        )}

        {(basicInfo?.email || basicInfo?.phone || basicInfo?.address) && (
          <>
            <h3>Contact</h3>
            {basicInfo?.email && <p>{basicInfo.email}</p>}
            {basicInfo?.phone && <p>{basicInfo.phone}</p>}
            {basicInfo?.address && <p>{basicInfo.address}</p>}
            <hr />
          </>
        )}

        {technicalSkills?.length > 0 && (
          <>
            <h3>Technical Skills</h3>
            <ul>
              {technicalSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            <hr />
          </>
        )}

        {languages?.length > 0 && (
          <>
            <h3>Languages</h3>
            <ul>
              {languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
            <hr />
          </>
        )}

        {strengths?.length > 0 && (
          <>
            <h3>Strengths</h3>
            <ul>
              {strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <hr />
          </>
        )}

        {hobbies?.length > 0 && (
          <>
            <h3>Hobbies</h3>
            <ul>
              {hobbies.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <hr />
          </>
        )}
      </div>

      {/* Main Content */}
      <div style={{ width: "70%", padding: "20px", color: "#333" }}>
        {careerObjective && (
          <section>
            <h3>Career Objective</h3>
            <p>{careerObjective}</p>
            <hr />
          </section>
        )}

        {education?.length > 0 && (
          <section>
            <h3>Education</h3>
            {education.map((edu, i) => (
              <p key={i}>
                {edu.degree} - {edu.institution} ({edu.startDate} - {edu.endDate})
              </p>
            ))}
            <hr />
          </section>
        )}

        {internships?.length > 0 && (
          <section>
            <h3>Internships</h3>
            {internships.map((intern, i) => (
              <p key={i}>
                {intern.company} - {intern.role} ({intern.duration})
              </p>
            ))}
            <hr />
          </section>
        )}

        {projects?.length > 0 && (
          <section>
            <h3>Projects</h3>
            {projects.map((proj, i) => (
              <p key={i}>
                {proj.title} - {proj.description}
              </p>
            ))}
            <hr />
          </section>
        )}

        {certifications?.length > 0 && (
          <section>
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <hr />
          </section>
        )}

        {achievements?.length > 0 && (
          <section>
            <h3>Achievements & Awards</h3>
            <ul>
              {achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <hr />
          </section>
        )}

        {coCurricular?.length > 0 && (
          <section>
            <h3>Co-Curricular Activities</h3>
            <ul>
              {coCurricular.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <hr />
          </section>
        )}

        {extraCurricular?.length > 0 && (
          <section>
            <h3>Extra-Curricular Activities</h3>
            <ul>
              {extraCurricular.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <hr />
          </section>
        )}

        {areaOfInterest?.length > 0 && (
          <section>
            <h3>Areas of Interest</h3>
            <ul>
              {areaOfInterest.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <hr />
          </section>
        )}

        {jobPreferences && (
          <section>
            <h3>Job Preferences</h3>
            <p>{jobPreferences}</p>
            <hr />
          </section>
        )}

        {familyBackground && (
          <section>
            <h3>Family Background</h3>
            <p>{familyBackground}</p>
            <hr />
          </section>
        )}

        {declaration && (
          <section>
            <h3>Declaration</h3>
            <p>{declaration}</p>
            <hr />
          </section>
        )}
      </div>
    </div>
  );
};

export default GreenSidebarTemplate;
