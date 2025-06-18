// src/pages/PostJob.jsx
import React, { useState } from "react";
import axios from "axios";
import "./PostJob.css"; 
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    description: "",
    salary: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      await axios.post("http://localhost:5000/api/jobs/create", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Job posted successfully!");
      navigate("/recruiter-dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to post job.");
    }
  };

  return (
    <div className="post-job-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} className="post-job-form">
        <input type="text" name="title" placeholder="Job Title" required value={formData.title} onChange={handleChange} />
        <input type="text" name="company" placeholder="Organization" required value={formData.company} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" required value={formData.location} onChange={handleChange} />
        <input type="text" name="salary" placeholder="Salary" required value={formData.salary} onChange={handleChange} />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
        </select>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="IT">IT Jobs</option>
          <option value="Product">Product-Based</option>
          <option value="Government">Government</option>
          <option value="Freelance">Freelance</option>
          <option value="Startup">Startup</option>
        </select>

        <textarea name="description" placeholder="Job Description" required value={formData.description} onChange={handleChange}></textarea>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
