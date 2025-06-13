import React from "react";
import "./JobCards.css";

const jobData = [
  {
    title: "Frontend Developer",
    company: "Google Inc. — New York, NY",
    image: "https://images.unsplash.com/photo-1699891730676-037bed3c1bed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Backend Engineer",
    company: "Amazon — Seattle, WA",
    image: "/images/bg-forest.jpg",
  },
  {
    title: "Data Scientist",
    company: "Facebook — Menlo Park, CA",
    bgClass: "bg-purple",
  },
];

const JobCards = () => {
  return (
    <div className="card-container">
      {jobData.map((job, index) => (
        <div className="onboarding-card" key={index}>
          <div
            className="jobcard-header"
            style={{ backgroundImage: `url(${job.image})` }}
          ></div>
          <div className="card-content">
            <h3 className="card-title">{job.title}</h3>
            <p className="card-company">{job.company}</p>
            <button className="next-button">Apply ➤</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;