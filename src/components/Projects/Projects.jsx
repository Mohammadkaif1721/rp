import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [paused, setPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    { name: "AI Chatbot", image: "ai.svg", link: "https://lumoraa.netlify.app/", desc: "An AI-powered chatbot that helps users interact smartly." },
    { name: "cyber attacks", image: "pantry.svg", link: "..", desc: "Track your pantry items and manage groceries." },
    { name: "College Website", image: "college.svg", link: "https://mdkaiff.netlify.app/", desc: "A responsive website for college information." },
    { name: "Weather App", image: "weather.svg", link: "https://weather-kix.netlify.app/", desc: "Real-time weather updates with forecast." },
    { name: "Calculator", image: "calc.svg", link: "https://calculator-kaif.netlify.app", desc: "A simple yet powerful online calculator." },
    { name: "E-commerce", image: "ecommerce.svg", link: "https://your-ecommerce.com", desc: "An e-commerce platform for online shopping." },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="carousel">
        <div className={`carousel__container ${paused ? "paused" : ""}`}>
          {projectList.map((project, index) => (
            <div
              key={index}
              className="carousel__item"
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="overlay">{project.name}</div>
            </div>
          ))}
        </div>
      </div>

    {selectedProject && (
  <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h2>{selectedProject.name}</h2>
      <p>{selectedProject.desc}</p>

      <div className="modal-buttons">
        <button className="btn btn-ghost" onClick={() => setSelectedProject(null)}>
          Close
        </button>
        <a
          className="btn btn-primary"
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Projects;
