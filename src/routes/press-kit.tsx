import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";
import { BrandButton } from "@/components/ui";
import banner1 from "@/assets/site/press-banner1.png";

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      { title: i18n.t("pressKit.meta.title") },
      {
        name: "description",
        content: i18n.t("pressKit.meta.description"),
      },
      { property: "og:title", content: i18n.t("pressKit.meta.title") },
      {
        property: "og:description",
        content: i18n.t("pressKit.meta.ogDescription"),
      },
    ],
  }),
  component: PressKitPage,
});

const COLORS = [
  { hex: "#9DFFC4", text: "#000627" },
  { hex: "#1F3BDB", text: "#FFFFFF" },
  { hex: "#000627", text: "#FFFFFF" },
  { hex: "#1DFF78", text: "#000627" },
  { hex: "#CED0DD", text: "#000627" },
  { hex: "#061A8E", text: "#FFFFFF" },
  { hex: "#030E4E", text: "#FFFFFF" },
  { hex: "#9DFFC4", text: "#000627" },
];

function PressKitPage() {
  const { t } = useTranslation();
  return (
    <main className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      <Reveal delay={0}><p className="hero-eyebrow text-center text-[var(--brand-green)]">{t("pressKit.eyebrow")}</p></Reveal>
      <Reveal delay={120}><h1 className="hero-title mt-6 text-center">{t("pressKit.title")}</h1></Reveal>
      <Reveal delay={240}><h2 className="mt-4 display text-center text-xl md:text-2xl text-foreground/80">
        {t("pressKit.subtitle")}
      </h2></Reveal>
      <Reveal delay={340}><p className="mt-6 max-w-3xl mx-auto text-center text-sm text-foreground/85">
        {t("pressKit.body")}
      </p></Reveal>

      <Reveal><h2 className="display mt-16 text-2xl text-[var(--brand-green)]">{t("pressKit.logosTitle")}</h2></Reveal>
      <Reveal delay={100}>
        <img
          src={banner1}
          alt={t("pressKit.logosAlt")}
          className="mt-6 w-full object-contain"
        />
      </Reveal>

      <Reveal><h2 className="display mt-16 text-2xl text-[var(--brand-green)]">{t("pressKit.colorsTitle")}</h2></Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {COLORS.map(({ hex, text }, i) => (
          <Reveal key={`${hex}-${i}`} delay={(i % 4) * 100}><div
            key={`${hex}-${i}`}
            className="flex aspect-square items-center justify-center rounded-2xl border border-white/10"
            style={{ background: hex, color: text }}
          >
            <span className="display text-lg">{hex}</span>
          </div></Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 text-center">
          <BrandButton
            href="/ChimeraWallet-MediaKit.zip"
            download
            className="px-8 py-4"
          >
            {t("pressKit.cta")}
          </BrandButton>
        </div>
      </Reveal>
    </main>
  );
}
