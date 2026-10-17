"use client";
import { useState } from "react";
const technologies = [
  "Machine Learning",
  "Generative AI",
  "RAG & Vector DB",
  "Agentic AI",
  "Computer Vision",
  "AI & MLOps",
];
const cubeFaces = [
  {
    back: "Neural Networks",
    right: "Python",
    left: "PyTorch",
  },
  {
    back: "LLMs",
    right: "Prompting",
    left: "Model APIs",
  },
  {
    back: "Embeddings",
    right: "Semantic Search",
    left: "Vector DB",
  },
  {
    back: "AI Agents",
    right: "Tool Calling",
    left: "Workflows",
  },
  {
    back: "Image Recognition",
    right: "OpenCV",
    left: "Deep Learning",
  },
  {
    back: "Deployment",
    right: "Monitoring",
    left: "Evaluation",
  },
];
const technologyDetails = [
  {
    description:
      "Exploring machine learning algorithms, neural networks, and deep learning.",
    tools: ["Python", "PyTorch", "Neural Networks"],
  },
  {
    description:
      "Learning to build intelligent applications using generative AI and large language models.",
    tools: ["LLMs", "Prompt Engineering", "Model APIs"],
  },
  {
    description:
      "Exploring retrieval-augmented generation and semantic search systems.",
    tools: ["RAG", "Embeddings", "Vector Databases"],
  },
  {
    description:
      "Learning to design AI agents that use tools and automate workflows.",
    tools: ["AI Agents", "Tool Calling", "Workflows"],
  },
  {
    description:
      "Exploring image recognition and visual understanding using AI.",
    tools: ["OpenCV", "Image Recognition", "Deep Learning"],
  },
  {
    description:
      "Learning how to deploy, evaluate, and monitor AI-powered systems.",
    tools: ["Model Deployment", "Evaluation", "MLOps"],
  },
];
export default function FutureLearning() {
  const [selectedCube, setSelectedCube] = useState<number | null>(null);
  return (
    <section className="w-full max-w-xl text-white">
      <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#58B8FF]">
        04 / FUTURE LEARNING
      </p>

      <h3 className="text-3xl font-extrabold md:text-5xl">
        THE NEXT
        <span className="block text-[#E7B75B]">FRONTIER.</span>
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Exploring the technologies that will power my next generation of
        software projects.
      </p>

      {/* First 3D Glass Cube */}
      <div className="mt-12 grid grid-cols-2 place-items-center gap-10 py-8 sm:grid-cols-3 [perspective:1000px]">
        {technologies.map((tech, index) => (
          <button
            key={tech}
            type="button"
            onClick={() => setSelectedCube(index)}
            aria-pressed={selectedCube === index}
            aria-label={`Explore ${tech}`}
            className="floating-cube relative flex h-32 w-32 cursor-pointer items-center justify-center border-0 bg-transparent [perspective:800px]"
            style={{ animationDelay: `${index * -0.6}s` }}
          >
            <div className="rotating-cube relative h-24 w-24 [transform-style:preserve-3d]">
              {/* Front — Holographic Glass */}
              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden
                   border border-cyan-200/90
                  bg-gradient-to-br from-cyan-200/25 via-blue-500/15 to-[#071A2D]/35
                    px-1 text-center text-[10px] font-bold leading-tight text-white
                      shadow-[inset_0_0_24px_rgba(0,225,255,0.25),0_0_22px_rgba(0,195,255,0.45)]
                        backdrop-blur-[2px]
                       [transform:translateZ(48px)]
                        [backface-visibility:hidden]"
              >
                {/* Glass Light Reflection */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/25 to-transparent" />

                {/* Subtle Golden Reflection */}
                <div className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-amber-300/20 to-transparent" />

                <span className="relative z-10 max-w-full break-words drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]">
                  {tech}
                </span>
              </div>

              {/* Back — Holographic Glass with Neon Text */}
              <div className="absolute inset-0 flex items-center justify-center border border-cyan-300/80 bg-gradient-to-br from-cyan-200/15 via-sky-400/5 to-transparent p-2 text-center shadow-[inset_0_0_18px_rgba(0,225,255,0.15),0_0_12px_rgba(0,195,255,0.25)] [transform:rotateY(180deg)_translateZ(48px)] [backface-visibility:hidden]">
                <span className="text-[10px] font-bold leading-tight text-cyan-100 drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]">
                  {cubeFaces[index].back}
                </span>
              </div>

              {/* Right — Holographic Glass */}

              {/* Right — Holographic Glass with Neon Text */}
              <div className="absolute inset-0 flex items-center justify-center border border-cyan-200/80 bg-gradient-to-br from-cyan-100/15 via-sky-400/5 to-transparent p-2 text-center shadow-[inset_0_0_20px_rgba(0,225,255,0.2)] [transform:rotateY(90deg)_translateZ(48px)] [backface-visibility:hidden]">
                <span className="max-w-full break-words text-[10px] font-bold leading-tight text-cyan-100 drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]">
                  {cubeFaces[index].right}
                </span>
              </div>

              {/* Left — Deep Blue Glass */}

              {/* Left — Holographic Glass with Neon Text */}
              <div className="absolute inset-0 flex items-center justify-center border border-cyan-300/70 bg-gradient-to-tr from-blue-900/25 via-cyan-400/10 to-transparent p-2 text-center shadow-[inset_0_0_18px_rgba(0,225,255,0.18)] [transform:rotateY(-90deg)_translateZ(48px)] [backface-visibility:hidden]">
                <span className="max-w-full break-words text-[10px] font-bold leading-tight text-cyan-100 drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]">
                  {cubeFaces[index].left}
                </span>
              </div>

              {/* Top — Crystal Cyan Glass */}

              {/* Top — Crystal Glass with Sci-Fi Brain Hologram */}
              <div className="absolute inset-0 flex items-center justify-center border border-cyan-100/90 bg-gradient-to-br from-white/20 via-cyan-300/15 to-blue-500/10 shadow-[inset_0_0_24px_rgba(150,235,255,0.25),0_0_18px_rgba(0,225,255,0.3)] [transform:rotateX(90deg)_translateZ(48px)] [backface-visibility:hidden]">
                <svg
                  viewBox="0 0 64 64"
                  className="h-10 w-10 opacity-90 drop-shadow-[0_0_10px_rgba(0,225,255,0.9)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 16C19 16 15 20 15 25C15 27 16 29 17.5 30.5C15.9 32.1 15 34.3 15 36.5C15 41.7 19.3 46 24.5 46H26V18C25.4 16.7 24.8 16 24 16Z"
                    fill="rgba(80,220,255,0.18)"
                    stroke="#7DEBFF"
                    strokeWidth="2"
                  />
                  <path
                    d="M40 16C45 16 49 20 49 25C49 27 48 29 46.5 30.5C48.1 32.1 49 34.3 49 36.5C49 41.7 44.7 46 39.5 46H38V18C38.6 16.7 39.2 16 40 16Z"
                    fill="rgba(80,220,255,0.18)"
                    stroke="#7DEBFF"
                    strokeWidth="2"
                  />
                  <path
                    d="M26 22H38"
                    stroke="#00E1FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26 30H38"
                    stroke="#00E1FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26 38H38"
                    stroke="#00E1FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32 18V46"
                    stroke="#00E1FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="26" cy="22" r="1.8" fill="#B8FFFF" />
                  <circle cx="38" cy="22" r="1.8" fill="#B8FFFF" />
                  <circle cx="26" cy="30" r="1.8" fill="#B8FFFF" />
                  <circle cx="38" cy="30" r="1.8" fill="#B8FFFF" />
                  <circle cx="26" cy="38" r="1.8" fill="#B8FFFF" />
                  <circle cx="38" cy="38" r="1.8" fill="#B8FFFF" />
                  <circle cx="32" cy="30" r="2.2" fill="#E7B75B" />
                </svg>
              </div>

              {/* Bottom — Holographic Neural Core */}
              <div className="absolute inset-0 flex items-center justify-center border border-cyan-300/70 bg-gradient-to-br from-[#061326]/40 via-blue-500/10 to-amber-300/10 shadow-[inset_0_0_18px_rgba(88,184,255,0.2)] [transform:rotateX(-90deg)_translateZ(48px)] [backface-visibility:hidden]">
                <svg
                  viewBox="0 0 64 64"
                  className="h-12 w-12 opacity-80 drop-shadow-[0_0_10px_rgba(0,225,255,0.8)]"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="19"
                    y="19"
                    width="26"
                    height="26"
                    rx="4"
                    stroke="#76E9FF"
                    strokeWidth="2"
                    fill="#00C8FF"
                    fillOpacity="0.12"
                  />

                  <path
                    d="M26 19V10 M38 19V10 M26 45V54 M38 45V54 M19 26H10 M19 38H10 M45 26H54 M45 38H54"
                    stroke="#00DFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="32"
                    cy="32"
                    r="7"
                    stroke="#A0F3FF"
                    strokeWidth="2"
                  />

                  <circle cx="32" cy="32" r="3" fill="#E7B75B" />

                  <path
                    d="M32 25V21 M32 39V43 M25 32H21 M39 32H43"
                    stroke="#76E9FF"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Close rotating-cube */}
            </div>
          </button>
        ))}
      </div>

      {/* AI Technology Details Popup */}
      {selectedCube !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020814]/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedCube(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-details-title"
            onClick={(event) => event.stopPropagation()}
            className="ai-popup-entrance relative w-full max-w-md rounded-2xl border border-cyan-400/50 bg-[#091C35] p-6 text-white shadow-[0_0_60px_rgba(34,211,238,0.25)]"
          >
            <button
              type="button"
              aria-label="Close technology details"
              onClick={() => setSelectedCube(null)}
              className="absolute right-4 top-3 text-2xl text-slate-300 hover:text-white"
            >
              ×
            </button>

            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              FUTURE FRONTIER / AI ROADMAP
            </p>

            <h4
              id="ai-details-title"
              className="mt-3 pr-6 text-2xl font-extrabold text-[#E7B75B]"
            >
              {technologies[selectedCube]}
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {technologyDetails[selectedCube].description}
            </p>

            <p className="mt-6 text-xs font-bold tracking-widest text-cyan-400">
              TECHNOLOGIES TO EXPLORE
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {technologyDetails[selectedCube].tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="mt-6 border-t border-cyan-400/20 pt-4 text-xs tracking-wider text-slate-400">
              STATUS: PLANNED LEARNING
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
