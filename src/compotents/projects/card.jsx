import React from "react";

function Card({ title, description, codeUrl }) {
  return (
    <div className="project" id="scroll-to-projects">
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description}</p>
      <span><a
        href={codeUrl}
        target="_blank"
        rel="noreferrer"
        className="project-code"
      >
        Source Code
      </a>  </span>
    </div>
  );
}

export default Card;