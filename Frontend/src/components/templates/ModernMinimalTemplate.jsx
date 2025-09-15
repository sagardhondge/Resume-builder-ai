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
          .a4-page {
            max-width: 210mm;
            min-height: 297mm;
            margin: auto;
            background: white;
            padding: 2.5rem;
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

          /* Tooltip hover for hidden links */
          .tooltip-link {
            position: relative;
            cursor: pointer;
            color: #2563eb; /* blue-600 */
            font-weight: 500;
          }
          .tooltip-link::after {
            content: attr(data-url);
            position: absolute;
            bottom: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            color: #fff;
            font-size: 0.75rem;
            padding: 2px 6px;
            border-radius: 4px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
            white-space: nowrap;
          }
          .tooltip-link:hover::after {
            opacity: 1;
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
            <div className="flex flex-wrap justify-center items-center text-sm text-gray-600 gap-x-3 gap-y-1">
              {basicInfo.email && <span>📧 {basicInfo.email}</span>}
              {basicInfo.phone && <span>📞 {basicInfo.phone}</span>}
              {basicInfo.currentAddress && <span>📍 {basicInfo.currentAddress}</span>}
              {basicInfo.dob && <span>🎂 {basicInfo.dob}</span>}

              {basicInfo.github && (
                <a
                  href={basicInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-link"
                  data-url={basicInfo.github}
                >
                  GitHub
                </a>
              )}
              {basicInfo.linkedin && (
                <a
                  href={basicInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-link"
                  data-url={basicInfo.linkedin}
                >
                  LinkedIn
                </a>
              )}
              {basicInfo.portfolio && (
                <a
                  href={basicInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-link"
                  data-url={basicInfo.portfolio}
                >
                  Portfolio
                </a>
              )}
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        )}

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="md:w-1/3 space-y-6">
            {technicalSkills.some((s) => s) && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}
                </ul>
              </section>
            )}

            {languages.some((l) => l) && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Languages</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {languages.map((l, i) => l && <li key={i}>{l}</li>)}
                </ul>
              </section>
            )}

            {strengths.some((s) => s) && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Strengths</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {strengths.map((s, i) => s && <li key={i}>{s}</li>)}
                </ul>
              </section>
            )}

            {hobbies.some((h) => h) && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Hobbies</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {hobbies.map((h, i) => h && <li key={i}>{h}</li>)}
                </ul>
              </section>
            )}

            {certifications.some((c) => c) && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Certifications</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {certifications.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
              </section>
            )}
          </div>

          {/* Right column */}
          <div className="md:w-2/3 space-y-6">
            {careerObjective && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Career Objective</h3>
                <p className="text-sm">{careerObjective}</p>
              </section>
            )}
            

            {projects.some((proj) => proj.title || proj.description || proj.link) && (
              <section>
                <h3 className="text-lg font-semibold border-b mb-2">Projects</h3>
                <div className="space-y-4">
                  {projects.map(
                    (proj, i) =>
                      (proj.title || proj.description || proj.link) && (
                        <div key={i}>
                          <p className="font-bold text-sm">{proj.title}</p>
                          {proj.description && <p className="text-sm mt-1">{proj.description}</p>}
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tooltip-link text-sm"
                              data-url={proj.link}
                            >
                              View Project
                            </a>
                          )}
                        </div>
                      )
                  )}
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
