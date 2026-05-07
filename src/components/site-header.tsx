import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 md:flex md:justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-white/10 bg-[var(--brand-navy)] text-foreground"
          >
            <div className="mt-8 flex flex-col gap-1">
              {navItems.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="rounded-lg px-4 py-3 text-sm font-semibold tracking-widest text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  activeProps={{ className: "rounded-lg px-4 py-3 text-sm font-semibold tracking-widest text-foreground bg-white/10" }}
                >
                  {n.label}
                </Link>
              ))}
              <button className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold tracking-widest text-foreground hover:bg-white/10">
                REGISTER
              </button>
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/" className="flex items-center justify-center md:justify-start">
          <div className="placeholder-box h-10 w-10 !p-0 text-[9px]">LOGO</div>
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
          <a
            href="https://app.chimerawallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-4 py-2 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
            style={{ backgroundColor: "var(--brand-green)" }}
          >
            LAUNCH CHIMERA
          </a>
        </div>
      </div>
    </header>
  );
}
