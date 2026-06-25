"use client";
import { useEffect } from "react";
import { Package } from "@/data/packages";
import PackageHero from "./PackageHero";
import PackageMainContent from "./PackageMainContent";
import BookingSidebar from "./BookingSidebar";
import Link from "next/link";

export default function PackageClientBody({
  pkg,
  similar,
}: {
  pkg: Package;
  similar: Package[];
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pkg.slug]);

  return (
    <>
      <PackageHero pkg={pkg} />

      {/* Body grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 3rem",
        }}
      >
        <PackageMainContent pkg={pkg} />
        <aside style={{ padding: "3rem 0 3rem 3rem" }}>
          <BookingSidebar pkg={pkg} />
        </aside>
      </div>

      {/* Similar packages */}
      {similar.length > 0 && (
        <div
          style={{
            padding: "5rem 3rem",
            borderTop: "1px solid var(--border)",
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          <div className="section-eyebrow" style={{ marginBottom: "0.7rem" }}>
            You May Also Like
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: "-0.03em",
              marginBottom: "2.5rem",
            }}
          >
            Similar adventures.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {similar.map((sim) => (
              <Link
                key={sim.slug}
                href={`/packages/${sim.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  style={{
                    borderRadius: "6px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    transition: "transform 0.3s, border-color 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-5px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--saffron)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--border)";
                  }}
                >
                  <div style={{ height: 180, overflow: "hidden" }}>
                    <img
                      src={sim.heroImage}
                      alt={sim.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ padding: "1.2rem" }}>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "0.4rem",
                        color: "var(--snow)",
                      }}
                    >
                      {sim.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--mist)",
                        marginBottom: "0.8rem",
                      }}
                    >
                      {sim.duration} · {sim.maxAltitude} · {sim.difficulty}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        color: "var(--saffron)",
                        fontSize: "1.1rem",
                      }}
                    >
                      From ${sim.priceFrom.toLocaleString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
