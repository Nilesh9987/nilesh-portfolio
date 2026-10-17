"use client";

import { useState } from "react";

/* =========================================
   01. NAVIGATION LINKS
========================================= */

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Future Frontier", href: "#future" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* =========================================
   02. NAVBAR COMPONENT
========================================= */

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050A13]/80 px-6 py-4 backdrop-blur-md md:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Portfolio Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-[#E7B75B]"
        >
          NS.
        </a>

        {/* =====================================
            03. DESKTOP NAVIGATION
        ===================================== */}

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.label === "Home"
                  ? "nav-link text-[#E7B75B]"
                  : "nav-link text-white transition-colors hover:text-[#E7B75B]"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* =====================================
            04. MOBILE HAMBURGER BUTTON
        ===================================== */}

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex flex-col gap-1.5 p-2 text-white md:hidden"
        >
          {isMenuOpen ? (
            <span className="text-2xl leading-none text-[#E7B75B]">×</span>
          ) : (
            <>
              <span className="h-0.5 w-6 bg-[#E7B75B]" />
              <span className="h-0.5 w-6 bg-[#E7B75B]" />
              <span className="h-0.5 w-6 bg-[#E7B75B]" />
            </>
          )}
        </button>
      </div>

      {/* =====================================
          05. MOBILE DROPDOWN NAVIGATION
      ===================================== */}

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-6 top-full z-50 w-56 border border-white/10 bg-[#050A13]/95 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={
                  link.label === "Home" ? "text-[#E7B75B]" : "text-white"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
