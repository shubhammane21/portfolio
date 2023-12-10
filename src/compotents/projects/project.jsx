import React from "react";
import Card from "./card";
import { projectsData } from "../../data";
import "./project.css";

function Projects() {
  return (
    <section className="project_section">
      <h1 className="page-title">Projects</h1>
      <div className="line-break-project"></div>
      <section className="projects">
        {projectsData.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.name}
              description={project.description}
              codeUrl={project.sourceCodeUrl}
            />
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
