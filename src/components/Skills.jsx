import React from "react";
import Project from "./Project";
import projects from "../projects";

function Skills() {

  

  return (
    <div className="skills" id="home">
      
      
      <div id="projects">
        {projects.map((project) => {
          return (
            <Project
              title={project.title}
              imageURL={project.imageURL}
              content={project.content}
            />
          );
        })}
      </div>

    </div>
  );
}

export default Skills;
