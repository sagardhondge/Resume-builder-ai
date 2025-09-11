import React from "react";

const GreenSidebarTemplate = ({ data = {} }) => {
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
    basicInfo.fullName ||
    basicInfo.email ||
    basicInfo.phone ||
    basicInfo.address ||
    basicInfo.dob;

  const isNumber = (value) => /^\d+$/.test(value);

  const renderList = (arr) =>
    arr.filter((item) => item && item.trim() !== "").map((item, i) => <li key={i}>{item}</li>);

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
      <div style={{ width: "30%", background: "#2e7d32", color: "white", padding: "20px" }}>
        {basicInfo.fullName && <h2>{basicInfo.fullName}</h2>}

        {(basicInfo.email || basicInfo.phone || basicInfo.address || basicInfo.dob) && (
          <>
            <h3>Contact</h3>
            {basicInfo.email && <p>Email: {basicInfo.email}</p>}
            {basicInfo.phone && <p>Phone: {basicInfo.phone}</p>}
            {basicInfo.address && <p>Address: {basicInfo.address}</p>}
            {basicInfo.dob && <p>DOB: {basicInfo.dob}</p>}
          </>
        )}

        {technicalSkills.length > 0 && renderList(technicalSkills).length > 0 && (
          <>
            <h3>Technical Skills</h3>
            <ul>{renderList(technicalSkills)}</ul>
          </>
        )}

        {languages.length > 0 && renderList(languages).length > 0 && (
          <>
            <h3>Languages</h3>
            <ul>{renderList(languages)}</ul>
          </>
        )}

        {strengths.length > 0 && renderList(strengths).length > 0 && (
          <>
            <h3>Strengths</h3>
            <ul>{renderList(strengths)}</ul>
          </>
        )}

        {hobbies.length > 0 && renderList(hobbies).length > 0 && (
          <>
            <h3>Hobbies</h3>
            <ul>{renderList(hobbies)}</ul>
          </>
        )}
      </div>

      {/* Main Content */}
      <div style={{ width: "70%", padding: "20px", color: "#333" }}>
        {careerObjective && careerObjective.trim() !== "" && (
          <>
            <h2>Career Objective</h2>
            <p>{careerObjective}</p>
          </>
        )}

        {education.length > 0 &&
          education.some((edu) => edu.degree || edu.institution || isNumber(edu.startDate) || edu.endDate) && (
            <>
              <h2>Education</h2>
              {education.map(
                (edu, i) =>
                  (edu.degree || edu.institution || isNumber(edu.startDate) || isNumber(edu.endDate)) && (
                    <div key={i}>
                      <p>
                        {edu.degree && <strong>{edu.degree}</strong>} {edu.institution}{" "}
                        {edu.startDate && edu.endDate && `(${edu.startDate} - ${edu.endDate})`}
                      </p>
                    </div>
                  )
              )}
            </>
          )}

        {internships.length > 0 &&
          internships.some((intern) => intern.company || intern.role || intern.duration) && (
            <>
              <h2>Internships</h2>
              {internships.map(
                (intern, i) =>
                  (intern.company || intern.role || intern.duration) && (
                    <div key={i}>
                      <p>
                        {intern.company && <strong>{intern.company}</strong>} {intern.role}{" "}
                        {intern.duration && `(${intern.duration})`}
                      </p>
                    </div>
                  )
              )}
            </>
          )}

        {projects.length > 0 &&
          projects.some((proj) => proj.title || proj.description) && (
            <>
              <h2>Projects</h2>
              {projects.map(
                (proj, i) =>
                  (proj.title || proj.description) && (
                    <div key={i}>
                      {proj.title && <p><strong>{proj.title}</strong></p>}
                      {proj.description && <p>{proj.description}</p>}
                    </div>
                  )
              )}
            </>
          )}

        {technicalSkills.length > 0 && renderList(technicalSkills).length > 0 && (
          <>
            <h2>Technical Skills</h2>
            <ul>{renderList(technicalSkills)}</ul>
          </>
        )}

        {certifications.length > 0 && renderList(certifications).length > 0 && (
          <>
            <h2>Certifications</h2>
            <ul>{renderList(certifications)}</ul>
          </>
        )}

        {achievements.length > 0 && renderList(achievements).length > 0 && (
          <>
            <h2>Achievements / Awards</h2>
            <ul>{renderList(achievements)}</ul>
          </>
        )}

        {coCurricular.length > 0 && renderList(coCurricular).length > 0 && (
          <>
            <h2>Co-Curricular Activities</h2>
            <ul>{renderList(coCurricular)}</ul>
          </>
        )}

        {extraCurricular.length > 0 && renderList(extraCurricular).length > 0 && (
          <>
            <h2>Extra-Curricular Activities</h2>
            <ul>{renderList(extraCurricular)}</ul>
          </>
        )}

        {areaOfInterest.length > 0 && renderList(areaOfInterest).length > 0 && (
          <>
            <h2>Areas of Interest</h2>
            <ul>{renderList(areaOfInterest)}</ul>
          </>
        )}

        {jobPreferences && jobPreferences.trim() !== "" && (
          <>
            <h2>Job Preferences</h2>
            <p>{jobPreferences}</p>
          </>
        )}

        {familyBackground && familyBackground.trim() !== "" && (
          <>
            <h2>Family Background</h2>
            <p>{familyBackground}</p>
          </>
        )}

        {declaration && declaration.trim() !== "" && (
          <>
            <h2>Declaration</h2>
            <p>{declaration}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GreenSidebarTemplate;
