"use client";
import { Package } from "@/data/packages";
import PackageGallery from "./PackageGallery";
import ElevationChart from "./ElevationChart";
import ItineraryAccordion from "./ItineraryAccordion";

function renderText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[#1a1208] dark:text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function SecBlock({ children }: { children: React.ReactNode }) {
  return <div className="mb-14 md:mb-20">{children}</div>;
}

function SecHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-2">
        {eyebrow}
      </div>
      <h2 className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tighter text-[#1a1208] dark:text-white leading-tight">
        {title}
      </h2>
    </div>
  );
}

export default function PackageMainContent({ pkg }: { pkg: Package }) {
  return (
    <div className="w-full max-w-[1400px] bg-white mx-auto px-4 py-12 md:py-16 lg:pr-12 lg:pl-0 lg:py-20 border-r-0 lg:border-r border-stone-200 dark:border-white/10 transition-colors duration-300">
      {/* 📊 DYNAMIC STAT CARDS ACCORDION TRACK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-lg overflow-hidden mb-14 md:mb-20 shadow-sm">
        {[
          {
            icon: "🏔️",
            num: pkg.maxAltitude,
            label: "Highest Point",
            sub: `${pkg.category === "mtb" ? "Max altitude reached" : "Above sea level"}`,
          },
          {
            icon: "📅",
            num: pkg.duration,
            label: "Total Duration",
            sub: "Kathmandu to Kathmandu",
          },
          {
            icon: "📏",
            num: pkg.distance,
            label: pkg.category === "mtb" ? "Total Riding" : "Total Distance",
            sub: "Full route",
          },
          {
            icon: "⬆️",
            num: pkg.elevationGain,
            label: "Elevation Gain",
            sub: `From ${pkg.trailStart}`,
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-[#1a1208] p-6 md:p-7 transition-colors duration-200 hover:bg-stone-50 dark:hover:bg-white/[0.03]"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <div className="font-['Syne'] font-extrabold text-xl md:text-2xl text-[var(--saffron)] leading-none">
              {s.num}
            </div>
            <div className="text-[0.72rem] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-2 mb-1">
              {s.label}
            </div>
            <div className="text-[0.78rem] text-stone-600 dark:text-stone-400/70">
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* 📖 OVERVIEW FIELD */}
      <SecBlock>
        <SecHead eyebrow="Overview" title="The full picture." />
        <div className="space-y-4">
          {pkg.overview.map((para, i) => (
            <p
              key={i}
              className="text-[0.95rem] leading-relaxed text-stone-600 dark:text-stone-300"
            >
              {renderText(para)}
            </p>
          ))}
        </div>
      </SecBlock>

      {/* 🎯 HIGHLIGHTS COMPASS SPLITTER */}
      <SecBlock>
        <SecHead eyebrow="Highlights" title="What you'll experience." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pkg.highlights.map((hl, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5 bg-white dark:bg-[#1a1208] border border-stone-200 dark:border-white/10 rounded-md transition-all duration-200 hover:border-[var(--saffron)]/40 dark:hover:border-[var(--saffron)]/40 shadow-sm"
            >
              <span className="font-['Syne'] font-extrabold text-[0.75rem] text-[var(--saffron)] min-w-[1.5rem] pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong className="text-[#1a1208] dark:text-white font-bold block mb-1 text-[0.92rem]">
                  {hl.title}
                </strong>
                <span className="text-[0.85rem] leading-relaxed text-stone-600 dark:text-stone-400">
                  {hl.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SecBlock>

      {/* 🖼️ GALLERY CANVAS MODULE */}
      <SecBlock>
        <SecHead eyebrow="Gallery" title="The trail in pictures." />
        <PackageGallery images={pkg.galleryImages} />
      </SecBlock>

      {/* 📉 ELEVATION METRIC ENGINE */}
      <SecBlock>
        <SecHead eyebrow="Elevation Profile" title="The climb, day by day." />
        <ElevationChart data={pkg.elevation} />
      </SecBlock>

      {/* 🗓️ ITINERARY ACCORDION SYSTEM */}
      <SecBlock>
        <SecHead eyebrow="Day by Day" title="Full itinerary." />
        <ItineraryAccordion days={pkg.itinerary} />
      </SecBlock>

      {/* 🗺️ VECTOR ROUTE TOPO MAP BOX */}
      <SecBlock>
        <SecHead eyebrow="Route" title="The trail map." />
        <div className="rounded-lg overflow-hidden relative h-[260px] sm:h-[340px] bg-[#1a2420] border border-stone-200 dark:border-white/10 shadow-inner">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20 transition-all mix-blend-luminosity pointer-events-none"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=60')",
            }}
          />
          {/* Scrollable vector canvas track on ultra-compact layouts */}
          <div className="absolute inset-0 overflow-x-auto overflow-y-hidden flex items-center justify-start lg:justify-center p-4">
            <svg
              viewBox="0 0 700 300"
              fill="none"
              className="w-[680px] lg:w-[88%] max-w-[680px] shrink-0"
            >
              {pkg.mapRoutePoints.length > 1 && (
                <polyline
                  points={pkg.mapRoutePoints
                    .map((p) => `${p.x},${p.y}`)
                    .join(" ")}
                  className="stroke-[var(--saffron)] stroke-[2.5]"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {pkg.mapRoutePoints.map((pt, i) => (
                <g key={i}>
                  {pt.isHighlight ? (
                    <>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="9"
                        fill="none"
                        className="stroke-[var(--saffron)] stroke-[2]"
                      />
                      <circle cx={pt.x} cy={pt.y} r="4" fill="var(--saffron)" />
                    </>
                  ) : (
                    <circle cx={pt.x} cy={pt.y} r="5" fill="var(--saffron)" />
                  )}
                  <text
                    x={pt.x + 12}
                    y={pt.y + 4}
                    fill={pt.isHighlight ? "var(--saffron)" : "#FAF7F2"}
                    className={`text-[10px] font-sans ${pt.isHighlight ? "font-bold" : "font-normal"}`}
                  >
                    {pt.name}
                  </text>
                  <text
                    x={pt.x + 12}
                    y={pt.y + 16}
                    fill="#FAF7F2"
                    className="text-[8.5px] font-sans opacity-60"
                  >
                    {pt.altitude}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </SecBlock>

      {/* 💵 PRICING MATRIX TRADELINE INCLUDES/EXCLUDES */}
      <SecBlock>
        <SecHead eyebrow="Pricing" title="What's included." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "✓ Included",
              items: pkg.included,
              colorClass: "text-emerald-600 dark:text-emerald-400",
              check: "✓",
            },
            {
              title: "✕ Not Included",
              items: pkg.excluded,
              colorClass: "text-red-600 dark:text-red-400",
              check: "✕",
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-['Syne'] font-bold text-[0.82rem] tracking-wider uppercase pb-3 border-b border-stone-200 dark:border-white/10 text-[#1a1208] dark:text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-[0.85rem] leading-relaxed text-stone-600 dark:text-stone-400 py-1.5 border-b border-stone-100 dark:border-white/[0.02]"
                  >
                    <span
                      className={`${col.colorClass} font-bold shrink-0 text-sm mt-0.5`}
                    >
                      {col.check}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SecBlock>

      {/* 🎒 PACKING & GEAR SELECTOR RACKS */}
      <SecBlock>
        <SecHead eyebrow="Preparation" title="What to pack." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pkg.gear.map((g) => (
            <div
              key={g.category}
              className="bg-white dark:bg-[#1a1208] border border-stone-200 dark:border-white/10 rounded-md p-5 shadow-sm"
            >
              <h5 className="font-['Syne'] font-bold text-[0.82rem] tracking-wider text-[var(--saffron)] uppercase mb-3">
                {g.category}
              </h5>
              <ul className="space-y-1">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-stone-600 dark:text-stone-400 py-1 border-b border-stone-100 dark:border-white/[0.02] text-[0.82rem]"
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
