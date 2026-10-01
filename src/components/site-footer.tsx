import chimeraLogo from "@/assets/site/chimera-logo.png";
import arkadeLogo from "@/assets/site/arkade-logo.svg";
import outlogicLogo from "@/assets/site/Outlogic_LOGO.png";
import bitcoinLogo from "@/assets/site/bitcoin-logo.svg";
import lightningLogo from "@/assets/site/lightning-logo.svg";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/5 bg-[var(--brand-navy-deep)] text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
               <img src={chimeraLogo} alt="Chimera" className="h-10 w-auto object-contain" />
            </div>
            <div className="mt-6 text-xs text-muted-foreground">{t("footer.poweredBy")}</div>
            <div className="mt-3 flex items-center gap-4">
              <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="opacity-80 transition hover:opacity-100">
                <img src={bitcoinLogo} alt="Bitcoin" className="h-5 w-auto object-contain" />
              </a>
              <a href="https://arkadeos.com" target="_blank" rel="noopener noreferrer" className="opacity-80 transition hover:opacity-100">
                <img src={arkadeLogo} alt="Arkade" className="h-7 w-auto object-contain" />
              </a>
              <a href="https://lightning.network" target="_blank" rel="noopener noreferrer" className="opacity-80 transition hover:opacity-100">
                <img src={lightningLogo} alt="Lightning" className="h-5 w-auto object-contain" />
              </a>
              <a href="https://outlogic.net" target="_blank" rel="noopener noreferrer" className="opacity-80 transition hover:opacity-100">
                <img src={outlogicLogo} alt="Outlogic" className="h-5 w-auto object-contain" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="display text-xs text-[var(--brand-green)] tracking-widest">{t("footer.privacy")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li>
                 <Link to="/privacy-manifesto" className="hover:text-[var(--brand-green)]">
                   {t("footer.privacyManifesto")}
                 </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="display text-xs text-[var(--brand-green)] tracking-widest">{t("footer.pressAndMedia")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li>
                <Link to="/news" className="hover:text-[var(--brand-green)]">
                  {t("footer.news")}
                </Link>
              </li>
              <li>
                <Link to="/press-kit" className="hover:text-[var(--brand-green)]">
                  {t("footer.pressKit")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="display text-xs text-[var(--brand-green)] tracking-widest">{t("footer.support")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li>
                <a
                  href="https://docs.outlogic.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-green)]"
                >
                  {t("footer.apiDocs")}
                </a>
              </li>
              <li>
                <a
                  href="https://support.chimerawallet.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-green)]"
                >
                  {t("footer.supportCenter")}
                </a>
              </li>
            </ul>
          </div>
        </div>

         <p className="mt-10 max-w-5xl text-xs text-muted-foreground leading-relaxed">
            {t("footer.disclaimer")}
         </p>

         <div className="mt-8 border-t border-white/5 pt-6 text-xs text-muted-foreground">
           {t("footer.copyright")}
         </div>
      </div>
    </footer>
  );
}
