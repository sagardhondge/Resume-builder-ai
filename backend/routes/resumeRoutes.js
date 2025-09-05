import express from "express";
import { createResume, getResumes } from "../controllers/resumeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getResumes);

export default router;
