"use client";
import React from "react";
import { H2 } from "../ui/H2";
import { Timeline } from "./Timeline";
import Skills from "./Skills";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div id="about" className="pt-[80px] relative z-10 mb-10">
      <H2 title="About Me" type="big" />
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 pt-10 items-center md:items-start">
        <div className="overflow-hidden rounded-full w-[250px] h-[250px] md:min-w-[300px] mid:w-[300px] md:h-[300px] relative flex items-center justify-center">
          <Image
            className="object-cover"
            src="/selfie-brovnie.jpg"
            alt="selfie brovnie"
            fill
            priority
          />
        </div>

        <div>
          <div className="dark:text-white pb-5 text-2xl">
            <p>Hello World!</p>
            <p>
              I&apos;m Marlena a Front End developer who&apos;s most at home
              working with <b>React</b> — though I&apos;ve also spent time with{" "}
              <b>Vue</b> and <b>Angular</b>.
            </p>
            <p>
              I love turning ideas into sleek mobile apps with React Native, and
              I genuinely enjoy solving those weird little CSS layout puzzles.
            </p>
            <p>
              <b>Good UX</b> matters to me — if it doesn&apos;t feel right,
              it&apos;s not done yet!
            </p>
          </div>
          <Skills />
        </div>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  );
};
