"use client";

import { useState, useEffect } from "react";

export function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-white transition-all duration-100 ease-linear"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
