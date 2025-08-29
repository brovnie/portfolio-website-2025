import React from "react";
import { Bubble } from "./Bubble";
import { BubbleColor } from "./BubbleColor";

export const Hero = () => {
  return (
    <div>
      <div></div>
      <h1 className="text-7xl">Front End developer with passion for Design</h1>
      <div>
        <Bubble width={100} height={100} />
        <BubbleColor width={100} height={100} />
      </div>
    </div>
  );
};
