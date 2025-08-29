"use client";
import React, { useRef } from "react";
import { Bubble } from "./Bubble";
import { BubbleColor } from "./BubbleColor";

export const Hero = () => {
  const random = Math.floor(Math.random() * 10);
  const randomTotal = Math.floor(Math.random() * 1.5 * 10);
  const bubbleContainer = useRef<HTMLDivElement>(null);

  const generateBubble = (bubbleType: "transparent" | "color") => {
    return Array.from({ length: randomTotal }).map((_, i) => {
      const randomSize = Math.floor(Math.random() * (150 - 25 + 1)) + 25;
      const randomTop = Math.floor(
        Math.random() *
          (bubbleContainer.current
            ? bubbleContainer.current.offsetHeight
            : 50) -
          randomSize
      );
      const randomLeft = Math.floor(
        Math.random() *
          (bubbleContainer.current
            ? bubbleContainer.current.clientWidth
            : 750) -
          randomSize
      );
      return bubbleType === "transparent" ? (
        <Bubble
          key={i}
          width={randomSize}
          height={randomSize}
          top={randomTop}
          left={randomLeft}
        />
      ) : (
        <BubbleColor
          key={i}
          width={randomSize}
          height={randomSize}
          top={randomTop}
          left={randomLeft}
        />
      );
    });
  };

  return (
    <div className="flex relative flex-col md:flex-row justify-center md:justify-between items-center h-screen -mt-[55px]">
      <div className="absolute z-0 md:static" ref={bubbleContainer}>
        {random % 2 === 0
          ? generateBubble("transparent")
          : generateBubble("color")}
      </div>

      <div className="mr-5 z-10 md:w-[800px]">
        <h1 className="text-5xl md:text-8xl font-display">
          Front End developer with passion for Design.
        </h1>
      </div>
    </div>
  );
};
