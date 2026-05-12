import { useEffect, useLayoutEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const DEFAULT_SKIP_PATHS: string[] = [];

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Mirrors the per-element <Reveal> component used on the home page:
 * hide every direct child of every <main section>, then reveal it via
 * IntersectionObserver. IO fires immediately for elements already in the
 * viewport, giving a consistent fade-in on first paint and on scroll.
 */
export function useAutoReveal({ skipPaths = DEFAULT_SKIP_PATHS }: { skipPaths?: string[] } = {}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const skipKey = skipPaths.join("|");

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (skipPaths.includes(pathname)) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const elements: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>("main section").forEach((section) => {
      Array.from(section.children).forEach((child) => {
        elements.push(child as HTMLElement);
      });
    });

    if (elements.length === 0) return;

    if (reduce) {
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    // Pre-hide synchronously so there's no flash of visible content.
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
      el.style.willChange = "opacity, transform";
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [pathname, skipKey]);
}