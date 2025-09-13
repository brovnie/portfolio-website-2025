import React from "react";

interface H2Props {
  title: string;
  type: "small" | "big";
}

export const H2 = ({ title, type }: H2Props) => {
  const bigH = (
    <h2 className="text-6xl font-display dark:text-white">{title}</h2>
  );
  const smallH = (
    <h2 className="font-display py-5 text-4xl dark:text-white">{title}</h2>
  );
  return type === "big" ? bigH : smallH;
};
