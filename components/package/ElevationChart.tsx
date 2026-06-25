"use client";
import { useEffect, useRef, useState } from "react";
import { ElevationPoint } from "@/data/packages";

export default function ElevationChart({ data }: { data: ElevationPoint[] }) {
  const pathRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; alt: number } | null>(null);

  const W = 700, H = 130, PAD = 22;
  const minAlt = Math.min(...data.map((d) => d.altitude)) - 200;
  const maxAlt = Math.max(...data.map((d) => d.altitude)) + 200;

  const xs = data.map((_, i) => PAD + (i / (data.length - 1)) * (W - PAD * 2));
  const ys = data.map((d) => H - PAD - ((d.altitude - minAlt) / (maxAlt - minAlt)) * (H - PAD * 2));

  const linePts = xs.map((x, i) => `${x},${ys[i]}`).join(" L ");
  const dLine = `M ${linePts}`;
  const dFill = `M ${xs[0]},${H} L ${linePts} L ${xs[xs.length - 1]},${H} Z`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          const path = pathRef.current;
          if (path) {
            const len = path.getTotalLength();
            path.style.strokeDasharray = `${len}`;
            path.style.strokeDashoffset = `${len}`;
            path.style.transition = "stroke-dashoffset 2s ease-out";
            requestAnimationFrame(() => { path.style.strokeDashoffset = "0"; });
          }
        }
      },
      { threshold: 0.3 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [animated]);

  const peakIdx = data.findIndex((d) => d.altitude === Math.max(...data.map((p) => p.altitude)));

  return (
    <div
      ref={wrapRef}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "1.8rem",
      }}
    >
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.2rem", color: "var(--snow)" }}>
        Elevation Profile — Day by Day
      </div>

      <div style={{ position: "relative" }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: "100%", height: "auto", overflow: "visible" }}
          onMouseLeave={() => setTooltip(null)}
        >
          <defs>
            <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8870A" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E8870A" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path ref={fillRef} d={dFill} fill="url(#elevGrad)" />
          <path ref={pathRef} d={dLine} fill="none" stroke="var(--saffron)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Dots */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={xs[i]}
              cy={ys[i]}
              r={i === peakIdx ? 7 : 4}
              fill={i === peakIdx ? "#fff" : "var(--saffron)"}
              stroke="var(--earth)"
              strokeWidth={2}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setTooltip({ x: xs[i], y: ys[i], label: d.label, alt: d.altitude })}
            />
          ))}

          {/* Peak label */}
          {data[peakIdx] && (
            <text
              x={xs[peakIdx]}
              y={ys[peakIdx] - 12}
              textAnchor="middle"
              fill="#fff"
              fontSize="9"
              fontFamily="Inter"
              fontWeight="600"
            >
              {data[peakIdx].altitude.toLocaleString()}m
            </text>
          )}

          {/* Start label */}
          <text x={xs[0]} y={ys[0] - 10} textAnchor="middle" fill="var(--mist)" fontSize="8" fontFamily="Inter">
            {data[0].altitude.toLocaleString()}m
          </text>
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div
            style={{
              position: "absolute",
              left: `${(tooltip.x / W) * 100}%`,
              top: `${(tooltip.y / H) * 100}%`,
              transform: "translate(-50%, -120%)",
              background: "var(--earth)",
              border: "1px solid var(--saffron)",
              padding: "0.4rem 0.7rem",
              borderRadius: "3px",
              fontSize: "0.72rem",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            <strong style={{ color: "var(--saffron)" }}>{tooltip.label}</strong>
            <br />
            {tooltip.alt.toLocaleString()}m
          </div>
        )}
      </div>

      {/* Day labels */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.6rem" }}>
        {data.map((d, i) => (
          <span key={i} style={{ fontSize: "0.62rem", color: "var(--mist)", letterSpacing: "0.05em" }}>
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
}
