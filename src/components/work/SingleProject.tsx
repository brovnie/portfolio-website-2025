import React from "react";
import Image from "next/image";

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
    <div className="rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-w-[375px]">
      <div className="w-[350px] h-[350px] overflow-hidden rounded-xl my-3 mx-auto">
        <Image
          className=""
          src={`/projects/${project.image}`}
          alt={project.title + " project image"}
          width={350}
          height={350}
        />
      </div>
      <div className="p-5 pt-3">
        <h3 className="font-display text-2xl pb-2">{project.title}</h3>
        <p className="text-base pb-2">{project.description}</p>
        <p className="italic text-sm">{project.technologies.join(" | ")}</p>
      </div>
    </div>
  );
};

export default SingleProject;
