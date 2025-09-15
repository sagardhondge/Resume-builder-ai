import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Templates from "../components/Templates";
import API from "../utils/axios.js";

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

  useEffect(() => {
    API.get("/resumes")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setForm(res.data[0]);
          setResumeId(res.data[0]._id);
        } else {
          const savedData = localStorage.getItem("resumeData");
          if (savedData) setShowRestorePrompt(true);
        }
      })
      .catch((err) => console.error("Error fetching resume:", err));
  }, []);

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
      if (index !== null) {
        if (field && typeof updatedArray[index] === "object") {
          updatedArray[index] = { ...updatedArray[index], [field]: value };
        } else {
          updatedArray[index] = value;
        }
        setForm({ ...form, [section]: updatedArray });
      }
    } else if (typeof form[section] === "object" && field) {
      setForm({ ...form, [section]: { ...form[section], [field]: value } });
    } else {
      setForm({ ...form, [section]: value });
    }
  };

  const addEntry = (section, emptyEntry) => {
    if (Array.isArray(form[section])) {
      setForm({ ...form, [section]: [...form[section], emptyEntry] });
    }
  };

  const removeEntry = (section, index) => {
    if (Array.isArray(form[section])) {
      const updated = [...form[section]];
      updated.splice(index, 1);
      setForm({ ...form, [section]: updated });
    }
  };

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

const handleDownload = async () => {
  if (!resumeId) {
    alert("⚠️ Please save your resume first to download.");
    return;
  }

  try {
    const res = await API.get(`/resumes/download/${resumeId}`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    if (err.response && err.response.status === 401) {
      alert("⚠️ Please login to download your resume!");
    } else {
      console.error("Error downloading resume:", err);
      alert("❌ Error downloading resume");
    }
  }
};

const saveResume = async () => {
  try {
    const res = resumeId
      ? await API.put(`/resumes/${resumeId}`, form)
      : await API.post("/resumes", form);

    setResumeId(res.data._id);
    alert("✅ Resume saved successfully!");
  } catch (err) {
    if (err.response && err.response.status === 401) {
      alert("⚠️ Please login to save your resume!");
    } else {
      console.error("Error saving resume:", err);
      alert("❌ Error saving resume");
    }
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
  <button
    className="btn btn-primary"
    onClick={() => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("⚠️ Please login to save your resume!");
        return;
      }
      saveResume();
    }}
  >
     Save Resume
  </button>

  <button
    className="btn btn-info"
    onClick={() => setShowPreview(true)}
  >
    Preview Resume
  </button>

  <button
    className="btn btn-success"
    onClick={() => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("⚠️ Please login to download your resume!");
        return;
      }
      handleDownload();
    }}
  >
    Download Resume
  </button>
</div>
      <h2 className="text-center mb-4">{sections[currentStep]}</h2>
      <div className="card shadow-sm p-4">
        {/* Render all steps safely */}
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
        {currentStep === 1 && <textarea className="form-control" rows={4} 
        placeholder="Job Preferences" value={form.jobPreferences} onChange={(e) =>
         handleChange("jobPreferences", null, e.target.value)} />}
         <hr />
        {currentStep === 1 && (
          <textarea
            className="form-control"
            rows={5}
            placeholder="Career Objective"
            value={form.careerObjective}
            onChange={(e) => handleChange("careerObjective", null, e.target.value)}
          />
        )}

        {/* Steps 2–4 */}
        {[{ section: "education", empty: { degree: "", institution: "", year: "", grade: "" } },
          { section: "internships", empty: { company: "", role: "", duration: "", description: "" } },
          { section: "projects", empty: { title: "", description: "", link: "" } }
        ].map((obj, idx) => currentStep === idx + 2 && (
          <div key={obj.section}>
            {Array.isArray(form[obj.section]) && form[obj.section].map((item, i) => (
              <div className="row g-3 mb-3" key={i}>
                {Object.keys(item).map((key) => (
                  <div className={key === "description" ? "col-12" : key === "link" ? "col-md-3" : "col-md-4"} key={key}>
                    {key === "description" ? (
                      <textarea
                        className="form-control"
                        placeholder={key}
                        value={item[key]}
                        onChange={(e) => handleChange(obj.section, key, e.target.value, i)}
                      />
                    ) : (
                      <input
                        className="form-control"
                        placeholder={key}
                        value={item[key]}
                        onChange={(e) => handleChange(obj.section, key, e.target.value, i)}
                      />
                    )}
                  </div>
                ))}
                <div className="col-12">
                  <button className="btn btn-outline-danger" onClick={() => removeEntry(obj.section, i)}>Remove</button>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-primary" onClick={() => addEntry(obj.section, obj.empty)}>+ Add {obj.section}</button>
          </div>
        ))}

        {/* Steps 5–13 */}
        {["technicalSkills","certifications","achievements","coCurricular","extraCurricular","languages","strengths","hobbies","areaOfInterest"].map((field, idx) =>
          currentStep === idx + 5 && Array.isArray(form[field]) && (
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
          )
        )}

        {/* Steps 14–16 */}
        {currentStep === 14 && <textarea className="form-control" rows={4} placeholder="Family Background" value={form.familyBackground} onChange={(e) => handleChange("familyBackground", null, e.target.value)} />}
        {currentStep === 15 && <textarea className="form-control" rows={4} placeholder="Declaration" value={form.declaration} onChange={(e) => handleChange("declaration", null, e.target.value)} />}
      </div>

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
