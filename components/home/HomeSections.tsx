"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. ABOUT SECTION
// ==========================================
export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Smooth entry fade for layout columns
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="grid grid-cols-1  lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6 py-16 md:px-12 md:py-28 border-t border-[var(--border)] bg-[#FDFBF7] dark:bg-[#110D08] transition-colors duration-300"
    >
      <div>
        <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-4">
          About Rad Travels
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] tracking-tighter leading-[1.05] mb-6 text-[var(--earth)] dark:text-[var(--snow)]">
          Born in the mountains,
          <br />
          raised on trails.
        </h2>
        <p className="text-[0.95rem] leading-[1.85] text-stone-600 dark:text-[rgba(245,242,236,0.6)] mb-4">
          We're a{" "}
          <strong className="text-stone-900 dark:text-[var(--snow)] font-medium">
            Kathmandu-based adventure company
          </strong>{" "}
          founded by a team of Sherpa guides and mountain bikers who grew up
          riding these trails. Since 2006, we've taken over{" "}
          <strong className="text-stone-900 dark:text-[var(--snow)] font-medium">
            4,800 adventurers
          </strong>{" "}
          from 60+ countries through Nepal's most spectacular landscapes.
        </p>
        <p className="text-[0.95rem] leading-[1.85] text-stone-600 dark:text-[rgba(245,242,236,0.6)] mb-8">
          Whether you're standing at the foot of Everest or bombing a descent
          from Thorong La Pass at 5,416m, every experience is crafted to be
          safe, authentic, and unforgettable.
        </p>
        <a
          href="#contact"
          className="bg-[var(--saffron)] text-[var(--earth)] px-8 py-3.5 font-['Syne'] font-bold text-[0.82rem] tracking-wider uppercase rounded-[2px] inline-block transition-transform duration-200 hover:scale-[1.02]"
        >
          Meet Our Guides
        </a>
      </div>

      {/* Responsive Images Grid Layout */}
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
            alt: "Nepal trail",
            hasMargin: true,
          },
          {
            src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80",
            alt: "Mountain biking",
            hasMargin: false,
          },
        ].map((img) => (
          <div
            key={img.src}
            className={`rounded-[4px] overflow-hidden aspect-[3/4] shadow-md ${
              img.hasMargin ? "mt-10 lg:mt-12" : "mb-10 lg:mb-12"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale-[15%] dark:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 2. WHY CHOOSE US SECTION
// ==========================================
export function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    {
      icon: "🧭",
      title: "Local Sherpa Guides",
      body: "Every guide is government-licensed, native to Nepal, and has personally scouted each trail. That depth of knowledge doesn't come from a guidebook.",
    },
    {
      icon: "🚵",
      title: "Premium Gear Fleet",
      body: "Scott Genius, Trek Marlin, and Bosch e-MTBs from our in-house fleet, fully serviced in our Kathmandu pro workshop for high-altitude terrain.",
    },
    {
      icon: "🏕️",
      title: "Authentic Tea Houses",
      body: "We book you into family-run teahouses and lodges — not cookie-cutter hotels. Your experience supports Sherpa and Gurung communities directly.",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      body: "We follow international safety protocols, carry emergency oxygen and first aid, and brief every rider before they roll out. Altitude management is non-negotiable.",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section className="px-6 py-16 md:px-12 md:py-28 bg-[#FAF7F2] dark:bg-[#17120B] transition-colors duration-300">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-3">
        Why Rad Travels
      </div>
      <h2 className="font-['Syne'] font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] tracking-tighter mb-16 text-[var(--earth)] dark:text-[var(--snow)]">
        Adventure done right.
      </h2>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 border-l-2 border-stone-200 dark:border-[var(--border)] hover:border-[var(--saffron)] dark:hover:border-[var(--saffron)] transition-colors duration-300 group"
          >
            <div className="text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110 inline-block">
              {item.icon}
            </div>
            <h3 className="font-['Syne'] font-bold text-lg mb-3 text-[var(--earth)] dark:text-[var(--snow)]">
              {item.title}
            </h3>
            <p className="text-[0.84rem] leading-relaxed text-stone-600 dark:text-[rgba(245,242,236,0.55)]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 3. SEASONS / ACCLIMATIZATION SECTION
// ==========================================
export function SeasonsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section
      id="seasons"
      className="px-6 py-16 md:px-12 md:py-28 border-t border-[var(--border)] bg-[#F9F6F0] dark:bg-[rgba(245,242,236,0.02)] transition-colors duration-300"
    >
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-3">
        When to Go
      </div>
      <h2 className="font-['Syne'] font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] tracking-tighter mb-12 text-[var(--earth)] dark:text-[var(--snow)]">
        The right season
        <br />
        makes the difference.
      </h2>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-stone-200 dark:border-[var(--border)]"
      >
        {seasons.map((s) => (
          <div
            key={s.name}
            className="p-8 border-r border-b border-stone-200 dark:border-[var(--border)] hover:bg-[#FDFBF7] dark:hover:bg-[rgba(255,255,255,0.01)] transition-colors"
          >
            <div className="font-['Syne'] font-extrabold text-[1.3rem] mb-1 text-[var(--earth)] dark:text-[var(--snow)]">
              {s.name}
            </div>
            <div className="text-[0.72rem] text-[var(--saffron)] tracking-widest uppercase mb-5">
              {s.months}
            </div>
            <div className="flex gap-1 mb-5">
              {s.bars.map((v, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-[2px]"
                  style={{
                    backgroundColor:
                      v === 1
                        ? "var(--saffron)"
                        : v === 0.4
                          ? "rgba(232,135,10,0.35)"
                          : "rgba(120,120,120,0.15)",
                  }}
                />
              ))}
            </div>
            <p className="text-[0.82rem] leading-relaxed text-stone-600 dark:text-[rgba(245,242,236,0.55)]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 4. TESTIMONIALS SECTION
// ==========================================
export function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const testis = [
    {
      stars: 5,
      text: "Five days biking from Muktinath to Pokhara. The Mustang region is made for mountain biking — incredible communication from the office and Laxman was a fantastic guide. Memorable forever.",
      name: "Thomas H.",
      from: "Germany · Upper Mustang MTB",
      initials: "TH",
    },
    {
      stars: 5,
      text: "EBC was everything I dreamed. Our guide Pemba knew every stone on the trail. The teahouse at Tengboche with views of Ama Dablam is something I'll never forget. Worth every dollar.",
      name: "Sophia A.",
      from: "Canada · Everest Base Camp",
      initials: "SA",
    },
    {
      stars: 5,
      text: "I'm 54 and used the e-MTB for Poon Hill. Same legendary trails, same incredible views — just a bit less suffering on the uphill! Guides were patient and bikes were impeccably maintained.",
      name: "Mark R.",
      from: "Australia · Poon Hill E-MTB",
      initials: "MR",
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section className="px-6 py-16 md:px-12 md:py-28 border-t border-[var(--border)] bg-[#FDFBF7] dark:bg-[#110D08] transition-colors duration-300">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-3">
        Reviews
      </div>
      <h2 className="font-['Syne'] font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] tracking-tighter mb-16 text-[var(--earth)] dark:text-[var(--snow)]">
        What adventurers say.
      </h2>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testis.map((t, i) => (
          <div
            key={i}
            className="p-8 bg-white dark:bg-[var(--card-bg)] border border-stone-200 dark:border-[var(--border)] rounded-[6px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-[var(--saffron)] tracking-wider mb-4">
              {"★".repeat(t.stars)}
            </div>
            <p className="text-[0.9rem] leading-relaxed text-stone-700 dark:text-[rgba(245,242,236,0.7)] mb-6 italic">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-full bg-stone-100 dark:bg-[var(--pine)] flex items-center justify-center font-['Syne'] font-extrabold text-[0.8rem] text-[var(--saffron)] shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-[0.85rem] text-[var(--earth)] dark:text-[var(--snow)]">
                  {t.name}
                </div>
                <div className="text-[0.72rem] text-stone-500 dark:text-[var(--mist)]">
                  {t.from}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 5. CTA CONVERSION OVERLAY SECTION
// ==========================================
export function CTASection() {
  return (
    <section
      id="contact"
      className="text-center px-6 py-24 md:py-32 bg-[var(--pine)] relative overflow-hidden"
    >
      {/* Huge Backing Brand Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Syne'] font-extrabold text-[clamp(6rem,18vw,18rem)] text-[rgba(245,242,236,0.03)] dark:text-[rgba(245,242,236,0.02)] select-none pointer-events-none whitespace-nowrap tracking-tighter">
        HIMALAYA
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--saffron)] mb-4">
          Plan Your Trip
        </div>
        <h2 className="font-['Syne'] font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] tracking-tighter leading-[1.05] mb-6 text-[var(--snow)]">
          Ready to stand
          <br />
          at the top?
        </h2>
        <p className="text-[rgba(245,242,236,0.7)] dark:text-[rgba(245,242,236,0.55)] max-w-md mx-auto mb-10 text-sm leading-relaxed">
          Tell us your dates, preferred activity, and fitness level. We'll build
          a custom itinerary for you within 24 hours — no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:hello@radtravels.np"
            className="w-full sm:w-auto bg-[var(--saffron)] text-[var(--earth)] px-9 py-4 font-['Syne'] font-bold text-[0.85rem] tracking-wider uppercase rounded-[2px] transition-transform duration-200 hover:scale-[1.03]"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/9779841000000"
            className="w-full sm:w-auto text-[var(--snow)] border border-[rgba(245,242,236,0.3)] hover:bg-[rgba(245,242,236,0.05)] px-9 py-4 text-[0.85rem] tracking-wider uppercase rounded-[2px] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
