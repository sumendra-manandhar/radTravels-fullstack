"use client";
import Link from "next/link";
import { Package, difficultyColor } from "@/data/packages";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          overflow: "hidden",
          transition: "transform 0.3s, border-color 0.3s",
          cursor: "pointer",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--saffron)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        }}
      >
        {/* Image */}
        <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
          <img
            src={pkg.heroImage}
            alt={pkg.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s",
              display: "block",
            }}
            onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.06)")}
            onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
          />
          <span
            className={difficultyColor[pkg.difficulty]}
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.3rem 0.7rem",
              borderRadius: "2px",
            }}
          >
            {pkg.difficulty}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: "1.4rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "0.7rem",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--mist)",
            }}
          >
            <span>📅 {pkg.duration}</span>
            <span>🏔️ {pkg.maxAltitude}</span>
            <span>👥 {pkg.groupSize}</span>
          </div>

          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "1.15rem",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            {pkg.name}
          </h3>

          <p
            style={{
              fontSize: "0.83rem",
              lineHeight: 1.6,
              color: "rgba(245,242,236,0.55)",
              marginBottom: "1.2rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {pkg.tagline}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div>
              <span style={{ fontSize: "0.68rem", color: "var(--mist)", display: "block" }}>From</span>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: "var(--saffron)",
                }}
              >
                ${pkg.priceFrom.toLocaleString()}
              </span>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--snow)",
              }}
            >
              View Trip →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
