"use client";

import { useEffect, useState } from "react";
import TechnicalSkills from "./TechnicalSkills";

export default function ScrollQuotes() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const aboutSection = document.getElementById("about");

      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const scrollDistance = Math.max(0, -rect.top);
      const screenHeight = window.innerHeight;

      if (scrollDistance > screenHeight * 0.75) {
        setActiveStage(2);
      } else if (scrollDistance > screenHeight * 0.3) {
        setActiveStage(1);
      } else {
        setActiveStage(0);
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-[500px] w-full max-w-xl">
      {/* Engineering Heading - Visible in Stage 01 and 02 */}
      <div
        className={`transition-all duration-700 ${
          activeStage === 2
            ? "pointer-events-none -translate-y-6 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-[#58B8FF]">
          01 / ABOUT ME
        </p>

        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          ENGINEER IN
          <span className="block text-[#E7B75B]">THE MAKING.</span>
        </h2>
      </div>

      {/* Stage 01 - First Engineering Quote */}
      <div
        aria-hidden={activeStage !== 0}
        className={`absolute left-0 right-0 top-44 transition-all duration-700 ${
          activeStage === 0
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0"
        }`}
      >
        <p className="text-xl leading-relaxed text-slate-300">
          Great engineering turns complex problems into simple solutions.
        </p>
      </div>

      {/* Stage 02 - Engineering Philosophy */}
      <div
        aria-hidden={activeStage !== 1}
        className={`absolute left-0 right-0 top-44 transition-all duration-700 ${
          activeStage === 1
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-2 text-xs font-bold tracking-[0.3em] text-[#E7B75B]">
          02 / ENGINEERING PHILOSOPHY
        </p>

        <span className="block h-12 font-serif text-6xl leading-none text-[#E7B75B]">
          “
        </span>

        <p className="text-2xl font-bold leading-snug text-white md:text-3xl">
          GREAT SOFTWARE IS BUILT THROUGH
          <span className="block text-[#E7B75B]">CLEAN CODE.</span>
        </p>

        <p className="mt-3 text-base leading-relaxed text-slate-300">
          Thoughtful architecture. Continuous learning.
        </p>

        <div className="mt-5 h-[3px] w-16 rounded-full bg-[#E7B75B]" />
      </div>

      {/* Stage 03 - Technical Expertise */}
      <div
        aria-hidden={activeStage !== 2}
        className={`absolute left-0 right-0 top-28 transition-all duration-700 ${
          activeStage === 2
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <TechnicalSkills />
      </div>
    </div>
  );
}
