import React, { FC, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: any;
}

const Projects: FC<ProjectsProps> = (props) => {
  return (
    <div className="flex flex-col" id="projects">
      <h1 className="text-white text-xs lg:text-4xl sm:text-[1.5rem] ml-10 mt-10">My Work</h1>
      <hr className="w-52 sm:mt-8 mt-3" />
      <div className="flex flex-col lg:flex-row overflow-y-hidden justify-center h-[65rem] sm:h-[80rem] lg:h-[55rem] mt-14 sm:mt-8 ">
        {props.projects.map((project: any, index: any) => (
          <div key={index} className="flex flex-col self-center mt-3 lg:mt-10  ml-8 mr-8 ">
            <ProjectCard
              projectName={project.projectName}
              githubLink={project.githubLink}
              description={project.description}
              projectLogo={project.projectLogo}
              lastupdate={project.lastupdate}
              languages={project.language}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
