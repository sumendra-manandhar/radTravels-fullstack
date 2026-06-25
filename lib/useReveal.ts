"use client";
import { useEffect, useRef } from "react";

export function useReveal(options?: { delay?: number; y?: number; x?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
              el.style.opacity = "1";
              el.style.transform = "translate(0,0)";
            }, options?.delay ?? 0);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    el.style.opacity = "0";
    el.style.transform = `translate(${options?.x ?? 0}px, ${options?.y ?? 30}px)`;
    observer.observe(el);

    return () => observer.disconnect();
  }, [options?.delay, options?.x, options?.y]);

  return ref;
}

export function useStaggerReveal(count: number, baseDelay = 80) {
  const refs = Array.from({ length: count }, () => useRef<HTMLDivElement>(null));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * baseDelay);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return refs;
}
