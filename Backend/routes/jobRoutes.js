// routes/jobRoutes.js
import express from 'express';
import { createJob, getAllJobs,getJobsByCategory,applyToJob,getAppliedJobs} from '../controllers/jobController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create',  createJob);   // Only recruiter can post
router.get('/', getAllJobs);                      // All users can browse
router.get("/category", getJobsByCategory); // GET jobs by category
router.post("/apply", applyToJob);
router.get("/applied/:userId", getAppliedJobs);


export default router;
