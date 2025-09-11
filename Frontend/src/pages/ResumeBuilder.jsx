// src/pages/ResumeBuilder.jsx
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Templates from "../components/Templates";

const sections = [
  "Basic Info",
  "Career Objective",
  "Education",
  "Internships",
  "Projects",
  "Technical Skills",
  "Certifications",
  "Achievements/Awards",
  "Co-Curricular Activities",
  "Extra-Curricular Activities",
  "Languages Known",
  "Strengths/Soft-Skills",
  "Hobby/Interest",
  "Area of Interest",
  "Job Preferences",
  "Family Background",
  "Declaration",
];

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    basicInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      altPhone: "",
      currentAddress: "",
      permanentAddress: "",
      linkedin: "",
      github: "",
    },
    careerObjective: "",
    education: [{ degree: "", institution: "", year: "", grade: "" }],
    internships: [{ company: "", role: "", duration: "", description: "" }],
    projects: [{ title: "", description: "", link: "" }],
    technicalSkills: [""],
    certifications: [""],
    achievements: [""],
    coCurricular: [""],
    extraCurricular: [""],
    languages: [""],
    strengths: [""],
    hobbies: [""],
    areaOfInterest: [""],
    jobPreferences: "",
    familyBackground: "",
    declaration: "",
  });

  const handleChange = (section, field, value, index = null) => {
    if (Array.isArray(form[section])) {
      const updatedArray = [...form[section]];
      if (typeof updatedArray[index] === "object" && field) {
        updatedArray[index] = { ...updatedArray[index], [field]: value };
      } else {
        updatedArray[index] = value;
      }
      setForm({ ...form, [section]: updatedArray });
    } else if (typeof form[section] === "object") {
      setForm({
        ...form,
        [section]: { ...form[section], [field]: value },
      });
    } else {
      setForm({ ...form, [section]: value });
    }
  };

  const addEntry = (section, emptyEntry) => {
    setForm({ ...form, [section]: [...form[section], emptyEntry] });
  };

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const nextStep = () =>
    setCurrentStep((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  const skipStep = () =>
    setCurrentStep((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="container py-4">
      {/* Header Buttons */}
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-success" onClick={handlePrint}>
          Preview / Download Resume
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentStep(0)}
        >
          Change Template
        </button>
      </div>

      <h2 className="text-center mb-4">{sections[currentStep]}</h2>

      <div className="card shadow-sm p-4">
        {/* STEP 0: Basic Info */}
        {currentStep === 0 && (
          <div className="row g-3">
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="First Name"
                value={form.basicInfo.firstName}
                onChange={(e) =>
                  handleChange("basicInfo", "firstName", e.target.value)
                }
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Middle Name"
                value={form.basicInfo.middleName}
                onChange={(e) =>
                  handleChange("basicInfo", "middleName", e.target.value)
                }
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Last Name"
                value={form.basicInfo.lastName}
                onChange={(e) =>
                  handleChange("basicInfo", "lastName", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                value={form.basicInfo.dob}
                onChange={(e) => handleChange("basicInfo", "dob", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                value={form.basicInfo.gender}
                onChange={(e) =>
                  handleChange("basicInfo", "gender", e.target.value)
                }
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Email"
                value={form.basicInfo.email}
                onChange={(e) => handleChange("basicInfo", "email", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Phone"
                value={form.basicInfo.phone}
                onChange={(e) => handleChange("basicInfo", "phone", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Alternative Phone"
                value={form.basicInfo.altPhone}
                onChange={(e) =>
                  handleChange("basicInfo", "altPhone", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="LinkedIn Profile"
                value={form.basicInfo.linkedin}
                onChange={(e) =>
                  handleChange("basicInfo", "linkedin", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="GitHub / Portfolio"
                value={form.basicInfo.github}
                onChange={(e) =>
                  handleChange("basicInfo", "github", e.target.value)
                }
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Current Address"
                value={form.basicInfo.currentAddress}
                onChange={(e) =>
                  handleChange("basicInfo", "currentAddress", e.target.value)
                }
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Permanent Address"
                value={form.basicInfo.permanentAddress}
                onChange={(e) =>
                  handleChange("basicInfo", "permanentAddress", e.target.value)
                }
              />
            </div>
          </div>
        )}

        {/* STEP 1: Career Objective */}
        {currentStep === 1 && (
          <textarea
            className="form-control"
            placeholder="Career Objective"
            value={form.careerObjective}
            onChange={(e) =>
              handleChange("careerObjective", null, e.target.value)
            }
          />
        )}

        {/* STEP 2: Education */}
        {currentStep === 2 && (
          <div>
            {form.education.map((edu, index) => (
              <div className="row g-3 mb-3" key={index}>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleChange("education", "degree", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) =>
                      handleChange("education", "institution", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) =>
                      handleChange("education", "year", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Grade"
                    value={edu.grade}
                    onChange={(e) =>
                      handleChange("education", "grade", e.target.value, index)
                    }
                  />
                </div>
              </div>
            ))}
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                addEntry("education", {
                  degree: "",
                  institution: "",
                  year: "",
                  grade: "",
                })
              }
            >
              + Add Education
            </button>
          </div>
        )}

        {/* STEP 3: Internships */}
        {currentStep === 3 && (
          <div>
            {form.internships.map((intern, index) => (
              <div className="row g-3 mb-3" key={index}>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    placeholder="Company"
                    value={intern.company}
                    onChange={(e) =>
                      handleChange("internships", "company", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    placeholder="Role"
                    value={intern.role}
                    onChange={(e) =>
                      handleChange("internships", "role", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    placeholder="Duration"
                    value={intern.duration}
                    onChange={(e) =>
                      handleChange("internships", "duration", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    value={intern.description}
                    onChange={(e) =>
                      handleChange("internships", "description", e.target.value, index)
                    }
                  />
                </div>
              </div>
            ))}
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                addEntry("internships", {
                  company: "",
                  role: "",
                  duration: "",
                  description: "",
                })
              }
            >
              + Add Internship
            </button>
          </div>
        )}

        {/* STEP 4: Projects */}
        {currentStep === 4 && (
          <div>
            {form.projects.map((proj, index) => (
              <div className="row g-3 mb-3" key={index}>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    placeholder="Title"
                    value={proj.title}
                    onChange={(e) =>
                      handleChange("projects", "title", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-5">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    value={proj.description}
                    onChange={(e) =>
                      handleChange("projects", "description", e.target.value, index)
                    }
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    placeholder="Link"
                    value={proj.link}
                    onChange={(e) =>
                      handleChange("projects", "link", e.target.value, index)
                    }
                  />
                </div>
              </div>
            ))}
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                addEntry("projects", { title: "", description: "", link: "" })
              }
            >
              + Add Project
            </button>
          </div>
        )}

        {/* STEP 5–13 (skills, certifications, achievements, activities, languages, strengths, hobbies, areas of interest) */}
        {[
          "technicalSkills",
          "certifications",
          "achievements",
          "coCurricular",
          "extraCurricular",
          "languages",
          "strengths",
          "hobbies",
          "areaOfInterest",
        ].map((field, idx) =>
          currentStep === idx + 5 ? (
            <div key={field}>
              {form[field].map((item, index) => (
                <input
                  key={index}
                  className="form-control mb-2"
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={item}
                  onChange={(e) =>
                    handleChange(field, null, e.target.value, index)
                  }
                />
              ))}
              <button
                className="btn btn-outline-primary"
                onClick={() => addEntry(field, "")}
              >
                + Add More
              </button>
            </div>
          ) : null
        )}

        {/* STEP 14: Job Preferences */}
        {currentStep === 14 && (
          <textarea
            className="form-control"
            placeholder="Job Preferences"
            value={form.jobPreferences}
            onChange={(e) =>
              handleChange("jobPreferences", null, e.target.value)
            }
          />
        )}

        {/* STEP 15: Family Background */}
        {currentStep === 15 && (
          <textarea
            className="form-control"
            placeholder="Family Background"
            value={form.familyBackground}
            onChange={(e) =>
              handleChange("familyBackground", null, e.target.value)
            }
          />
        )}

        {/* STEP 16: Declaration */}
        {currentStep === 16 && (
          <textarea
            className="form-control"
            placeholder="Declaration"
            value={form.declaration}
            onChange={(e) => handleChange("declaration", null, e.target.value)}
          />
        )}
      </div>

      {/* Navigation Buttons */}
    {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        {currentStep > 0 && (
          <button className="btn btn-secondary" onClick={prevStep}>
            Back
          </button>
        )}

        {currentStep < sections.length - 1 ? (
          <div>
            <button className="btn btn-primary me-2" onClick={nextStep}>
              Next
            </button>
            <button className="btn btn-outline-primary" onClick={skipStep}>
              Skip
            </button>
          </div>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => {
              console.log("Resume Data Saved ✅", form);
              alert("Resume saved successfully!");
            }}
          >
            Save Resume
          </button>
        )}
      </div>

      {/* Hidden Resume Preview for Printing */}
      <div style={{ display: "none" }}>
        <div ref={resumeRef}>
          <Templates data={form} />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
