import React from "react";

// This component is designed with a professional aesthetic using Tailwind CSS.
// It assumes Tailwind is set up in your project.
// The layout is also styled to mimic an A4 page for easy printing.

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
    <div className="bg-gray-100 p-6 sm:p-10 font-sans leading-relaxed">
      {/* Styles for A4 paper size and print media */}
      <style>
        {`
          .resume-container {
            max-width: 210mm;
            min-height: 297mm;
            margin: auto;
            background-color: white;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            .resume-container {
              box-shadow: none;
              border: none;
              padding: 10mm;
              margin: 0;
              width: 210mm;
              height: 297mm;
              page-break-after: always;
            }
          }
        `}
      </style>
      <div className="resume-container">
        {/* ===== Basic Info ===== */}
        {hasBasicInfo && (
          <div className="text-center mb-6">
            {(basicInfo.firstName || basicInfo.lastName) && (
              <h1 className="text-4xl font-bold text-gray-800">
                {basicInfo.firstName}{" "}
                {basicInfo.middleName && basicInfo.middleName + " "}
                {basicInfo.lastName}
              </h1>
            )}

            <p className="text-sm text-gray-600 mt-2">
              {basicInfo.email && <span className="mr-1">{basicInfo.email} |</span>}
              {basicInfo.phone && <span className="mr-1">{basicInfo.phone} |</span>}
              {basicInfo.currentAddress && <span className="mr-1">{basicInfo.currentAddress} |</span>}
              {basicInfo.dob && <span className="mr-1">{basicInfo.dob} |</span>}
              {basicInfo.github && (
                <>
                  <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 mr-1">
                    GitHub
                  </a>
                  |{" "}
                </>
              )}
              {basicInfo.linkedin && (
                <>
                  <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 mr-1">
                    LinkedIn
                  </a>
                  |{" "}
                </>
              )}
              {basicInfo.portfolio && (
                <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 mr-1">
                  Portfolio
                </a>
              )}
            </p>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Career Objective ===== */}
        {careerObjective && careerObjective.trim() !== "" && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Career Objective</h2>
            <p className="text-sm">{careerObjective}</p>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Education ===== */}
        {education.length > 0 &&
          education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Education</h2>
              {education.map(
                (edu, i) =>
                  (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                    <div key={i} className="mb-4">
                      <p className="font-semibold text-base text-gray-800">
                        {edu.degree} - {edu.institution}{" "}
                        {isNumber(edu.year) && `(${edu.year})`}
                      </p>
                      {edu.grade && <p className="text-sm text-gray-500">Grade: {edu.grade}</p>}
                    </div>
                  )
              )}
              <hr className="my-6 border-t-2 border-gray-300" />
            </div>
          )}

        {/* ===== Internships ===== */}
        {internships.length > 0 &&
          internships.some((intern) => intern.company || intern.role || intern.duration || intern.description) && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Internships</h2>
              {internships.map(
                (intern, i) =>
                  (intern.company || intern.role || intern.duration || intern.description) && (
                    <div key={i} className="mb-4">
                      <p className="font-semibold text-base text-gray-800">
                        {intern.company} - {intern.role}
                      </p>
                      {intern.duration && <p className="text-sm text-gray-500">{intern.duration}</p>}
                      {intern.description && <p className="text-sm mt-1">{intern.description}</p>}
                    </div>
                  )
              )}
              <hr className="my-6 border-t-2 border-gray-300" />
            </div>
          )}

        {/* ===== Projects ===== */}
        {projects.length > 0 &&
          projects.some((proj) => proj.title || proj.description || proj.link) && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Projects</h2>
              {projects.map(
                (proj, i) =>
                  (proj.title || proj.description || proj.link) && (
                    <div key={i} className="mb-4">
                      <p className="font-semibold text-base text-gray-800">
                        {proj.title}
                      </p>
                      {proj.description && <p className="text-sm mt-1">{proj.description}</p>}
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-700 hover:underline">
                          View Project
                        </a>
                      )}
                    </div>
                  )
              )}
              <hr className="my-6 border-t-2 border-gray-300" />
            </div>
          )}

        {/* ===== Technical Skills ===== */}
        {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Technical Skills</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {technicalSkills.map((skill, i) => skill && <li key={i}>{skill}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Languages ===== */}
        {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Languages</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {languages.map((lang, i) => lang && <li key={i}>{lang}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}
        
        {/* ===== Certifications ===== */}
        {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Certifications</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {certifications.map((cert, i) => cert && <li key={i}>{cert}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Achievements ===== */}
        {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Achievements / Awards</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {achievements.map((ach, i) => ach && <li key={i}>{ach}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Co-Curricular ===== */}
        {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Co-Curricular Activities</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {coCurricular.map((act, i) => act && <li key={i}>{act}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Extra-Curricular ===== */}
        {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Extra-Curricular Activities</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {extraCurricular.map((act, i) => act && <li key={i}>{act}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Strengths ===== */}
        {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Strengths</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {strengths.map((st, i) => st && <li key={i}>{st}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Hobbies ===== */}
        {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Hobbies</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {hobbies.map((hb, i) => hb && <li key={i}>{hb}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Area of Interest ===== */}
        {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Area of Interest</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {areaOfInterest.map((area, i) => area && <li key={i}>{area}</li>)}
            </ul>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Job Preferences ===== */}
        {jobPreferences && jobPreferences.trim() !== "" && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Job Preferences</h2>
            <p className="text-sm">{jobPreferences}</p>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Family Background ===== */}
        {familyBackground && familyBackground.trim() !== "" && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Family Background</h2>
            <p className="text-sm">{familyBackground}</p>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Declaration ===== */}
        {declaration && declaration.trim() !== "" && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2">Declaration</h2>
            <p className="text-sm italic">{declaration}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
