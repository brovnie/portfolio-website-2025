"use client";
import React from "react";
import { H2 } from "../ui/H2";
import { Timeline } from "./Timeline";
import Skills from "./Skills";
import Image from "next/image";
import { Bubble } from "../hero/Bubble";

export const AboutMe = () => {
  return (
    <div id="about" className=" pt-[80px] relative z-10 mb-10">
      <H2 title="About Me" type="big" />
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 pt-10 items-center md:items-start">
        <div className="overflow-hidden rounded-full w-[300px] h-[300px] relative flex items-center justify-center">
          <Image
            className=""
            src="/selfie-brovnie.jpg"
            alt="selfie brovnie"
            width={300}
            height={300}
          />
          <div className="size-full absolute top-0 left-0 z-20 rounded-full inset-shadow-[-10px_-10px_10px_20px_white] dark:inset-shadow-none"></div>
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
