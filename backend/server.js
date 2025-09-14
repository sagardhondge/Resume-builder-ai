import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import aiRoutes from "./routes/aiRoutes.js";
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Server is working 🚀" });
});

// Import Routes
import authRoute from './routes/authRoutes.js';
import resumeRoute from './routes/resumeRoute.js';

// Route Middlewares
app.use('/api/auth', authRoute);
app.use('/api/resume', resumeRoute);
app.use("/api/ai", aiRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Environment variables
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Connected to MongoDB: ${mongoUri ? "Yes" : "No"}`);
  console.log(`JWT Secret Loaded: ${jwtSecret ? "Yes" : "No"}`);
});
