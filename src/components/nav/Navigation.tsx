import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navigation = () => {
  return (
    <nav>
      <p>Logo</p>
      <div>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#work">Work</Link>
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
