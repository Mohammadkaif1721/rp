
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-slider">
        <div className="slide-track">
          <div className="slide">HTML</div>
          <div className="slide">CSS</div>
          <div className="slide">JavaScript</div>
          <div className="slide">React</div>
          <div className="slide">Python</div>
          <div className="slide">Django</div>
          <div className="slide">Cybersecurity</div>
          <div className="slide">C</div>
          {/* Duplicate slides for infinite effect */}
          <div className="slide">HTML</div>
          <div className="slide">CSS</div>
          <div className="slide">JavaScript</div>
          <div className="slide">React</div>
          <div className="slide">Python</div>
          <div className="slide">Django</div>
          <div className="slide">Cybersecurity</div>
          <div className="slide">C</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
