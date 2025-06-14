import React from "react";
import { useNavigate } from "react-router-dom";
import "./recruiterDashboard.css";

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="recruiter-dashboard-container">
      
      <div className="dashboard-title">
      <h3>Welcome 👋</h3>
      <p>You are logged in as a <strong>Recruiter</strong>.</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => navigate("/post-job")}> 
          <i className="fa-solid fa-pen-to-square dashboard-icon"></i>
          <h3>Post a Job</h3>
          <p>Create and publish new job listings.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/view-applications")}> 
          <i className="fa-solid fa-folder-open dashboard-icon"></i>
          <h3>View Applications</h3>
          <p>Check applications submitted by job seekers.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/manage-candidates")}> 
          <i className="fa-solid fa-users dashboard-icon"></i>
          <h3>Manage Candidates</h3>
          <p>Track and manage candidates for your jobs.</p>
        </div>
      </div>
    </div>
    </div>
  );
};



export default RecruiterDashboard;
