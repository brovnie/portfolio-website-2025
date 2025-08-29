import React from "react";

export const BubbleColor = ({ width, height }: Bubble) => {
  return (
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="relative overflow-hidden w-full h-full rounded-full bg-cyan-200">
        <div className="rouded-full w-full h-full border-1 border-fuchsia-300 bg-radial from-indigo-400/40 from-30% to-fuchsia-600/50"></div>
        <div className="absolute top-0 rounded-full w-full h-[73%] bg-sky-200 blur-[5px] mt-2"></div>
      </div>
      <div className="absolute w-[80%] h-[33%] bg-white rounded-full blur-sm left-5 top-4"></div>
      <div className="absolute w-[26%] h-[26%] bg-white rounded-full blur-sm right-4 top-8"></div>
    </div>
  );
};
