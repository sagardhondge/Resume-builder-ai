import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Templates from "../components/Templates";

 const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

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

const initialFormState = {
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
    portfolio: "",
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
};

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [showPreview, setShowPreview] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [resumeId, setResumeId] = useState(null);
  const [showRestorePrompt, setShowRestorePrompt] = useState(false);

  const resumeRef = useRef();

  // Load resume from backend
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${API_URL}/api/resumes`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((resumes) => {
        if (resumes && resumes.length > 0) {
          setForm(resumes[0]);
          setResumeId(resumes[0]._id);
        } else {
          const savedData = localStorage.getItem("resumeData");
          if (savedData) setShowRestorePrompt(true);
        }
      })
      .catch(console.error);
  }, []);

  // Auto-save locally
  useEffect(() => {
    if (form) localStorage.setItem("resumeData", JSON.stringify(form));
  }, [form]);

  const handleRestore = () => {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));
    setForm(savedData || initialFormState);
    setShowRestorePrompt(false);
  };

  const handleStartFresh = () => {
    localStorage.removeItem("resumeData");
    setForm(initialFormState);
    setShowRestorePrompt(false);
  };

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
      setForm({ ...form, [section]: { ...form[section], [field]: value } });
    } else {
      setForm({ ...form, [section]: value });
    }
  };

  const addEntry = (section, emptyEntry) => {
    setForm({ ...form, [section]: [...form[section], emptyEntry] });
  };

  const removeEntry = (section, index) => {
    const updated = [...form[section]];
    updated.splice(index, 1);
    setForm({ ...form, [section]: updated });
  };

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const handleDownload = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠️ Please login to download your resume.");
      return;
    }
    handlePrint();
  };

  const saveResume = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠️ Please login to save your resume.");
      return;
    }

    try {
      const method = resumeId ? "PUT" : "POST";
      const url = resumeId
        ? `${API_URL}/api/resumes/${resumeId}`
        : `${API_URL}/api/resumes`;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save resume");
      const data = await res.json();
      setResumeId(data._id);
      alert("✅ Resume saved successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error saving resume");
    }
  };

  const nextStep = () =>
    setCurrentStep((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  const skipStep = () =>
    setCurrentStep((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="container py-4">
      {showRestorePrompt && (
        <div className="alert alert-warning d-flex justify-content-between align-items-center">
          <span>⚠️ You have unsaved progress. Restore?</span>
          <div>
            <button className="btn btn-sm btn-success me-2" onClick={handleRestore}>
              Continue
            </button>
            <button className="btn btn-sm btn-danger" onClick={handleStartFresh}>
              Start Fresh
            </button>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between mb-4 gap-2">
        <button className="btn btn-info" onClick={() => setShowPreview(true)}>
          Preview Resume
        </button>
        <button className="btn btn-success" onClick={handleDownload}>
          Download Resume
        </button>
      </div>

      <h2 className="text-center mb-4">{sections[currentStep]}</h2>
      <div className="card shadow-sm p-4">
        {/* ================= STEP 0: Basic Info ================= */}
        {currentStep === 0 && (
          <div className="row g-3">
            {Object.keys(form.basicInfo).map((field) => (
              <div className="col-md-6" key={field}>
                {field === "permanentAddress" ? (
                  <textarea
                    className="form-control"
                    placeholder={field}
                    value={form.basicInfo[field]}
                    onChange={(e) => handleChange("basicInfo", field, e.target.value)}
                  />
                ) : (
                  <input
                    className="form-control"
                    placeholder={field}
                    value={form.basicInfo[field]}
                    onChange={(e) => handleChange("basicInfo", field, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* STEP 1: Career Objective */}
        {currentStep === 1 && (
          <textarea
            className="form-control"
            rows={5}
            placeholder="Career Objective"
            value={form.careerObjective}
            onChange={(e) => handleChange("careerObjective", null, e.target.value)}
          />
        )}

        {/* STEP 2–4: Education, Internships, Projects */}
        {currentStep === 2 && (
          <div>
            {form.education.map((edu, idx) => (
              <div className="row g-3 mb-3" key={idx}>
                {Object.keys(edu).map((key) => (
                  <div className="col-md-3" key={key}>
                    <input
                      className="form-control"
                      placeholder={key}
                      value={edu[key]}
                      onChange={(e) => handleChange("education", key, e.target.value, idx)}
                    />
                  </div>
                ))}
                <div className="col-12">
                  <button className="btn btn-outline-danger" onClick={() => removeEntry("education", idx)}>Remove</button>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-primary" onClick={() => addEntry("education", { degree: "", institution: "", year: "", grade: "" })}>+ Add Education</button>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            {form.internships.map((intern, idx) => (
              <div className="row g-3 mb-3" key={idx}>
                {Object.keys(intern).map((key) => (
                  <div className={key === "description" ? "col-12" : "col-md-4"} key={key}>
                    {key === "description" ? (
                      <textarea
                        className="form-control"
                        placeholder={key}
                        value={intern[key]}
                        onChange={(e) => handleChange("internships", key, e.target.value, idx)}
                      />
                    ) : (
                      <input
                        className="form-control"
                        placeholder={key}
                        value={intern[key]}
                        onChange={(e) => handleChange("internships", key, e.target.value, idx)}
                      />
                    )}
                  </div>
                ))}
                <div className="col-12">
                  <button className="btn btn-outline-danger" onClick={() => removeEntry("internships", idx)}>Remove</button>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-primary" onClick={() => addEntry("internships", { company: "", role: "", duration: "", description: "" })}>+ Add Internship</button>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            {form.projects.map((proj, idx) => (
              <div className="row g-3 mb-3" key={idx}>
                {Object.keys(proj).map((key) => (
                  <div className={key === "description" ? "col-md-5" : key === "link" ? "col-md-3" : "col-md-4"} key={key}>
                    {key === "description" ? (
                      <textarea
                        className="form-control"
                        placeholder={key}
                        value={proj[key]}
                        onChange={(e) => handleChange("projects", key, e.target.value, idx)}
                      />
                    ) : (
                      <input
                        className="form-control"
                        placeholder={key}
                        value={proj[key]}
                        onChange={(e) => handleChange("projects", key, e.target.value, idx)}
                      />
                    )}
                  </div>
                ))}
                <div className="col-12">
                  <button className="btn btn-outline-danger" onClick={() => removeEntry("projects", idx)}>Remove</button>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-primary" onClick={() => addEntry("projects", { title: "", description: "", link: "" })}>+ Add Project</button>
          </div>
        )}

        {/* STEP 5–13: Array Text Sections */}
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
              {form[field].map((item, i) => (
                <div className="d-flex mb-2" key={i}>
                  <input
                    className="form-control me-2"
                    value={item}
                    placeholder={field}
                    onChange={(e) => handleChange(field, null, e.target.value, i)}
                  />
                  <button className="btn btn-outline-danger" onClick={() => removeEntry(field, i)}>Remove</button>
                </div>
              ))}
              <button className="btn btn-outline-primary" onClick={() => addEntry(field, "")}>+ Add {field}</button>
            </div>
          ) : null
        )}

        {/* STEP 14–16: Text Areas */}
        {currentStep === 14 && (
          <textarea
            className="form-control"
            rows={4}
            placeholder="Job Preferences"
            value={form.jobPreferences}
            onChange={(e) => handleChange("jobPreferences", null, e.target.value)}
          />
        )}
        {currentStep === 15 && (
          <textarea
            className="form-control"
            rows={4}
            placeholder="Family Background"
            value={form.familyBackground}
            onChange={(e) => handleChange("familyBackground", null, e.target.value)}
          />
        )}
        {currentStep === 16 && (
          <textarea
            className="form-control"
            rows={4}
            placeholder="Declaration"
            value={form.declaration}
            onChange={(e) => handleChange("declaration", null, e.target.value)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="d-flex justify-content-between mt-4">
        {currentStep > 0 && <button className="btn btn-secondary" onClick={prevStep}>Back</button>}
        {currentStep < sections.length - 1 ? (
          <div>
            <button className="btn btn-primary me-2" onClick={nextStep}>Next</button>
            <button className="btn btn-outline-primary" onClick={skipStep}>Skip</button>
          </div>
        ) : (
          <button className="btn btn-success" onClick={saveResume}>Save Resume</button>
        )}
      </div>

      {/* Live Preview */}
      {showPreview && (
        <div className="mt-4 border p-3 bg-light rounded">
          <h4 className="text-center">Live Resume Preview</h4>
          <div ref={resumeRef}>
            <Templates data={form} selectedTemplate={selectedTemplate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
