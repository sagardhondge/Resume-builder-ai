import express from "express";
import multer from "multer";
import { getAtsScore } from "../controllers/aiController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/ats-score", upload.single("resume"), getAtsScore);

export default router;
