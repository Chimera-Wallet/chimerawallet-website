import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/hydra-manifesto")({
  head: () => ({
    meta: [
      { title: i18n.t("hydraManifesto.meta.title") },
      { name: "description", content: i18n.t("hydraManifesto.meta.description") },
      { property: "og:title", content: i18n.t("hydraManifesto.meta.title") },
      { property: "og:description", content: i18n.t("hydraManifesto.meta.description") },
    ],
  }),
  component: HydraManifestoPage,
});

function HydraManifestoPage() {
  const { t } = useTranslation();
  const body = t("hydraManifesto.body", { returnObjects: true }) as string[];
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Reveal delay={0}><h1 className="hero-title">{t("hydraManifesto.title")}</h1></Reveal>
      <Reveal delay={120}><p className="hero-eyebrow mt-6 text-[var(--brand-green)]">{t("hydraManifesto.subtitle")}</p></Reveal>
      <Reveal delay={240}><div className="mt-10 space-y-6 text-sm leading-relaxed text-foreground/85">
        {Array.isArray(body) && body.map((p, i) => <p key={i}>{p}</p>)}
      </div></Reveal>
    </main>
  );
}
