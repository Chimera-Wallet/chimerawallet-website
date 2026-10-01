import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ScrollableComparison } from "@/components/scrollable-comparison";
import { CtaCard } from "@/components/cta-card";
import bronzeBadge from "@/assets/site/Tiers/Bronze.png";
import silverBadge from "@/assets/site/Tiers/Silver.png";
import goldBadge from "@/assets/site/Tiers/Gold.png";
import diamondBadge from "@/assets/site/Tiers/Diamond.png";
import cextIcon from "@/assets/site/Coins/coin-front-chimera.png";
import bnbIcon from "@/assets/site/Icons/bnb-bnb-logo.svg";
import kcsIcon from "@/assets/site/Icons/kucoin-token-kcs-logo.svg";
import okbIcon from "@/assets/site/Icons/okb-okb-logo.svg";
import floatingCoins from "@/assets/site/airdrop.png";
import pieChart from "@/assets/site/pie_chart.png";
import whitepaperPdf from "@/assets/documents/CEXT_Whitepaper_V2.pdf?url";
import heroCoin1 from "@/assets/site/Coins/Chimera-card-2-1.png";
import heroCoin2 from "@/assets/site/Coins/Chimera-card-2-3.png";
import heroCoin3 from "@/assets/site/Coins/Chimera-card-2-4.png";
import heroCoin4 from "@/assets/site/Coins/Chimera-card-2-5.png";
import heroCoin5 from "@/assets/site/Coins/Chimera-card-2-3.png";
import tokenCard1 from "@/assets/site/token-cards/card1.png";
import tokenCard2 from "@/assets/site/token-cards/card2.png";
import tokenCard3 from "@/assets/site/token-cards/card3.png";
import tokenCard4 from "@/assets/site/token-cards/card4.png";
import tokenCard5 from "@/assets/site/token-cards/card5.png";
import tokenCard6 from "@/assets/site/token-cards/card6.png";
import tokenCard7 from "@/assets/site/token-cards/card7.png";

export const Route = createFileRoute("/token")({
  head: () => ({
    meta: [
      { title: i18n.t("token.meta.title") },
      {
        name: "description",
        content: i18n.t("token.meta.description"),
      },
      { property: "og:title", content: i18n.t("token.meta.title") },
      {
        property: "og:description",
        content: i18n.t("token.meta.description"),
      },
    ],
  }),
  component: TokenPage,
});

function TokenPage() {
  const { t } = useTranslation();
  return (
    <main>
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pt-16 pb-10 lg:overflow-visible">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
          <img src={heroCoin1} alt="" className="absolute left-[1%] top-[8%] w-16 sm:w-24 md:w-44 lg:w-56 animate-[float_7s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin2} alt="" className="absolute right-[-2%] top-[4%] w-12 sm:w-20 md:w-32 lg:w-40 animate-[float_8s_ease-in-out_infinite_-2s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin3} alt="" className="absolute right-[-4%] md:right-[-14%] lg:right-[-4%] top-[42%] w-14 sm:w-24 md:w-36 lg:w-44 animate-[float_9s_ease-in-out_infinite_-4s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin4} alt="" className="absolute left-[6%] bottom-[36%] sm:bottom-[26%] md:bottom-[24%] lg:bottom-[18%] w-12 sm:w-16 md:w-24 lg:w-28 animate-[float_7.5s_ease-in-out_infinite_-1s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin5} alt="" className="absolute right-[2%] bottom-[36%] sm:right-[18%] sm:bottom-[24%] md:right-[12%] md:bottom-[30%] lg:bottom-[18%] w-12 sm:w-16 md:w-24 lg:w-32 animate-[float_8.5s_ease-in-out_infinite_-3s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
        </div>
        <Reveal><div className="relative rounded-3xl border border-white/10 bg-[var(--brand-navy-card)] p-10 text-center opacity-90">
          <p className="hero-eyebrow text-[var(--brand-green)]">{t("token.hero.eyebrow")}</p>
          <h1 className="hero-title mx-auto mt-6 max-w-5xl">
            {t("token.hero.title")}
            <br />
            {t("token.hero.titleLine2")}
          </h1>
          <h2 className="mt-6 text-base md:text-lg text-foreground/85">{t("token.hero.subtitle")}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            {t("token.hero.body")}
          </p>
          <button className="btn-ghost mt-8">
            {t("token.hero.cta")}
          </button>
        </div></Reveal>

        <div className="mt-6 grid grid-cols-2 gap-1.5 md:grid-cols-7">
          {[
            { src: tokenCard1, alt: t("token.cards.card1") },
            { src: tokenCard2, alt: t("token.cards.card2") },
            { src: tokenCard3, alt: t("token.cards.card3") },
            { src: tokenCard4, alt: t("token.cards.card4") },
            { src: tokenCard5, alt: t("token.cards.card5") },
            { src: tokenCard6, alt: t("token.cards.card6") },
            { src: tokenCard7, alt: t("token.cards.card7") },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 80} className="h-full">
              <img src={c.src} alt={c.alt} className="h-full w-full aspect-square object-cover rounded-xl" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8">
          <Reveal className="h-full"><div className="flex h-full flex-col">
            <h3 className="display text-xl">{t("token.distribution.title")}</h3>
            <div className="mt-4 flex-1 min-h-0">
              <img src={pieChart} alt={t("token.distribution.chartAlt")} className="h-full w-full object-contain" />
            </div>
          </div></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-left">
        <Reveal><h2 className="display text-3xl md:text-5xl">{t("token.stake.title")}</h2></Reveal>
        <Reveal delay={120}><p className="display mt-2 text-2xl text-foreground/80">{t("token.stake.subtitle")}</p></Reveal>
        <Reveal as="p" delay={240} className="mt-6 max-w-2xl text-sm text-foreground/85">
          {t("token.stake.body")}
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <Reveal>
          <CtaCard
            eyebrow={t("token.waitlistCta.eyebrow")}
            title={t("token.waitlistCta.title")}
            eyebrowColor="text-[var(--brand-green)]"
            href="/#waitlist"
            className="mx-auto w-[1024px] max-w-full"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl uppercase">{t("token.tiers.title")}</h2></Reveal>
        <Reveal delay={120}><p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          {t("token.tiers.subtitle")}
        </p></Reveal>

        <ScrollableComparison columns={4} className="mt-10">
          {(t("token.tiers.list", { returnObjects: true }) as any[]).map(
            (tier: { name: string; balance: string; fee: string; ref: string; sup: string; news: string; list: string }, i: number) => {
              const imgs = [bronzeBadge, silverBadge, goldBadge, diamondBadge];
              return (
                <Reveal key={tier.name} delay={i * 120}><div className="surface-card h-full text-center">
                  <img src={imgs[i]} alt={t("token.tiers.badgeAlt", { name: tier.name })} className="mx-auto h-32 w-32 object-contain" />
                  <h3 className="display mt-4 text-2xl">{tier.name}</h3>
                  <div className="mt-3 text-xs text-muted-foreground">{tier.balance}<br/>{t("token.tiers.balanceLabel")}</div>
                  <Row v={tier.fee} l={t("token.tiers.feeLabel")} />
                  <Row v={tier.ref} l={t("token.tiers.refLabel")} />
                  <Row v={tier.sup} l={t("token.tiers.supLabel")} />
                  <Row v={tier.news} l={t("token.tiers.newsLabel")} />
                  <Row v={tier.list} l={t("token.tiers.listLabel")} />
                </div></Reveal>
              );
            }
          )}
        </ScrollableComparison>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><Card eyebrow={t("token.staking.eyebrow")} title={t("token.staking.title")} body={t("token.staking.body")} footnote={t("token.staking.footnote")} /></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl uppercase">{t("token.comparison.title")}</h2></Reveal>
        <Reveal delay={120}><p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          {t("token.comparison.subtitle")}
        </p></Reveal>
        <Reveal delay={240}><p className="mx-auto mt-2 max-w-3xl text-center text-xs text-muted-foreground/70">
          {t("token.comparison.asOf")}
        </p></Reveal>

        <ScrollableComparison columns={4} className="mt-10">
          {(() => {
            const labels = t("token.comparison.labels", { returnObjects: true }) as {
              totalSupply: string;
              feeDiscount: string;
              minThreshold: string;
              referralBonus: string;
              premiumSupport: string;
              earlyNews: string;
              listingInfluence: string;
              governance: string;
            };
            const labelOrder = [
              labels.totalSupply,
              labels.feeDiscount,
              labels.minThreshold,
              labels.referralBonus,
              labels.premiumSupport,
              labels.earlyNews,
              labels.listingInfluence,
              labels.governance,
            ];
            const tokens = t("token.comparison.tokens", { returnObjects: true }) as {
              cext: { name: string; sub: string; values: string[] };
              bnb: { name: string; sub: string; values: string[] };
              kcs: { name: string; sub: string; values: string[] };
              okb: { name: string; sub: string; values: string[] };
            };
            return [
              { n: tokens.cext.name, sub: tokens.cext.sub, icon: cextIcon, values: tokens.cext.values },
              { n: tokens.bnb.name, sub: tokens.bnb.sub, icon: bnbIcon, values: tokens.bnb.values },
              { n: tokens.kcs.name, sub: tokens.kcs.sub, icon: kcsIcon, values: tokens.kcs.values },
              { n: tokens.okb.name, sub: tokens.okb.sub, icon: okbIcon, values: tokens.okb.values },
            ].map(({ n, sub, icon, values }, i) => (
              <Reveal key={n} delay={i * 120}><div
                key={n}
                className={i === 0
                  ? "h-full rounded-2xl border border-white/10 p-6 text-center"
                  : "surface-card h-full text-center"}
                style={i === 0 ? { background: "#1F3BDB" } : undefined}
              >
                <img src={icon} alt={t("token.comparison.logoAlt", { name: n })} className="mx-auto h-16 w-16 object-contain" />
                <h3 className="display mt-4 text-xl">{n}</h3>
                <p className="text-[10px] tracking-widest text-foreground/60">{sub}</p>
                {values.map((v, idx) => (
                  <Row key={labelOrder[idx]} v={v} l={labelOrder[idx]} />
                ))}
              </div></Reveal>
            ));
          })()}
        </ScrollableComparison>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl">{t("token.roadmap.title")}</h2></Reveal>
        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand-green)]/0 via-[var(--brand-green)]/60 to-[var(--brand-green)]/0 md:left-1/2 md:-translate-x-1/2"
          />
          {(t("token.roadmap.items", { returnObjects: true }) as { d: string; t: string }[]).map((item, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={item.t} delay={80}>
                <div className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                  {/* dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--brand-green)] ring-4 ring-[var(--brand-green)]/20 md:left-1/2"
                  />
                  <div
                    className={
                      "py-4 md:py-6 " + (left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10")
                    }
                  >
                    <div className="surface-card inline-block w-full p-5 text-left">
                      <div className="eyebrow">{item.d}</div>
                      <div className="display mt-2 text-lg" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>{item.t}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal><p className="mx-auto mt-8 max-w-4xl text-center text-xs text-muted-foreground">
          {t("token.roadmap.footnote")}
        </p></Reveal>
      </section>

      

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <Reveal><div className="rounded-2xl p-10 pb-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <img src={floatingCoins} alt={t("token.airdrop.coinsAlt")} className="w-full max-w-[780px] rounded-2xl object-cover" style={{ aspectRatio: "780 / 490" }} />
            <div>
              <h2 className="display text-3xl md:text-4xl">{t("token.airdrop.title")}</h2>
              <p className="display mt-1 text-[18px] md:text-[22px]" style={{ fontWeight: 300 }}>{t("token.airdrop.subtitle")}</p>
              <p className="mt-6 text-sm text-foreground/85">{t("token.airdrop.body")}</p>
              <a
                href={whitepaperPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-opacity duration-150 hover:opacity-80"
                style={{
                  color: "var(--brand-navy)",
                  backgroundColor: "var(--brand-green)",
                }}
              >
                {t("token.airdrop.whitepaperCta")}
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div></Reveal>
      </section>
    </main>
  );
}

function Row({ v, l }: { v: string; l: string }) {
  return (
    <div className="mt-3 border-t border-white/5 pt-3">
      <div className="display text-base">{v}</div>
      <div className="text-[10px] text-muted-foreground">{l}</div>
    </div>
  );
}


function Card({
  eyebrow,
  title,
  body,
  footnote,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  footnote?: string;
}) {
  return (
    <div className="surface-card">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h3 className="display mt-2 text-xl text-[var(--brand-green)]" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>{title}</h3>
      <p className="mt-3 text-sm text-foreground/85">{body}</p>
      {footnote && <p className="mt-3 text-[10px] text-muted-foreground">{footnote}</p>}
    </div>
  );
}
