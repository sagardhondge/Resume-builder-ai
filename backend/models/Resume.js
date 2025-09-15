import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  basicInfo: {
    firstName: String,
    middleName: String,
    lastName: String,
    dob: String,
    gender: String,
    email: String,
    phone: String,
    altPhone: String,
    currentAddress: String,
    permanentAddress: String,
    linkedin: String,
    github: String,
    portfolio: String,
  },
   jobPreferences: { type: String, default: "" },
  careerObjective: { type: String, default: "" },
  education: [
    { degree: String, institution: String, year: String, grade: String }
  ],
  internships: [
    { company: String, role: String, duration: String, description: String }
  ],
  projects: [
    { title: String, description: String, link: String }
  ],
  technicalSkills: [String],
  certifications: [String],
  achievements: [String],
  coCurricular: [String],
  extraCurricular: [String],
  languages: [String],
  strengths: [String],
  hobbies: [String],
  areaOfInterest: [String],
  familyBackground: { type: String, default: "" },
  declaration: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("Resume", resumeSchema);
