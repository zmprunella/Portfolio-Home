import React from "react";
import "./Projects.css";
import eventuallyImage from "../images/Eventually.png";
import gradientImage from "../images/Gradient.png";
import pokeImage from "../images/Poke.png";
import weatherImage from "../images/Weather.png";

const Projects = () => {
  const projectList = [
    {
      title: "Gradient Generator",
      description:
        "I enjoy gradients so I wanted to create a generator to customize them.",
      technologies: ["React"],
      link: "https://64482e2970ff0b1300cead12--glowing-cocada-a30a04.netlify.app/",
      sourceCodeLink: "https://github.com/zmprunella/react-gradient-generator",
      image: gradientImage,
    },
    {
      title: "Weather App",
      description: "A weather app to get familiar using React/API's.",
      technologies: ["React"],
      link: "https://fastidious-sfogliatella-ba4f26.netlify.app/",
      sourceCodeLink: "https://github.com/zmprunella/react-weather-app",
      image: weatherImage,
    },
    {
      title: "PokeDex",
      description: "A fun little project using a PokeAPI.",
      technologies: ["React"],
      link: "https://zippy-praline-5fe3c6.netlify.app/",
      sourceCodeLink: "https://github.com/zmprunella/react-pokedex",
      image: pokeImage,
    },
    {
      title: "Todo List App",
      description: "A full-stack App I helped create in my class.",
      technologies: ["React", "Ruby"],
      link: "https://example.com/project-4",
      sourceCodeLink: "",
      image: eventuallyImage,
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              Technologies:{" "}
              {project.technologies.map((tech, idx) =>
                idx === project.technologies.length - 1 ? tech : `${tech}, `
              )}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
            <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
