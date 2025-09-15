import React from "react";
import Image from "next/image";
import { CardContainer } from "../ui/3d-card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  www: string;
}

const SingleProject = (project: Project) => {
  return (
    <CardContainer className="inter-var min-w-[250px] px-0 pt-0">
      <div className="rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-w-[300px] w-auto max-w-[375px] dark:border dark:border-slate-500">
        <div className="max-w-[300px] h-[250px] overflow-hidden rounded-xl my-3 mx-auto">
          <Image
            src={`/projects/${project.image}`}
            alt={project.title + " project image"}
            width={300}
            height={250}
          />
        </div>
        <div className="p-5 pt-3 dark:text-white">
          <h3 className="font-display text-3xl pb-2 ">{project.title}</h3>
          <p className="text-base pb-2">{project.description}</p>
          <p className="italic text-sm">{project.technologies.join(" | ")}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default SingleProject;
