import { Reveal } from "@/components/reveal";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { Section, Card, Eyebrow, BrandButton, GhostButton } from "@/components/ui";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import cardHero from "@/assets/site/Chimera_Card.png";
import cardCoins from "@/assets/site/chimera-card.png";
import { Trans, useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Route = createFileRoute("/card")({
  head: () => ({
    meta: [
      { title: i18n.t("card.meta.title") },
      {
        name: "description",
        content: i18n.t("card.meta.description"),
      },
      { property: "og:title", content: i18n.t("card.meta.title") },
      {
        property: "og:description",
        content: i18n.t("card.meta.description"),
      },
    ],
  }),
  component: CardPage,
});

function CardPage() {
  const { t } = useTranslation();
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const embed = /(?:^|[?&])embed=1(?:&|$)/.test(searchStr ?? "");
  const ReserveForm = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <form
      target="_blank"
      action="https://legacy.coinpayments.net/index.php"
      method="post"
      className={className ?? "inline-block"}
    >
      <input type="hidden" name="cmd" value="_pay" />
      <input type="hidden" name="reset" value="1" />
      <input type="hidden" name="merchant" value="ffbe722f993d4e0fe6bca78ac543e15b" />
      <input type="hidden" name="item_name" value="Chimera Card Reservation" />
      <input type="hidden" name="currency" value="CHF" />
      <input type="hidden" name="amountf" value="20.00000000" />
      <input type="hidden" name="quantity" value="1" />
      <input type="hidden" name="allow_quantity" value="0" />
      <input type="hidden" name="want_shipping" value="0" />
      <input type="hidden" name="allow_extra" value="0" />
      {children}
    </form>
  );

  const SUPPORTED_COUNTRIES_BY_CONTINENT: [string, [string, string][]][] = [
    ["Europe", [
      ["🇦🇩", "Andorra"], ["🇦🇹", "Austria"], ["🇧🇪", "Belgium"], ["🇧🇬", "Bulgaria"],
      ["🇭🇷", "Croatia"], ["🇨🇾", "Cyprus"], ["🇨🇿", "Czech Republic"], ["🇩🇰", "Denmark"],
      ["🇪🇪", "Estonia"], ["🇫🇮", "Finland"], ["🇫🇷", "France"], ["🇩🇪", "Germany"],
      ["🇬🇮", "Gibraltar"], ["🇬🇷", "Greece"], ["🇭🇺", "Hungary"], ["🇮🇸", "Iceland"],
      ["🇮🇪", "Ireland"], ["🇮🇹", "Italy"], ["🇱🇻", "Latvia"], ["🇱🇹", "Lithuania"],
      ["🇱🇺", "Luxembourg"], ["🇲🇹", "Malta"], ["🇲🇨", "Monaco"], ["🇲🇪", "Montenegro"],
      ["🇳🇱", "Netherlands"], ["🇳🇴", "Norway"], ["🇵🇱", "Poland"], ["🇵🇹", "Portugal"],
      ["🇷🇴", "Romania"], ["🇸🇰", "Slovakia"], ["🇸🇮", "Slovenia"], ["🇪🇸", "Spain"],
      ["🇸🇪", "Sweden"], ["🇨🇭", "Switzerland"], ["🇬🇧", "United Kingdom"],
    ]],
    ["Asia & Pacific", [
      ["🇦🇺", "Australia"], ["🇭🇰", "Hong Kong"], ["🇮🇩", "Indonesia"], ["🇲🇾", "Malaysia"],
      ["🇵🇭", "Philippines"], ["🇸🇬", "Singapore"], ["🇹🇼", "Taiwan"], ["🇹🇭", "Thailand"],
      ["🇻🇳", "Vietnam"],
    ]],
    ["Latin America", [
      ["🇦🇷", "Argentina"], ["🇧🇷", "Brazil"], ["🇨🇱", "Chile"], ["🇨🇴", "Colombia"],
      ["🇪🇨", "Ecuador"], ["🇲🇽", "Mexico"], ["🇵🇪", "Peru"],
    ]],
  ];

  const benefitItems = t("card.benefits.items", { returnObjects: true }) as {
    tag: string;
    title: string;
    body: string;
    badge: string;
    strike: string;
  }[];

  const faqItems = t("card.faq.items", { returnObjects: true }) as { q: string; a: string }[];

  return (
    <main>
      <Section size="none" className="pt-16 pb-10 text-center">
        <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">{t("card.hero.eyebrow")}</p></Reveal>
        <Reveal delay={120}><h1 className="hero-title mx-auto mt-6 max-w-5xl">
          <Trans i18nKey="card.hero.title" components={{ br: <br /> }} />
        </h1></Reveal>
        <Reveal delay={240}><h2 className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-foreground/85">
          {t("card.hero.subtitle")}
        </h2></Reveal>
        <Reveal delay={340}>
          <ReserveForm>
            <GhostButton type="submit" className="mt-8">{t("card.hero.cta")}</GhostButton>
          </ReserveForm>
        </Reveal>
        <Reveal delay={460}>
          <div className="relative mx-auto mt-10 w-full max-w-md">
            {/* Fanned transparent card silhouettes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
              <div
                className="absolute aspect-[1.6/1] w-[85%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{ transform: "translateX(-95%) translateY(-28%) rotate(22deg)", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
              />
              <div
                className="absolute aspect-[1.6/1] w-[85%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{ transform: "translateX(95%) translateY(-28%) rotate(-22deg)", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
              />
              <div
                className="absolute aspect-[1.6/1] w-[90%] rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-sm"
                style={{ transform: "translateX(-52%) translateY(-2%) rotate(11deg)", boxShadow: "0 25px 70px rgba(0,0,0,0.4)" }}
              />
              <div
                className="absolute aspect-[1.6/1] w-[90%] rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-sm"
                style={{ transform: "translateX(52%) translateY(-2%) rotate(-11deg)", boxShadow: "0 25px 70px rgba(0,0,0,0.4)" }}
              />
            </div>
            <img src={cardHero} alt={t("card.hero.imageAlt")} className="relative mx-auto w-full object-contain" />
          </div>
        </Reveal>
      </Section>

      <Section size="none" className="py-6">
        <Reveal>
          <ReserveForm className="block w-full">
            <button type="submit" className="block w-full text-left">
              <Card variant="glow" padding="px-6 py-8" className="cta-card relative flex w-full items-center justify-center">
                <div className="w-full text-left">
                  <Eyebrow>{t("card.ctaCard.eyebrow")}</Eyebrow>
                  <div className="display mt-1 text-xl">{t("card.ctaCard.title")}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {t("card.ctaCard.body")}
                  </div>
                </div>
                <span className="absolute right-6 text-xl">↗</span>
              </Card>
            </button>
          </ReserveForm>
        </Reveal>
      </Section>

      <Section size="lg">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal><img src={cardCoins} alt={t("card.spots.imageAlt")} className="aspect-[4/3] w-full object-contain" /></Reveal>
          <Reveal delay={120}><div>
            <h2 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">{t("card.spots.heading")}</h2>
            <p className="mt-1 text-2xl font-bold uppercase tracking-wide text-foreground/80">{t("card.spots.subheading")}</p>
            <p className="mt-6 text-sm text-foreground/85">
              {t("card.spots.body")}
            </p>
            <p className="mt-3 text-sm font-semibold text-[var(--brand-green)]">
              {t("card.spots.rollout")}
            </p>
            <ReserveForm>
              <BrandButton type="submit" className="mt-8">{t("card.spots.cta")}</BrandButton>
            </ReserveForm>
          </div></Reveal>
        </div>
      </Section>

      <Section size="lg">
        <Reveal><h2 className="h1 text-3xl font-bold uppercase tracking-wide md:text-4xl">{t("card.benefits.heading")}</h2></Reveal>
        <Reveal delay={120}><p className="h1 text-2xl font-bold uppercase tracking-wide text-foreground/80">{t("card.benefits.subheading")}</p></Reveal>

        <div className="mt-10 space-y-4">
          {benefitItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <BenefitRow tag={item.tag} title={item.title} body={item.body} badge={item.badge} strike={item.strike} />
            </Reveal>
          ))}
        </div>

        <Reveal><p className="mt-8 text-center text-xs italic text-muted-foreground">
          {t("card.benefits.disclaimer")}
        </p></Reveal>
      </Section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal><h2 className="h1 text-center text-3xl font-bold uppercase tracking-wide md:text-4xl">{t("card.countries.heading")}</h2></Reveal>
        <Reveal delay={120}><p className="mt-4 text-center text-sm text-foreground/85">
          {t("card.countries.subheading")}
        </p></Reveal>
        <div className="mt-10 space-y-3">
          <Accordion type="multiple" className="space-y-3">
            {SUPPORTED_COUNTRIES_BY_CONTINENT.map(([continent, countries], i) => (
              <Reveal key={continent} delay={i * 80}>
                <ContinentPanel continent={continent} countries={countries} />
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><h2 className="text-center text-4xl font-bold uppercase tracking-wide md:text-5xl">{t("card.faq.heading")}</h2></Reveal>
          <div className="mt-10 space-y-3">
            <Accordion type="multiple" className="space-y-3">
              {faqItems.map((item, i) => (
                <Reveal key={item.q} delay={i * 120}>
                  <Faq value={`faq-${i + 1}`} q={item.q}>
                    {item.a}
                  </Faq>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </div>

        {!embed && (
          <div className="mx-auto mt-3 max-w-7xl px-6">
            <Reveal className="w-full">
              <a
                href="https://app.chimerawallet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-card relative flex w-full items-center justify-between rounded-2xl px-6 py-8"
              >
                <div className="w-full">
                  <Eyebrow>{t("card.openChimera.eyebrow")}</Eyebrow>
                  <div className="mt-1 text-xl font-bold uppercase tracking-wide" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>{t("card.openChimera.title")}</div>
                </div>
                <span className="absolute right-6 text-xl">↗</span>
              </a>
            </Reveal>
          </div>
        )}
      </section>
    </main>
  );
}

function BenefitRow({
  tag,
  title,
  body,
  badge,
  strike,
}: {
  tag: string;
  title: string;
  body: string;
  badge: string;
  strike: string;
}) {
  return (
    <Card padding="px-6 py-6" className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
      <div>
        <span className="inline-block rounded-md bg-[var(--brand-green)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--brand-navy)]">
          {tag}
        </span>
        <h3
          className="mt-3 text-2xl font-bold uppercase tracking-wide"
          style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-foreground/85">{body}</p>
      </div>
      <div className="rounded-md border border-[var(--brand-green)] px-6 py-3 text-center">
        <div
          className="text-3xl font-bold text-[var(--brand-green)]"
          style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}
        >
          {badge}
        </div>
        <div className="mt-1 text-[10px] tracking-widest text-foreground/70 line-through">{strike}</div>
      </div>
    </Card>
  );
}

function Faq({ value, q, children }: { value: string; q: string; children?: React.ReactNode }) {
  return (
    <AccordionItem value={value} className="surface-glass border-b-0">
      <AccordionTrigger className="group flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-sm font-semibold hover:no-underline [&>svg]:hidden">
        <span>{q}</span>
        <span className="text-xl transition-transform duration-200 group-data-[state=open]:rotate-45">+</span>
      </AccordionTrigger>
      <AccordionContent className="border-t border-white/10 px-6 py-4 text-xs text-foreground/85">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

function ContinentPanel({
  continent,
  countries,
}: {
  continent: string;
  countries: [string, string][];
}) {
  const { t } = useTranslation();
  return (
    <AccordionItem value={continent} className="surface-card border-b-0">
      <AccordionTrigger className="group flex w-full items-center justify-between px-6 py-4 text-left hover:no-underline [&>svg]:hidden">
        <span className="text-sm font-semibold uppercase tracking-widest">
          {t(`card.countries.continents.${continent}`)}
          <span className="ml-3 text-xs font-normal text-muted-foreground">({countries.length})</span>
        </span>
        <span className="text-xl transition-transform duration-200 group-data-[state=open]:rotate-45">+</span>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-2 border-t border-white/10 px-6 py-4 text-sm text-foreground/90 sm:grid-cols-2 md:grid-cols-3">
          {countries.map(([flag, name]) => (
            <li key={name} className="flex items-center gap-3 border-b border-white/5 py-2">
              <span className="text-lg leading-none">{flag}</span>
              <span>{t(`card.countries.names.${name}`)}</span>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
