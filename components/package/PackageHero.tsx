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
    <div
      style={{
        height: "92vh",
        minHeight: 600,
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* BG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${pkg.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(26,18,8,1) 0%, rgba(26,18,8,0.55) 40%, rgba(26,18,8,0.15) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(26,18,8,0.55) 0%, transparent 60%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 3rem 4.5rem",
          width: "100%",
        }}
      >
        {/* Breadcrumb */}
        <div
          ref={breadRef}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(245,242,236,0.5)",
            marginBottom: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <a
            href="/"
            style={{ color: "var(--saffron)", textDecoration: "none" }}
          >
            Home
          </a>
          <span style={{ opacity: 0.4 }}>/</span>
          <a
            href="/#packages"
            style={{ color: "var(--saffron)", textDecoration: "none" }}
          >
            {pkg.category === "trekking" ? "Trekking" : "MTB"}
          </a>
          <span style={{ opacity: 0.4 }}>/</span>
          {pkg.name}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "3rem",
          }}
        >
          {/* Left: title */}
          <div style={{ maxWidth: 700 }}>
            <span
              ref={badgeRef}
              className={difficultyColor[pkg.difficulty]}
              style={{
                display: "inline-block",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.3rem 0.9rem",
                borderRadius: "2px",
                marginBottom: "1.2rem",
              }}
            >
              {pkg.difficulty}
            </span>

            <h1
              ref={titleRef}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                marginBottom: "1.2rem",
              }}
            >
              {pkg.name.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <em
                    key={i}
                    style={{
                      color: "var(--saffron)",
                      fontStyle: "normal",
                      display: "block",
                    }}
                  >
                    {word}
                  </em>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </h1>

            <p
              ref={tagRef}
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                color: "rgba(245,242,236,0.65)",
                maxWidth: 520,
              }}
            >
              {pkg.tagline}
            </p>
          </div>

          {/* Right: quick stats card */}
          <div
            ref={statsRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              background: "rgba(26,18,8,0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "2rem 2.5rem",
              minWidth: 240,
              flexShrink: 0,
            }}
          >
            {quickStats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--mist)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  <span style={{ color: "var(--saffron)" }}>{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
