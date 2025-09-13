"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bubble } from "./Bubble";
import { BubbleColor } from "./BubbleColor";

type BubbleType = "transparent" | "color";

export const Hero = () => {
  const [bubbles, setBubbles] = useState<React.ReactNode[]>([]);
  const bubbleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    const randomTotal = Math.max(1, Math.floor(Math.random() * 1.5 * 10));
    const bubbleType: BubbleType = random % 2 === 0 ? "transparent" : "color";
    requestAnimationFrame(() => {
      const container = bubbleContainer.current;
      if (!container) return;

      const generateBubble = () => {
        return Array.from({ length: randomTotal }).map((_, i) => {
          const randomSize = Math.floor(Math.random() * (150 - 25 + 1)) + 25;
          const maxTop = container.offsetHeight - randomSize - 200;
          const maxLeft = container.clientWidth - randomSize;
          const randomTop = Math.floor(Math.random() * Math.max(maxTop, 1));
          const randomLeft = Math.floor(Math.random() * Math.max(maxLeft, 1));

          console.log(bubbleContainer.current?.offsetLeft);
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
      setBubbles(generateBubble());
    });
  }, []);

  return (
    <div
      id="home"
      className="flex relative flex-col md:flex-row justify-center md:justify-between items-center h-screen "
    >
      <div
        className="absolute z-0 md:static min-w-[40%] min-h-[100% - 80px]"
        ref={bubbleContainer}
      >
        {bubbles}
      </div>

      <div className="md:mr-5 z-10 md:w-[800px]">
        <h1 className="text-5xl md:text-8xl font-display text-center md:text-left dark:text-sky-50 -mt-[57px]">
          Front End developer with passion for Design.
        </h1>
      </div>
    </div>
  );
};
