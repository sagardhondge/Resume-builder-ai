import React from "react";

const ProfessionalTemplate = React.forwardRef(({ data = {} }, ref) => {
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
    basicInfo.middleName ||
    basicInfo.lastName ||
    basicInfo.email ||
    basicInfo.phone ||
    basicInfo.currentAddress;

  const isNumber = (value) => /^\d+$/.test(value);

  return (
    <div ref={ref} className="bg-white text-gray-800 leading-normal font-sans">
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
        {/* ===== Basic Info ===== */}
        {hasBasicInfo && (
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold mb-1">
              {basicInfo.firstName} {basicInfo.middleName || ""} {basicInfo.lastName}
            </h1>
            <p className="text-sm text-gray-600">
              {basicInfo.email && <span className="mr-1"> {basicInfo.email} |</span>}
              {basicInfo.phone && <span className="mr-1"> {basicInfo.phone} |</span>}
              {basicInfo.currentAddress && <span className="mr-1"> {basicInfo.currentAddress}</span>}
              {basicInfo.dob && <span className="mr-1"> | DOB: {basicInfo.dob}</span>}
            </p>
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

            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        )}

        {/* ===== Career Objective ===== */}
        {careerObjective && careerObjective.trim() !== "" && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Career Objective</h3>
            <p className="text-sm">{careerObjective}</p>
          </section>
        )}

        {/* ===== Education ===== */}
        {education.length > 0 && education.some((edu) => edu.degree || edu.institute || edu.year || edu.grade) && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Education</h3>
            {education.map((edu, i) =>
              (edu.degree || edu.institute || edu.year || edu.grade) && (
                <p key={i} className="text-sm">
                  <strong className="font-medium">{edu.degree}</strong> - {edu.institute} {edu.year && `(${edu.year})`} {edu.grade && `| Grade: ${edu.grade}`}
                </p>
              )
            )}
          </section>
        )}

        {/* ===== Internships ===== */}
        {internships.length > 0 && internships.some((intern) => intern.role || intern.company || intern.duration || intern.description) && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Internships</h3>
            {internships.map((intern, i) =>
              (intern.role || intern.company || intern.duration || intern.description) && (
                <p key={i} className="text-sm">
                  <strong className="font-medium">{intern.role}</strong> at {intern.company} {intern.duration && `(${intern.duration})`}
                  {intern.description && ` - ${intern.description}`}
                </p>
              )
            )}
          </section>
        )}

        {/* ===== Projects ===== */}
{projects.length > 0 &&
  projects.some((p) => p.title || p.description || p.link) && (
    <Section
      title="Projects"
      content={projects.map(
        (proj, i) =>
          (proj.title || proj.description || proj.link) && (
            <div key={i}>
              <p><strong>{proj.title}</strong></p>
              {proj.description && <p>{proj.description}</p>}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
              )}
            </div>
          )
      )}
    />
  )}

        {/* ===== Technical Skills ===== */}
        {technicalSkills.length > 0 && technicalSkills.some((s) => s && s.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Technical Skills</h3>
            <ul className="list-disc list-inside text-sm">{technicalSkills.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          </section>
        )}

        {/* ===== Certifications ===== */}
        {certifications.length > 0 && certifications.some((c) => c && c.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Certifications</h3>
            <ul className="list-disc list-inside text-sm">{certifications.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          </section>
        )}

        {/* ===== Achievements / Awards ===== */}
        {achievements.length > 0 && achievements.some((a) => a && a.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Achievements / Awards</h3>
            <ul className="list-disc list-inside text-sm">{achievements.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          </section>
        )}

        {/* ===== Co-Curricular Activities ===== */}
        {coCurricular.length > 0 && coCurricular.some((c) => c && c.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Co-Curricular Activities</h3>
            <ul className="list-disc list-inside text-sm">{coCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          </section>
        )}

        {/* ===== Extra-Curricular Activities ===== */}
        {extraCurricular.length > 0 && extraCurricular.some((c) => c && c.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Extra-Curricular Activities</h3>
            <ul className="list-disc list-inside text-sm">{extraCurricular.map((c, i) => c && <li key={i}>{c}</li>)}</ul>
          </section>
        )}

        {/* ===== Languages ===== */}
        {languages.length > 0 && languages.some((l) => l && l.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Languages</h3>
            <ul className="list-disc list-inside text-sm">{languages.map((l, i) => l && <li key={i}>{l}</li>)}</ul>
          </section>
        )}

        {/* ===== Strengths ===== */}
        {strengths.length > 0 && strengths.some((s) => s && s.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Strengths</h3>
            <ul className="list-disc list-inside text-sm">{strengths.map((s, i) => s && <li key={i}>{s}</li>)}</ul>
          </section>
        )}

        {/* ===== Hobbies ===== */}
        {hobbies.length > 0 && hobbies.some((h) => h && h.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Hobbies</h3>
            <ul className="list-disc list-inside text-sm">{hobbies.map((h, i) => h && <li key={i}>{h}</li>)}</ul>
          </section>
        )}

        {/* ===== Area of Interest ===== */}
        {areaOfInterest.length > 0 && areaOfInterest.some((a) => a && a.trim() !== "") && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Area of Interest</h3>
            <ul className="list-disc list-inside text-sm">{areaOfInterest.map((a, i) => a && <li key={i}>{a}</li>)}</ul>
          </section>
        )}

        {/* ===== Job Preferences ===== */}
        {jobPreferences && jobPreferences.trim() !== "" && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Job Preferences</h3>
            <p className="text-sm">{jobPreferences}</p>
          </section>
        )}

        {/* ===== Family Background ===== */}
        {familyBackground && familyBackground.trim() !== "" && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Family Background</h3>
            <p className="text-sm">{familyBackground}</p>
          </section>
        )}

        {/* ===== Declaration ===== */}
        {declaration && declaration.trim() !== "" && (
          <section className="mt-8">
            <h3 className="text-lg font-semibold border-b border-gray-300 mb-2">Declaration</h3>
            <p className="text-sm italic">{declaration}</p>
          </section>
        )}
      </div>
    </div>
  );
});

export default ProfessionalTemplate;
