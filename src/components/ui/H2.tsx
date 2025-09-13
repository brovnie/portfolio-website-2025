import React from "react";

interface H2Props {
  title: string;
}

export const H2 = ({ title }: H2Props) => {
  return <h2 className="text-6xl font-display dark:text-white">{title}</h2>;
};
