import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import chimeraLogo from "@/assets/site/chimera-logo.png";

const navItems = [
  { label: "APP", to: "/app" },
  { label: "Card", to: "/card" },
  { label: "Token", to: "/token" },
  { label: "Referrals", to: "/referrals" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[var(--brand-navy)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={chimeraLogo} alt="Chimera" className="h-16 w-auto md:h-20" />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-1.5 text-sm font-semibold text-[var(--brand-green)]" }}
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
            className="inline-flex h-11 items-center rounded-full px-5 text-xs font-bold tracking-widest text-[var(--brand-navy)] md:h-12 md:px-7"
            style={{ backgroundColor: "var(--brand-green)" }}
          >
            OPEN CHIMERA
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-white/10 bg-[var(--brand-navy)] text-foreground"
            >
              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-semibold tracking-widest text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    activeProps={{ className: "rounded-lg px-4 py-3 text-sm font-semibold tracking-widest bg-white/10 text-[var(--brand-green)]" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <a
                  href="https://app.chimerawallet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
                  style={{ backgroundColor: "var(--brand-green)" }}
                >
                  OPEN CHIMERA
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
