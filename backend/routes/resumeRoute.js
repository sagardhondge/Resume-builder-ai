import express from "express";
import {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resumeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Resume CRUD routes
router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getResumes);
router.get("/:id", authMiddleware, getResumeById);
router.put("/:id", authMiddleware, updateResume);
router.delete("/:id", authMiddleware, deleteResume);

// ATS Score route (dummy for now)
router.post("/ats-score", async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({ message: "Resume text is required" });
    }

    // 👉 Dummy scoring (later replace with AI)
    const score = Math.floor(Math.random() * (95 - 60 + 1)) + 60;
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
