"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomeHero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(eyebrowRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
    })
      .from(titleRef.current, { opacity: 0, y: 60, duration: 1 }, "-=0.5")
      .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
      .from(actionsRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
      .from(
        statsRef.current ? statsRef.current.children : [],
        { opacity: 0, x: 30, duration: 0.6, stagger: 0.12 },
        "-=0.4",
      )
      .from(scrollRef.current, { opacity: 0, duration: 0.5 }, "-=0.2");

    // Parallax background processing
    const bgEl = document.getElementById("hero-bg");
    const onScroll = () => {
      if (bgEl) bgEl.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[700px] h-screen w-full flex items-end justify-center px-6 pb-24 md:px-12 md:pb-24 lg:pb-28 overflow-hidden bg-[#1a1208]">
      {/* Background Video Stream */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/videobg.mp4" type="video/mp4" />
      </video>

      {/* Parallax Gradient Shade Mask Layer */}
      <div
        id="hero-bg"
        className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/95 via-[#1a1208]/40 to-[#1a1208]/10 z-10 pointer-events-none transition-transform duration-75 will-change-transform"
      />

      {/* Global Boundary Max-Width Container Row */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
        {/* Core Left-Wing Content Panel */}
        <div className="max-w-[800px] w-full">
          {/* Eyebrow Label */}
          <div
            ref={eyebrowRef}
            className="text-[0.75rem] font-semibold tracking-[0.25em] uppercase text-[var(--saffron)] mb-5 flex items-center gap-3"
          >
            <span className="block w-8 h-[1px] bg-[var(--saffron)]" />
            Kathmandu, Nepal · Est. 2006
          </div>

          {/* Epic Main Header Title */}
          <h1
            ref={titleRef}
            className="font-['Syne'] text-[clamp(2.8rem,5.5vw,6rem)] font-extrabold leading-[0.92] tracking-tighter text-white mb-6 max-w-[28ch]"
          >
            Where the
            <br />
            <span className="text-[var(--saffron)] font-normal not-italic">
              Earth
            </span>
            <br />
            Touches Sky
          </h1>

          {/* Subtitle Paragraph */}
          <p
            ref={subtitleRef}
            className="text-[0.95rem] md:text-[1.05rem] leading-relaxed text-[#FAF7F2]/65 max-w-lg mb-10"
          >
            Expert-guided trekking and mountain biking across the world's
            greatest Himalayan terrain. From Everest Base Camp to high-altitude
            MTB descents in Mustang.
          </p>

          {/* Action Trigger Buttons Group */}
          <div ref={actionsRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#packages"
              className="bg-[var(--saffron)] text-[var(--earth)] px-8 py-4 font-['Syne'] font-bold text-[0.85rem] tracking-wider uppercase rounded-[2px] transition-all duration-200 transform hover:-translate-y-0.5 hover:bg-[#f5a02e] inline-block"
            >
              Explore Packages
            </a>
            <a
              href="#about"
              className="text-white border border-[#FAF7F2]/35 px-8 py-4 font-['Syne'] font-bold text-[0.85rem] tracking-wider uppercase rounded-[2px] transition-colors duration-200 hover:bg-white/10 inline-block"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Dynamic Metric Counter Sidebar Block */}
        <div
          ref={statsRef}
          className="flex flex-row lg:flex-col gap-8 lg:gap-8 justify-start lg:justify-end border-t border-white/10 lg:border-t-0 pt-6 lg:pt-0 w-full lg:w-auto min-w-[160px]"
        >
          {[
            { num: "200+", label: "Routes" },
            { num: "18", label: "Years" },
            { num: "4,800+", label: "Adventurers" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-left lg:text-right flex-1 lg:flex-initial"
            >
              <div className="font-['Syne'] text-2xl md:text-3xl lg:text-[2.2rem] font-extrabold text-white leading-none mb-1">
                {s.num}
              </div>
              <div className="text-[0.65rem] md:text-[0.7rem] tracking-[0.15em] uppercase text-stone-400 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downward Scroll Tracker Prompt */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[0.68rem] tracking-[0.2em] uppercase text-[#FAF7F2]/40 z-20 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-[var(--saffron)] h-full animate-pulse-line" />
        </div>
        <span>Scroll</span>
      </div>

      {/* Custom Keyframe Styles Injection */}
      <style jsx global>{`
        @keyframes scrollline {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-pulse-line {
          animation: scrollline 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
