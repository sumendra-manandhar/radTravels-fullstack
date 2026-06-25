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

      {/* 🏛️ Main Page Split Layout Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] px-4 sm:px-6 lg:px-12 gap-0 lg:gap-12">
        {/* Main Content Area */}
        <main className="w-full min-w-0 order-1">
          <PackageMainContent pkg={pkg} />
        </main>

        {/* Dynamic Sidebar - Drops cleanly beneath main details on mobile screens */}
        <aside className="w-full lg:w-[340px] pt-4 pb-12 lg:py-20 order-2 lg:order-2 border-t lg:border-t-0 border-stone-200 dark:border-white/10 mt-8 lg:mt-0">
          <div className="sticky top-24">
            <BookingSidebar pkg={pkg} />
          </div>
        </aside>
      </div>

      {/* 🔄 Related Adventures Track */}
      {similar.length > 0 && (
        <div className="border-t border-stone-200 dark:border-white/10 bg-[#FAF7F2] dark:bg-[#15110C] transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-2">
              You May Also Like
            </div>
            <h2 className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tighter text-[#1a1208] dark:text-white mb-10">
              Similar adventures.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((sim) => (
                <Link
                  key={sim.slug}
                  href={`/packages/${sim.slug}`}
                  className="group block no-underline color-inherit text-inherit"
                >
                  <div className="h-full rounded-lg overflow-hidden border border-stone-200 dark:border-white/10 bg-white dark:bg-[#1a1208] shadow-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:border-[var(--saffron)]">
                    {/* Card Thumbnail Image */}
                    <div className="h-44 sm:h-48 overflow-hidden relative bg-stone-100 dark:bg-stone-900">
                      <img
                        src={sim.heroImage}
                        alt={sim.name}
                        className="w-full h-full object-cover block object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Content Meta Text Block */}
                    <div className="p-5">
                      <div className="font-['Syne'] font-bold text-[1.05rem] leading-snug mb-1 text-[#1a1208] dark:text-white transition-colors group-hover:text-[var(--saffron)]">
                        {sim.name}
                      </div>
                      <div className="text-[0.78rem] tracking-wide text-stone-500 dark:text-stone-400 mb-4">
                        {sim.duration} · {sim.maxAltitude} · {sim.difficulty}
                      </div>
                      <div className="font-['Syne'] font-extrabold text-lg text-[var(--saffron)] leading-none">
                        From ${sim.priceFrom.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
