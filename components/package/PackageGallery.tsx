"use client";
import { useState } from "react";

interface GalleryImage {
  src: string;
  caption: string;
}

export default function PackageGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Responsive layout mapping arrays using native Tailwind grid configuration mechanics
  const desktopGridStyles = [
    "md:col-span-2 md:row-span-1 md:aspect-video", // Image 1 (Hero Large Landscape)
    "md:col-span-1 md:row-span-1 md:aspect-[3/4]", // Image 2 (Right Vertical Stack Accent)
    "md:col-span-1 md:aspect-[4/3]", // Image 3 (Bottom Left Box)
    "md:col-span-1 md:aspect-[4/3]", // Image 4 (Bottom Center Box)
    "md:col-span-1 md:aspect-[4/3]", // Image 5 (Bottom Right Box)
  ];

  return (
    <>
      {/* ==========================================
          EDITORIAL COMPOSITE PHOTO GRID
         ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 w-full">
        {images.slice(0, 5).map((img, i) => (
          <div
            key={i}
            onClick={() => setLightbox(img.src)}
            className={`group overflow-hidden rounded relative cursor-zoom-in aspect-video md:aspect-auto ${
              desktopGridStyles[i] || ""
            }`}
          >
            {/* Asset Node Frame */}
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Content Captions Overlap Shroud */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/70 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-[0.72rem] text-stone-100 font-medium tracking-wide">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ==========================================
          LIGHTBOX PORTAL OVERLAY SYSTEM
         ========================================== */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[500] bg-[#1a1208]/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
        >
          {/* Universal Close Trigger */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 bg-transparent hover:bg-white/10 text-stone-200 border border-stone-200/20 w-11 h-11 rounded-full cursor-pointer text-sm flex items-center justify-center transition-colors shadow-lg active:scale-95"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Projected Active Render Object Frame */}
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={lightbox}
              alt="Enlarged gallery view"
              className="max-w-[95vw] md:max-w-[90vw] max-h-[85vh] rounded object-contain shadow-2xl selection:bg-transparent"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
