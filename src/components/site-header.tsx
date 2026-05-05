import { Link } from "@tanstack/react-router";

const navItems = [
  { label: "APP", to: "/app" },
  { label: "Card", to: "/card" },
  { label: "Token", to: "/token" },
  { label: "Referrals", to: "/referrals" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[var(--brand-navy)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="placeholder-box h-10 w-10 !p-0 text-[9px]">LOGO</div>
          <span className="display text-lg tracking-widest">CHIMERA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-1.5 text-sm text-foreground font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-foreground hover:bg-white/10">
            REGISTER
          </button>
          <button
            className="inline-flex items-center rounded-full px-4 py-2 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
            style={{ backgroundColor: "var(--brand-green)" }}
          >
            TRADE NOW
          </button>
        </div>
      </div>
    </header>
  );
}
