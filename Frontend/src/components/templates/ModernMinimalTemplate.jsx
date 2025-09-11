import React from "react";

const ModernMinimalTemplate = React.forwardRef(({ data = {} }, ref) => {
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
      ref={ref}
      className="bg-gray-50 text-gray-800 leading-relaxed font-sans min-h-screen"
    >
      <style>
        {`
          /* Specific styles for A4 page and print */
          .a4-page {
            max-width: 210mm;
            min-height: 297mm;
            margin: auto;
            background: white;
            padding: 2.5rem; /* ~30px */
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          @media print {
            .a4-page {
              box-shadow: none;
              border: none;
              padding: 10mm;
              margin: 0;
              width: 210mm;
              height: 297mm;
              page-break-after: always;
            }
          }
          .font-sans {
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          }
        `}
      </style>
      <div className="a4-page">
        {/* Basic Info */}
        {hasBasicInfo && (
          <div className="text-center mb-6">
            {(basicInfo.firstName || basicInfo.lastName) && (
              <h1 className="text-4xl font-extrabold mb-1">
                {basicInfo.firstName}{" "}
                {basicInfo.middleName && basicInfo.middleName + " "}
                {basicInfo.lastName}
              </h1>
            )}
            <div className="flex flex-wrap justify-center items-center text-sm text-gray-600 gap-x-2">
              {basicInfo.email && <span>📧 {basicInfo.email}</span>}
              {basicInfo.phone && <span>📞 {basicInfo.phone}</span>}
              {basicInfo.currentAddress && <span>📍 {basicInfo.currentAddress}</span>}
              {basicInfo.dob && <span>🎂 {basicInfo.dob}</span>}
              {basicInfo.github && (
                <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub
                </a>
              )}
              {basicInfo.linkedin && (
                <a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              )}
              {basicInfo.portfolio && (
                <a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Portfolio
                </a>
              )}
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        )}

        {/* Main Content Sections */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column for Skills and other lists */}
          <div className="md:w-1/3 space-y-6">
            {technicalSkills.some((s) => s) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}
                </ul>
              </section>
            )}

            {languages.some((l) => l) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Languages</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {languages.map((l, i) => l && <li key={i}>{l}</li>)}
                </ul>
              </section>
            )}

            {strengths.some((s) => s) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Strengths</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {strengths.map((s, i) => s && <li key={i}>{s}</li>)}
                </ul>
              </section>
            )}

            {hobbies.some((h) => h) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Hobbies</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {hobbies.map((h, i) => h && <li key={i}>{h}</li>)}
                </ul>
              </section>
            )}

            {certifications.some((c) => c) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Certifications</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {certifications.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column for Major Sections */}
          <div className="md:w-2/3 space-y-6">
            {careerObjective && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Career Objective</h3>
                <p className="text-sm">{careerObjective}</p>
              </section>
            )}

            {education.some((edu) => edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (edu.degree || edu.institution || isNumber(edu.year) || edu.grade) && (
                    <div key={i}>
                      <p className="font-bold text-sm">{edu.degree} {isNumber(edu.year) && <span className="font-normal text-gray-500 text-xs">({edu.year})</span>}</p>
                      <p className="text-sm text-gray-600">{edu.institution}</p>
                      {edu.grade && <p className="text-sm">Grade: {edu.grade}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {internships.some((intern) => intern.company || intern.role || intern.duration || intern.description) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Internships</h3>
                <div className="space-y-4">
                  {internships.map((intern, i) => (intern.company || intern.role || intern.duration || intern.description) && (
                    <div key={i}>
                      <p className="font-bold text-sm">{intern.role} <span className="font-normal text-gray-500 text-xs">| {intern.company}</span></p>
                      {intern.duration && <p className="text-sm text-gray-600">{intern.duration}</p>}
                      {intern.description && <p className="text-sm mt-1">{intern.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {projects.some((proj) => proj.title || proj.description || proj.link) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Projects</h3>
                <div className="space-y-4">
                  {projects.map((proj, i) => (proj.title || proj.description || proj.link) && (
                    <div key={i}>
                      <p className="font-bold text-sm">{proj.title}</p>
                      {proj.description && <p className="text-sm mt-1">{proj.description}</p>}
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                          View Project
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {achievements.some((a) => a) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Achievements / Awards</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {achievements.map((a, i) => a && <li key={i}>{a}</li>)}
                </ul>
              </section>
            )}

            {coCurricular.some((c) => c) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Co-Curricular Activities</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
              </section>
            )}

            {extraCurricular.some((c) => c) && (
              <section>
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Extra-Curricular Activities</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
              </section>
            )}

            {declaration && (
              <section className="mt-8">
                <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Declaration</h3>
                <p className="text-sm italic">{declaration}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModernMinimalTemplate;
