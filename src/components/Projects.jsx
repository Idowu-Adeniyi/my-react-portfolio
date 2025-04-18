import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    console.log(data);
    setProjects(data);
  };

  return (
    <section id="projects" className="projects">
      <h2 id="projectsText">PROJECTS</h2>
      <div className="gallery">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={`https://express-portfolio-admin.onrender.com/${project.image}`}
              alt={project.name}
            />
            <h3>{project.name}</h3> {/* i use 'name' instead of 'title' */}
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Languages Used:</strong> {project.languages.join(", ")}
            </p>
            {/* Ensure URLs are treated as absolute URLs */}
            <a
              href={
                project.viewLink.startsWith("http")
                  ? project.viewLink
                  : `https://${project.viewLink}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <a
              href={
                project.githubLink.startsWith("http")
                  ? project.githubLink
                  : `https://${project.githubLink}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
