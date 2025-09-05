import Resume from "../models/Resume.js";

export const createResume = async (req, res) => {
  try {
    const resume = await Resume.create({ ...req.body, userId: req.user.id });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
