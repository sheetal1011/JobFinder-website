import Job from '../models/jobModel.js';
import User from '../models/userModel.js';

//Create job
export const createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.userId });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Failed to post job' });
  }
};

//Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

// Get jobs by category
export const getJobsByCategory = async (req, res) => {
  const category = req.query.category;
  try {
    const jobs = await Job.find({ category });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs by category" });
  }
};

// POST /api/jobs/apply
export const applyToJob = async (req, res) => {
  const { jobId, userId } = req.body;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Prevent duplicate applications
    if (job.applications.includes(userId)) {
      return res.status(400).json({ message: "You already applied for this job" });
    }

    job.applications.push(userId);
    await job.save();

    res.status(200).json({ message: "Applied successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// GET /api/jobs/applied/:userId
export const getAppliedJobs = async (req, res) => {
  const { userId } = req.params;

  try {
    const jobs = await Job.find({ applications: userId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applied jobs", error });
  }
};



