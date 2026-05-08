import chimeraLogo from "@/assets/site/chimera-logo.png";
import chimeraMark from "@/assets/site/Chimera 1.svg";
import outlogicLogo from "@/assets/site/Outlogic_LOGO.png";
import bitcoinLogo from "@/assets/site/bitcoin-logo.svg";
import lightningLogo from "@/assets/site/lightning-logo.svg";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[var(--brand-navy-deep)] text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={chimeraLogo} alt="Chimera" className="h-10 w-auto object-contain" />
            </div>
            <div className="mt-6 text-xs text-muted-foreground">Powered by:</div>
            <div className="mt-3 flex items-center gap-4">
              <img src={bitcoinLogo} alt="Bitcoin" className="h-5 w-auto object-contain opacity-80" />
              <img src={chimeraMark} alt="Chimera" className="h-5 w-auto object-contain opacity-80" />
              <img src={lightningLogo} alt="Lightning" className="h-5 w-auto object-contain opacity-80" />
              <img src={outlogicLogo} alt="Outlogic" className="h-5 w-auto object-contain opacity-80" />
            </div>
          </div>

          <div>
            <h4 className="display text-xs text-[var(--brand-green)] tracking-widest">POLICIES</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li>
                <Link to="/privacy-app" className="hover:text-[var(--brand-green)]">
                  App Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-web" className="hover:text-[var(--brand-green)]">
                  Web Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="display text-xs text-[var(--brand-green)] tracking-widest">PRESS AND MEDIA</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li>News</li>
              <li>Press Kit</li>
            </ul>
          </div>

          <div>
            <h4 className="display text-xs text-[var(--brand-green)] tracking-widest">SUPPORT</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li>
                <a href="https://docs.outlogic.net/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-green)]">
                  Chimera API Documentation
                </a>
              </li>
              <li>
                <a href="https://support.chimerawallet.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-green)]">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-5xl text-xs text-muted-foreground">
          CEXT, issued by Outlogic SAGL, is a utility token under Swiss regulation. Not security. Not a payment token. Not an investment contract. Staking rewards are not guaranteed. The platform buy programme does not constitute a guaranteed return. Fiat, card, trading and stacking services are provided by third parties - not by Chimera Wallet.
        </p>

        <div className="mt-8 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          © 2026 Chimera Software Association - 6900 Lugano Switzerland. All right reserved. Made with ❤️ in 🇨🇭
        </div>
      </div>
    </footer>
  );
}
