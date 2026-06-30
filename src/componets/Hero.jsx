import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="container text-center text-white">
          <h1 className="display-3 fw-bold">
            Welcome to ScholarHub
          </h1>

          <p className="lead mt-3 mb-4">
            Discover the latest Scholarships, Government Jobs, Internships,
            Admissions, and Career Opportunities from around the world.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/blogs" className="btn btn-warning btn-lg px-4">
              Explore Jobs
            </a>

            <button className="btn btn-outline-light btn-lg px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;