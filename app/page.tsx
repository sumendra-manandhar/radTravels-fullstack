import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import PackagesSection from "@/components/home/PackagesSection";
import {
  AboutSection,
  WhySection,
  SeasonsSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home/HomeSections";

export default function HomePage() {
  const marqueeItems = [
    "Everest Base Camp",
    "Annapurna Circuit",
    "Upper Mustang MTB",
    "Langtang Valley",
    "Manaslu Circuit",
    "Pokhara MTB",
    "Kanchenjunga",
    "Poon Hill",
    "Sarangkot Ride",
  ];

  return (
    <>
      <Nav variant="home" />
      <HomeHero />

      {/* 🏃‍♂️ INFINITE HARDWARE-ACCELERATED MARQUEE RUNWAY */}
      <div className="w-full bg-[var(--saffron)] overflow-hidden py-3.5 select-none relative z-20">
        <div className="flex w-max items-center">
          {/* Loop Array Duplication Runway for Infinite Tracking Context */}
          {[...Array(4)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center gap-16 whitespace-nowrap animate-marquee px-8"
              aria-hidden={groupIndex > 0 ? "true" : "false"}
            >
              {marqueeItems.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="font-['Syne'] font-bold text-[0.78rem] tracking-[0.15em] uppercase text-[var(--earth)] flex items-center shrink-0"
                >
                  {/* Bullet Dot Separator Node */}
                  <span className="inline-block w-1.5 h-1.5 bg-[var(--earth)] rounded-full mr-16 opacity-60 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AboutSection />
      <PackagesSection />
      <WhySection />
      <SeasonsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
