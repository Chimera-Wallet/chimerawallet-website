import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Send } from "lucide-react";
import chimeraLogo from "@/assets/site/chimera-logo.png";

const navItems = [
  { label: "APP", to: "/app" },
  { label: "Card", to: "/card" },
  { label: "Token", to: "/token" },
  { label: "Referrals", to: "/referrals" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Press Kit", to: "/press-kit" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="flex items-center">
           <img src={chimeraLogo} alt="Chimera" className="h-16 w-auto md:h-20" />
        </Link>

        <nav className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 self-end items-center gap-1 rounded-full border border-white/15 bg-white/15 px-2 py-1.5 backdrop-blur mb-4">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-1.5 text-sm text-white/85 transition-colors hover:text-white"
              activeProps={{ className: "rounded-full px-4 py-1.5 text-sm font-semibold text-[var(--brand-green)]" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/chimera_wallet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.84l-5.36-6.96L4.5 22H1.24l8.02-9.16L1 2h7.02l4.84 6.4L18.244 2Zm-1.2 18h1.9L7.06 4H5.06l11.984 16Z" />
            </svg>
          </a>
          <a
            href="https://t.me/Chimera_Community"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
          >
            <Send className="h-4 w-4" />
          </a>
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
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Mobile navigation links and social links for Chimera Wallet.
              </SheetDescription>
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
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href="https://x.com/chimera_wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.84l-5.36-6.96L4.5 22H1.24l8.02-9.16L1 2h7.02l4.84 6.4L18.244 2Zm-1.2 18h1.9L7.06 4H5.06l11.984 16Z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/Chimera_Community"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
                  >
                    <Send className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
