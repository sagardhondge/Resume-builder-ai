import Resume from "../models/Resume.js";
import PDFDocument from "pdfkit";

// CREATE Resume
export const createResume = async (req, res) => {
  try {
    const resume = await Resume.create({ ...req.body, userId: req.user.id });
    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all resumes
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET resume by ID
export const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id, userId: req.user.id });
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE resume
export const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE resume
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json({ message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DOWNLOAD Resume as PDF
export const downloadResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id, userId: req.user.id });
    if (!resume) return res.status(404).json({ message: "Resume not found" });

    const doc = new PDFDocument();
    res.setHeader("Content-Disposition", `attachment; filename=${resume.basicInfo.firstName}_Resume.pdf`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Add Basic Info
    doc.fontSize(20).text(`${resume.basicInfo.firstName} ${resume.basicInfo.lastName}`, { underline: true });
    doc.moveDown();
    doc.fontSize(12).text(`Email: ${resume.basicInfo.email}`);
    doc.text(`Phone: ${resume.basicInfo.phone}`);
    if (resume.basicInfo.linkedin) doc.text(`LinkedIn: ${resume.basicInfo.linkedin}`);
    if (resume.basicInfo.github) doc.text(`GitHub: ${resume.basicInfo.github}`);
    if (resume.basicInfo.portfolio) doc.text(`Portfolio: ${resume.basicInfo.portfolio}`);
    doc.moveDown();

    // Career Objective
    if (resume.careerObjective) {
      doc.fontSize(14).text("Career Objective:", { underline: true });
      doc.fontSize(12).text(resume.careerObjective);
      doc.moveDown();
    }

    // Education
    if (resume.education.length > 0) {
      doc.fontSize(14).text("Education:", { underline: true });
      resume.education.forEach((edu) => {
        doc.fontSize(12).text(`${edu.degree} at ${edu.institution} (${edu.year})`);
        if (edu.grade) doc.text(`Grade: ${edu.grade}`);
        doc.moveDown();
      });
    }

    // Internships
    if (resume.internships.length > 0) {
      doc.fontSize(14).text("Internships:", { underline: true });
      resume.internships.forEach((intern) => {
        doc.fontSize(12).text(`${intern.role} at ${intern.company} (${intern.duration})`);
        if (intern.description) doc.text(intern.description);
        doc.moveDown();
      });
    }

    // Projects
    if (resume.projects.length > 0) {
      doc.fontSize(14).text("Projects:", { underline: true });
      resume.projects.forEach((p) => {
        doc.fontSize(12).text(`${p.title}: ${p.description}`);
        if (p.link) doc.text(`Link: ${p.link}`);
        doc.moveDown();
      });
    }

    // Skills
    if (resume.technicalSkills.length > 0) {
      doc.fontSize(14).text("Technical Skills:", { underline: true });
      doc.fontSize(12).text(resume.technicalSkills.join(", "));
      doc.moveDown();
    }

    // Certifications, Achievements, Others
    if (resume.certifications.length > 0) {
      doc.fontSize(14).text("Certifications:", { underline: true });
      resume.certifications.forEach((c) => doc.fontSize(12).text(`- ${c}`));
      doc.moveDown();
    }
    if (resume.achievements.length > 0) {
      doc.fontSize(14).text("Achievements:", { underline: true });
      resume.achievements.forEach((a) => doc.fontSize(12).text(`- ${a}`));
      doc.moveDown();
    }

    doc.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
