"use client";

import { useState } from "react";

/* =========================================
   01. PROJECT DATA & TYPES
========================================= */

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  preview?: {
    image: string;
    logo: string;
    theme: "cyan" | "gold";
  };
};

const projects: Project[] = [
  {
    id: "aai-cha-swaad",
    name: "Aai Cha Swaad",
    category: "Homemade Food Marketplace",
    description:
      "An Android platform connecting customers with local homemade-food sellers.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    status: "Development Completed — Under Testing",
    preview: {
      image: "/aai-cha-swaad-home.png",
      logo: "/aai-cha-swaad-logo.png",
      theme: "gold",
    },
  },
  {
    id: "domixa",
    name: "Domixa",
    category: "On-Demand Home Services",
    description:
      "A platform designed to connect customers with home-service providers.",
    technologies: ["Android", "Backend APIs", "Database"],
    status: "Development Completed — Under Testing",
    preview: {
      image: "/domixa-home.png",
      logo: "/domixa-logo.png",
      theme: "cyan",
    },
  },
  {
    id: "railwatch",
    name: "RailWatch",
    category: "Railway Travel Technology",
    description:
      "An Android application focused on improving railway travel experiences.",
    technologies: ["Android", "API Integration"],
    status: "Development Completed — Under Testing",
  },
];

/* =========================================
   02. TECHNOLOGY BADGES
========================================= */

function TechnologyBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-lg border border-[#58B8FF]/30 bg-[#58B8FF]/10 px-3 py-1.5 text-xs text-cyan-100"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

/* =========================================
   03. ANDROID SMARTPHONE PREVIEW
========================================= */

type PhonePreviewProps = {
  project: Project;
  isVisible: boolean;
};

function PhonePreview({ project, isVisible }: PhonePreviewProps) {
  const preview = project.preview;

  if (!preview) {
    return (
      <div
        aria-hidden={!isVisible}
        className={`project-phone-preview flex min-h-[260px] items-center justify-center rounded-2xl border border-dashed border-[#58B8FF]/25 bg-[#071A2D]/30 p-8 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="text-center">
          <p className="text-2xl font-bold text-[#58B8FF]">{project.name}</p>
          <p className="mt-3 text-sm text-slate-400">
            Android UI Preview Coming Soon
          </p>
        </div>
      </div>
    );
  }

  const isCyan = preview.theme === "cyan";

  return (
    <div
      aria-hidden={!isVisible}
      className={`project-phone-preview flex w-full flex-col items-center lg:items-end ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="relative flex w-full justify-center lg:justify-end">
        <div className="relative w-[185px] sm:w-[190px]">
          {/* Holographic Logo */}
          <div className="project-logo-float pointer-events-none absolute -left-12 -top-7 z-20 sm:-left-20">
            <div
              className={`rounded-2xl border p-2 backdrop-blur-md ${
                isCyan
                  ? "border-cyan-300/60 bg-[#092642]/80 shadow-[0_0_30px_rgba(34,211,238,0.45)]"
                  : "border-[#E7B75B]/60 bg-[#38200C]/70 shadow-[0_0_30px_rgba(231,183,91,0.35)]"
              }`}
            >
              <img
                src={preview.logo}
                alt={`${project.name} holographic logo`}
                className="h-12 w-12 rounded-lg object-contain sm:h-16 sm:w-16"
              />
            </div>

            <div
              className={`mx-auto h-7 w-px bg-gradient-to-b ${
                isCyan
                  ? "from-cyan-300 to-transparent"
                  : "from-amber-300 to-transparent"
              }`}
            />
          </div>

          {/* Ambient Glow */}
          <div
            className={`pointer-events-none absolute -inset-5 rounded-[3rem] blur-3xl ${
              isCyan ? "bg-cyan-400/10" : "bg-amber-400/10"
            }`}
          />

          {/* Smartphone Screenshot */}
          <div className="group relative [perspective:1200px]">
            <div className="relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-8deg)_rotateX(4deg)_scale(1.04)]">
              <div
                className={`overflow-hidden rounded-[2.5rem] border-[5px] bg-black p-[4px] ${
                  isCyan
                    ? "border-[#253C58] shadow-[0_0_45px_rgba(34,211,238,0.25)]"
                    : "border-[#57442C] shadow-[0_0_45px_rgba(231,183,91,0.2)]"
                }`}
              >
                <img
                  src={preview.image}
                  alt={`${project.name} Android home screen`}
                  className="block h-auto w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] font-bold tracking-[0.25em] text-[#58B8FF]">
        ANDROID APP PREVIEW
      </p>
    </div>
  );
}

/* =========================================
   04. CINEMATIC 3D PROJECT CARD
========================================= */

type ProjectCardProps = {
  project: Project;
  index: number;
  isFlipped: boolean;
  isReversing: boolean;
  onFlip: () => void;
  onReverseComplete: () => void;
  onDetails: () => void;
};

function ProjectCard({
  project,
  index,
  isFlipped,
  isReversing,
  onFlip,
  onReverseComplete,
  onDetails,
}: ProjectCardProps) {
  return (
    <div className="w-full [perspective:1200px]">
      <div
        className={`project-flip-card relative h-[370px] w-full sm:h-[340px] ${
          isReversing ? "is-reversing" : isFlipped ? "is-flipped" : ""
        }`}
        onAnimationEnd={(event) => {
          if (
            event.target === event.currentTarget &&
            isReversing &&
            event.animationName === "projectCoinTossReverse"
          ) {
            onReverseComplete();
          }
        }}
      >
        {/* Front Face */}
        <div
          onClick={onFlip}
          role="button"
          tabIndex={isFlipped ? -1 : 0}
          onKeyDown={(event) => {
            if (
              event.target === event.currentTarget &&
              (event.key === "Enter" || event.key === " ")
            ) {
              event.preventDefault();
              onFlip();
            }
          }}
          aria-hidden={isFlipped}
          className={`project-flip-front absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#58B8FF]/50 bg-gradient-to-br from-[#102A49] via-[#071A2D] to-[#050A13] p-6 text-center shadow-[0_0_35px_rgba(88,184,255,0.2)] ${
            isFlipped ? "pointer-events-none" : ""
          }`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(88,184,255,0.12),transparent_70%)]" />

          <p className="relative text-xs font-bold tracking-[0.25em] text-[#58B8FF]">
            PROJECT {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="relative mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            {project.name}
          </h3>

          <div className="mt-6 h-[2px] w-20 rounded-full bg-[#E7B75B] shadow-[0_0_15px_rgba(231,183,91,0.6)]" />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onFlip();
            }}
            tabIndex={isFlipped ? -1 : 0}
            className="relative mt-8 rounded-lg border border-[#58B8FF]/40 bg-[#58B8FF]/10 px-5 py-3 text-xs font-bold tracking-[0.15em] text-cyan-200 transition-colors hover:border-[#E7B75B] hover:text-[#E7B75B]"
          >
            CLICK TO REVEAL ↻
          </button>
        </div>

        {/* Back Face */}
        <div
          onClick={onFlip}
          role="button"
          tabIndex={isFlipped ? 0 : -1}
          aria-label={`Flip back ${project.name}`}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onFlip();
            }
          }}
          aria-hidden={!isFlipped}
          className={`project-flip-back absolute inset-0 flex cursor-pointer flex-col overflow-y-auto rounded-2xl border border-[#E7B75B]/50 bg-gradient-to-br from-[#102A49] via-[#071A2D] to-[#050A13] p-5 shadow-[0_0_40px_rgba(231,183,91,0.2)] sm:p-7 ${
            !isFlipped ? "pointer-events-none" : ""
          }`}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-[#58B8FF]">
            PROJECT DETAILS
          </p>

          <h3 className="mt-3 text-2xl font-extrabold text-white">
            {project.name}
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#E7B75B]">
            {project.category}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="mt-5">
            <TechnologyBadges technologies={project.technologies} />
          </div>

          <div className="mt-5 border-t border-[#58B8FF]/20 pt-4">
            <p className="text-xs font-semibold text-[#E7B75B]">
              {project.status}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onDetails();
              }}
              tabIndex={!isFlipped ? -1 : 0}
              className="ml-auto whitespace-nowrap text-xs font-semibold text-[#E7B75B] hover:text-white"
            >
              <span className="text-[10px] tracking-wider text-slate-400">
                TAP CARD TO FLIP BACK ↶
              </span>
              MORE DETAILS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   05. PROJECT DETAILS POPUP
========================================= */

type ProjectDetailsProps = {
  project: Project;
  onClose: () => void;
};

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl border border-[#58B8FF]/50 bg-[#091C35] p-7 text-white shadow-[0_0_50px_rgba(88,184,255,0.25)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-3 text-2xl text-slate-300 hover:text-white"
        >
          ×
        </button>

        <h3
          id="project-details-title"
          className="pr-8 text-2xl font-extrabold text-[#E7B75B]"
        >
          {project.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-[#58B8FF]">
          {project.category}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <div className="mt-6">
          <TechnologyBadges technologies={project.technologies} />
        </div>

        <p className="mt-6 border-t border-cyan-400/20 pt-4 text-xs font-semibold text-[#E7B75B]">
          {project.status}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   06. MAIN PROJECTS SECTION
========================================= */

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [flippedProject, setFlippedProject] = useState<string | null>(null);

  const [reversingProject, setReversingProject] = useState<string | null>(null);

  const toggleFlip = (projectId: string) => {
    if (reversingProject !== null) return;

    if (flippedProject === projectId) {
      // Keep the back face visible until
      // the reverse animation finishes.
      setReversingProject(projectId);
    } else {
      // Start forward animation.
      setReversingProject(null);
      setFlippedProject(projectId);
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050A13] px-6 py-20 text-white md:px-16"
    >
      {/* Floating Holographic Logo Animation */}
      <style>{`
        @keyframes projectLogoFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        .project-logo-float {
          animation: projectLogoFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-logo-float {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#58B8FF]">
          05 / FEATURED PROJECTS
        </p>

        <h2 className="text-4xl font-extrabold md:text-6xl">
          BUILT WITH
          <span className="block text-[#E7B75B]">PURPOSE.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-slate-300">
          Turning real-world problems into thoughtfully engineered digital
          products.
        </p>

        {/* Reusable Project Layouts */}
        {projects.map((project, index) => {
          const isFlipped = flippedProject === project.id;

          return (
            <div
              key={project.id}
              className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-2 ${
                index === 0 ? "mt-8" : "mt-24"
              }`}
            >
              <ProjectCard
                project={project}
                index={index}
                isFlipped={isFlipped}
                isReversing={reversingProject === project.id}
                onFlip={() => toggleFlip(project.id)}
                onReverseComplete={() => {
                  setFlippedProject(null);
                  setReversingProject(null);
                }}
                onDetails={() => setSelectedProject(project)}
              />

              <PhonePreview project={project} isVisible={isFlipped} />
            </div>
          );
        })}
      </div>

      {/* Selected Project Details */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
