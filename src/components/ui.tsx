import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode, type HTMLAttributes, type ElementType } from "react";
import { cn } from "@/lib/utils";

/* ---------- Section ---------- */

type SectionSize = "sm" | "md" | "lg" | "none";

const SECTION_PADDING: Record<SectionSize, string> = {
  none: "",
  sm: "py-10",
  md: "py-16",
  lg: "py-20",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: SectionSize;
  bleed?: boolean; // when true, drop max-w + horizontal padding (for full-bleed gradients)
};

export function Section({
  as: Tag = "section",
  size = "md",
  bleed = false,
  className,
  children,
  ...rest
}: SectionProps) {
  const inner = bleed
    ? null
    : "mx-auto max-w-7xl px-6";
  return (
    <Tag className={cn(inner, SECTION_PADDING[size], className)} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- Card ---------- */

type CardVariant = "default" | "glow" | "glass";

const CARD_VARIANT: Record<CardVariant, string> = {
  default: "surface-card",
  glow: "surface-glow",
  glass: "surface-glass",
};

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: string; // tailwind padding override; default p-6
};

export function Card({
  variant = "default",
  padding = "p-6",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div className={cn(CARD_VARIANT[variant], padding, className)} {...rest}>
      {children}
    </div>
  );
}

/* ---------- Eyebrow ---------- */

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("eyebrow", className)}>{children}</Tag>;
}

/* ---------- Buttons ---------- */

type CommonBtnProps = { className?: string; children: ReactNode };

type AnchorBtnProps = CommonBtnProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonBtnProps = CommonBtnProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function BrandButton(props: AnchorBtnProps | ButtonBtnProps) {
  const { className, children, ...rest } = props;
  if ("href" in props && props.href) {
    return (
      <a className={cn("btn-brand", className)} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn("btn-brand", className)} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function GhostButton(props: AnchorBtnProps | ButtonBtnProps) {
  const { className, children, ...rest } = props;
  if ("href" in props && props.href) {
    return (
      <a className={cn("btn-ghost", className)} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn("btn-ghost", className)} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
