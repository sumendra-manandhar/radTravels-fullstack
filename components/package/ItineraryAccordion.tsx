"use client";
import { useState } from "react";
import { ItineraryDay } from "@/data/packages";

function renderDesc(text: string) {
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

export default function ItineraryAccordion({ days }: { days: ItineraryDay[] }) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <div>
      {days.map((day, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            style={{ borderBottom: "1px solid var(--border)", overflow: "hidden" }}
          >
            {/* Header */}
            <div
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
                padding: "1.2rem 0",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  background: isOpen ? "var(--saffron)" : "var(--card-bg)",
                  color: isOpen ? "var(--earth)" : "var(--mist)",
                  border: `1px solid ${isOpen ? "var(--saffron)" : "var(--border)"}`,
                  padding: "0.3rem 0.65rem",
                  borderRadius: "2px",
                  minWidth: 60,
                  textAlign: "center",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {day.day}
              </span>

              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.98rem",
                  flex: 1,
                  lineHeight: 1.3,
                }}
              >
                {day.name}
              </span>

              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                {[`🏔️ ${day.altitude}`, `⏱️ ${day.walk}`].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--mist)",
                      background: "var(--card-bg)",
                      border: "1px solid var(--border)",
                      padding: "0.22rem 0.55rem",
                      borderRadius: "2px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--mist)"
                strokeWidth="2"
                style={{
                  flexShrink: 0,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Body */}
            <div
              className={`itin-body ${isOpen ? "open" : ""}`}
            >
              <div
                style={{
                  paddingBottom: "1.6rem",
                  paddingLeft: "4rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1.5rem",
                  alignItems: "start",
                }}
              >
                <p
                  style={{
                    fontSize: "0.87rem",
                    lineHeight: 1.75,
                    color: "rgba(245,242,236,0.6)",
                    margin: 0,
                  }}
                >
                  {renderDesc(day.description)}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", minWidth: 155 }}>
                  {[
                    { icon: "🏔️", val: day.altitude },
                    { icon: "⏱️", val: day.walk },
                    { icon: "🏠", val: day.accommodation },
                  ].map((r) => (
                    <div
                      key={r.icon}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        fontSize: "0.75rem",
                        color: "rgba(245,242,236,0.5)",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem" }}>{r.icon}</span>
                      <span>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
