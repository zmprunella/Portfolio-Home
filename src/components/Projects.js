import React from "react";
import "./Projects.css";
import gradientImage from "../images/Gradient.png";
import pokeImage from "../images/Poke.png";
import synthImage from "../images/Synth.png";

const Projects = () => {
  const projectList = [
    {
      title: "Gradient Generator",
      description: "Created a random gradient generator.",
      technologies: ["React"],
      link: "https://64482e2970ff0b1300cead12--glowing-cocada-a30a04.netlify.app/",
      sourceCodeLink: "https://github.com/zmprunella/react-gradient-generator",
      image: gradientImage,
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
      title: "Simple Synth",
      description: "A simple synthasizer.",
      technologies: ["Typescript / Vue"],
      link: "https://zesty-moxie-b93139.netlify.app/",
      sourceCodeLink: "https://github.com/zmprunella/vue-typescript-synth",
      image: synthImage,
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
