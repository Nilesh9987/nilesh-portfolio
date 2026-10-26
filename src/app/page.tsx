import Navbar from "@/components/Navbar";
import ScrollQuotes from "@/components/ScrollQuotes";
import FutureLearning from "@/components/FutureLearning";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* =====================================
          01. NAVIGATION
      ===================================== */}
      <Navbar />

      {/* =====================================
          02. CINEMATIC HERO SECTION
      ===================================== */}
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050A13] bg-[radial-gradient(ellipse_at_70%_35%,#123663_0%,#050A13_75%)] px-6 py-12 text-white md:flex-row md:bg-[url('/portfolio-continuation-background.jpg')] md:bg-cover md:bg-center md:bg-no-repeat md:px-16 md:py-0">
        {/* Full-Screen Cinematic Background Video */}
        <video
          src="/Portfolio-walking.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/portfolio-hero.webp"
          aria-hidden="true"
          className="full-video-blend absolute inset-0 hidden h-full w-full object-contain object-right md:block"
        />

        {/* Dark Overlay for Readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050A13]/95 via-[#050A13]/65 to-[#050A13]/20" />

        <section className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="relative z-10 w-full">
            {/* Developer Identity */}
            <p className="hero-animate hero-delay-1 mb-6 text-sm font-semibold tracking-[0.3em] text-[#58B8FF]">
              NILESH SALVI • SOFTWARE DEVELOPER
            </p>

            {/* Main Heading */}
            <h1 className="hero-animate hero-delay-2 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              I DON&apos;T JUST WRITE CODE.
              <span className="mt-3 block text-[#E7B75B]">
                I BUILD DIGITAL PRODUCTS.
              </span>
            </h1>

            {/* Specialization */}
            <p className="hero-animate hero-delay-3 mt-7 max-w-xl text-base text-slate-300 md:text-lg">
              Java Backend • Android Development • Real-world Software
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-[#E7B75B] px-7 py-3 font-semibold text-[#050A13] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD47A] hover:shadow-[0_0_30px_rgba(231,183,91,0.35)]"
              >
                View My Work →
              </a>

              {/* Resume Placeholder */}
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-white/30 px-7 py-3 font-semibold text-white/65"
              >
                ↓ Download Resume
              </span>
            </div>
          </div>
        </section>

        {/* Mobile Walking Video */}
        <div className="mt-7 w-full md:hidden">
          <video
            src="/Portfolio-walking.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/portfolio-hero.webp"
            aria-label="Nilesh Salvi cinematic walking introduction"
            className="block h-auto w-full rounded-xl"
          />
        </div>
      </main>

      {/* =====================================
          03. ABOUT & TECHNICAL SKILLS
      ===================================== */}
      <section
        id="about"
        className="relative flex min-h-[200vh] items-start bg-[#050A13] bg-[radial-gradient(ellipse_at_25%_45%,#123663_0%,#08172B_40%,#050A13_85%)] px-6 py-20 text-white md:px-16"
      >
        {/* Skills Navigation Scroll Target */}
        <div
          id="skills"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[115vh] h-px w-px"
        />

        <div className="sticky top-20 mx-auto grid h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* About Face-Turn Video */}
          <div className="relative mx-auto w-full max-w-sm md:col-start-1 md:row-start-1 md:translate-y-10">
            <video
              src="/about-face-turn.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Nilesh Salvi face-turn animation"
              className="block h-auto w-full object-contain [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]"
            />
          </div>

          {/* About Quotes & Technical Expertise */}
          <div className="relative z-10 md:col-start-2">
            <ScrollQuotes />
          </div>
        </div>
      </section>

      {/* =====================================
          04. FUTURE FRONTIER
      ===================================== */}
      <section
        id="future"
        className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#061326] bg-[radial-gradient(ellipse_at_50%_45%,#123663_0%,#061326_70%)] px-6 py-24 text-white"
      >
        <FutureLearning />
      </section>

      {/* =====================================
          05. FEATURED PROJECTS
      ===================================== */}
      <Projects />

      {/* =====================================
          06. CONTACT
      ===================================== */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}
