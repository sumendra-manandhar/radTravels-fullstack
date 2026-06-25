"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Package, difficultyColor } from "@/data/packages";

export default function PackageHero({ pkg }: { pkg: Package }) {
  const breadRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  //   tl.from(breadRef.current, { opacity: 0, y: 15, duration: 0.7, delay: 0.2 })
  //     .from(badgeRef.current, { opacity: 0, y: 12, duration: 0.5 }, "-=0.3")
  //     .from(titleRef.current, { opacity: 0, y: 55, duration: 1 }, "-=0.4")
  //     .from(tagRef.current, { opacity: 0, y: 25, duration: 0.8 }, "-=0.6")
  //     .from(
  //       statsRef.current ? Array.from(statsRef.current.children) : [],
  //       { opacity: 0, x: 20, duration: 0.5, stagger: 0.07 },
  //       "-=0.5",
  //     );
  // }, []);

  const quickStats = [
    { label: "Duration", value: pkg.duration },
    { label: "Max Altitude", value: pkg.maxAltitude },
    { label: "Distance", value: pkg.distance },
    { label: "Group Size", value: pkg.groupSize },
    { label: "Daily Walk", value: pkg.dailyWalk },
    { label: "From", value: `$${pkg.priceFrom.toLocaleString()}` },
  ];

  return (
    <section className="relative min-h-[600px] h-[92vh] w-full flex items-end justify-center overflow-hidden bg-[#FAF7F2] dark:bg-[#151a17] transition-colors duration-300">
      {/* Background Graphic Dynamic Sheet */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500 scale-100 dark:brightness-[0.85]"
        style={{ backgroundImage: `url('${pkg.heroImage}')` }}
      />

      {/* Light Mode Vignette Shading Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent dark:from-transparent z-10 opacity-100 dark:opacity-0 transition-opacity pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/60 to-transparent dark:from-transparent z-10 opacity-100 dark:opacity-0 transition-opacity pointer-events-none" />

      {/* Dark Mode True Shading Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#151a17] via-[#151a17]/60 to-[#151a17]/20 z-10 opacity-0 dark:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151a17]/50 to-transparent z-10 opacity-0 dark:opacity-100 transition-opacity pointer-events-none" />

      {/* Central Content Boundary Constraint Frame */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 pb-12 md:px-12 md:pb-16 lg:pb-20">
        {/* Breadcrumb Navigation Path */}
        <div
          ref={breadRef}
          className="text-[0.72rem] font-medium tracking-[0.15em] uppercase text-stone-600/70 dark:text-[#FAF7F2]/50 mb-6 flex items-center gap-2"
        >
          <a href="/" className="text-[var(--saffron)] hover:underline">
            Home
          </a>
          <span className="opacity-40">/</span>
          <a
            href="/#packages"
            className="text-[var(--saffron)] hover:underline"
          >
            {pkg.category === "trekking" ? "Trekking" : "MTB"}
          </a>
          <span className="opacity-40">/</span>
          <span className="text-stone-800 dark:text-[#FAF7F2] truncate max-w-[180px] sm:max-w-none">
            {pkg.name}
          </span>
        </div>

        {/* Layout Structural Splitter Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 lg:gap-12">
          {/* Left Wing Elements: Difficulty Badge, Title Header, Subhead Tagline */}
          <div className="max-w-3xl w-full">
            <span
              ref={badgeRef}
              className={`${difficultyColor[pkg.difficulty]} inline-block text-white font-['Syne'] font-bold text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px] mb-5 shadow-sm`}
            >
              {pkg.difficulty}
            </span>

            <h1
              ref={titleRef}
              className="font-['Syne'] font-extrabold text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.95] tracking-tighter text-[#1a1208] dark:text-white mb-6"
            >
              {pkg.name.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span
                    key={i}
                    className="text-[var(--saffron)] font-normal not-italic block mt-1"
                  >
                    {word}
                  </span>
                ) : (
                  <span key={i} className="inline-block mr-3">
                    {word}
                  </span>
                ),
              )}
            </h1>

            <p
              ref={tagRef}
              className="text-[0.95rem] md:text-[1rem] leading-relaxed text-stone-700/80 dark:text-[#FAF7F2]/65 max-w-xl"
            >
              {pkg.tagline}
            </p>
          </div>

          {/* Right Wing Component Element: Quick Stats Glassmorphic Dashboard Card */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-x-6 gap-y-5 lg:gap-6 bg-white/70 dark:bg-[#1a1208]/70 backdrop-blur-md border border-stone-200/60 dark:border-white/10 rounded-lg p-6 sm:p-8 min-w-full sm:min-w-0 lg:min-w-[260px] flex-shrink-0 shadow-xl dark:shadow-black/20"
          >
            {quickStats.map((s) => (
              <div
                key={s.label}
                className="border-b border-stone-200/40 dark:border-white/5 pb-2 lg:pb-0 lg:border-none"
              >
                <div className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-stone-500 dark:text-stone-400 mb-1">
                  {s.label}
                </div>
                <div className="font-['Syne'] font-bold text-lg md:text-xl text-[#1a1208] dark:text-white">
                  <span className="text-[var(--saffron)]">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
