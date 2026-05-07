import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/placeholder";
import bronzeBadge from "@/assets/site/Tiers/Bronze.png";
import silverBadge from "@/assets/site/Tiers/Silver.png";
import goldBadge from "@/assets/site/Tiers/Gold.png";
import diamondBadge from "@/assets/site/Tiers/Diamond.png";
import cextIcon from "@/assets/site/Coins/coin-front-Chimera 1.png";
import bnbIcon from "@/assets/site/Icons/bnb-bnb-logo 2.svg";
import kcsIcon from "@/assets/site/Icons/kucoin-token-kcs-logo 1.svg";
import okbIcon from "@/assets/site/Icons/okb-okb-logo 1.svg";
import floatingCoins from "@/assets/site/Coins/coin-front-Chimera 1.png";

export const Route = createFileRoute("/token")({
  head: () => ({
    meta: [
      { title: "CEXT Token — Pay Less. Earn More." },
      { name: "description", content: "CEXT utility token. TGE 20 May 2026. Fixed supply. Zero inflation. Four tiers." },
      { property: "og:title", content: "CEXT Token — Pay Less. Earn More." },
      { property: "og:description", content: "CEXT utility token. TGE 20 May 2026. Fixed supply. Zero inflation. Four tiers." },
    ],
  }),
  component: TokenPage,
});

function TokenPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="rounded-3xl border border-white/10 bg-[var(--brand-navy-card)] p-10 text-center">
          <p className="display text-xs tracking-[0.3em] text-[var(--brand-green)]">HOLD CEXT</p>
          <h1 className="display mx-auto mt-6 max-w-3xl text-4xl md:text-6xl">
            PAY LESS. EARN MORE.
            <br />
            KNOW FIRST. GOVERN MORE.
          </h1>
          <p className="mt-6 text-sm text-foreground/85">TGE: 20 May 2026. Fixed supply. Zero inflation. Four tiers.</p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
            Fee discounts up to 50%. Referral multipliers up to 3x. Market intelligence 12-24 hours before public release. Human support at every tier - priority increase as you move up. Swiss issued. 1 Billion tokens. No inflation. No dilution. Utility Token according to Swiss classification.
          </p>
          <button className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10">
            JOIN THE WAITLIST
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-7">
          {[
            ["FEE DISCOUNTS", "Up to 50%"],
            ["REFERRAL MULTIPLIERS", "Up to 3x"],
            ["MARKET INTELLIGENCE", "12-24 h before public release"],
            ["HUMAN SUPPORT", "at every TIER"],
            ["PRIORITY INCREASE", "as you move up"],
            ["SWISS ISSUED", "1 billion tokens"],
            ["NO INFLATION", "or diluition"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-[var(--brand-navy-card)] p-4 text-center">
              <div className="text-[10px] font-bold tracking-widest text-[var(--brand-green)]">{l}</div>
              <div className="display mt-2 text-base">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="display text-xl">Token distribution</h3>
            <Placeholder label="Pie chart: 90/4/3/3" className="mt-4 aspect-square" />
            <ul className="mt-4 space-y-1 text-sm">
              <li>• 90% Community</li>
              <li>• 4% Foundation &amp; Liquidity</li>
              <li>• 3% Team</li>
              <li>• 3% Partners</li>
            </ul>
          </div>
          <div>
            <h3 className="display text-xl">Token overview</h3>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6 text-sm">
              {[
                ["Token Name", "Chimera Exchange Token"],
                ["Token Ticker", "CEXT"],
                ["Total Supply", "1,000,000,000 CEXT"],
                ["Blockchain", "Multichain"],
                ["Token Type", "Utility Token"],
                ["TGE", "20th May 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/5 py-3 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="display text-3xl md:text-5xl">STAKE CEXT.</h2>
        <p className="display mt-2 text-2xl text-foreground/80">EARN UP TO 15% APR.</p>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-foreground/85">
          Put your CEXT to work. Stake and earn up to 15% annual returns paid in CEXT. Lock tokens for longer periods to multiply your score and maximize rewards. The longer you lock, the more you earn.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          Eg. 10000 CEXT locked for 3 years = 45% average compound interest.
          <br />
          10000 CEXT locked for 1.5 years = 10% average compound interest.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="display text-center text-3xl md:text-5xl">LOREM IPSUM</h2>
        <p className="display text-center text-2xl text-foreground/80">DOLOR SIT AMET CONSECTETUR.</p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { name: "BRONZE", img: bronzeBadge, balance: "≥ 10,000 CEXT", fee: "20%", ref: "1x", sup: "Standard", news: "Public", list: "Basic" },
            { name: "SILVER", img: silverBadge, balance: "≥ 100,000 CEXT", fee: "30%", ref: "1.5x", sup: "Priority", news: "+12 Hours", list: "Moderate" },
            { name: "GOLD", img: goldBadge, balance: "≥ 1,000,000 CEXT", fee: "40%", ref: "2x", sup: "Premium", news: "+24 Hours", list: "High" },
            { name: "DIAMOND", img: diamondBadge, balance: "≥ 10,000,000 CEXT", fee: "50%", ref: "3x", sup: "Direct", news: "+24 Hours", list: "Full + Proposal Rights" },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6 text-center">
              <img src={t.img} alt={`${t.name} tier badge`} className="mx-auto h-32 w-32 object-contain" />
              <h3 className="display mt-4 text-2xl">{t.name}</h3>
              <div className="mt-3 text-xs text-muted-foreground">{t.balance}<br/>Average Locked Balance</div>
              <Row v={t.fee} l="Trading Fee Discount" />
              <Row v={t.ref} l="Referral Bonus" />
              <Row v={t.sup} l="Support Access" />
              <Row v={t.news} l="News Access" />
              <Row v={t.list} l="Listing Discount" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card title="AFTER THE TIERS LIKE" body="Example: A Gold holder executing $100K in trades saves ~$100 in fees, earns 2x on referrals, and receives market intelligence 24 hours before public release." />
          <Card eyebrow="STAKING" title="UP TO 15% APR" body="Buy CEXT in-app, send to the designated staking address shown in-app. Your tokens, your staking, your rewards." footnote="* Staking is a service provided by a third party. STAKING REWARDS are not guaranteed. Rates fluctuate based on network conditions. Chimera Wallet carry no liability for this service." />
          <Card title="PLATFORM BUY PROGRAMME" body="A majority of operational profits are used to purchase CEXT on the open market. Consistent buying pressure. A structure where company performance and holder outcomes move in the same direction by design." footnote="* Managed by Outlogic SAGL. Subject to operational performance. Does not constitute a guaranteed return or investment instrument." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="display text-center text-3xl md:text-5xl">LOREM IPSUM</h2>
        <p className="display text-center text-2xl text-foreground/80">DOLOR SIT AMET.</p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { n: "CEXT", icon: cextIcon },
            { n: "BNB", icon: bnbIcon },
            { n: "KCS", icon: kcsIcon },
            { n: "OKB", icon: okbIcon },
          ].map(({ n, icon }) => (
            <div key={n} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6 text-center">
              <img src={icon} alt={`${n} logo`} className="mx-auto h-16 w-16 object-contain" />
              <h3 className="display mt-4 text-xl">{n}</h3>
              <Row v="50%" l="Max Fee Discount" />
              <Row v="20%" l="Referral Bonus" />
              <Row v="1x" l="Premium Support" />
              <Row v="Standard" l="Early News Access" />
              <Row v="Public" l="Listing Influence" />
              <Row v="Basic" l="Governance Rights" />
              <Row v="Basic" l="Profit Buyback" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="display text-center text-3xl md:text-5xl">WHAT'S NEXT?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["April 2026", "Chimera Wallet PWA Live", "First Bitcoin Super App built on ARK Protocol VTXO technology."],
            ["Q2 2026 — Coming", "DEX / CEX Listing", "CEXT listed on centralized and decentralized exchanges."],
            ["2026", "Cross Chain Support", "CEXT bridges to major L1/L2 networks. Multi-chain staking. Cross-chain swaps (coming soon)."],
            ["Q2 2026: 20 May 2026", "TGE", "CEXT token generation event. Native on Ethereum, bridged to Arkade assets."],
            ["Mid 2026 — Coming", "Card Integration", "Chimera Card goes live."],
            ["2027", "Decentralised Governance", ""],
            ["2028", "DAO Transition", ""],
          ].map(([d, t, b]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
              <div className="text-xs font-bold tracking-widest text-[var(--brand-green)]">{d}</div>
              <div className="display mt-2 text-lg">{t}</div>
              {b && <p className="mt-2 text-xs text-muted-foreground">{b}</p>}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-xs text-muted-foreground">
          CEXT is issued by Outlogic SAGL and reviewed in accordance with FINMA guidance. Not a security. Not a payment token. Not an investment contract. A utility token — with regulatory clarity most tokens never achieve.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="display text-2xl text-[var(--brand-green)]">CEXT TGE</h2>
        <p className="display mt-2 text-4xl md:text-6xl">20 MAY 2026</p>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {[["36","DAYS"],["20","HOURS"],["03","MINUTES"],["16","SECONDS"]].map(([n,l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
              <div className="display text-4xl">{n}</div>
              <div className="mt-2 text-[10px] tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div
          className="rounded-2xl p-10"
          style={{ background: "linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-bright) 100%)" }}
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <img src={floatingCoins} alt="Floating CEXT coins" className="aspect-square w-full object-contain" />
            <div>
              <h3 className="display text-3xl">CEXT</h3>
              <p className="display text-2xl text-foreground/80">ACTIVITY AIRDROP.</p>
              <p className="mt-4 text-sm">After TGE, active Chimera users become eligible for a CEXT airdrop based on real usage. No farming. No bots. Real activity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="display text-3xl md:text-5xl">WHITE PAPER.</h2>
        <p className="display text-2xl text-foreground/80">LOREM IPSUM DOLOR SIT AMET.</p>
        <p className="mt-4 max-w-4xl text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
