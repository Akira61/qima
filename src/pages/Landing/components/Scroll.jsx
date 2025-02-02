import { useState, useEffect } from "react";

export default function Scroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Dynamic color transition (red → yellow → green)
  const color = `hsl(${Math.min(120, scrollPercentage * 1.2)}, 100%, 50%)`;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-2 w-full bg-gray-200 z-50">
        <div
          className="h-full transition-all duration-150"
          style={{ width: `${scrollPercentage}%`, backgroundColor: color }}
        />
      </div>

      {/* Dummy Content for Scroll Testing */}
      <div className="h-[200vh] p-10 text-center">
        <h1 className="text-3xl font-bold">Scroll Down to See the Progress Bar in Action!</h1>
      </div>
    </>
  );
}
