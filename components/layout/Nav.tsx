"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface NavProps {
  variant?: "home" | "package";
}

export default function Nav({ variant = "home" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Initialize theme on mount
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Monitor scrolling to alter background opacity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP animation logic for the mobile drawer overlay
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        visibility: "visible",
      });

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.15,
          },
        );
      }
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.visibility = "hidden";
        },
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#110D08]/94 backdrop-blur-md shadow-sm dark:shadow-lg border-b border-stone-200/50 dark:border-[var(--border)]"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className={`font-['Syne'] font-extrabold text-[1.25rem] tracking-tight z-50 transition-colors duration-300 ${
            scrolled
              ? "text-[var(--earth)] dark:text-[var(--snow)]"
              : "text-[var(--snow)]"
          }`}
        >
          Rad<span className="text-[var(--saffron)]">Travels</span>
        </Link>

        {/* --- DESKTOP NAV VARIANT: HOME --- */}
        {variant === "home" ? (
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
              {[
                { label: "Trekking", href: "#trekking" },
                { label: "MTB", href: "#mtb" },
                { label: "Best Time", href: "#seasons" },
                { label: "About", href: "#about" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-[0.8rem] tracking-widest uppercase opacity-75 hover:opacity-100 transition-all duration-200 ${
                      scrolled
                        ? "text-[var(--earth)] dark:text-[var(--snow)]"
                        : "text-[var(--snow)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Controls (Theme Toggle + CTA/Hamburger) */}
            <div className="flex items-center gap-4">
              {/* Desktop Theme Toggle Switch Button */}
              <button
                onClick={toggleTheme}
                className={`hidden md:flex items-center justify-center p-2 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${
                  scrolled
                    ? "border-stone-200 dark:border-[var(--border)] text-[var(--earth)] dark:text-[var(--snow)] bg-stone-50 dark:bg-stone-900/40"
                    : "border-white/20 text-[var(--snow)] hover:bg-white/10"
                }`}
                aria-label="Toggle Night Mode"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>

              <a
                href="#contact"
                className="hidden md:inline-block bg-[var(--saffron)] text-[var(--earth)] px-[1.4rem] py-[0.52rem] rounded-[2px] text-[0.8rem] tracking-wider uppercase font-bold font-['Syne'] transition-transform duration-200 hover:scale-[1.03]"
              >
                Book Now
              </a>

              {/* Hamburger button for mobile devices */}
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center md:hidden w-8 h-8 space-y-1.5 z-50 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-[var(--snow)]" : scrolled ? "bg-[var(--earth)] dark:bg-[var(--snow)]" : "bg-[var(--snow)]"}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? "opacity-0 bg-[var(--snow)]" : scrolled ? "bg-[var(--earth)] dark:bg-[var(--snow)]" : "bg-[var(--snow)]"}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-[var(--snow)]" : scrolled ? "bg-[var(--earth)] dark:bg-[var(--snow)]" : "bg-[var(--snow)]"}`}
                />
              </button>
            </div>
          </div>
        ) : (
          /* --- DESKTOP NAV VARIANT: PACKAGE --- */
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center p-2 rounded-full border transition-all duration-200 ${
                scrolled
                  ? "border-stone-200 dark:border-[var(--border)] text-[var(--earth)] dark:text-[var(--snow)]"
                  : "border-white/20 text-[var(--snow)]"
              }`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <Link
              href="/"
              className={`text-[0.78rem] tracking-widest uppercase transition-colors duration-200 ${
                scrolled
                  ? "text-stone-500 dark:text-[rgba(245,242,236,0.6)]"
                  : "text-[var(--snow)]"
              }`}
            >
              ← All Packages
            </Link>
            <a
              href="#book"
              className="bg-[var(--saffron)] text-[var(--earth)] px-[1.4rem] py-[0.52rem] rounded-[2px] text-[0.78rem] tracking-wider uppercase font-bold font-['Syne'] transition-transform duration-200 hover:scale-[1.03]"
            >
              Book This Trip
            </a>
          </div>
        )}
      </nav>

      {/* --- GSAP MOBILE DRAWER OVERLAY --- */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-[#110D08]/98 backdrop-blur-xl flex flex-col justify-center px-12 md:hidden"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div ref={linksRef} className="flex flex-col gap-8 text-left">
          {/* Mobile Specific Theme Switcher Row */}
          <div className="flex items-center justify-between pb-6 mb-2 border-b border-white/10">
            <span className="font-['Syne'] text-sm text-stone-400 uppercase tracking-widest">
              Appearance
            </span>
            <button
              onClick={toggleTheme}
              className="w-12 h-12 flex items-center justify-center text-xl bg-white/5 border border-white/10 rounded-full"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {[
            { label: "Trekking", href: "#trekking" },
            { label: "MTB", href: "#mtb" },
            { label: "Best Time", href: "#seasons" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="font-['Syne'] font-bold text-3xl text-[var(--snow)] opacity-80 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={toggleMenu}
            className="bg-[var(--saffron)] text-[var(--earth)] text-center py-4 rounded-[2px] font-['Syne'] font-bold text-lg tracking-wider uppercase mt-4"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
