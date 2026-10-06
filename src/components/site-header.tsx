import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Send } from "lucide-react";
import chimeraLogo from "@/assets/site/chimera-logo.png";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/language-switcher";

const navItems = [
  { key: "app", to: "/app" },
  { key: "card", to: "/card" },
  { key: "token", to: "/token" },
  { key: "referrals", to: "/referrals" },
  { key: "about", to: "/about" },
  { key: "news", to: "/news" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="flex items-center">
           <img src={chimeraLogo} alt="Chimera" className="h-16 w-auto md:h-20" />
        </Link>

        <div className="hidden xl:absolute xl:left-1/2 xl:flex xl:-translate-x-1/2 xl:items-center xl:gap-4 self-end mb-4">
          <nav className="flex items-center gap-1 rounded-full border border-white/15 bg-white/15 px-2 py-1.5 backdrop-blur">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-1.5 text-sm text-white/85 transition-colors hover:text-white"
                activeProps={{ className: "rounded-full px-4 py-1.5 text-sm font-semibold text-[var(--brand-green)]" }}
              >
                {t(`header.nav.${n.key}`)}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/chimera_wallet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hidden xl:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
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
            className="hidden xl:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="https://app.chimerawallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full px-5 text-xs font-bold tracking-widest text-[var(--brand-navy)] xl:h-12 xl:px-7"
            style={{ backgroundColor: "var(--brand-green)" }}
          >
             {t("header.openChimera")}
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label={t("header.openMenu")}
                className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-white/10 bg-[var(--brand-navy)] text-foreground"
            >
              <SheetTitle className="sr-only">{t("header.menuTitle")}</SheetTitle>
              <SheetDescription className="sr-only">
                {t("header.menuDescription")}
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
                    {t(`header.nav.${n.key}`)}
                  </Link>
                ))}
                <a
                  href="https://app.chimerawallet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
                  style={{ backgroundColor: "var(--brand-green)" }}
                >
                   {t("header.openChimera")}
                </a>
                <div className="mt-4 flex justify-center">
                  <LanguageSwitcher />
                </div>
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
