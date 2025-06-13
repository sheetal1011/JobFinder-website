import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from '../assets/image1.png'
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          <span className="highlight">Find</span> your <br /> <span className="highlight">Dream Job</span> today
        </h1>
        <p>Connect with top companies and land your perfect role in tech, design, marketing & more.</p>
        <form className="hero-search-bar">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="homepage-search-input"
            />
            <input
              type="text"
              placeholder="Location"
              className="homepage-search-input"
            />
            <button type="submit" className="hero-search-btn">
              Search Jobs
            </button>
          </form>
      </div>

      <div className="hero-right">
        <img
          src={heroimg}
          alt="Job Search"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
