import express from "express";
import { getAtsScore, getSuggestions } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/ai/ats-score
router.post("/ats-score", getAtsScore);

// POST /api/ai/suggestions
router.post("/suggestions", getSuggestions);

export default router;
