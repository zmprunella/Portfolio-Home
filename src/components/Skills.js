import React from "react";
import "./Skills.css";

const getProgressBarColor = (width) => {
  if (width < 25) {
    return "red";
  } else if (width >= 25 && width < 70) {
    return "yellow";
  } else {
    return "green";
  }
};

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          HTML
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "50%", backgroundColor: getProgressBarColor(50) }}
            ></div>
          </div>
          <span className="skill-level">Mid Level</span>
        </li>
        <li>
          CSS
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "55%", backgroundColor: getProgressBarColor(55) }}
            ></div>
          </div>
          <span className="skill-level">Mid Level</span>
        </li>
        <li>
          JavaScript
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: "50%",
                backgroundColor: getProgressBarColor(50),
              }}
            ></div>
          </div>
          <span className="skill-level">Mid Level</span>
        </li>
        <li>
          React
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "25%", backgroundColor: getProgressBarColor(25) }}
            ></div>
          </div>
          <span className="skill-level">Beginner / Mid</span>
        </li>
        <li>
          Vue.js
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "20%", backgroundColor: getProgressBarColor(20) }}
            ></div>
          </div>
          <span className="skill-level">Beginner</span>
        </li>
        <li>
          Python
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "10%", backgroundColor: getProgressBarColor(10) }}
            ></div>
          </div>
          <span className="skill-level">Beginner</span>
        </li>
        <li>
          WordPress
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "80%", backgroundColor: getProgressBarColor(80) }}
            ></div>
          </div>
          <span className="skill-level">Advanced</span>
        </li>
        <li>
          Ableton
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "90%", backgroundColor: getProgressBarColor(90) }}
            ></div>
          </div>
          <span className="skill-level">Advanced</span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
