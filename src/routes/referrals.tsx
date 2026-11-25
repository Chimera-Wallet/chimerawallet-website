import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Reveal } from "@/components/reveal";
import { Section, Card, BrandButton } from "@/components/ui";
import bronzeBadge from "@/assets/site/Tiers/Bronze.png";
import silverBadge from "@/assets/site/Tiers/Silver.png";
import goldBadge from "@/assets/site/Tiers/Gold.png";
import diamondBadge from "@/assets/site/Tiers/Diamond.png";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: i18n.t("referrals.meta.title") },
      {
        name: "description",
        content: i18n.t("referrals.meta.description"),
      },
      { property: "og:title", content: i18n.t("referrals.meta.ogTitle") },
      {
        property: "og:description",
        content: i18n.t("referrals.meta.description"),
      },
    ],
  }),
  component: ReferralsPage,
});

function ReferralsPage() {
  const { t } = useTranslation();

  const steps = t("referrals.howItWorks.steps", { returnObjects: true }) as {
    titlePrefix?: string;
    titleHighlight: string;
    body: string;
  }[];

  const badges = [bronzeBadge, silverBadge, goldBadge, diamondBadge];
  const tiers = t("referrals.multipliers.tiers", { returnObjects: true }) as {
    name: string;
    multiplier: string;
  }[];

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 text-center">
          <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">{t("referrals.hero.eyebrow")}</p></Reveal>
          <Reveal delay={120}><h1 className="hero-title mx-auto mt-6">
            <span className="md:whitespace-nowrap">{t("referrals.hero.titleLine1")}<span className="hidden md:inline"> </span><br className="md:hidden" />{t("referrals.hero.titleLine2")}</span>
            <br className="hidden md:inline" />
            <br className="md:hidden" />
            {t("referrals.hero.titleLine3")}
            <br />
            {t("referrals.hero.titleLine4")}
          </h1></Reveal>
          <Reveal delay={240}><h2 className="mt-6 text-base md:text-lg text-foreground/85">{t("referrals.hero.subtitle")}</h2></Reveal>
          <Reveal delay={340}><p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            {t("referrals.hero.body")}
          </p></Reveal>
        </div>
      </section>

      <Section>
        <Reveal><h2 className="display text-3xl md:text-5xl">{t("referrals.howItWorks.title")}</h2></Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 120} className="h-full">
              <Card className="h-full">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm">{i + 1}</div>
                <div className="display mt-6 text-lg" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>
                  {s.titlePrefix}
                  <span className="text-[var(--brand-green)]">{s.titleHighlight}</span>
                </div>
                {s.body && <div className="mt-2 text-xs text-muted-foreground">{s.body}</div>}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Reveal><h2 className="display text-3xl md:text-5xl">{t("referrals.multipliers.title")}</h2></Reveal>
        <Reveal delay={120}><p className="display mt-2 text-xl text-foreground/80">{t("referrals.multipliers.subtitle")}</p></Reveal>

        <div className="mt-10 grid grid-cols-2 items-stretch gap-4 md:grid-cols-4">
          {tiers.map(({ name, multiplier }, i) => (
            <Reveal key={name} delay={i * 120} className="h-full">
              <Card className="h-full">
                <img src={badges[i]} alt={t("referrals.multipliers.badgeAlt", { name })} className="mx-auto h-40 w-40 object-contain" />
                <h3 className="display mt-4 text-2xl" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>{name}</h3>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <div className="display text-xl">{multiplier}</div>
                  <div className="text-[10px] text-muted-foreground">{t("referrals.multipliers.referralBonus")}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal><p className="mt-8 text-xs text-muted-foreground">{t("referrals.multipliers.disclaimer")}</p></Reveal>
        <Reveal delay={120}><BrandButton className="mt-8">{t("referrals.multipliers.cta")}</BrandButton></Reveal>
      </Section>
    </main>
  );
}
