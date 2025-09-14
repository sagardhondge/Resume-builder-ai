import express from "express";
import multer from "multer";
import { getAtsScore } from "../controllers/aiController.js";

const router = express.Router();
const upload = multer(); // in-memory storage

router.post("/ats-score", upload.single("resume"), getAtsScore);

export default router;
