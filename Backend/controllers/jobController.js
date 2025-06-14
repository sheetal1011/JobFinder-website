// controllers/jobController.js
import Job from '../models/jobModel.js';

export const createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.userId });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Failed to post job' });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};
