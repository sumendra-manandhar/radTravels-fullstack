"use client";
import Link from "next/link";
import { packages } from "@/data/packages";

export default function Footer() {
  const trekking = packages.filter((p) => p.category === "trekking");
  const mtb = packages.filter((p) => p.category === "mtb");

  return (
    <footer
      style={{
        padding: "4rem 3rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "4rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.4rem",
              color: "var(--snow)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Rad<span style={{ color: "var(--saffron)" }}>Travels</span>
          </Link>
          <p
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.7,
              color: "rgba(245,242,236,0.5)",
              maxWidth: 280,
            }}
          >
            Expert-guided trekking and mountain biking in Nepal since 2006.
            Kathmandu-based. Himalaya-obsessed.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            {["📧 Email", "💬 WhatsApp", "📸 Instagram"].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(245,242,236,0.4)",
                  letterSpacing: "0.05em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Trekking */}
        <div>
          <h4
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--mist)",
              marginBottom: "1.2rem",
            }}
          >
            Trekking
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {trekking.map((p) => (
              <li key={p.slug} style={{ marginBottom: "0.6rem" }}>
                <Link
                  href={`/packages/${p.slug}`}
                  style={{
                    color: "rgba(245,242,236,0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--snow)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,242,236,0.6)")
                  }
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MTB */}
        <div>
          <h4
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--mist)",
              marginBottom: "1.2rem",
            }}
          >
            MTB
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {mtb.map((p) => (
              <li key={p.slug} style={{ marginBottom: "0.6rem" }}>
                <Link
                  href={`/packages/${p.slug}`}
                  style={{
                    color: "rgba(245,242,236,0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--snow)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,242,236,0.6)")
                  }
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--mist)",
              marginBottom: "1.2rem",
            }}
          >
            Info
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Best Time to Visit",
              "Permits & Visas",
              "Gear & Packing",
              "Altitude Sickness",
              "Contact Us",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "0.6rem" }}>
                <a
                  href="#contact"
                  style={{
                    color: "rgba(245,242,236,0.6)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.78rem",
          color: "rgba(245,242,236,0.3)",
        }}
      >
        <span>© 2026 Rad Travels. All rights reserved.</span>
        <span>Made with ❤️ in Kathmandu</span>
      </div>
    </footer>
  );
}
