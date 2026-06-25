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

    // Parallax bg
    const bgEl = document.getElementById("hero-bg");
    const onScroll = () => {
      if (bgEl) bgEl.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        minHeight: 700,
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        padding: "0 3rem 6rem",
        overflow: "hidden",
      }}
    >
      {/* BG */}
      <div
        id="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(26,18,8,0.95) 0%, rgba(26,18,8,0.3) 50%, rgba(26,18,8,0.1) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
        <div
          ref={eyebrowRef}
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--saffron)",
            marginBottom: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "2rem",
              height: "1px",
              background: "var(--saffron)",
            }}
          />
          Kathmandu, Nepal · Est. 2006
        </div>

        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3rem, 6vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            marginBottom: "1.8rem",
            width: "min(100%, 28ch)",
          }}
        >
          Where the
          <br />
          <em style={{ color: "var(--saffron)", fontStyle: "normal" }}>
            Earth
          </em>
          <br />
          Touches Sky
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "rgba(245,242,236,0.65)",
            maxWidth: 480,
            marginBottom: "3rem",
          }}
        >
          Expert-guided trekking and mountain biking across the world's greatest
          Himalayan terrain. From Everest Base Camp to high-altitude MTB
          descents in Mustang.
        </p>

        <div
          ref={actionsRef}
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#packages"
            style={{
              background: "var(--saffron)",
              color: "var(--earth)",
              padding: "0.95rem 2.2rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "transform 0.2s, background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#f5a02e";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--saffron)";
            }}
          >
            Explore Packages
          </a>
          <a
            href="#about"
            style={{
              color: "var(--snow)",
              border: "1px solid rgba(245,242,236,0.35)",
              padding: "0.95rem 2.2rem",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "border-color 0.2s",
              display: "inline-block",
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        style={{
          position: "absolute",
          right: "3rem",
          bottom: "6rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          zIndex: 2,
        }}
      >
        {[
          { num: "200+", label: "Routes" },
          { num: "18", label: "Years" },
          { num: "4,800+", label: "Adventurers" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "var(--snow)",
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--mist)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.68rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(245,242,236,0.4)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: 1,
            height: 50,
            background: "rgba(245,242,236,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              background: "var(--saffron)",
              height: "100%",
              animation: "scrollline 2s ease-in-out infinite",
            }}
          />
        </div>
        Scroll
      </div>
    </section>
  );
}
