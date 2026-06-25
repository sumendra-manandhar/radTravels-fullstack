"use client";
import { useState } from "react";
import { packages } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";

export default function PackagesSection() {
  const [active, setActive] = useState<"trekking" | "mtb">("trekking");

  const filtered = packages.filter((p) => p.category === active);

  return (
    <section id="packages" style={{ padding: "7rem 3rem", background: "var(--pine)" }}>
      {/* Header */}
      <div style={{ marginBottom: "1rem" }}>
        <div className="section-eyebrow" style={{ marginBottom: "0.7rem" }}>
          Choose Your Adventure
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Trekking &amp; MTB Packages
        </h2>
      </div>

      {/* Toggle */}
      <div
        style={{
          display: "flex",
          width: "fit-content",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          overflow: "hidden",
          margin: "2.5rem 0",
        }}
      >
        {(["trekking", "mtb"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "0.8rem 2.5rem",
              cursor: "pointer",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              background: active === cat ? "var(--saffron)" : "transparent",
              color: active === cat ? "var(--earth)" : "rgba(245,242,236,0.5)",
              transition: "all 0.25s",
            }}
          >
            {cat === "trekking" ? "🥾 Trekking" : "🚵 MTB"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {filtered.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
