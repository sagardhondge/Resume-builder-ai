import express from "express";
import { createResume, getResumes } from "../controllers/resumeController.js";
import authMiddleware from "../middlewares/authMiddleware.js"; // ✅ correct

const router = express.Router();

// Protect routes
router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getResumes);

export default router;
