import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Auto-applies a fade + slide-up animation to direct children of every
 * <section> inside <main>. Elements above the fold animate immediately in
 * a stagger (hero effect); elements below animate when scrolled into view.
 */
export function useAutoReveal({ skipPaths = [] as string[] } = {}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipPaths.includes(pathname)) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Defer to next frame so the DOM has rendered for this route.
    const raf = requestAnimationFrame(() => {
      const sections = document.querySelectorAll<HTMLElement>("main section");
      const targets: HTMLElement[] = [];

      sections.forEach((section) => {
        Array.from(section.children).forEach((child) => {
          const el = child as HTMLElement;
          if (el.dataset.revealed) return;
          targets.push(el);
        });
      });

      if (targets.length === 0) return;

      // Set initial hidden state.
      targets.forEach((el) => {
        el.dataset.revealed = "pending";
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
        el.style.willChange = "opacity, transform";
      });

      const reveal = (el: HTMLElement, delay = 0) => {
        window.setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.dataset.revealed = "done";
        }, delay);
      };

      if (reduce) {
        targets.forEach((el) => reveal(el));
        return;
      }

      // Hero: stagger anything currently above the fold.
      const viewportH = window.innerHeight;
      let heroIndex = 0;
      const heroSet = new Set<HTMLElement>();
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportH * 0.9) {
          heroSet.add(el);
          reveal(el, heroIndex * 120);
          heroIndex++;
        }
      });

      // Below the fold: reveal on scroll.
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );

      targets.forEach((el) => {
        if (!heroSet.has(el)) obs.observe(el);
      });

      // Store on cleanup closure.
      cleanup = () => obs.disconnect();
    });

    let cleanup: (() => void) | undefined;
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname, skipPaths]);
}