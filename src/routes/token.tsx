import { createFileRoute } from "@tanstack/react-router";
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
import tokenOverview from "@/assets/site/token-overview.png";
import whitepaperPdf from "@/assets/documents/CEXT_Whitepaper_V2.pdf?url";
import heroCoin1 from "@/assets/site/Coins/Chimera-card-2-1.png";
import heroCoin2 from "@/assets/site/Coins/Chimera-card-2-3.png";
import heroCoin3 from "@/assets/site/Coins/Chimera-card-2-4.png";
import heroCoin4 from "@/assets/site/Coins/Chimera-card-2-5.png";
import heroCoin5 from "@/assets/site/Coins/Chimera-card-2-3.png";

export const Route = createFileRoute("/token")({
  head: () => ({
    meta: [
      { title: "CEXT Token — Pay Less. Earn More." },
      {
        name: "description",
        content:
          "CEXT. The utility token issued from Switzerland powering the Chimera ecosystem — fee sharing, staking, and referral multipliers.",
      },
      { property: "og:title", content: "CEXT Token — Pay Less. Earn More." },
      {
        property: "og:description",
        content:
          "CEXT. The utility token issued from Switzerland powering the Chimera ecosystem — fee sharing, staking, and referral multipliers.",
      },
    ],
  }),
  component: TokenPage,
});

function TokenPage() {
  return (
    <main>
      <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
          <img src={heroCoin1} alt="" className="absolute left-[1%] top-[8%] w-16 sm:w-24 md:w-44 lg:w-56 animate-[float_7s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin2} alt="" className="absolute right-[-2%] top-[4%] w-12 sm:w-20 md:w-32 lg:w-40 animate-[float_8s_ease-in-out_infinite_-2s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin3} alt="" className="absolute right-[-4%] top-[42%] w-14 sm:w-24 md:w-36 lg:w-44 animate-[float_9s_ease-in-out_infinite_-4s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin4} alt="" className="absolute left-[6%] bottom-[36%] sm:bottom-[26%] md:bottom-[18%] w-12 sm:w-16 md:w-24 lg:w-28 animate-[float_7.5s_ease-in-out_infinite_-1s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
          <img src={heroCoin5} alt="" className="absolute right-[2%] bottom-[36%] sm:right-[18%] sm:bottom-[24%] md:right-[12%] md:bottom-[18%] w-12 sm:w-16 md:w-24 lg:w-32 animate-[float_8.5s_ease-in-out_infinite_-3s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
        </div>
        <Reveal><div className="relative rounded-3xl border border-white/10 bg-[var(--brand-navy-card)] p-10 text-center opacity-90">
          <p className="hero-eyebrow text-[var(--brand-green)]">HOLD CEXT</p>
          <h1 className="hero-title mx-auto mt-6 max-w-5xl">
            PAY LESS. EARN MORE.
            <br />
            KNOW FIRST. GOVERN MORE.
          </h1>
          <h2 className="mt-6 text-base md:text-lg text-foreground/85">TGE: 7 July 2026. Fixed supply. Zero inflation. Four tiers.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            Fee discounts up to 50%. Referral multipliers up to 3x. Market intelligence 12-24 hours before public release. Human support at every tier - priority increase as you move up. Swiss issued. 1 Billion tokens. No inflation. No dilution. Utility Token according to Swiss classification.
          </p>
          <button className="btn-ghost mt-8">
            JOIN THE WAITLIST
          </button>
        </div></Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-7">
          {[
            { label: "FEE DISCOUNTS", mid: "UP TO", value: "50%", valueClass: "text-[var(--brand-green)]" },
            { label: "REFERRAL MULTIPLIERS", mid: "UP TO", value: "3x", valueClass: "text-[var(--brand-green)]" },
            { label: "MARKET INTELLIGENCE", value: "12-24 h", valueClass: "text-[var(--brand-green)]", sub: "BEFORE PUBLIC RELEASE" },
            { label: "HUMAN SUPPORT", labelClass: "text-[var(--brand-green)]", mid: "AT EVERY", value: "TIER" },
            { label: "PRIORITY INCREASE", labelClass: "text-[var(--brand-green)]", mid: "AS YOU", value: "MOVE UP" },
            { label: "SWISS ISSUED", value: "1 BILLION TOKENS" },
            { value: "NO", valueClass: "text-[var(--brand-green)]", mid: "INFLATION OR", sub: "DILUTION" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 80} className="h-full">
              <div className="surface-card h-full !rounded-xl !p-3 text-center flex flex-col justify-center gap-1">
                {c.label && <div className={`text-[9px] font-semibold tracking-widest leading-tight ${c.labelClass ?? "text-foreground/80"}`}>{c.label}</div>}
                {c.mid && <div className="text-[9px] tracking-widest text-foreground/70 leading-tight">{c.mid}</div>}
                <div className={`display text-base md:text-lg leading-tight break-words ${c.valueClass ?? ""}`}>{c.value}</div>
                {c.sub && <div className="text-[9px] tracking-widest text-foreground/70 leading-tight">{c.sub}</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="h-full"><div className="flex h-full flex-col">
            <h3 className="display text-xl">Token distribution</h3>
            <div className="mt-4 flex-1 min-h-0">
              <img src={pieChart} alt="Token distribution pie chart" className="h-full w-full object-contain" />
            </div>
          </div></Reveal>
          <Reveal delay={120} className="h-full"><div className="flex h-full flex-col">
            <h3 className="display text-xl">Token overview</h3>
            <div className="mt-4 flex-1 min-h-0">
              <img src={tokenOverview} alt="Token overview" className="h-full w-full object-contain" />
            </div>
          </div></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-left">
        <Reveal><h2 className="display text-3xl md:text-5xl" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>STAKE CEXT.</h2></Reveal>
        <Reveal delay={120}><p className="display mt-2 text-2xl text-foreground/80" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>EARN UP TO 15% APR.</p></Reveal>
        <Reveal as="p" delay={240} className="mt-6 max-w-2xl text-sm text-foreground/85">
          Put your CEXT to work. Stake and earn up to 15% annual returns paid in CEXT. Lock tokens for longer periods to multiply your score and maximize rewards. The longer you lock, the more you earn.
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <Reveal>
          <CtaCard
            eyebrow="JOIN THE WAITLIST"
            title="JOIN CEXT WAITLIST"
            eyebrowColor="text-[var(--brand-green)]"
            href="/#waitlist"
            className="mx-auto w-[1024px] max-w-full"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl uppercase" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>4 tiers - many advantages</h2></Reveal>
        <Reveal delay={120}><p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Learn how you can supercharge your experience with the Chimera Token
        </p></Reveal>

        <ScrollableComparison columns={4} className="mt-10">
          {[
            { name: "BRONZE", img: bronzeBadge, balance: "≥ 10,000 CEXT", fee: "20%", ref: "1x", sup: "Standard", news: "Public", list: "Basic" },
            { name: "SILVER", img: silverBadge, balance: "≥ 100,000 CEXT", fee: "30%", ref: "1.5x", sup: "Priority", news: "+12 Hours", list: "Moderate" },
            { name: "GOLD", img: goldBadge, balance: "≥ 1,000,000 CEXT", fee: "40%", ref: "2x", sup: "Premium", news: "+24 Hours", list: "High" },
            { name: "DIAMOND", img: diamondBadge, balance: "≥ 10,000,000 CEXT", fee: "50%", ref: "3x", sup: "Direct", news: "+24 Hours", list: "Full + Proposal Rights" },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 120}><div className="surface-card h-full text-center">
              <img src={t.img} alt={`${t.name} tier badge`} className="mx-auto h-32 w-32 object-contain" />
              <h3 className="display mt-4 text-2xl">{t.name}</h3>
              <div className="mt-3 text-xs text-muted-foreground">{t.balance}<br/>Average Locked Balance</div>
              <Row v={t.fee} l="Trading Fee Discount" />
              <Row v={t.ref} l="Referral Bonus" />
              <Row v={t.sup} l="Support Access" />
              <Row v={t.news} l="News Access" />
              <Row v={t.list} l="Listing Discount" />
            </div></Reveal>
          ))}
        </ScrollableComparison>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><Card eyebrow="STAKING" title="UP TO 15% APR" body="Buy CEXT in-app, send to the designated staking address shown in-app. Your tokens, your staking, your rewards." footnote="* Staking is a service provided by a third party. STAKING REWARDS are not guaranteed. Rates fluctuate based on network conditions. Chimera Wallet carry no liability for this service." /></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl uppercase" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>Exchange Tokens Comparison</h2></Reveal>
        <Reveal delay={120}><p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Learn how you can supercharge your experience with the Chimera Token
        </p></Reveal>
        <Reveal delay={240}><p className="mx-auto mt-2 max-w-3xl text-center text-xs text-muted-foreground/70">
          Data accurate as of 05/2026
        </p></Reveal>

        <ScrollableComparison columns={4} className="mt-10">
          {[
            {
              n: "CEXT",
              sub: "Chimera",
              icon: cextIcon,
              rows: [
                ["1,000,000,000 — FIXED, non-inflationary", "Total Supply"],
                ["Up to 50%", "Trading Fee Discount"],
                ["10,000,000 CEXT", "Min. Threshold for Max Discount"],
                ["Up to 3x multiplier", "Referral Bonus"],
                ["Yes (Tier 3+)", "Premium Support"],
                ["Yes (24h)", "Early News Access"],
                ["Yes (Tier 4)", "Listing Influence"],
                ["Planned (Diamond tier)", "Governance Rights"],
              ] as [string, string][],
            },
            {
              n: "BNB",
              sub: "Binance",
              icon: bnbIcon,
              rows: [
                ["~140,000,000 (post-burn)", "Total Supply"],
                ["Up to 25% direct / ~78% combined VIP9", "Trading Fee Discount"],
                ["$4,000,000,000 volume + 5,500 BNB", "Min. Threshold for Max Discount"],
                ["Standard", "Referral Bonus"],
                ["VIP Only", "Premium Support"],
                ["No", "Early News Access"],
                ["No", "Listing Influence"],
                ["Limited", "Governance Rights"],
              ] as [string, string][],
            },
            {
              n: "KCS",
              sub: "KuCoin",
              icon: kcsIcon,
              rows: [
                ["170,000,000", "Total Supply"],
                ["Up to 20% direct / negative maker at VIP12", "Trading Fee Discount"],
                ["150,000 KCS or $500,000,000 volume", "Min. Threshold for Max Discount"],
                ["Standard", "Referral Bonus"],
                ["Limited", "Premium Support"],
                ["No", "Early News Access"],
                ["GemVote (limited)", "Listing Influence"],
                ["Limited", "Governance Rights"],
              ] as [string, string][],
            },
            {
              n: "OKB",
              sub: "OKX",
              icon: okbIcon,
              rows: [
                ["21,000,000 (post-burn 2025)", "Total Supply"],
                ["Tier-based, phasing out", "Trading Fee Discount"],
                ["N/A", "Min. Threshold for Max Discount"],
                ["Standard", "Referral Bonus"],
                ["Limited", "Premium Support"],
                ["No", "Early News Access"],
                ["No", "Listing Influence"],
                ["Limited", "Governance Rights"],
              ] as [string, string][],
            },
          ].map(({ n, sub, icon, rows }, i) => (
            <Reveal key={n} delay={i * 120}><div
              key={n}
              className={i === 0
                ? "h-full rounded-2xl border border-white/10 p-6 text-center"
                : "surface-card h-full text-center"}
              style={i === 0 ? { background: "#1F3BDB" } : undefined}
            >
              <img src={icon} alt={`${n} logo`} className="mx-auto h-16 w-16 object-contain" />
              <h3 className="display mt-4 text-xl">{n}</h3>
              <p className="text-[10px] tracking-widest text-foreground/60">{sub}</p>
              {rows.map(([v, l]) => (
                <Row key={l} v={v} l={l} />
              ))}
            </div></Reveal>
          ))}
        </ScrollableComparison>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>WHAT'S NEXT?</h2></Reveal>
        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand-green)]/0 via-[var(--brand-green)]/60 to-[var(--brand-green)]/0 md:left-1/2 md:-translate-x-1/2"
          />
          {[
            ["April 2026", "Chimera Wallet PWA Live", "First Bitcoin Super App built on Chimera Protocol VTXO technology."],
            ["Q2 2026 — Coming", "DEX / CEX Listing", "CEXT listed on centralized and decentralized exchanges."],
            ["2026", "Cross Chain Support", "CEXT bridges to major L1/L2 networks. Multi-chain staking. Cross-chain swaps (coming soon)."],
            ["June 2026", "Wrap", "Wrap assets across supported chains."],
            ["June 2026", "P2P Swaps", "Peer-to-peer swaps directly in-app."],
            ["7 July 2026", "TGE", "CEXT token generation event. Native on Ethereum, bridged to Chimera assets."],
            ["July 2026", "Card Integration", "Chimera Card goes live."],
            ["2027", "Decentralised Governance", ""],
            ["2028", "DAO Transition", ""],
          ].map(([d, t, b], i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={t} delay={80}>
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
                      <div className="eyebrow">{d}</div>
                      <div className="display mt-2 text-lg" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>{t}</div>
                      {b && <p className="mt-2 text-xs text-muted-foreground">{b}</p>}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal><p className="mx-auto mt-8 max-w-4xl text-center text-xs text-muted-foreground">
          CEXT is issued by Outlogic SAGL and reviewed in accordance with FINMA guidance. Not a security. Not a payment token. Not an investment contract. A utility token — with regulatory clarity most tokens never achieve.
        </p></Reveal>
      </section>

      <TgeCountdownSection />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <Reveal><div className="rounded-2xl p-10 pb-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <img src={floatingCoins} alt="Floating CEXT coins" className="w-full max-w-[780px] rounded-2xl object-cover" style={{ aspectRatio: "780 / 490" }} />
            <div>
              <h3 className="display text-3xl" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>CEXT</h3>
              <p className="display text-2xl text-foreground/80" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>ACTIVITY AIRDROP.</p>
              <p className="mt-4 text-sm">After TGE, active Chimera users become eligible for a CEXT airdrop based on real usage. No farming. No bots. Real activity.</p>
              <a
                href={whitepaperPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand display mt-6 inline-flex gap-3 px-8 py-4 text-lg md:text-xl shadow-lg transition-transform hover:scale-105"
                style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}
              >
                WHITEPAPER
                <span aria-hidden="true">→</span>
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

function TgeCountdownSection() {
  const target = Date.UTC(2026, 6, 7, 12, 0, 0);
  const compute = () => {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return [
      { v: d.toString().padStart(2, "0"), l: "DAYS" },
      { v: h.toString().padStart(2, "0"), l: "HOURS" },
      { v: m.toString().padStart(2, "0"), l: "MINUTES" },
      { v: s.toString().padStart(2, "0"), l: "SECONDS" },
    ];
  };
  const [t, setT] = useState(compute);
  useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <Reveal><h2 className="display text-2xl text-[var(--brand-green)]" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>CEXT TGE</h2></Reveal>
      <Reveal delay={120}><p className="display mt-2 text-4xl md:text-6xl uppercase" style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300, letterSpacing: "1px" }}>7 July 2026</p></Reveal>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {t.map(({ v, l }, i) => (
          <Reveal key={l} delay={i * 120}><div className="surface-card">
            <div className="display text-4xl">{v}</div>
            <div className="mt-2 text-[10px] tracking-widest text-muted-foreground">{l}</div>
          </div></Reveal>
        ))}
      </div>
    </section>
  );
}
