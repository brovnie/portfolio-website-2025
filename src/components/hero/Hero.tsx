import React from "react";
import { Bubble } from "./Bubble";

export const Hero = () => {
  return (
    <div>
      <div></div>
      <h1 className="text-7xl">Front End developer with passion for Design</h1>
      <div>
        <Bubble width={100} height={100} />
      </div>
    </div>
  );
};
