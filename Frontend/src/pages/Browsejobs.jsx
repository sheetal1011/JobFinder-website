import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BrowseJobs.css";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

const categories = [
  "IT",
  "Product-Based",
  "Government",
  "Freelance",
  "Startup",
];

const BrowseJobs = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // default empty
  const [jobs, setJobs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));


  const fetchJobs = async () => {
    try {
      const endpoint = selectedCategory
        ? `http://localhost:5000/api/jobs/category?category=${selectedCategory}`
        : `http://localhost:5000/api/jobs/`;
      const res = await axios.get(endpoint);
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    }
  };

  const applyToJob = async (jobId) => {
  try {
    const res = await axios.post("http://localhost:5000/api/jobs/apply", {
      jobId,
      userId: user._id,
    });

    alert(res.data.message); // You can replace with toast(res.data.message)
  } catch (err) {
    alert(err.response?.data?.message || "Application failed");
  }
};



  useEffect(() => {
    fetchJobs();
  }, [selectedCategory]);

  return (
    <div className="browse-jobs-page">
      <h2 className="section-title">Browse Jobs</h2>

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
        {selectedCategory && (
          <button
            className="category-btn clear-btn"
            onClick={() => setSelectedCategory("")}>
            Show All</button>
        )}
      </div>

      <h3 className="category-title">
        {selectedCategory ? `${selectedCategory} Jobs` : "All Jobs"}
      </h3>

      <div className="job-list">
        {jobs.length === 0 ? (
          <p>No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <h3>{job.title}</h3>
              <p><FaBuilding /> <strong>Organisation:</strong> {job.company}</p>
              <p><FaMapMarkerAlt /><strong>Location:</strong> {job.location}</p>
              <p><FaMoneyBillWave /><strong>Salary:</strong> {job.salary}</p>
              <p><FaBriefcase /><strong>Job Type:</strong> {job.type}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <button className="job-apply-btn" onClick={() => applyToJob(job._id)}>
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
