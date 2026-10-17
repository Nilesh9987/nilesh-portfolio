
"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

/* =========================================
   01. CONTACT DETAILS
========================================= */

const EMAIL = "nileshsalvi9987@gmail.com";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/nilesh-salvi-95b371167/";

/* =========================================
   02. CONTACT COMPONENT
========================================= */

export default function Contact() {
  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  /* Mouse-Follow Spotlight */
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative isolate min-h-screen overflow-hidden bg-[#050A13] px-6 py-24 text-white md:px-16"
    >
      {/* =====================================
          03. INTERACTIVE SPOTLIGHT
      ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden md:block"
        style={{
          background: `radial-gradient(
            400px circle at ${spotlight.x}% ${spotlight.y}%,
            rgba(88,184,255,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* =====================================
          04. ANIMATED BACKGROUND
      ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Floating Cyan Orb */}
        <div className="contact-glow-orb absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-[#58B8FF]/20 blur-[90px] md:h-96 md:w-96" />

        {/* Floating Gold Orb */}
        <div className="contact-glow-orb contact-glow-orb-delayed absolute bottom-[15%] right-[8%] h-56 w-56 rounded-full bg-[#E7B75B]/15 blur-[85px] md:h-80 md:w-80" />

        {/* Central Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#58B8FF]/10 blur-[110px] md:h-[500px] md:w-[500px]" />
      </div>

      {/* =====================================
          05. MAIN CONTACT CONTENT
      ===================================== */}

      <div className="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center text-center">
        {/* Section Label */}
        <p className="mb-6 text-xs font-bold tracking-[0.35em] text-[#58B8FF]">
          06 / CONTACT
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl font-black tracking-tight sm:text-6xl md:text-8xl">
          LET&apos;S BUILD
          <span className="mt-3 block text-[#E7B75B]">
            THE FUTURE.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Have an idea, an opportunity, or a challenging problem?
          Let&apos;s collaborate and turn it into something
          extraordinary.
        </p>

        {/* =====================================
            06. MAIN ACTION BUTTONS
        ===================================== */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href={`mailto:${EMAIL}?subject=Portfolio%20Collaboration%20Inquiry`}
            className="rounded-xl border border-[#58B8FF]/60 bg-[#58B8FF]/15 px-8 py-4 text-sm font-bold tracking-wider text-[#58B8FF] shadow-[0_0_30px_rgba(88,184,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#58B8FF]/25 hover:shadow-[0_0_40px_rgba(88,184,255,0.35)]"
          >
            LET&apos;S CONNECT ↗
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-[#E7B75B]/60 px-8 py-4 text-sm font-bold tracking-wider text-[#E7B75B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E7B75B]/10"
          >
            EXPLORE PROJECTS →
          </a>
        </div>

        {/* =====================================
            07. CONTACT LINKS
        ===================================== */}

        <div
          id="contact-links"
          className="mt-16 w-full max-w-2xl border-t border-[#58B8FF]/20 pt-8"
        >
          <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-slate-400">
            FIND ME ONLINE
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-3 rounded-xl border border-[#58B8FF]/40 bg-[#58B8FF]/10 px-6 py-4 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B8FF] hover:bg-[#58B8FF]/20 hover:shadow-[0_0_25px_rgba(88,184,255,0.2)]"
            >
              <span aria-hidden="true">✉</span>
              EMAIL
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="group flex items-center gap-3 rounded-xl border border-[#58B8FF]/40 bg-[#58B8FF]/10 px-6 py-4 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B8FF] hover:bg-[#58B8FF]/20 hover:shadow-[0_0_25px_rgba(88,184,255,0.2)]"
            >
              <span className="font-bold" aria-hidden="true">
                in
              </span>
              LINKEDIN
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* GitHub — Coming Soon */}
            <div
              className="flex cursor-not-allowed flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-slate-400"
              title="GitHub profile coming soon"
            >
              <span className="font-semibold">
                GITHUB
              </span>
              <span className="mt-1 text-[10px] tracking-wider text-slate-500">
                COMING SOON
              </span>
            </div>
          </div>

          {/* Visible Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-block break-all text-sm text-slate-400 transition-colors hover:text-[#58B8FF]"
          >
            {EMAIL}
          </a>
        </div>
      </div>

      {/* =====================================
          08. FOOTER
      ===================================== */}

      <footer className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Nilesh Salvi.
          All rights reserved.
        </p>

        <p>
          DESIGNED &amp; DEVELOPED WITH PURPOSE.
        </p>
      </footer>
    </section>
  );
}
