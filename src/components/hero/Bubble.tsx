import React from "react";

export const Bubble = ({ width, height }: Bubble) => {
  return (
    <div
      className="relative rotate-15"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="rounded-full relative overflow-hidden w-full h-full blur-xs bg-slate-100 border-1   border-slate-200">
        <div
          className="blur-[6px] absolute top-10 left-0 rounded-full  z-10 bg-gradient-to-t from-fuchsia-700 to-pink-500 h-full opacity-60"
          style={{ width: `${width / 7}px` }}
        ></div>
        <div
          className="blur-[6px] absolute top-[88%] right-6 w-full z-10 rounded-full bg-gradient-to-t from-sky-600 to-green-400 opacity-50"
          style={{ height: `${height / 7}px` }}
        ></div>
      </div>
      <div className="rounded-full absolute border-1 border-bubble-outer-border w-full h-full top-0 left-1 overflow-hidden">
        <div
          className="absolute blur-[6px] bg-white rounded-full top-[30%] right-3"
          style={{ height: `${height / 5}px`, width: `${width / 7}px` }}
        ></div>
        <div
          className="absolute blur-[6px] bg-white rounded-full top-[10%] right-7"
          style={{ height: `${height / 5}px`, width: `${width / 7}px` }}
        ></div>
      </div>
    </div>
  );
};
