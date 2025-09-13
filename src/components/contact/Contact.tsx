import React from "react";
import { H2 } from "../ui/H2";

export const Contact = () => {
  return (
    <div className="h-[250px]" id="contact">
      <H2 type="big" title="Contact" />
      <p className="pt-5 text-2xl">Have a project in mind?</p>
      <p className="text-2xl pb-3">Feel free to contact me!</p>
      <a
        href="mailto:marlena.broniewicz@gmail.com"
        className="relative  group  py-1.5 px-2.5 text-2xl"
      >
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 group-hover:w-full group-hover:transition-all"></span>
        Mail me
      </a>
    </div>
  );
};
