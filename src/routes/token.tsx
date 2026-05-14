import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
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
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <Reveal><div className="rounded-3xl border border-white/10 bg-[var(--brand-navy-card)] p-10 text-center opacity-90">
          <p className="hero-eyebrow text-[var(--brand-green)]">HOLD CEXT</p>
          <h1 className="hero-title mx-auto mt-6 max-w-5xl">
            PAY LESS. EARN MORE.
            <br />
            KNOW FIRST. GOVERN MORE.
          </h1>
          <h2 className="mt-6 text-base md:text-lg text-foreground/85">TGE: 27 May 2026. Fixed supply. Zero inflation. Four tiers.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            Fee discounts up to 50%. Referral multipliers up to 3x. Market intelligence 12-24 hours before public release. Human support at every tier - priority increase as you move up. Swiss issued. 1 Billion tokens. No inflation. No dilution. Utility Token according to Swiss classification.
          </p>
          <button className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10">
            JOIN THE WAITLIST
          </button>
        </div></Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-7">
          {[
            ["FEE DISCOUNTS", "Up to 50%"],
            ["REFERRAL MULTIPLIERS", "Up to 3x"],
            ["MARKET INTELLIGENCE", "12-24 h before public release"],
            ["HUMAN SUPPORT", "at every TIER"],
            ["PRIORITY INCREASE", "as you move up"],
            ["SWISS ISSUED", "1 billion tokens"],
            ["NO INFLATION", "or diluition"],
          ].map(([l, v], i) => (
            <Reveal key={l} delay={i * 80}><div className="rounded-xl border border-white/10 bg-[var(--brand-navy-card)] p-4 text-center">
              <div className="text-[10px] font-bold tracking-widest text-[var(--brand-green)]">{l}</div>
              <div className="display mt-2 text-base">{v}</div>
            </div></Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal><div>
            <h3 className="display text-xl">Token distribution</h3>
            <img src={pieChart} alt="Token distribution pie chart" className="mt-4 w-full object-contain" />
          </div></Reveal>
          <Reveal delay={120}><div>
            <h3 className="display text-xl">Token overview</h3>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6 text-sm">
              {[
                ["Token Name", "Chimera Exchange Token"],
                ["Token Ticker", "CEXT"],
                ["Total Supply", "1,000,000,000 CEXT"],
                ["Blockchain", "Multichain"],
                ["Token Type", "Utility Token"],
                ["TGE", "27th May 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/5 py-3 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </div></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <Reveal><h2 className="display text-3xl md:text-5xl">STAKE CEXT.</h2></Reveal>
        <Reveal delay={120}><p className="display mt-2 text-2xl text-foreground/80">EARN UP TO 15% APR.</p></Reveal>
        <Reveal delay={240}><p className="mx-auto mt-6 max-w-2xl text-sm text-foreground/85">
          Put your CEXT to work. Stake and earn up to 15% annual returns paid in CEXT. Lock tokens for longer periods to multiply your score and maximize rewards. The longer you lock, the more you earn.
        </p></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl uppercase">4 tiers - many advantages</h2></Reveal>
        <Reveal delay={120}><p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Learn how you can supercharge your experience with the Chimera Token
        </p></Reveal>

        <div className="-mx-6 mt-10 flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:snap-none">
          {[
            { name: "BRONZE", img: bronzeBadge, balance: "≥ 10,000 CEXT", fee: "20%", ref: "1x", sup: "Standard", news: "Public", list: "Basic" },
            { name: "SILVER", img: silverBadge, balance: "≥ 100,000 CEXT", fee: "30%", ref: "1.5x", sup: "Priority", news: "+12 Hours", list: "Moderate" },
            { name: "GOLD", img: goldBadge, balance: "≥ 1,000,000 CEXT", fee: "40%", ref: "2x", sup: "Premium", news: "+24 Hours", list: "High" },
            { name: "DIAMOND", img: diamondBadge, balance: "≥ 10,000,000 CEXT", fee: "50%", ref: "3x", sup: "Direct", news: "+24 Hours", list: "Full + Proposal Rights" },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="w-[75%] shrink-0 snap-start sm:w-[55%] md:w-auto"><div className="h-full rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6 text-center">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><Card eyebrow="STAKING" title="UP TO 15% APR" body="Buy CEXT in-app, send to the designated staking address shown in-app. Your tokens, your staking, your rewards." footnote="* Staking is a service provided by a third party. STAKING REWARDS are not guaranteed. Rates fluctuate based on network conditions. Chimera Wallet carry no liability for this service." /></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl uppercase">Exchange Tokens Comparison</h2></Reveal>
        <Reveal delay={120}><p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Learn how you can supercharge your experience with the Chimera Token
        </p></Reveal>
        <Reveal delay={240}><p className="mx-auto mt-2 max-w-3xl text-center text-xs text-muted-foreground/70">
          Data accurate as of 05/2026
        </p></Reveal>

        <div className="-mx-6 mt-10 flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:snap-none">
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
            <Reveal key={n} delay={i * 120} className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-auto"><div
              key={n}
              className={`h-full rounded-2xl border border-white/10 p-6 text-center ${i === 0 ? "" : "bg-[var(--brand-navy-card)]"}`}
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><h2 className="display text-center text-3xl md:text-5xl">WHAT'S NEXT?</h2></Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["April 2026", "Chimera Wallet PWA Live", "First Bitcoin Super App built on Chimera Protocol VTXO technology."],
            ["Q2 2026 — Coming", "DEX / CEX Listing", "CEXT listed on centralized and decentralized exchanges."],
            ["2026", "Cross Chain Support", "CEXT bridges to major L1/L2 networks. Multi-chain staking. Cross-chain swaps (coming soon)."],
            ["Q2 2026: 27 May 2026", "TGE", "CEXT token generation event. Native on Ethereum, bridged to Chimera assets."],
            ["Mid 2026 — Coming", "Card Integration", "Chimera Card goes live."],
            ["June 2026", "Wrap", "Wrap assets across supported chains."],
            ["June 2026", "P2P Swaps", "Peer-to-peer swaps directly in-app."],
            ["2027", "Decentralised Governance", ""],
            ["2028", "DAO Transition", ""],
          ].map(([d, t, b], i) => (
            <Reveal key={t} delay={(i % 3) * 120}><div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
              <div className="text-xs font-bold tracking-widest text-[var(--brand-green)]">{d}</div>
              <div className="display mt-2 text-lg">{t}</div>
              {b && <p className="mt-2 text-xs text-muted-foreground">{b}</p>}
            </div></Reveal>
          ))}
        </div>
        <Reveal><p className="mx-auto mt-8 max-w-4xl text-center text-xs text-muted-foreground">
          CEXT is issued by Outlogic SAGL and reviewed in accordance with FINMA guidance. Not a security. Not a payment token. Not an investment contract. A utility token — with regulatory clarity most tokens never achieve.
        </p></Reveal>
      </section>

      <TgeCountdownSection />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><div className="rounded-2xl p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <img src={floatingCoins} alt="Floating CEXT coins" className="aspect-square w-full object-contain" />
            <div>
              <h3 className="display text-3xl">CEXT</h3>
              <p className="display text-2xl text-foreground/80">ACTIVITY AIRDROP.</p>
              <p className="mt-4 text-sm">After TGE, active Chimera users become eligible for a CEXT airdrop based on real usage. No farming. No bots. Real activity.</p>
            </div>
          </div>
        </div></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal><a
          href={whitepaperPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="display inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg md:text-xl tracking-widest text-[var(--brand-navy)] shadow-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          READ THE WHITE PAPER
          <span aria-hidden="true">→</span>
        </a></Reveal>
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
    <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
      {eyebrow && <div className="text-[10px] font-bold tracking-widest text-[var(--brand-green)]">{eyebrow}</div>}
      <h3 className="display mt-2 text-xl text-[var(--brand-green)]">{title}</h3>
      <p className="mt-3 text-sm text-foreground/85">{body}</p>
      {footnote && <p className="mt-3 text-[10px] text-muted-foreground">{footnote}</p>}
    </div>
  );
}

function TgeCountdownSection() {
  const target = Date.UTC(2026, 4, 27, 12, 0, 0);
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
      <Reveal><h2 className="display text-2xl text-[var(--brand-green)]">CEXT TGE</h2></Reveal>
      <Reveal delay={120}><p className="display mt-2 text-4xl md:text-6xl uppercase">27 May 2026</p></Reveal>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {t.map(({ v, l }, i) => (
          <Reveal key={l} delay={i * 120}><div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
            <div className="display text-4xl">{v}</div>
            <div className="mt-2 text-[10px] tracking-widest text-muted-foreground">{l}</div>
          </div></Reveal>
        ))}
      </div>
    </section>
  );
}
