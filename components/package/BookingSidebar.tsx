"use client";
import { useState } from "react";
import { Package } from "@/data/packages";

export default function BookingSidebar({ pkg }: { pkg: Package }) {
  const [people, setPeople] = useState("2 people");
  const [pkgTier, setPkgTier] = useState<"standard" | "premium" | "gold">("standard");

  const prices = {
    standard: pkg.priceFrom,
    premium: pkg.pricePremium ?? pkg.priceFrom + 500,
    gold: pkg.priceGold ?? pkg.priceFrom + 1200,
  };

  const price = prices[pkgTier];

  return (
    <div style={{ position: "sticky", top: 100 }}>
      {/* Booking Card */}
      <div
        id="book"
        style={{
          background: "rgba(245,242,236,0.05)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}
      >
        {/* Price header */}
        <div
          style={{
            background: "var(--pine)",
            padding: "1.8rem",
            textAlign: "center",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ fontSize: "0.7rem", color: "var(--mist)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Starting from
          </div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "2.8rem",
              color: "var(--saffron)",
              lineHeight: 1,
              margin: "0.3rem 0",
            }}
          >
            ${price.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "rgba(245,242,236,0.5)" }}>per person · all-inclusive</div>
        </div>

        {/* Form */}
        <div style={{ padding: "1.5rem" }}>
          {/* Departure date */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--mist)",
                marginBottom: "0.4rem",
              }}
            >
              Departure Date
            </label>
            <input
              type="date"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(245,242,236,0.06)",
                border: "1px solid var(--border)",
                color: "var(--snow)",
                borderRadius: "3px",
                fontSize: "0.88rem",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                colorScheme: "dark",
              }}
            />
          </div>

          {/* People */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--mist)",
                marginBottom: "0.4rem",
              }}
            >
              Number of People
            </label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(245,242,236,0.06)",
                border: "1px solid var(--border)",
                color: "var(--snow)",
                borderRadius: "3px",
                fontSize: "0.88rem",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                appearance: "none",
              }}
            >
              {["1 person (solo)", "2 people", "3–5 people", "6–10 people", "Private group (10+)"].map((o) => (
                <option key={o} value={o} style={{ background: "var(--earth)" }}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Package tier */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--mist)",
                marginBottom: "0.4rem",
              }}
            >
              Package Type
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {(["standard", "premium", "gold"] as const).map((tier) => (
                <div
                  key={tier}
                  onClick={() => setPkgTier(tier)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "3px",
                    border: `1px solid ${pkgTier === tier ? "var(--saffron)" : "var(--border)"}`,
                    background: pkgTier === tier ? "rgba(232,135,10,0.08)" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.82rem",
                      textTransform: "capitalize",
                      fontWeight: pkgTier === tier ? 600 : 400,
                      color: pkgTier === tier ? "var(--snow)" : "rgba(245,242,236,0.6)",
                    }}
                  >
                    {tier === "gold" ? "Gold (Private)" : tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      color: pkgTier === tier ? "var(--saffron)" : "var(--mist)",
                      fontSize: "0.9rem",
                    }}
                  >
                    ${prices[tier].toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            style={{
              display: "block",
              width: "100%",
              padding: "1rem",
              background: "var(--saffron)",
              color: "var(--earth)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              marginBottom: "0.7rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f5a02e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--saffron)")}
          >
            Book This Trip
          </button>

          <button
            style={{
              display: "block",
              width: "100%",
              padding: "0.85rem",
              background: "transparent",
              color: "var(--snow)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "1px solid var(--border)",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            📧 Request Custom Quote
          </button>

          <div
            style={{
              paddingTop: "1rem",
              borderTop: "1px solid var(--border)",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.45rem",
            }}
          >
            {[
              { icon: "✅", text: "Free cancellation up to 30 days before" },
              { icon: "🔒", text: "Secure booking · No payment until confirmed" },
              { icon: "📞", text: "24/7 support on WhatsApp" },
            ].map((r) => (
              <div
                key={r.icon}
                style={{
                  display: "flex",
                  gap: "0.55rem",
                  alignItems: "flex-start",
                  fontSize: "0.77rem",
                  color: "rgba(245,242,236,0.5)",
                }}
              >
                <span>{r.icon}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trip Facts */}
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <h4
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--mist)",
            marginBottom: "1.2rem",
          }}
        >
          Trip Facts
        </h4>
        {[
          { key: "Start / End", val: pkg.startEnd },
          { key: "Trail Start", val: pkg.trailStart },
          { key: "Highest Point", val: pkg.maxAltitude, highlight: true },
          { key: "Accommodation", val: pkg.accommodation },
          { key: "Meals", val: pkg.meals },
          { key: "Group Size", val: pkg.groupSize },
          { key: "Guide Ratio", val: pkg.guideRatio },
          { key: "Permits", val: pkg.permits },
        ].map((row) => (
          <div
            key={row.key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.55rem 0",
              borderBottom: "1px solid rgba(245,242,236,0.05)",
              fontSize: "0.82rem",
            }}
          >
            <span style={{ color: "rgba(245,242,236,0.5)" }}>{row.key}</span>
            <span style={{ fontWeight: 500, textAlign: "right", color: row.highlight ? "var(--saffron)" : "var(--snow)", maxWidth: "55%" }}>
              {row.val}
            </span>
          </div>
        ))}
      </div>

      {/* Best months */}
      <div
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1.5rem",
        }}
      >
        <h4
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--mist)",
            marginBottom: "1.2rem",
          }}
        >
          Best Months
        </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.4rem" }}>
          {pkg.bestMonths.map((m) => (
            <div
              key={m.month}
              style={{
                textAlign: "center",
                padding: "0.5rem 0.2rem",
                borderRadius: "3px",
                fontSize: "0.67rem",
                fontWeight: 500,
                background:
                  m.status === "best"
                    ? "rgba(232,135,10,0.18)"
                    : m.status === "ok"
                    ? "rgba(200,221,232,0.1)"
                    : "rgba(245,242,236,0.03)",
                color:
                  m.status === "best"
                    ? "var(--saffron)"
                    : m.status === "ok"
                    ? "var(--ice)"
                    : "rgba(245,242,236,0.3)",
                border: `1px solid ${
                  m.status === "best"
                    ? "rgba(232,135,10,0.3)"
                    : m.status === "ok"
                    ? "rgba(200,221,232,0.2)"
                    : "var(--border)"
                }`,
              }}
            >
              {m.month}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", fontSize: "0.72rem" }}>
          <span style={{ color: "var(--saffron)" }}>■ Best</span>
          <span style={{ color: "var(--ice)" }}>■ Good</span>
          <span style={{ color: "rgba(245,242,236,0.25)" }}>■ Avoid</span>
        </div>
      </div>
    </div>
  );
}
