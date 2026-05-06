import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/placeholder";
import heroPhoneLeft from "@/assets/site/hero-phone-left.png";
import heroPhoneRight from "@/assets/site/hero-phone-right.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chimera — The Bitcoin Super-App" },
      {
        name: "description",
        content:
          "The only Bitcoin super-app built so nobody can ever take your money away. Mainchain. Lightning. ARK Protocol. One app.",
      },
      { property: "og:title", content: "Chimera — The Bitcoin Super-App" },
      {
        property: "og:description",
        content:
          "The only Bitcoin super-app built so nobody can ever take your money away. Mainchain. Lightning. ARK Protocol. One app.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_2fr_1fr]">
            <img src={heroPhoneLeft} alt="Chimera wallet app showing balance and transactions" className="hidden lg:block w-full h-auto" />
            <div className="text-center">
              <p className="display text-xs tracking-[0.3em] text-[var(--brand-green)]">
                CHIMERAWALLET, FINANCE EVOLVED
              </p>
              <h1 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                THE ONLY BITCOIN SUPER-APP BUILT SO NOBODY CAN EVER TAKE YOUR MONEY AWAY.
              </h1>
              <p className="mt-6 text-base text-foreground/80">Not a promise. Not a policy. Mathematics.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Mainchain. Lightning. ARK Protocol. One app.
                <br />
                Your keys. Nobody in between.
              </p>
              <div className="mt-8 flex justify-center">
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10">
                  JOIN THE WAITLIST
                </button>
              </div>
            </div>
            <img src={heroPhoneRight} alt="Chimera card balance and transactions" className="hidden lg:block w-full h-auto" />
          </div>

          {/* CTA cards */}
          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            <CtaCard eyebrow="CHIMERA WALLET" title="LAUNCH THE APP" eyebrowColor="text-[var(--brand-green)]" filled href="https://app.chimerawallet.com" />
            <CtaCard
              eyebrow="36 D | 20 H | 03 M | 16 S to TGE"
              title="JOIN CEXT WAITLIST"
              eyebrowColor="text-[var(--brand-green)]"
            />
            <CtaCard eyebrow="NOTIFY ME" title="JOIN THE COMMUNITY" eyebrowColor="text-[var(--brand-green)]" href="https://t.me/Chimera_Community" />
          </div>
        </div>
      </section>

      {/* CONTROL / TRADE / EARN */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Placeholder label="Two phone mockups (Wallet UI)" className="aspect-[5/4]" />
          <div className="space-y-4">
            <FeatureCard
              title="CONTROL"
              body="Your keys. Your coins. Full stop. Bitcoin mainchain, Lightning, ARK Protocol VTXO - the complete Bitcoin stack, non-custodial from the first second to the last."
            />
            <FeatureCard
              title="TRADE"
              body="Non-custodial safety. Buy, sell, and swap with zero spread markup - without ever sending funds to someone else's wallet. Support for Fiat and many other assets. No KYC under 1K CHF per month*. Non-custodial ARK swaps coming soon."
            />
            <FeatureCard
              title="EARN"
              body="Refer friends and earn a share of platform fees - up to 30%, no cap, no expiry. Not points. Real revenue. P2P loans."
            />
          </div>
        </div>
      </section>

      {/* SUPERCHARGING BITCOIN */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--brand-blue) 0%, var(--brand-navy) 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="display text-center text-sm tracking-[0.3em] text-foreground/80">
            SUPERCHARGING BITCOIN
          </p>
          <h2 className="display mt-4 text-center text-4xl md:text-5xl">SUPERCHARGING BITCOIN</h2>
          <p className="mt-4 text-center text-sm text-foreground/80">
            Three layers. One interface. Zero compromise.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            <LayerCard
              icon="₿"
              title="MAINCHAIN"
              body="Full BTC on-chain deposits and withdrawals and Fiat on/off ramp via third party providers."
            />
            <LayerCard
              icon="▲"
              title="ARK PROTOCOL"
              body="VTXO technology: mainchain-grade security, Lightning-grade speed without the channel headaches. Chimera is the first Super App on ARK Protocol."
            />
            <LayerCard
              icon="⚡"
              title="LIGHTNING"
              body="Full Lightning invoice support, enhanced by Boltz. Every merchant, every exchange, zero channel management."
            />
          </div>
        </div>
      </section>

      {/* ARK PROTOCOL — comparison */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="display text-center text-4xl md:text-5xl">ARK PROTOCOL</h2>
        <p className="display mt-2 text-center text-xl tracking-widest text-foreground/80">BACKED BY THE BEST</p>
        <p className="mt-3 text-center text-sm text-muted-foreground">$7.7M raised across two rounds.</p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ComparisonCard
            title="CEX"
            rows={[
              ["Custodial", "Custody"],
              ["Instant", "Speed"],
              ["Required", "KYC"],
              ["High", "Counterparty risk"],
              ["No", "Unilateral exit"],
            ]}
          />
          <ComparisonCard
            title="DEX"
            rows={[
              ["Non-custodial", "Custody"],
              ["Variable", "Speed"],
              ["None", "KYC"],
              ["Low", "Counterparty risk"],
              ["Yes", "Unilateral exit"],
            ]}
          />
          <ComparisonCard
            title="ARK"
            rows={[
              ["Non-custodial", "Custody"],
              ["Instant", "Speed"],
              ["Optional", "KYC"],
              ["Minimal", "Counterparty risk"],
              ["Yes", "Unilateral exit"],
            ]}
          />
        </div>
      </section>

      {/* SELF-CUSTODY checkout */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--brand-blue-bright) 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <Placeholder label="Card + floating coins" className="aspect-[4/3]" />
          <div>
            <h2 className="display text-3xl md:text-4xl">SELF-CUSTODY DOESN'T STOP AT THE CHECKOUT.</h2>
            <p className="mt-6 text-sm text-foreground/85">
              Your Bitcoin stays yours until the exact moment you tap. Zero monthly fee. Zero top-up fee. 1.5%
              transaction fee locked for life. First 1,000 pre-orders only.
            </p>
            <button
              className="mt-8 rounded-full px-6 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              RESERVE YOUR SPOT
            </button>
          </div>
        </div>
      </section>

      {/* CEXT TOKEN PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.4fr]">
          <Placeholder label="Floating CEXT coins" className="aspect-square" />
          <div>
            <h2 className="display text-3xl md:text-4xl">CEXT TOKEN</h2>
            <p className="display text-3xl md:text-4xl text-foreground/70">PREVIEW.</p>
            <p className="mt-6 text-base font-medium">
              The more you hold, the harder the platform works for you.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              1 Billion fixed supply. Four tiers/Four tiers. Fee discounts up to 60%. Referral multipliers up to
              3×. Governance at Diamond tier. Zero inflation. Classified as a utility token under the Swiss
              regulation.
            </p>
            <p className="mt-3 text-sm text-[var(--brand-green)] font-semibold">TGE: 20 May 2026.</p>
            <CtaCard className="mt-8" title="DISCOVER CEXT" />
          </div>
        </div>
      </section>

      {/* REFERRALS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display text-3xl md:text-4xl">REFERRALS</h2>
            <p className="display text-3xl md:text-4xl text-foreground/70">PREVIEW.</p>
            <p className="mt-6 text-base font-medium">
              Share once. Earn on every trade they make. Forever.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Up to 20% of platform fees. No cap. No expiry. Revenue share, not points.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              * Referral rewards apply to users who complete KYC verification.
            </p>
            <CtaCard className="mt-8" title="GET YOUR REFERRAL CODE" />
          </div>
          <Placeholder label="Chart + referral UI mock" className="aspect-[4/5]" />
        </div>
      </section>
    </main>
  );
}

function CtaCard({
  eyebrow,
  title,
  className = "",
  filled = false,
  eyebrowColor = "text-[var(--brand-green)]",
  href,
}: {
  eyebrow?: string;
  title: string;
  className?: string;
  filled?: boolean;
  eyebrowColor?: string;
  href?: string;
}) {
  const Tag: any = href ? "a" : "button";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Tag
      {...linkProps}
      className={`group flex w-full items-center justify-between rounded-2xl border border-white/10 px-6 py-5 text-left transition-colors hover:border-white/30 ${className}`}
      style={{
        background: filled
          ? "linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-blue-bright) 100%)"
          : "var(--brand-navy-card)",
      }}
    >
      <div>
        {eyebrow && (
          <div className={`text-[10px] font-bold tracking-[0.25em] ${eyebrowColor}`}>{eyebrow}</div>
        )}
        <div className="display mt-1 text-xl">{title}</div>
      </div>
      <span className="text-xl text-foreground/70 transition-transform group-hover:translate-x-1">↗</span>
    </Tag>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
      <div className="text-2xl text-[var(--brand-green)]">||</div>
      <h3 className="display mt-3 text-2xl text-[var(--brand-green)]">{title}</h3>
      <p className="mt-3 text-sm text-foreground/80">{body}</p>
    </div>
  );
}

function LayerCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)]/80 p-6 backdrop-blur">
      <div className="text-2xl text-[var(--brand-green)]">{icon}</div>
      <h3 className="display mt-3 text-xl text-[var(--brand-green)]">{title}</h3>
      <p className="mt-3 text-sm text-foreground/80">{body}</p>
    </div>
  );
}

function ComparisonCard({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
      <h3 className="display text-center text-2xl">{title}</h3>
      <div className="mt-4 divide-y divide-white/5">
        {rows.map(([val, label]) => (
          <div key={label} className="py-3 text-center">
            <div className="text-base font-semibold">{val}</div>
            <div className="mt-1 text-[11px] italic text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
