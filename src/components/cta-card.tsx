import { type ReactNode } from "react";

export function CtaCard({
  eyebrow,
  title,
  className = "",
  filled = false,
  eyebrowColor = "text-[var(--brand-green)]",
  href,
  scrollTo,
}: {
  eyebrow?: ReactNode;
  title: string;
  className?: string;
  filled?: boolean;
  eyebrowColor?: string;
  href?: string;
  scrollTo?: string;
}) {
  const Tag: any = href ? "a" : "button";
  const linkProps: Record<string, unknown> = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : scrollTo
      ? {
          type: "button",
          onClick: () => {
            const el = document.getElementById(scrollTo);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          },
        }
      : {};
  return (
    <Tag
      {...linkProps}
      data-filled={filled ? "true" : "false"}
      className={`cta-card group flex w-full items-center justify-between rounded-2xl border border-white/10 px-6 py-8 text-left transition-all hover:border-white/30 ${className}`}
    >
      <div>
        {eyebrow && <div className={`text-[10px] font-bold tracking-[0.25em] ${eyebrowColor}`}>{eyebrow}</div>}
        <div
          className="mt-1 text-2xl uppercase"
          style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}
        >
          {title}
        </div>
      </div>
      <span className="text-xl text-foreground/70 transition-transform group-hover:translate-x-1">↗</span>
    </Tag>
  );
}