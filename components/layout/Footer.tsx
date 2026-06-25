import Link from "next/link";
import { packages } from "@/data/packages";

export default function Footer() {
  const trekking = packages.filter((p) => p.category === "trekking");
  const mtb = packages.filter((p) => p.category === "mtb");

  // High-conversion social architecture layout array
  const crossPlatformSocials = [
    {
      name: "Instagram",
      handle: "@radtravelsnepal",
      url: "https://instagram.com/radtravelsnepal",
      icon: "📸",
      accentBg:
        "group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-red-500 group-hover:to-purple-600",
      description: "Daily trail conditions & reels",
    },
    {
      name: "WhatsApp",
      handle: "+977 980-0000000",
      url: "https://wa.me/9779800000000",
      icon: "💬",
      accentBg: "group-hover:bg-[#25D366]",
      description: "Instant chat & expedition custom bookings",
    },
    {
      name: "YouTube",
      handle: "Rad Travels Himalaya",
      url: "https://youtube.com/radtravels",
      icon: "📺",
      accentBg: "group-hover:bg-[#FF0000]",
      description: "MTB route breakdowns & trek guides",
    },
    {
      name: "Email Dispatch",
      handle: "info@radtravels.com",
      url: "mailto:info@radtravels.com",
      icon: "📧",
      accentBg: "group-hover:bg-[var(--saffron)]",
      description: "Get seasonal custom itineraries",
    },
  ];

  return (
    <footer className="bg-[#15110c] border-t border-stone-800 px-6 py-16 md:px-12 lg:px-20 text-stone-300 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        {/* ==========================================================
            🚀 NEW HIGH-IMPACT PLATFORM RUNWAY (BIGGER ANIMATED SOCIALS)
           ========================================================== */}
        <div className="mb-20">
          <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-3">
            Connect Across Platforms
          </div>
          <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tighter text-stone-100 mb-8">
            Follow our expeditions live.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {crossPlatformSocials.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative p-5 bg-white/[0.02] hover:bg-white/[0.04] border border-stone-800 hover:border-stone-700/80 rounded-xl transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  {/* Fluid Dynamic Icon Enclosure Bubble */}
                  <div
                    className={`w-14 h-14 shrink-0 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-2xl transition-all duration-500 scale-100 group-hover:scale-110 shadow-inner ${platform.accentBg}`}
                  >
                    <span className="transition-transform duration-300 group-hover:animate-bounce">
                      {platform.icon}
                    </span>
                  </div>

                  {/* Operational Platform Text Strings */}
                  <div className="min-w-0">
                    <div className="font-['Syne'] font-bold text-[1.05rem] text-stone-200 group-hover:text-[var(--saffron)] transition-colors flex items-center gap-1.5">
                      {platform.name}
                      <span className="text-xs transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 text-[var(--saffron)]">
                        →
                      </span>
                    </div>
                    <div className="text-[0.82rem] font-medium text-stone-400 truncate mt-0.5">
                      {platform.handle}
                    </div>
                  </div>
                </div>

                {/* Secondary Feature Sub-text Track */}
                <div className="mt-4 pt-3 border-t border-stone-900 text-[0.74rem] text-stone-500 leading-normal group-hover:text-stone-400 transition-colors">
                  {platform.description}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ==========================================
            PRIMARY EXPLORATORY LINK LINKS
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16 pt-4">
          {/* Brand & Corporate Overview */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-['Syne'] font-extrabold text-[1.4rem] text-stone-100 tracking-tight block hover:opacity-90"
            >
              Rad<span className="text-[var(--saffron)]">Travels</span>
            </Link>
            <p className="text-[0.85rem] leading-[1.7] text-stone-400 max-w-[280px]">
              Expert-guided trekking and mountain biking in Nepal since 2006.
              Kathmandu-based. Himalaya-obsessed.
            </p>
          </div>

          {/* Category Track: Trekking Packages */}
          <div>
            <h4 className="font-['Syne'] font-bold text-[0.72rem] tracking-[0.15em] uppercase text-stone-400 mb-[1.2rem]">
              Trekking
            </h4>
            <ul className="list-none p-0 m-0 space-y-[0.6rem]">
              {trekking.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/packages/${p.slug}`}
                    className="text-[0.85rem] text-stone-400 hover:text-[var(--saffron)] transition-colors duration-200 block"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Track: MTB Adventures */}
          <div>
            <h4 className="font-['Syne'] font-bold text-[0.72rem] tracking-[0.15em] uppercase text-stone-400 mb-[1.2rem]">
              MTB
            </h4>
            <ul className="list-none p-0 m-0 space-y-[0.6rem]">
              {mtb.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/packages/${p.slug}`}
                    className="text-[0.85rem] text-stone-400 hover:text-[var(--saffron)] transition-colors duration-200 block"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Base Matrix Anchor Racks */}
          <div>
            <h4 className="font-['Syne'] font-bold text-[0.72rem] tracking-[0.15em] uppercase text-stone-400 mb-[1.2rem]">
              Info
            </h4>
            <ul className="list-none p-0 m-0 space-y-[0.6rem]">
              {[
                "Best Time to Visit",
                "Permits & Visas",
                "Gear & Packing",
                "Altitude Sickness",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-[0.85rem] text-stone-400 hover:text-[var(--saffron)] transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==========================================
            BOTTOM REGULATORY COPYRIGHT BAR
           ========================================== */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.78rem] text-stone-500">
          <span>© 2026 Rad Travels. All rights reserved.</span>
          <span className="tracking-wide">
            Made with{" "}
            <span className="text-red-500 animate-pulse inline-block mx-0.5">
              ❤️
            </span>{" "}
            in Kathmandu
          </span>
        </div>
      </div>
    </footer>
  );
}
