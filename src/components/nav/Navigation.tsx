"use client";

import React, { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "lenis/react";

export const Navigation = () => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-dark transition ease transform duration-300`;
  const scrollHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href) as HTMLElement;
    if (!target || !lenis) return;

    lenis.scrollTo(target, {
      offset: 0,
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  return (
    <nav
      className={`fixed top-0 container flex flex-col md:flex-row md:bg-transparent justify-start md:justify-between md:items-center z-50 md:px-0 px-5 ${
        isOpen ? "bg-white" : "sm:bg-transparent"
      }`}
    >
      <div className="flex justify-between w-full ">
        <Link href="#home" className="w-[35px] h-20 relative overflow-hidden">
          <Image
            src="/brovnie-logo.svg"
            alt="Logo brovnie"
            fill
            priority
            className="object-contain"
          />
        </Link>
        <div className="flex md:hidden items-center">
          <button
            className="flex flex-col bg-white rounded-xl shadow-md h-12 w-14 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : " group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      <div className={`gap-5 bg-white dark:bg-dark rounded-md  `}>
        <div
          className={`md:flex flex-col md:flex-row items-center gap-5 dark:text-white px-3 text-xl  h-screen w-full md:w-auto justify-center md:h-auto ${
            isOpen ? "flex " : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:gap-5 dark:text-white md:text-xl text-4xl gap-10">
            <a
              href="#home"
              onClick={scrollHandler}
              className="dark:text-sky-50 py-3"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={scrollHandler}
              className="dark:text-sky-50 py-3"
            >
              About
            </a>
            <a
              href="#work"
              onClick={scrollHandler}
              className="dark:text-sky-50 py-3"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={scrollHandler}
              className="dark:text-sky-50 py-3"
            >
              Contact
            </a>
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
