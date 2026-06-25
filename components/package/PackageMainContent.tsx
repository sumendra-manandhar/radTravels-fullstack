"use client";
import { Package } from "@/data/packages";
import PackageGallery from "./PackageGallery";
import ElevationChart from "./ElevationChart";
import ItineraryAccordion from "./ItineraryAccordion";

function renderText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: "var(--snow)", fontWeight: 500 }}>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function SecBlock({ children }: { children: React.ReactNode }) {
  return <div style={{ marginBottom: "5rem" }}>{children}</div>;
}

function SecHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div className="section-eyebrow" style={{ marginBottom: "0.6rem" }}>{eyebrow}</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.9rem",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function PackageMainContent({ pkg }: { pkg: Package }) {
  return (
    <div style={{ padding: "5rem 4rem 5rem 0", borderRight: "1px solid var(--border)" }}>

      {/* STAT CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          overflow: "hidden",
          marginBottom: "5rem",
        }}
      >
        {[
          { icon: "🏔️", num: pkg.maxAltitude, label: "Highest Point", sub: `${pkg.category === "mtb" ? "Max altitude reached" : "Above sea level"}` },
          { icon: "📅", num: pkg.duration, label: "Total Duration", sub: "Kathmandu to Kathmandu" },
          { icon: "📏", num: pkg.distance, label: pkg.category === "mtb" ? "Total Riding" : "Total Distance", sub: "Full route" },
          { icon: "⬆️", num: pkg.elevationGain, label: "Elevation Gain", sub: `From ${pkg.trailStart}` },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--card-bg)",
              padding: "1.8rem 1.5rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "rgba(245,242,236,0.07)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--card-bg)")}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{s.icon}</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--saffron)", lineHeight: 1 }}>
              {s.num}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--mist)", margin: "0.3rem 0 0.2rem" }}>{s.label}</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(245,242,236,0.4)" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* OVERVIEW */}
      <SecBlock>
        <SecHead eyebrow="Overview" title="The full picture." />
        <div>
          {pkg.overview.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "rgba(245,242,236,0.65)",
                marginBottom: "1.2rem",
              }}
            >
              {renderText(para)}
            </p>
          ))}
        </div>
      </SecBlock>

      {/* HIGHLIGHTS */}
      <SecBlock>
        <SecHead eyebrow="Highlights" title="What you'll experience." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {pkg.highlights.map((hl, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                padding: "1.2rem 1.4rem",
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,135,10,0.4)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.68rem",
                  color: "var(--saffron)",
                  minWidth: "1.5rem",
                  paddingTop: "0.1rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong style={{ color: "var(--snow)", fontWeight: 600, display: "block", marginBottom: "0.25rem", fontSize: "0.9rem" }}>
                  {hl.title}
                </strong>
                <span style={{ fontSize: "0.84rem", lineHeight: 1.55, color: "rgba(245,242,236,0.6)" }}>{hl.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </SecBlock>

      {/* GALLERY */}
      <SecBlock>
        <SecHead eyebrow="Gallery" title="The trail in pictures." />
        <PackageGallery images={pkg.galleryImages} />
      </SecBlock>

      {/* ELEVATION */}
      <SecBlock>
        <SecHead eyebrow="Elevation Profile" title="The climb, day by day." />
        <ElevationChart data={pkg.elevation} />
      </SecBlock>

      {/* ITINERARY */}
      <SecBlock>
        <SecHead eyebrow="Day by Day" title="Full itinerary." />
        <ItineraryAccordion days={pkg.itinerary} />
      </SecBlock>

      {/* ROUTE MAP */}
      <SecBlock>
        <SecHead eyebrow="Route" title="The trail map." />
        <div
          style={{
            borderRadius: "6px",
            overflow: "hidden",
            position: "relative",
            height: 340,
            background: "var(--pine)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=60')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.35,
            }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 700 300" fill="none" style={{ width: "88%", maxWidth: 680 }}>
              {/* Route line */}
              {pkg.mapRoutePoints.length > 1 && (
                <polyline
                  points={pkg.mapRoutePoints.map((p) => `${p.x},${p.y}`).join(" ")}
                  stroke="var(--saffron)"
                  strokeWidth="2.5"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {pkg.mapRoutePoints.map((pt, i) => (
                <g key={i}>
                  {pt.isHighlight ? (
                    <>
                      <circle cx={pt.x} cy={pt.y} r="9" fill="none" stroke="var(--saffron)" strokeWidth="2" />
                      <circle cx={pt.x} cy={pt.y} r="4" fill="var(--saffron)" />
                    </>
                  ) : (
                    <circle cx={pt.x} cy={pt.y} r="5" fill="var(--saffron)" />
                  )}
                  <text
                    x={pt.x + 12}
                    y={pt.y + 4}
                    fill={pt.isHighlight ? "var(--saffron)" : "var(--snow)"}
                    fontSize="10"
                    fontFamily="Inter"
                    fontWeight={pt.isHighlight ? "700" : "400"}
                  >
                    {pt.name}
                  </text>
                  <text x={pt.x + 12} y={pt.y + 16} fill="var(--mist)" fontSize="8.5" fontFamily="Inter">
                    {pt.altitude}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </SecBlock>

      {/* INCLUDES / EXCLUDES */}
      <SecBlock>
        <SecHead eyebrow="Pricing" title="What's included." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {[
            { title: "✓ Included", items: pkg.included, color: "#4caf7d" },
            { title: "✕ Not Included", items: pkg.excluded, color: "var(--red)" },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.2rem",
                  paddingBottom: "0.7rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.8rem",
                      alignItems: "flex-start",
                      fontSize: "0.84rem",
                      lineHeight: 1.5,
                      color: "rgba(245,242,236,0.65)",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(245,242,236,0.04)",
                    }}
                  >
                    <span style={{ color: col.color, fontWeight: 700, flexShrink: 0, fontSize: "0.78rem", paddingTop: "0.1rem" }}>
                      {col.color === "#4caf7d" ? "✓" : "✕"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SecBlock>

      {/* GEAR */}
      <SecBlock>
        <SecHead eyebrow="Preparation" title="What to pack." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {pkg.gear.map((g) => (
            <div
              key={g.category}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "1.3rem",
              }}
            >
              <h5
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "var(--saffron)",
                  marginBottom: "0.8rem",
                }}
              >
                {g.category}
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {g.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "rgba(245,242,236,0.6)",
                      padding: "0.3rem 0",
                      borderBottom: "1px solid rgba(245,242,236,0.04)",
                      fontSize: "0.79rem",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SecBlock>

    </div>
  );
}
