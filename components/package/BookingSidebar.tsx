"use client";
import { useState } from "react";
import { Package } from "@/data/packages";

export default function BookingSidebar({ pkg }: { pkg: Package }) {
  const [people, setPeople] = useState("2 people");
  const [pkgTier, setPkgTier] = useState<"standard" | "premium" | "gold">(
    "standard",
  );

  const prices = {
    standard: pkg.priceFrom,
    premium: pkg.pricePremium ?? pkg.priceFrom + 500,
    gold: pkg.priceGold ?? pkg.priceFrom + 1200,
  };

  const price = prices[pkgTier];

  return (
    <div className="w-full space-y-6 lg:sticky lg:top-24">
      {/* ==========================================
          1. PRIMARY BOOKING CONVERSION CARD
         ========================================== */}
      <div
        id="book"
        className="w-full bg-stone-50 dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 rounded-lg overflow-hidden shadow-sm"
      >
        {/* Dynamic Pricing Header Frame */}
        <div className="bg-[#1c2420] p-6 md:p-8 text-center border-b border-stone-200 dark:border-white/10">
          <div className="text-[0.7rem] text-stone-300 dark:text-stone-400 font-bold tracking-[0.15em] uppercase">
            Starting from
          </div>
          <div className="font-['Syne'] font-extrabold text-4xl md:text-5xl text-[var(--saffron)] my-1.5 leading-none tracking-tighter">
            ${price.toLocaleString()}
          </div>
          <div className="text-[0.75rem] text-white/50">
            per person · all-inclusive
          </div>
        </div>

        {/* Transaction Parameters Form Field */}
        <div className="p-6 space-y-5">
          {/* Departure Date Calendar Picker */}
          <div>
            <label className="block text-[0.72rem] font-bold tracking-[0.1em] uppercase text-stone-500 dark:text-stone-400 mb-2">
              Departure Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-white dark:bg-white/[0.04] border border-stone-200 dark:border-white/10 rounded text-stone-800 dark:text-white text-[0.88rem] outline-none transition focus:border-[var(--saffron)] color-scheme-light dark:color-scheme-dark"
            />
          </div>

          {/* Pax Metric Dropdown Selector */}
          <div>
            <label className="block text-[0.72rem] font-bold tracking-[0.1em] uppercase text-stone-500 dark:text-stone-400 mb-2">
              Number of People
            </label>
            <div className="relative">
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full px-4 py-3 bg-white dark:bg-white/[0.04] border border-stone-200 dark:border-white/10 rounded text-stone-800 dark:text-white text-[0.88rem] outline-none appearance-none transition focus:border-[var(--saffron)] cursor-pointer"
              >
                {[
                  "1 person (solo)",
                  "2 people",
                  "3–5 people",
                  "6–10 people",
                  "Private group (10+)",
                ].map((o) => (
                  <option
                    key={o}
                    value={o}
                    className="bg-white dark:bg-[#1a1208] text-stone-800 dark:text-white"
                  >
                    {o}
                  </option>
                ))}
              </select>
              {/* Native Dropdown Custom Arrow Accent */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tier Configuration Selector Array */}
          <div>
            <label className="block text-[0.72rem] font-bold tracking-[0.1em] uppercase text-stone-500 dark:text-stone-400 mb-2">
              Package Type
            </label>
            <div className="flex flex-col gap-2">
              {(["standard", "premium", "gold"] as const).map((tier) => {
                const isActive = pkgTier === tier;
                return (
                  <div
                    key={tier}
                    onClick={() => setPkgTier(tier)}
                    className={`flex justify-between items-center px-4 py-3 rounded border cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "border-[var(--saffron)] bg-[var(--saffron)]/[0.08]"
                        : "border-stone-200 dark:border-white/10 bg-transparent hover:bg-stone-100 dark:hover:bg-white/[0.01]"
                    }`}
                  >
                    <span
                      className={`text-[0.82rem] capitalize ${isActive ? "font-bold text-stone-900 dark:text-white" : "text-stone-600 dark:text-stone-400"}`}
                    >
                      {tier === "gold" ? "Gold (Private)" : tier}
                    </span>
                    <span
                      className={`font-['Syne'] font-bold text-[0.9rem] ${isActive ? "text-[var(--saffron)]" : "text-stone-500 dark:text-stone-400"}`}
                    >
                      ${prices[tier].toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Primary & Secondary Call To Actions */}
          <div className="space-y-2 pt-2">
            <button className="w-full py-3.5 bg-[var(--saffron)] hover:bg-[#f5a02e] text-[#1a1208] font-['Syne'] font-extrabold text-[0.9rem] tracking-wider uppercase rounded transition-colors duration-200 shadow-sm active:scale-[0.99]">
              Book This Trip
            </button>

            <button className="w-full py-3 bg-transparent hover:bg-stone-100 dark:hover:bg-white/[0.03] text-stone-800 dark:text-white font-['Syne'] font-semibold text-[0.82rem] tracking-wider uppercase rounded border border-stone-200 dark:border-white/10 transition-colors">
              📧 Request Custom Quote
            </button>
          </div>

          {/* Secure Trust Indicators Pillar */}
          <div className="pt-4 border-t border-stone-200 dark:border-white/10 space-y-2">
            {[
              { icon: "✅", text: "Free cancellation up to 30 days before" },
              {
                icon: "🔒",
                text: "Secure booking · No payment until confirmed",
              },
              { icon: "📞", text: "24/7 support on WhatsApp" },
            ].map((r, idx) => (
              <div
                key={idx}
                className="flex gap-2.5 items-start text-[0.77rem] text-stone-500 dark:text-stone-400/80 leading-tight"
              >
                <span className="shrink-0">{r.icon}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          2. HARD FACTS SPECIFICATION TABLE
         ========================================== */}
      <div className="w-full bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 rounded-lg p-5 md:p-6 shadow-sm">
        <h4 className="font-['Syne'] font-bold text-[0.75rem] tracking-[0.15em] uppercase text-stone-500 dark:text-stone-400 mb-4">
          Trip Facts
        </h4>
        <div className="divide-y divide-stone-100 dark:divide-white/[0.04]">
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
              className="flex justify-between items-center py-2.5 text-[0.82rem]"
            >
              <span className="text-stone-500 dark:text-stone-400">
                {row.key}
              </span>
              <span
                className={`font-medium text-right max-w-[55%] truncate ${row.highlight ? "text-[var(--saffron)] font-bold" : "text-stone-800 dark:text-stone-200"}`}
              >
                {row.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          3. CLIMATOLOGY SEASONAL GRAPH RATINGS
         ========================================== */}
      <div className="w-full bg-white dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 rounded-lg p-5 md:p-6 shadow-sm">
        <h4 className="font-['Syne'] font-bold text-[0.75rem] tracking-[0.15em] uppercase text-stone-500 dark:text-stone-400 mb-4">
          Best Months
        </h4>

        {/* Twelve Month Matrix Container Block */}
        <div className="grid grid-cols-4 gap-1.5">
          {pkg.bestMonths.map((m) => {
            const isBest = m.status === "best";
            const isOk = m.status === "ok";
            return (
              <div
                key={m.month}
                className={`text-center py-2 rounded text-[0.67rem] font-bold border tracking-wide transition-colors ${
                  isBest
                    ? "bg-[var(--saffron)]/[0.15] text-[var(--saffron)] border-[var(--saffron)]/30"
                    : isOk
                      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20"
                      : "bg-stone-50 dark:bg-white/[0.02] text-stone-400 dark:text-stone-600 border-stone-200 dark:border-white/5"
                }`}
              >
                {m.month}
              </div>
            );
          })}
        </div>

        {/* Legend Mapping Index Indicator Row */}
        <div className="flex gap-4 mt-4 text-[0.72rem] font-medium border-t border-stone-100 dark:border-white/[0.04] pt-3">
          <span className="text-[var(--saffron)] flex items-center gap-1">
            ■ Best
          </span>
          <span className="text-sky-600 dark:text-sky-400 flex items-center gap-1">
            ■ Good
          </span>
          <span className="text-stone-400 dark:text-stone-600 flex items-center gap-1">
            ■ Avoid
          </span>
        </div>
      </div>
    </div>
  );
}
