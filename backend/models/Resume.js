import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  personalInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    DOB: { type: Date },
    linkedin: { type: String },
    github: { type: String },
    website: { type: String },
  },
    summary: { type: String },
  education: [
    {
      institution: { type: String, required: true },
      degree: { type: String, required: true },
      fieldOfStudy: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
      grade: { type: String },
      description: { type: String },
    },
  ],
  experience: [
    {
      company: { type: String, required: true },
      position: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
      responsibilities: [{ type: String }],
    },
  ],
  skills: [{ type: String }],
  projects: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String },
    },
  ],
  certifications: [
    {
      name: { type: String, required: true },
      issuingOrganization: { type: String, required: true },
      issueDate: { type: Date, required: true },
      expirationDate: { type: Date },
      credentialID: { type: String },
      credentialURL: { type: String },
    },
  ],
  achievements: [{ type: String }],
}, {
  timestamps: true,
});

export default mongoose.model("Resume", resumeSchema);