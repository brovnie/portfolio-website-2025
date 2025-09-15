import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "@/data/projects";
import { H2 } from "../ui/H2";

const Projects = () => {
  return (
    <div id="work" className="min-h-screen px-0 pt-[80px] dark:bg-dark">
      <H2 type="big" title="Work" />
      <div className="md:pt-5 gap-10 md:gap-10 grid xl:grid-cols-4 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4">
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
