"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let observer: MutationObserver | null = null;

    const checkThemeDiv = () => {
      const themeDiv = document.getElementById("theme");
      if (!themeDiv) {
        console.warn("#theme not found, retrying...");
        setTimeout(checkThemeDiv, 100);
        return;
      }
      const update = () => setIsDarkMode(themeDiv.classList.contains("dark"));
      observer = new MutationObserver(update);
      observer.observe(themeDiv, {
        attributes: true,
        attributeFilter: ["class"],
      });

      update();
    };

    checkThemeDiv();

    return () => observer?.disconnect();
  }, []);

  return isDarkMode;
}

export default useDarkMode;
