"use client";
import { useState } from "react";

interface GalleryImage {
  src: string;
  caption: string;
}

export default function PackageGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const gridAreas = ["1/1/2/3", "1/3/2/4", "2/1/3/2", "2/2/3/3", "2/3/3/4"];
  const aspectRatios = ["unset", "unset", "4/3", "4/3", "4/3"];

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.6rem",
        }}
      >
        {images.slice(0, 5).map((img, i) => (
          <div
            key={i}
            onClick={() => setLightbox(img.src)}
            style={{
              gridArea: gridAreas[i] || "auto",
              aspectRatio: i < 2 ? (i === 0 ? "16/9" : "3/4") : aspectRatios[i],
              overflow: "hidden",
              borderRadius: "4px",
              position: "relative",
              cursor: "zoom-in",
            }}
          >
            <img
              src={img.src}
              alt={img.caption}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                display: "block",
              }}
              onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.05)")}
              onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,18,8,0.55) 0%, transparent 50%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "0.8rem",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0")}
            >
              <span style={{ fontSize: "0.72rem", color: "var(--snow)" }}>{img.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 500,
            background: "rgba(26,18,8,0.97)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--snow)",
              width: 42,
              height: 42,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: "4px", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
