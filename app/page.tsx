import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import PackagesSection from "@/components/home/PackagesSection";
import { AboutSection, WhySection, SeasonsSection, TestimonialsSection, CTASection } from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />
      <HomeHero />

      {/* Marquee */}
      <div style={{ background: "var(--saffron)", overflow: "hidden", padding: "0.85rem 0" }}>
        <div
          className="marquee-track"
          style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" }}
        >
          {Array(2).fill([
            "Everest Base Camp", "Annapurna Circuit", "Upper Mustang MTB",
            "Langtang Valley", "Manaslu Circuit", "Pokhara MTB",
            "Kanchenjunga", "Poon Hill", "Sarangkot Ride",
          ]).flat().map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--earth)",
                flexShrink: 0,
              }}
            >
              {i % 1 === 0 && i > 0 && (
                <span style={{ display: "inline-block", width: 4, height: 4, background: "var(--earth)", borderRadius: "50%", verticalAlign: "middle", margin: "0 2rem 2px" }} />
              )}
              {item}
            </span>
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
