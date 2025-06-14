// routes/jobRoutes.js
import express from 'express';
import { createJob, getAllJobs } from '../controllers/jobController.js';

const router = express.Router();

router.post('/create',  createJob);   // Only recruiter can post
router.get('/', getAllJobs);                      // All users can browse

export default router;
