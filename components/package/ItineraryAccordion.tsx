"use client";
import { useState } from "react";
import { ItineraryDay } from "@/data/packages";

function renderDesc(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-stone-900 dark:text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function ItineraryAccordion({ days }: { days: ItineraryDay[] }) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <div className="divide-y divide-stone-200 dark:divide-white/10 border-b border-stone-200 dark:border-white/10">
      {days.map((day, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="overflow-hidden">
            {/* ==========================================
                ACCORDION TRIGGER HEADER
               ========================================== */}
            <div
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="flex items-center gap-3 sm:gap-5 py-5 cursor-pointer select-none group"
            >
              {/* Day Badge Label */}
              <span
                className={`font-['Syne'] font-bold text-[0.7rem] tracking-wider uppercase px-2.5 py-1.5 rounded-sm min-w-[60px] text-center transition-all duration-200 shrink-0 border ${
                  isOpen
                    ? "bg-[var(--saffron)] border-[var(--saffron)] text-[#1a1208]"
                    : "bg-stone-50 dark:bg-white/[0.02] border-stone-200 dark:border-white/10 text-stone-500 dark:text-stone-400 group-hover:border-[var(--saffron)]/50"
                }`}
              >
                {day.day}
              </span>

              {/* Title Route Segment */}
              <span className="font-['Syne'] font-bold text-[0.92rem] sm:text-[0.98rem] flex-1 pr-2 leading-snug text-stone-900 dark:text-white group-hover:text-[var(--saffron)] transition-colors">
                {day.name}
              </span>

              {/* Quick Summary Pill Badges (Hidden on micro mobile windows, clean on small tablets) */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                {[`🏔️ ${day.altitude}`, `⏱️ ${day.walk}`].map((pill) => (
                  <span
                    key={pill}
                    className="text-[0.68rem] text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 px-2 py-1 rounded-sm whitespace-nowrap"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Expand Indicator Chevron */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`text-stone-400 dark:text-stone-500 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[var(--saffron)]" : "rotate-0"
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* ==========================================
                DYNAMIC COLLAPSIBLE CONTENT CONTAINER
               ========================================== */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-[1000px] opacity-100 mb-6"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="pl-0 sm:pl-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-start pt-1 pb-4">
                {/* Longform Text Block */}
                <p className="text-[0.87rem] leading-relaxed text-stone-600 dark:text-stone-400/90 m-0">
                  {renderDesc(day.description)}
                </p>

                {/* Tactical Day-Metrics Spec Rack */}
                <div className="flex flex-row md:flex-col flex-wrap gap-x-5 gap-y-2 bg-stone-50 dark:bg-white/[0.01] md:bg-transparent dark:md:bg-transparent p-3 md:p-0 rounded border md:border-0 border-stone-200 dark:border-white/5 min-w-full md:min-w-[155px]">
                  {[
                    { icon: "🏔️", val: day.altitude, label: "Altitude" },
                    { icon: "⏱️", val: day.walk, label: "Duration" },
                    { icon: "🏠", val: day.accommodation, label: "Lodging" },
                  ].map((r, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-[0.75rem] text-stone-500 dark:text-stone-400"
                    >
                      <span className="text-sm shrink-0">{r.icon}</span>
                      <span className="truncate">
                        <span className="inline md:hidden text-stone-400 dark:text-stone-500 font-medium">
                          {r.label}:{" "}
                        </span>
                        {r.val}
                      </span>
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
