import express from "express";
import {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resumeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
router.get("/download/:id", authMiddleware, downloadResume);

const router = express.Router();

// Resume CRUD routes
router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getResumes);
router.get("/:id", authMiddleware, getResumeById);
router.put("/:id", authMiddleware, updateResume);
router.delete("/:id", authMiddleware, deleteResume);


export default router;
