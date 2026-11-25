import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";
import { Section, Card, BrandButton, GhostButton } from "@/components/ui";
import arkLogo from "@/assets/site/ark-logo.png";
import mockupAppPage1 from "@/assets/site/mockup-app-page-1.png";
import openSource from "@/assets/site/open_source.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: i18n.t("about.meta.title") },
      {
        name: "description",
        content: i18n.t("about.meta.description"),
      },
      { property: "og:title", content: i18n.t("about.meta.ogTitle") },
      {
        property: "og:description",
        content: i18n.t("about.meta.description"),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  const standForItems = t("about.standFor.items", { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
        <Reveal delay={0}>
          <p className="hero-eyebrow text-[var(--brand-green)]">{t("about.hero.eyebrow")}</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-title mt-6">
            <Trans i18nKey="about.hero.title" components={{ br: <br /> }} />
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <h2 className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-foreground/85">
            {t("about.hero.subtitle")}
          </h2>
        </Reveal>
        <Reveal delay={340}>
          <p className="mx-auto mt-3 max-w-3xl text-xs text-muted-foreground">
            {t("about.hero.body")}
          </p>
        </Reveal>
      </section>

      <Section size="sm">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
          <Reveal className="h-full">
            <Card className="h-full">
              <img src={arkLogo} alt={t("about.stats.mainnet.logoAlt")} className="h-10 w-10 object-contain" />
              <div className="mt-6 text-xs tracking-widest text-foreground/80" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>
                <Trans i18nKey="about.stats.mainnet.label" components={{ br: <br /> }} />
              </div>
              <div className="display mt-2 text-2xl text-[var(--brand-green)]" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>{t("about.stats.mainnet.value")}</div>
            </Card>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <Card className="h-full">
              <div className="display text-2xl text-[var(--brand-green)]" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>
                <Trans i18nKey="about.stats.verifiable.label" components={{ br: <br /> }} />
              </div>
              <p className="mt-4 text-sm">{t("about.stats.verifiable.body")}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t("about.stats.verifiable.note")}</p>
            </Card>
          </Reveal>
          <Reveal delay={240} className="h-full">
            <Card className="h-full">
              <div className="text-xs tracking-widest text-foreground/80" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>{t("about.stats.raised.label")}</div>
              <div className="display mt-2 text-3xl" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>{t("about.stats.raised.value")}</div>
              <p className="mt-2 text-xs text-muted-foreground">
                {t("about.stats.raised.note")}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="display text-2xl">{t("about.code.titleLine1")}</h2>
              <p className="display text-3xl md:text-4xl">{t("about.code.titleLine2")}</p>
              <p className="mt-6 text-sm text-foreground/85">
                <Trans i18nKey="about.code.body1" components={{ br: <br /> }} />
              </p>
              <p className="mt-4 text-sm text-foreground/85">
                <Trans i18nKey="about.code.body2" components={{ br: <br /> }} />
              </p>
              <BrandButton
                href="https://github.com/Chimera-Wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
              >
                {t("about.code.cta")}
              </BrandButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src={openSource} alt={t("about.code.openSourceAlt")} className="aspect-[4/3] w-full object-contain" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img
              src={mockupAppPage1}
              alt={t("about.wallet.mockupAlt")}
              className="aspect-[5/4] w-full object-contain"
            />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="display text-2xl">{t("about.wallet.titleLine1")}</h2>
              <p className="display text-3xl md:text-4xl">{t("about.wallet.titleLine2")}</p>
              <p className="mt-6 text-sm">
                <Trans i18nKey="about.wallet.body1" components={{ br: <br /> }} />
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{t("about.wallet.body2")}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="display text-2xl">{t("about.standFor.titleLine1")}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="display text-3xl md:text-5xl">{t("about.standFor.titleLine2")}</p>
        </Reveal>
      </section>

      <Section size="none" className="pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {standForItems.map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <Card className="h-full">
                <h3 className="display text-xl text-[var(--brand-green)]" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>{title}</h3>
                <p className="mt-3 text-sm text-foreground/85">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <GhostButton>{t("about.standFor.cta")}</GhostButton>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
