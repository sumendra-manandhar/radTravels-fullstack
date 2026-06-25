"use client";
import Link from "next/link";
import { Package, difficultyColor } from "@/data/packages";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="no-underline text-inherit block group"
    >
      <div className="h-full bg-[var(--card-bg)] border border-stone-200 dark:border-[var(--border)] rounded-md overflow-hidden cursor-pointer shadow-sm dark:shadow-none transition-all duration-300 transform translate-y-0 hover:-translate-y-2 hover:border-[var(--saffron)] dark:hover:border-[var(--saffron)] flex flex-col">
        {/* Card Image Wrap */}
        <div className="h-56 overflow-hidden relative w-full">
          <img
            src={pkg.heroImage}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-500 transform scale-100 group-hover:scale-105 block"
          />
          {/* Difficulty Badge */}
          <span
            className={`${difficultyColor[pkg.difficulty]} absolute top-4 left-4 text-white font-['Syne'] font-bold text-[0.65rem] tracking-[0.12em] uppercase px-2.5 py-1.5 rounded-[2px] shadow-sm`}
          >
            {pkg.difficulty}
          </span>
        </div>

        {/* Card Content Body */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            {/* Quick Specs Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-3 text-[0.72rem] tracking-wider uppercase font-medium text-stone-500 dark:text-[var(--mist)]">
              <span className="flex items-center gap-1">📅 {pkg.duration}</span>
              <span className="flex items-center gap-1">
                🏔️ {pkg.maxAltitude}
              </span>
              <span className="flex items-center gap-1">
                👥 {pkg.groupSize}
              </span>
            </div>

            {/* Trip Title */}
            <h3 className="font-['Syne'] font-bold text-[1.15rem] leading-snug mb-2 text-[var(--earth)] dark:text-[var(--snow)]">
              {pkg.name}
            </h3>

            {/* Clamped Snippet/Tagline */}
            <p className="text-[0.83rem]确 leading-relaxed text-stone-600 dark:text-stone-400 mb-5 line-clamp-3">
              {pkg.tagline}
            </p>
          </div>

          {/* Pricing & CTA Wing Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-[var(--border)] mt-auto">
            <div>
              <span className="text-[0.68rem] font-medium uppercase tracking-wider text-stone-400 dark:text-[var(--mist)] block">
                From
              </span>
              <span className="font-['Syne'] font-extrabold text-[1.35rem] text-[var(--saffron)]">
                ${pkg.priceFrom.toLocaleString()}
              </span>
            </div>

            {/* Context Interactive Label */}
            <span className="text-[0.75rem] tracking-widest uppercase font-bold font-['Syne'] text-[var(--earth)] dark:text-[var(--snow)] group-hover:text-[var(--saffron)] dark:group-hover:text-[var(--saffron)] transition-colors duration-200">
              View Trip →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
