import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const DEFAULT_SKIP_PATHS: string[] = [];

/**
 * Auto-applies a fade + slide-up animation to direct children of every
 * <section> inside <main>. Elements above the fold animate immediately in
 * a stagger (hero effect); elements below animate when scrolled into view.
 */
export function useAutoReveal({ skipPaths = DEFAULT_SKIP_PATHS }: { skipPaths?: string[] } = {}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const skipKey = skipPaths.join("|");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipPaths.includes(pathname)) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let cleanup: (() => void) | undefined;
    const frames: number[] = [];
    const timers: number[] = [];

    const frame = (callback: FrameRequestCallback) => {
      const id = requestAnimationFrame(callback);
      frames.push(id);
      return id;
    };

    const timer = (callback: () => void, delay = 0) => {
      const id = window.setTimeout(callback, delay);
      timers.push(id);
      return id;
    };

    const setPending = (el: HTMLElement) => {
      el.dataset.revealed = "pending";
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
      el.style.willChange = "opacity, transform";
    };

    const reveal = (el: HTMLElement, delay = 0) => {
      if (el.dataset.revealed === "done") return;
      el.style.transition = reduce ? "none" : "opacity 700ms ease-out, transform 700ms ease-out";
      el.style.willChange = "opacity, transform";
      timer(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.dataset.revealed = "done";
      }, reduce ? 0 : delay);
    };

    // Give route hydration a short chance to finish before mutating DOM styles.
    timer(() => frame(() => frame(() => {
      const sections = document.querySelectorAll<HTMLElement>("main section");
      const all: HTMLElement[] = [];
      sections.forEach((section) => {
        Array.from(section.children).forEach((child) => {
          const el = child as HTMLElement;
          if (el.dataset.revealed === "done") return;
          all.push(el);
        });
      });

      if (all.length === 0) return;

      const viewportH = window.innerHeight;

      // Split: anything currently visible or already scrolled past stays
      // visible. Only truly below-the-fold elements get hidden + observed.
      const heroSet: HTMLElement[] = [];
      const belowFold: HTMLElement[] = [];
      all.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportH * 0.9) {
          heroSet.push(el);
        } else {
          belowFold.push(el);
        }
      });

      belowFold.forEach((el) => {
        if (el.dataset.revealed !== "pending") setPending(el);
      });

      if (reduce) {
        all.forEach((el) => reveal(el));
        return;
      }

      // Hero stagger for anything above the fold (already painted by SSR —
      // we apply transitions but don't pre-hide, so they fade from current state).
      heroSet.forEach((el, i) => {
        if (el.dataset.revealed !== "pending") setPending(el);
        frame(() => reveal(el, i * 120));
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

      belowFold.forEach((el) => obs.observe(el));

      // Store on cleanup closure.
      cleanup = () => obs.disconnect();
    })), 60);

    return () => {
      frames.forEach((id) => cancelAnimationFrame(id));
      timers.forEach((id) => window.clearTimeout(id));
      cleanup?.();
    };
  }, [pathname, skipKey]);
}