import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobSeekerDashboard.css';

const JobSeekerDashboard = () => {
  const navigate=useNavigate();
  const name = JSON.parse(localStorage.getItem("user"))?.name || "User";

  return (
    <div className="jobseeker-dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {name.split(" ")[0]} 👋</h2>
        <p>You are logged in as a <strong>Job Seeker</strong>.</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => navigate('/browse-jobs')}>
          <i className="fas fa-briefcase dashboard-icon"></i>
          <h3>Search Jobs</h3>
          <p>Browse thousands of jobs and find your match.</p>
          <button>Browse Jobs</button>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/applied-jobs')}>
          <i className="fas fa-file-alt dashboard-icon"></i>
          <h3>Applied Jobs</h3>
          <p>View the status of jobs you have applied for.</p>
          <button>View Applications</button>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/edit-profile')}>
          <i className="fas fa-user-edit dashboard-icon"></i>
          <h3>Edit Profile</h3>
          <p>Update your resume and profile information.</p>
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
