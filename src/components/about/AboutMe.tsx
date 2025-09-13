"use client";
import React from "react";
import { H2 } from "../ui/H2";
import { Timeline } from "./Timeline";

export const AboutMe = () => {
  return (
    <div id="about" className=" pt-[80px]">
      <H2 title="About Me" />
      <div className="dark:text-white py-10">
        <p>
          Hello World! I&apos;m Marlena a Front End developer who&apos;s most at
          home working with <b>React</b> — though I&apos;ve also spent time with{" "}
          <b>Vue</b> and <b>Angular</b>.
        </p>
        <p>
          I love turning ideas into sleek mobile apps with React Native, and I
          genuinely enjoy solving those weird little CSS layout puzzles.
        </p>
        <p>
          <b>Good UX</b> matters to me — if it doesn&apos;t feel right,
          it&apos;s not done yet!
        </p>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  );
};
