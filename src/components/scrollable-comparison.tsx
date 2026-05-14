import { Children, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Desktop columns at md+ breakpoint. */
  columns: 3 | 4;
  className?: string;
};

/**
 * Mobile: horizontally snap-scrolling carousel with dot indicators (no scrollbar).
 * md+: standard CSS grid with the requested number of columns.
 */
export function ScrollableComparison({ children, columns, className = "" }: Props) {
  const items = Children.toArray(children);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((node, i) => {
        const child = node as HTMLElement;
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const d = Math.abs(childCenter - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const left = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  };

  const colsClass = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  const itemWidth =
    columns === 4 ? "w-[78%] sm:w-[55%]" : "w-[80%] sm:w-[60%]";
  const padX = columns === 4 ? "px-[11%]" : "px-[10%]";

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        className={`-mx-6 flex gap-4 overflow-x-auto ${padX} snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid ${colsClass} md:gap-4 md:overflow-visible md:px-0 md:snap-none`}
      >
        {items.map((child, i) => (
          <div key={i} className={`${itemWidth} shrink-0 snap-center md:w-auto`}>
            {child}
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2 md:hidden">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === active ? "bg-[var(--brand-green)]" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
