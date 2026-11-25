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
  const sections = t("hydraManifesto.sections", { returnObjects: true }) as { title: string; paragraphs: string[] }[];
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Reveal delay={0}><h1 className="hero-title">{t("hydraManifesto.title")}</h1></Reveal>
      <Reveal delay={120}><p className="hero-eyebrow mt-6 text-[var(--brand-green)]">{t("hydraManifesto.subtitle")}</p></Reveal>
      {Array.isArray(sections) && sections.map((s, i) => (
        <Reveal key={i} delay={i === 0 ? 240 : 0}>
          <section className="mt-12">
            <h2 className="display text-2xl text-[var(--brand-green)]">{s.title}</h2>
            <div className="mt-6 space-y-6 text-sm leading-relaxed text-foreground/85">
              {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          </section>
        </Reveal>
      ))}
    </main>
  );
}
