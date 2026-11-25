import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import { Reveal } from "@/components/reveal";
import i18n from "@/i18n";

export const Route = createFileRoute("/privacy-app")({
  head: () => ({
    meta: [
      { title: i18n.t("privacyApp.meta.title") },
      { name: "description", content: i18n.t("privacyApp.meta.description") },
      { property: "og:title", content: i18n.t("privacyApp.meta.ogTitle") },
      { property: "og:description", content: i18n.t("privacyApp.meta.ogDescription") },
    ],
  }),
  component: AppPrivacyPolicy,
});

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="mt-10">
      {title && <h2 className="display text-2xl md:text-3xl text-[var(--brand-green)]">{title}</h2>}
      <div className="mt-4 space-y-4 text-sm md:text-base text-foreground/85 leading-relaxed">{children}</div>
    </Reveal>
  );
}

function AppPrivacyPolicy() {
  const { t } = useTranslation();
  const thirdPartyItems = t("privacyApp.thirdPartyApi.items", { returnObjects: true }) as string[];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Reveal delay={120}><h1 className="hero-title">{t("privacyApp.hero.title")}</h1></Reveal>

      <Section>
        <p>{t("privacyApp.intro.body")}</p>
        <p className="font-semibold text-foreground">{t("privacyApp.intro.nutshell")}</p>
      </Section>

      <Section title={t("privacyApp.informationNotCollected.heading")}>
        <p>{t("privacyApp.informationNotCollected.body")}</p>
      </Section>

      <Section title={t("privacyApp.informationShared.heading")}>
        <p>{t("privacyApp.informationShared.body")}</p>
      </Section>

      <Section title={t("privacyApp.thirdPartyApi.heading")}>
        <p>{t("privacyApp.thirdPartyApi.intro")}</p>
        <ul className="list-disc space-y-2 pl-6">
          {thirdPartyItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t("privacyApp.thirdPartyApi.coingecko")}</p>
        <p>{t("privacyApp.thirdPartyApi.disclaimer")}</p>
      </Section>

      <Reveal><p className="mt-12 text-xs text-muted-foreground">{t("privacyApp.effectiveDate")}</p></Reveal>
    </main>
  );
}
