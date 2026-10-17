"use client";

import { useState } from "react";
export default function TechnicalSkills() {
  const [activeChip, setActiveChip] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const chipDetails = [
    {
      description:
        "Building scalable backend services, business logic, and REST API integrations.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate"],
      project: "Aai Cha Swaad",
    },
    {
      description:
        "Developing modern native Android applications with clean architecture, dependency injection, local persistence, and asynchronous programming.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Retrofit",
        "Hilt",
        "Room Database",
        "Kotlin Coroutines",
        "Kotlin Flow",
      ],
      project: "Aai Cha Swaad",
    },
    {
      description:
        "Designing RESTful APIs, implementing authentication, authorization, and secure communication.",
      technologies: ["REST APIs", "JWT", "Spring Security"],
      project: "Aai Cha Swaad",
    },
    {
      description:
        "Working with relational databases, version control, containerization, automated testing, and CI/CD workflows.",
      technologies: [
        "PostgreSQL",
        "SQL",
        "Git",
        "GitHub",
        "Android Studio",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Automated Testing",
      ],
      project: "Aai Cha Swaad",
    },
  ];

  const categories = [
    {
      title: "BACKEND DEVELOPMENT",
      skills: "Java · Spring Boot · Spring Data JPA · Hibernate",
    },
    {
      title: "ANDROID DEVELOPMENT",
      skills: "Kotlin · Jetpack Compose · Retrofit",
    },
    {
      title: "API & SECURITY",
      skills: "REST APIs · JWT · Spring Security",
    },
    {
      title: "DATABASE & TOOLS",
      skills: "PostgreSQL · SQL · Git · Android Studio",
    },
  ];

  return (
    <div className="max-w-xl text-white">
      <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#58B8FF]">
        03 / TECHNICAL EXPERTISE
      </p>

      <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl">
        THE SKILLS
        <span className="block text-[#E7B75B]">BEHIND THE CODE.</span>
      </h3>

      <p className="mt-5 text-base text-slate-300">
        Technologies I use to turn ideas into real-world digital products.
      </p>

      <div className="relative mt-8 grid grid-cols-2 gap-x-10 gap-y-16 aspect-[2/1] rounded-2xl border border-[#58B8FF]/30 bg-[#071A2D] bg-[url('/motherboard-source.jpg')] bg-cover bg-center p-6 shadow-[0_0_35px_rgba(88,184,255,0.15)] [perspective:1000px]">
        {/* Motherboard Circuit Animation Layer */}

        {/* 3D Pop-Out Layers for All Four Chips */}
        {[
          {
            left: "7%",
            top: "8%",
            width: "37%",
            height: "34%",
            glow: "rgba(255,195,65,0.85)",
          },
          {
            left: "56%",
            top: "8%",
            width: "37%",
            height: "34%",
            glow: "rgba(50,190,255,0.85)",
          },
          {
            left: "7%",
            top: "59%",
            width: "37%",
            height: "34%",
            glow: "rgba(255,195,65,0.85)",
          },
          {
            left: "56%",
            top: "59%",
            width: "37%",
            height: "34%",
            glow: "rgba(50,190,255,0.85)",
          },
        ].map((chip, index) => {
          const clipPaths = [
            "inset(18% 8% 18% 8% round 14px)", // Backend
            "inset(18% 8% 18% 8% round 14px)", // Android
            "inset(18% 8% 18% 8% round 14px)", // API & Security
            "inset(18% 8% 18% 8% round 14px)", // Database & Tools
          ];

          const positions = [
            "10.8% 12.1%",
            "89.2% 12.1%",
            "10.8% 87.9%",
            "89.2% 87.9%",
          ];

          return (
            <div
              key={index}
              aria-hidden="true"
              className={`pointer-events-none absolute z-20 overflow-hidden rounded-xl transition-all duration-700 ease-out ${
                activeChip === index
                  ? "opacity-100 [transform:translateZ(90px)_scale(1.08)]"
                  : "opacity-0 [transform:translateZ(0px)_scale(1)]"
              }`}
              style={{
                left: chip.left,
                top: chip.top,
                width: chip.width,
                height: chip.height,
                backgroundImage: "url('/motherboard-source.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "270.27% 294.12%",
                backgroundPosition: positions[index],
                clipPath: clipPaths[index],
                WebkitClipPath: clipPaths[index],
                filter:
                  activeChip === index
                    ? `drop-shadow(0 0 28px ${chip.glow})`
                    : "none",
              }}
            />
          );
        })}

        {/* Central Motherboard Processor */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border-2 border-[#58B8FF] bg-[#071A2D] shadow-[0_0_20px_rgba(88,184,255,0.65)]">
          <span className="text-xs font-extrabold tracking-wide text-white">
            NS / CORE
          </span>
          <span className="mt-1 text-[9px] tracking-widest text-[#58B8FF]">
            TECH SYSTEM
          </span>
        </div>
        {categories.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => {
              setActiveChip(index);
              setShowDetails(true);
            }}
            aria-pressed={activeChip === index}
            className={`relative cursor-pointer flex flex-col items-center justify-center rounded-xl border p-4 text-center[transform-style:preserve-3d]

      transition-all duration-500
      hover:-translate-y-1
      
${
  activeChip === index
    ? `z-20 border-transparent
     bg-transparent
     [transform:translateZ(20px)_scale(1.03)]
     shadow-[0_0_18px_rgba(88,184,255,0.45)]
     ring-0`
    : `z-0 border-transparent bg-transparent
       scale-95 opacity-75
       [transform:translateZ(-20px)_scale(0.95)]
       shadow-none`
}
`}
          >
            <p
              className={`flex w-full items-center justify-center text-center text-[10px] font-bold leading-tight tracking-wide ${
                index === 1 || index === 3
                  ? "text-[#58B8FF] drop-shadow-[0_0_6px_rgba(88,184,255,0.8)]"
                  : "text-[#E7B75B] drop-shadow-[0_0_6px_rgba(231,183,91,0.5)]"
              }`}
            >
              {index === 0 ? (
                <span className="relative -top-5 text-center">
                  BACKEND
                  <span className="block">DEVELOPMENT</span>
                </span>
              ) : index === 1 ? (
                <span className="relative -top-5 text-center">
                  ANDROID
                  <span className="block">DEVELOPMENT</span>
                </span>
              ) : (
                item.title
              )}
            </p>

            <p className="mt-3 hidden text-sm text-slate-200">{item.skills}</p>
          </button>
        ))}
      </div>
      {/* Floating Skills Details Popup */}
      {showDetails && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-dialog-title"
            className="relative w-full max-w-lg rounded-2xl border border-[#58B8FF]/60 bg-[#071A2D] p-6 text-white shadow-[0_0_55px_rgba(88,184,255,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              aria-label="Close skill details"
              className="absolute right-4 top-3 text-2xl text-slate-300 hover:text-white"
            >
              ×
            </button>

            <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#58B8FF]">
              ACTIVE TECHNOLOGY MODULE
            </p>

            <h4
              id="skill-dialog-title"
              className="pr-8 text-2xl font-extrabold text-[#E7B75B]"
            >
              {categories[activeChip].title}
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {chipDetails[activeChip].description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {chipDetails[activeChip].technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#58B8FF]/30 bg-[#58B8FF]/10 px-3 py-2 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-[#58B8FF]/20 pt-4">
              <p className="text-xs font-bold tracking-widest text-[#58B8FF]">
                PROJECT APPLICATION
              </p>
              <p className="mt-2 text-sm text-white">
                {chipDetails[activeChip].project}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
