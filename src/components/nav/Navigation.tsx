"use client";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "lenis/react";

export const Navigation = () => {
  const lenis = useLenis();

  const scrollHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

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
    <nav className="fixed top-0 container flex justify-between items-center pt-3 z-10">
      <div>
        <Image
          src="/brovnie-logo.svg"
          alt="Logo brovnie"
          width={35}
          height={35}
        />
      </div>
      <div className="flex gap-5">
        <ul className="flex gap-5 dark:text-white text-xl">
          <Link href="#home" legacyBehavior>
            <a onClick={scrollHandler} className="dark:text-sky-50">
              Home
            </a>
          </Link>
          <Link href="#about" legacyBehavior>
            <a onClick={scrollHandler} className="dark:text-sky-50">
              About
            </a>
          </Link>
          <Link href="#work" legacyBehavior>
            <a onClick={scrollHandler} className="dark:text-sky-50">
              Work
            </a>
          </Link>
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
