import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "@/data/projects";
import { H2 } from "../ui/H2";

const Projects = () => {
  return (
    <div id="work" className="min-h-screen pt-[80px] mx-5 md:mx-0 dark:bg-dark">
      <H2 title="Work" />
      <div className="gap-10 md:gap-20 grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3">
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
