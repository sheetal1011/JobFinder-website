import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BrowseJobs.css'; // Reuse styles from BrowseJobs

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/applied/${user._id}`);
        setAppliedJobs(res.data);
      } catch (err) {
        console.error("Error fetching applied jobs:", err);
      }
    };

    fetchAppliedJobs();
  }, [user._id]);

  return (
    <div className="browse-jobs-page">
      <h2 className="section-title">Applied Jobs</h2>

      <div className="job-list">
        {appliedJobs.length === 0 ? (
          <p>You haven’t applied to any jobs yet.</p>
        ) : (
          appliedJobs.map((job) => (
            <div className="job-card" key={job._id}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Description:</strong> {job.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
