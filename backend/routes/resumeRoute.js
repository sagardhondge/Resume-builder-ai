import express from "express";
import { createResume, getResumes } from "../controllers/resumeController.js";
import authMiddleware from "../middlewares/authMiddleware.js"; // ✅ correct

const router = express.Router();

// Protect routes
router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getResumes);

// Ats Score route
 router.post("/ats-score",  async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ message: "Resume text is required" });
    }

    // 👉 Dummy scoring (later replace with AI)
    const score = Math.floor(Math.random() * (95 - 60 + 1)) + 60; // random score between 60–95
    const suggestions = [
      "Add more keywords related to the job description.",
      "Include measurable achievements (e.g., 'Increased sales by 20%').",
      "Highlight technical skills more clearly.",
    ];

    res.json({ score, suggestions });
  } catch (error) {
    console.error("ATS Score Error:", error.message);
    res.status(500).json({ message: "Server error while checking ATS score" });
  }
});

export default router;
