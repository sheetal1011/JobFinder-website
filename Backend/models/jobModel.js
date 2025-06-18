// models/Job.js
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['Full-Time', 'Part-Time', 'Internship'], default: 'Full-Time' },
  salary: { type:Number},
  description: { type: String, required: true },
  category: {type:String , enum:['IT','Product-Based','Government','Freelance','Startup'],default:'IT'},
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  applications: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
  }],
  },
  {
  timestamps: true 
  } 
);

const Job = mongoose.model('Job', jobSchema);
export default Job;
