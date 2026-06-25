"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NavProps {
  variant?: "home" | "package";
}

export default function Nav({ variant = "home" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 3rem",
        background: scrolled ? "rgba(26,18,8,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.25rem",
          color: "var(--snow)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Rad<span style={{ color: "var(--saffron)" }}>Travels</span>
      </Link>

      {variant === "home" ? (
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { label: "Trekking", href: "#trekking" },
            { label: "MTB", href: "#mtb" },
            { label: "Best Time", href: "#seasons" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  color: "var(--snow)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                background: "var(--saffron)",
                color: "var(--earth)",
                padding: "0.52rem 1.4rem",
                borderRadius: "2px",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Book Now
            </a>
          </li>
        </ul>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="/"
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(245,242,236,0.6)",
              textDecoration: "none",
            }}
          >
            ← All Packages
          </Link>
          <a
            href="#book"
            style={{
              background: "var(--saffron)",
              color: "var(--earth)",
              padding: "0.52rem 1.4rem",
              borderRadius: "2px",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              textDecoration: "none",
            }}
          >
            Book This Trip
          </a>
        </div>
      )}
    </nav>
  );
}
