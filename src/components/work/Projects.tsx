import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div id="work" className="h-screen pt-[80px] mx-5 md:mx-0 dark:bg-dark">
      <h2 className="text-6xl font-display dark:text-white">My projects</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-10 md:gap-20 items-start">
        {projects.map((project) => (
          <SingleProject
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            github={project.github}
            www={project.www}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
