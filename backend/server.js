import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// routes

import authRoute from './routes/auth.js';
import resumeRoute from './routes/resumeRoute.js';

app.use('/api/auth', authRoute);
app.use('/api/resume', resumeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));