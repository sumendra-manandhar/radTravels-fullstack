"use client";
import { useState } from "react";
import { packages } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";

export default function PackagesSection() {
  const [active, setActive] = useState<"trekking" | "mtb">("trekking");

  const filtered = packages.filter((p) => p.category === active);

  return (
    <section
      id="packages"
      /* Section Background: Shifts from clean light-stone to a rich, visible deep alpine green */
      className="w-full bg-white dark:bg-[#151a17] px-6 py-16 md:px-12 md:py-24 transition-colors duration-300"
    >
      {/* Header Block */}
      <header className="mb-12">
        <span className="block text-xs font-bold tracking-[0.2em] uppercase text-[#e8870a] mb-3">
          Choose Your Adventure
        </span>
        {/* Title Text: Earth charcoal in light mode -> Crisp bright cream ivory in dark mode */}
        <h2 className="font-['Syne'] font-extrabold text-[clamp(2.5rem,5vw,4rem)] tracking-tighter leading-[1.05] text-[#1a1208] dark:text-[#f5f2ec]">
          Trekking &amp;
          <br />
          MTB Packages.
        </h2>
      </header>

      {/* Filter & Metrics Control Hub */}
      {/* Border Line: Muted stone in light -> Clearly visible soft line separator in dark mode */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-stone-200 dark:border-white/10 pb-6 mb-10">
        {/* Toggle Pills Capsule Container */}
        {/* Container Track: Neutral soft-grey -> Clearly defined deep contrast box track */}
        <div className="flex items-center gap-2 bg-stone-100 dark:bg-black/30 p-1.5 rounded-lg w-fit border border-transparent dark:border-white/5">
          {(["trekking", "mtb"] as const).map((cat) => {
            const isSelected = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 font-['Syne'] font-bold text-xs tracking-wider uppercase rounded-md transition-all duration-200 ${
                  isSelected
                    ? /* Active Pill: Crisp white card in light -> Bright luminous evergreen box in dark mode */
                      "bg-white text-[#1a1208] shadow-sm dark:bg-[#233329] dark:text-white dark:shadow-md"
                    : /* Inactive Pill: Slate grey -> High contrast silver-grey with a clean white text pop on hover */
                      "bg-transparent text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-white"
                }`}
              >
                {cat === "trekking" ? "🥾 Trekking" : "🚵 MTB Tracks"}
              </button>
            );
          })}
        </div>

        {/* Quantifiable Meta-Counter */}
        {/* Typography: Gray code font -> Clear silver tracking reading with bright saffron pop */}
        <div className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Showing{" "}
          <span className="font-bold text-[#1a1208] dark:text-[#f49b23]">
            {filtered.length}
          </span>{" "}
          of {packages.length} options
        </div>
      </div>

      {/* Grid Canvas */}
      <main className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </main>
    </section>
  );
}
