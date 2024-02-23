import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="name">Zane Prunella</h1>
        <h2>Front-end Developer</h2>
        <div className="contact-info">
          <a
            href="https://github.com/zmprunella"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/zprunella/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
          <p>zane.prunella@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
