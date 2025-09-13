import React from "react";
import { H2 } from "../ui/H2";

const Skills = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <ul className="flex flex-wrap gap-3">
          <li className="bg-slate-200 rounded-md px-2 py-1 inline-block text-lg">
            React
          </li>
          <li className="bg-slate-200 rounded-md px-2 py-1 inline-block text-lg">
            ReactNative
          </li>
          <li className="bg-slate-200 rounded-md px-2 py-1 inline-block text-lg">
            VueJS
          </li>
          <li className="bg-slate-200 rounded-md px-2 py-1 inline-block text-lg">
            Angular
          </li>
        </ul>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-sky-100 rounded-md px-2 py-1 inline-block text-lg">
            NodeJS
          </li>
          <li className="bg-sky-100 rounded-md px-2 py-1 inline-block text-lg">
            Laravel
          </li>
          <li className="bg-sky-100 rounded-md px-2 py-1 inline-block text-lg">
            PHP
          </li>
        </ul>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-indigo-100 rounded-md px-2 py-1 inline-block text-lg">
            MangoDB
          </li>
          <li className="bg-indigo-100 rounded-md px-2 py-1 inline-block text-lg">
            SQL
          </li>
          <li className="bg-indigo-100 rounded-md px-2 py-1 inline-block text-lg">
            SQLLite
          </li>
        </ul>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-fuchsia-100 rounded-md px-2 py-1 inline-block text-lg">
            Figma
          </li>
          <li className="bg-fuchsia-100 rounded-md px-2 py-1 inline-block text-lg">
            AdomeXD
          </li>
          <li className="bg-fuchsia-100 rounded-md px-2 py-1 inline-block text-lg">
            Illustrator
          </li>
          <li className="bg-fuchsia-100 rounded-md px-2 py-1 inline-block text-lg">
            Affinity Design
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
