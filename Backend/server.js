import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use('/api/jobs',jobRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
