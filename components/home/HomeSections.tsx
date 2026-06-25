"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div>
        <div className="section-eyebrow" style={{ marginBottom: "1rem" }}>About Rad Travels</div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          Born in the mountains,<br />raised on trails.
        </h2>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(245,242,236,0.6)", marginBottom: "1rem" }}>
          We're a <strong style={{ color: "var(--snow)", fontWeight: 500 }}>Kathmandu-based adventure company</strong> founded
          by a team of Sherpa guides and mountain bikers who grew up riding these trails. Since 2006, we've taken over{" "}
          <strong style={{ color: "var(--snow)", fontWeight: 500 }}>4,800 adventurers</strong> from 60+ countries through
          Nepal's most spectacular landscapes.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(245,242,236,0.6)", marginBottom: "2rem" }}>
          Whether you're standing at the foot of Everest or bombing a descent from Thorong La Pass at 5,416m, every
          experience is crafted to be safe, authentic, and unforgettable.
        </p>
        <a
          href="#contact"
          style={{
            background: "var(--saffron)",
            color: "var(--earth)",
            padding: "0.95rem 2rem",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.82rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
            display: "inline-block",
          }}
        >
          Meet Our Guides
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
        {[
          { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80", alt: "Nepal trail", mt: "2.5rem" },
          { src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80", alt: "Mountain biking", mt: "0" },
        ].map((img) => (
          <div
            key={img.src}
            style={{
              borderRadius: "4px",
              overflow: "hidden",
              aspectRatio: "3/4",
              marginTop: img.mt,
            }}
          >
            <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhySection() {
  const items = [
    { icon: "🧭", title: "Local Sherpa Guides", body: "Every guide is government-licensed, native to Nepal, and has personally scouted each trail. That depth of knowledge doesn't come from a guidebook." },
    { icon: "🚵", title: "Premium Gear Fleet", body: "Scott Genius, Trek Marlin, and Bosch e-MTBs from our in-house fleet, fully serviced in our Kathmandu pro workshop for high-altitude terrain." },
    { icon: "🏕️", title: "Authentic Tea Houses", body: "We book you into family-run teahouses and lodges — not cookie-cutter hotels. Your experience supports Sherpa and Gurung communities directly." },
    { icon: "🛡️", title: "Safety First", body: "We follow international safety protocols, carry emergency oxygen and first aid, and brief every rider before they roll out. Altitude management is non-negotiable." },
  ];

  return (
    <section style={{ padding: "7rem 3rem" }}>
      <div className="section-eyebrow" style={{ marginBottom: "0.7rem" }}>Why Rad Travels</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
          letterSpacing: "-0.03em",
          marginBottom: "4rem",
        }}
      >
        Adventure done right.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "2rem 1.5rem",
              borderLeft: "2px solid var(--border)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--saffron)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--border)")}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{item.icon}</div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.7rem" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.84rem", lineHeight: 1.65, color: "rgba(245,242,236,0.55)" }}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SeasonsSection() {
  const seasons = [
    {
      name: "Spring",
      months: "March · April · May",
      bars: [1, 1, 1, 0.4, 0.4, 0, 0, 0, 0, 0, 0, 0],
      desc: "The rhododendron bloom. Comfortable temperatures, excellent visibility, and vibrant mountain colours. The most beautiful season for both trekking and MTB.",
    },
    {
      name: "Autumn",
      months: "Sept · Oct · Nov",
      bars: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0.4],
      desc: "Crystal-clear skies and the best mountain views of the year. October is peak season — book 3–4 months ahead. The festive energy of Dashain makes it special.",
    },
    {
      name: "Winter",
      months: "Dec · Jan · Feb",
      bars: [0.4, 0.4, 1, 1, 0.4, 0, 0, 0, 0, 0, 0, 0],
      desc: "Quiet trails, lower prices, crisp views. Lower-altitude routes are excellent. High passes may have snow — check conditions before booking.",
    },
    {
      name: "Monsoon",
      months: "June · July · Aug",
      bars: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      desc: "Not recommended for most routes. However, Upper Mustang — in Nepal's rain shadow — is superb in monsoon. Dramatic desert landscapes at their finest.",
    },
  ];

  return (
    <section
      id="seasons"
      style={{ padding: "7rem 3rem", borderTop: "1px solid var(--border)", background: "rgba(245,242,236,0.02)" }}
    >
      <div className="section-eyebrow" style={{ marginBottom: "0.7rem" }}>When to Go</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
          letterSpacing: "-0.03em",
          marginBottom: "3rem",
        }}
      >
        The right season<br />makes the difference.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--border)",
          borderLeft: "1px solid var(--border)",
        }}
      >
        {seasons.map((s) => (
          <div
            key={s.name}
            style={{ padding: "2.5rem 2rem", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
          >
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.4rem" }}>
              {s.name}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--saffron)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              {s.months}
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: "1.2rem" }}>
              {s.bars.map((v, i) => (
                <div
                  key={i}
                  style={{
                    height: 6,
                    flex: 1,
                    borderRadius: 2,
                    background: v === 1 ? "var(--saffron)" : v === 0.4 ? "rgba(232,135,10,0.35)" : "rgba(245,242,236,0.1)",
                  }}
                />
              ))}
            </div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(245,242,236,0.55)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testis = [
    { stars: 5, text: "Five days biking from Muktinath to Pokhara. The Mustang region is made for mountain biking — incredible communication from the office and Laxman was a fantastic guide. Memorable forever.", name: "Thomas H.", from: "Germany · Upper Mustang MTB", initials: "TH" },
    { stars: 5, text: "EBC was everything I dreamed. Our guide Pemba knew every stone on the trail. The teahouse at Tengboche with views of Ama Dablam is something I'll never forget. Worth every dollar.", name: "Sophia A.", from: "Canada · Everest Base Camp", initials: "SA" },
    { stars: 5, text: "I'm 54 and used the e-MTB for Poon Hill. Same legendary trails, same incredible views — just a bit less suffering on the uphill! Guides were patient and bikes were impeccably maintained.", name: "Mark R.", from: "Australia · Poon Hill E-MTB", initials: "MR" },
  ];

  return (
    <section style={{ padding: "7rem 3rem", borderTop: "1px solid var(--border)" }}>
      <div className="section-eyebrow" style={{ marginBottom: "0.7rem" }}>Reviews</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
          letterSpacing: "-0.03em",
          marginBottom: "4rem",
        }}
      >
        What adventurers say.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {testis.map((t, i) => (
          <div
            key={i}
            style={{
              padding: "2rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
            }}
          >
            <div style={{ color: "var(--saffron)", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(245,242,236,0.7)", marginBottom: "1.5rem" }}>
              "{t.text}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "var(--pine)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  color: "var(--saffron)",
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 500, fontSize: "0.85rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--mist)" }}>{t.from}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        padding: "8rem 3rem",
        background: "var(--pine)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(6rem, 18vw, 18rem)",
          color: "rgba(245,242,236,0.03)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        HIMALAYA
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="section-eyebrow" style={{ marginBottom: "1rem" }}>Plan Your Trip</div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          Ready to stand<br />at the top?
        </h2>
        <p style={{ color: "rgba(245,242,236,0.55)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Tell us your dates, preferred activity, and fitness level. We'll build a custom itinerary for you within
          24 hours — no obligation.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:hello@radtravels.np"
            style={{
              background: "var(--saffron)",
              color: "var(--earth)",
              padding: "0.95rem 2.2rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            Email Us
          </a>
          <a
            href="https://wa.me/9779841000000"
            style={{
              color: "var(--snow)",
              border: "1px solid rgba(245,242,236,0.3)",
              padding: "0.95rem 2.2rem",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
