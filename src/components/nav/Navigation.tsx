import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
export const Navigation = () => {
  return (
    <nav className="sticky flex justify-between items-center pt-3 z-10">
      <div>
        <Image
          src="/brovnie-logo.svg"
          alt="Logo brovnie"
          width={35}
          height={35}
        />
      </div>
      <div className="flex gap-5">
        <ul className="flex gap-5 dark:text-white">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#work">Work</Link>
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
