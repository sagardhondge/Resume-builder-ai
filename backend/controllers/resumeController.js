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

// GET all Resumes of logged-in user
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single Resume by ID
export const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE Resume
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

// DELETE Resume
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json({ message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DOWNLOAD Resume as PDF
export const downloadResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!resume) return res.status(404).json({ message: "Resume not found" });

    const doc = new PDFDocument();
    res.setHeader("Content-Disposition", `attachment; filename=${resume.personalInfo.name}_Resume.pdf`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Add content to PDF
    doc.fontSize(20).text(resume.personalInfo.name, { underline: true });
    doc.moveDown();
    doc.fontSize(12).text(`Email: ${resume.personalInfo.email}`);
    doc.text(`Phone: ${resume.personalInfo.phone}`);
    doc.text(`Address: ${resume.personalInfo.address}`);
    if (resume.personalInfo.linkedin) doc.text(`LinkedIn: ${resume.personalInfo.linkedin}`);
    if (resume.personalInfo.github) doc.text(`GitHub: ${resume.personalInfo.github}`);
    if (resume.personalInfo.website) doc.text(`Website: ${resume.personalInfo.website}`);
    doc.moveDown();

    if (resume.summary) {
      doc.fontSize(14).text("Summary:", { underline: true });
      doc.fontSize(12).text(resume.summary);
      doc.moveDown();
    }

    if (resume.education.length > 0) {
      doc.fontSize(14).text("Education:", { underline: true });
      resume.education.forEach((edu) => {
        doc.fontSize(12).text(`${edu.degree} in ${edu.fieldOfStudy}, ${edu.institution} (${edu.startDate?.toISOString().split("T")[0]} - ${edu.endDate?.toISOString().split("T")[0] || "Present"})`);
        if (edu.grade) doc.text(`Grade: ${edu.grade}`);
        if (edu.description) doc.text(`Description: ${edu.description}`);
        doc.moveDown();
      });
    }

    if (resume.experience.length > 0) {
      doc.fontSize(14).text("Experience:", { underline: true });
      resume.experience.forEach((exp) => {
        doc.fontSize(12).text(`${exp.position} at ${exp.company} (${exp.startDate?.toISOString().split("T")[0]} - ${exp.endDate?.toISOString().split("T")[0] || "Present"})`);
        if (exp.responsibilities.length > 0) {
          exp.responsibilities.forEach((r) => doc.text(`- ${r}`));
        }
        doc.moveDown();
      });
    }

    if (resume.skills.length > 0) {
      doc.fontSize(14).text("Skills:", { underline: true });
      doc.fontSize(12).text(resume.skills.join(", "));
      doc.moveDown();
    }

    if (resume.projects.length > 0) {
      doc.fontSize(14).text("Projects:", { underline: true });
      resume.projects.forEach((p) => {
        doc.fontSize(12).text(`${p.name}: ${p.description}`);
        if (p.link) doc.text(`Link: ${p.link}`);
        doc.moveDown();
      });
    }

    if (resume.certifications.length > 0) {
      doc.fontSize(14).text("Certifications:", { underline: true });
      resume.certifications.forEach((c) => {
        doc.fontSize(12).text(`${c.name} - ${c.issuingOrganization} (${c.issueDate?.toISOString().split("T")[0]}${c.expirationDate ? " - " + c.expirationDate.toISOString().split("T")[0] : ""})`);
        if (c.credentialID) doc.text(`Credential ID: ${c.credentialID}`);
        if (c.credentialURL) doc.text(`Credential URL: ${c.credentialURL}`);
        doc.moveDown();
      });
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
