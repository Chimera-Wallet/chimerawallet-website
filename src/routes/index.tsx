import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { CtaCard } from "@/components/cta-card";
import { ScrollableComparison } from "@/components/scrollable-comparison";
import heroPhoneLeft from "@/assets/site/hero-phone-left.png";
import heroPhoneRight from "@/assets/site/hero-phone-right.png";
import wallet1 from "@/assets/site/wallet-1.png";
import wallet2 from "@/assets/site/wallet-2.png";
import chimeraCard from "@/assets/site/chimera-card.png";
import bitcoinLogo from "@/assets/site/bitcoin-logo.svg";
import lightningLogo from "@/assets/site/lightning-logo.svg";
import arkLogo from "@/assets/site/arkade-logo.svg";
import outlogicLogo from "@/assets/site/Outlogic_LOGO.png";
import poweredByBitcoin from "@/assets/site/powered-by/bitcoin.png";
import poweredByArkade from "@/assets/site/powered-by/arkade.png";
import poweredByLightning from "@/assets/site/powered-by/lightning.png";
import poweredByOutlogic from "@/assets/site/powered-by/outlogic.png";
import controlIcon from "@/assets/site/chimera-logo-control.svg";
import tradeIcon from "@/assets/site/chimera-logo-trade.svg";
import earnIcon from "@/assets/site/chimera-logo-earn.svg";
import referralPreview from "@/assets/site/referral_preview.png";
import chart1Bg from "@/assets/site/Chart1-bg1.png";
import badge01 from "@/assets/site/Badges/Badge_01.png";
import badge02 from "@/assets/site/Badges/Badge_02.png";
import badge03 from "@/assets/site/Badges/Badge_03.png";
import cextCoin1 from "@/assets/site/Coins/coin-1-1.png";
import cextCoin2 from "@/assets/site/Coins/coin-2-2.png";
import cextCoin3 from "@/assets/site/Coins/coin-3-1.png";
import cextCoin4 from "@/assets/site/Coins/coin-4-2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chimera — The Bitcoin Super-App" },
      {
        name: "description",
        content:
          "Chimera Wallet is the first Bitcoin super-app. Non-custodial, browser-based, no install required. Your keys, your control.",
      },
      { property: "og:title", content: "Chimera — The Bitcoin Super-App" },
      {
        property: "og:description",
        content:
          "Chimera Wallet is the first Bitcoin super-app. Non-custodial, browser-based, no install required. Your keys, your control.",
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
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_4fr_1fr]">
            <Reveal delay={400}>
              <img
                src={heroPhoneLeft}
                alt="Chimera wallet app showing balance and transactions"
                className="hidden lg:block w-[160%] max-w-none h-auto -ml-[60%]"
              />
            </Reveal>
            <div className="text-center">
              <Reveal delay={0}>
                <p
                  className="text-center uppercase text-[var(--brand-green)]"
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "2px",
                  }}
                >
                  CHIMERAWALLET, FINANCE EVOLVED
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1
                  className="mt-6 text-center uppercase"
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 6vw, 85px)",
                    lineHeight: 1,
                    letterSpacing: "1px",
                  }}
                >
                  THE ONLY BITCOIN SUPER-APP BUILT SO NOBODY CAN EVER TAKE YOUR MONEY AWAY.
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <h2 className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-foreground/85">
                  Not a promise. Not a policy. Mathematics.
                </h2>
              </Reveal>
              <Reveal delay={340}>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mainchain. Lightning. Arkade Protocol. One app.
                  <br />
                  Your keys. Nobody in between.
                </p>
              </Reveal>
            </div>
            <Reveal delay={520}>
              <img
                src={heroPhoneRight}
                alt="Chimera card balance and transactions"
                className="hidden lg:block w-[160%] max-w-none h-auto -mr-[60%]"
              />
            </Reveal>
          </div>

          {/* CTA cards */}
          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            <Reveal delay={0}>
              <CtaCard
                eyebrow="CHIMERA WALLET"
                title="LAUNCH THE APP"
                eyebrowColor="text-[var(--brand-green)]"
                filled
                href="https://app.chimerawallet.com"
              />
            </Reveal>
            <Reveal delay={120}>
              <CtaCard
                eyebrow={<TgeCountdown />}
                title="JOIN CEXT WAITLIST"
                eyebrowColor="text-[var(--brand-green)]"
                scrollTo="waitlist"
              />
            </Reveal>
            <Reveal delay={240}>
              <CtaCard
                eyebrow="NOTIFY ME"
                title="JOIN THE COMMUNITY"
                eyebrowColor="text-[var(--brand-green)]"
                href="https://t.me/Chimera_Community"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTROL / TRADE / EARN */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative mx-auto aspect-[5/4] w-1/2 max-w-md pb-12 lg:w-3/4 lg:pb-20">
              <img
                src={wallet1}
                alt="Chimera wallet app — primary view"
                className="absolute left-0 top-0 w-[60%] h-auto object-contain"
              />
              <img
                src={wallet2}
                alt="Chimera wallet app — secondary view"
                className="absolute right-0 bottom-0 w-[60%] h-auto object-contain"
              />
            </div>
            <div className="space-y-4">
              <Reveal>
                <FeatureCard
                  iconSrc={controlIcon}
                  title="CONTROL"
                  body="Your keys. Your coins. Full stop. Bitcoin mainchain, Lightning, Arkade Protocol VTXO - the complete Bitcoin stack, non-custodial from the first second to the last."
                />
              </Reveal>
              <Reveal delay={120}>
                <FeatureCard
                  iconSrc={tradeIcon}
                  title="TRADE"
                  body="Non-custodial safety. Buy, sell, and swap with zero spread markup - without ever sending funds to someone else's wallet. Support for Fiat and many other assets. No KYC under 1K CHF per month*. Non-custodial Chimera swaps coming soon."
                />
              </Reveal>
              <Reveal delay={240}>
                <FeatureCard
                  iconSrc={earnIcon}
                  title="EARN"
                  body="Refer friends and earn a share of platform fees - up to 20%, no cap, no expiry. Not points. Real revenue. P2P loans."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SUPERCHARGING BITCOIN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="display text-center text-sm tracking-[0.3em] text-foreground/80">SUPERCHARGING BITCOIN</p>
          <h2 className="display mt-4 text-center text-4xl md:text-5xl">SUPERCHARGING BITCOIN</h2>
          <p className="mt-4 text-center text-sm text-foreground/80">Three layers. One interface. Zero compromise.</p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
            <Reveal className="h-full">
              <LayerCard
                iconSrc={bitcoinLogo}
                title="MAINCHAIN"
                body="Full BTC on-chain deposits and withdrawals and Fiat on/off ramp via third party providers."
              />
            </Reveal>
            <Reveal delay={120} className="h-full">
              <LayerCard
                iconSrc={arkLogo}
                iconClassName="h-16 w-16 -my-3"
                title="ARKADE PROTOCOL"
                body="VTXO technology: mainchain-grade security, Lightning-grade speed without the channel headaches. Chimera is the first Super App on Arkade Protocol."
              />
            </Reveal>
            <Reveal delay={240} className="h-full">
              <LayerCard
                iconSrc={lightningLogo}
                title="LIGHTNING"
                body="Full Lightning invoice support, enhanced by Boltz. Every merchant, every exchange, zero channel management."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARKADE PROTOCOL — heading */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-24">
        <h2 className="display text-center text-5xl md:text-7xl">ARKADE PROTOCOL</h2>
        <p className="display mt-6 text-center text-base md:text-lg tracking-widest text-foreground/70">
          BACKED BY THE BEST
        </p>
        <p className="display mt-3 text-center tracking-[0.3em] text-foreground/60 text-[11px]">
          $7.7M raised across two rounds.
        </p>
      </section>

      {/* ARKADE PROTOCOL — comparison */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <ScrollableComparison columns={3}>
          <Reveal>
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
          </Reveal>
          <Reveal delay={120}>
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
          </Reveal>
          <Reveal delay={240}>
            <ComparisonCard
              title="Chimera"
              highlight
              rows={[
                ["Non-custodial", "Custody"],
                ["Instant", "Speed"],
                ["Optional", "KYC"],
                ["Minimal", "Counterparty risk"],
                ["Yes", "Unilateral exit"],
              ]}
            />
          </Reveal>
        </ScrollableComparison>
      </section>

      {/* SELF-CUSTODY checkout */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--brand-blue) 0%, transparent 100%)" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <img src={chimeraCard} alt="Chimera card with floating crypto coins" className="w-full h-auto rounded-2xl" />
          <div>
            <h2 className="display text-3xl md:text-4xl">SELF-CUSTODY DOESN'T STOP AT THE CHECKOUT.</h2>
            <p className="mt-6 text-sm text-foreground/85">
              Zero monthly fee. Zero top-up fee. 1.5% transaction fee locked for life. First 1,000 pre-orders only.
            </p>
            <button className="btn-brand mt-8">RESERVE YOUR SPOT</button>
          </div>
        </div>
      </section>

      {/* POWERED BY */}
      <section className="overflow-hidden px-6 py-10">
        <div className="mx-auto max-w-[96rem]">
          <p className="text-center text-xs font-medium tracking-widest text-foreground/70">Powered by</p>
          <div className="-mt-3 grid grid-cols-2 grid-cols-4 gap-0">
            {[
              { src: poweredByBitcoin, alt: "Bitcoin" },
              { src: poweredByArkade, alt: "Arkade" },
              { src: poweredByLightning, alt: "Lightning Network" },
              { src: poweredByOutlogic, alt: "Outlogic" },
            ].map((item) => (
              <img key={item.alt} src={item.src} alt={item.alt} className="relative h-auto w-[132%] max-w-none -mx-[16%]" />
            ))}
          </div>
        </div>
      </section>

      {/* CEXT TOKEN PREVIEW */}
      <section className="relative overflow-hidden px-6 py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          {/* left edge of screen */}
          <img
            src={cextCoin3}
            alt=""
            className="absolute left-0 bottom-24 w-16 animate-[float_7.5s_ease-in-out_infinite_-1s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
          {/* right edge of screen */}
          <img
            src={cextCoin2}
            alt=""
            className="absolute right-0 top-1/2 w-20 animate-[float_9s_ease-in-out_infinite_-3s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="relative mx-auto max-w-3xl text-left">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            {/* next to title CEXT, partially behind the C */}
            <img
              src={cextCoin1}
              alt=""
              className="absolute -left-20 -top-6 w-24 animate-[float_7s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
            {/* right, in line with title, slightly down */}
            <img
              src={cextCoin4}
              alt=""
              className="absolute -right-24 top-6 w-28 animate-[float_8s_ease-in-out_infinite_-2s] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="relative z-10">
            <h2 className="display text-3xl md:text-4xl">CEXT TOKEN</h2>
            <p className="mt-6 text-base font-medium">The more you hold, the harder the platform works for you.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              1 Billion fixed supply. Fee discounts up to 50%. Referral multipliers up to 3×. Governance at Diamond
              tier. Zero inflation. Classified as a utility token under the Swiss regulation.
            </p>
            <p className="mt-3 text-sm text-[var(--brand-green)] font-semibold">TGE: 27 May 2026.</p>
            <CtaCard className="mt-8" title="DISCOVER CEXT" href="/token" />
          </div>
        </div>
      </section>

      {/* REFERRALS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display text-3xl md:text-4xl">REFERRALS</h2>
            <p className="display text-3xl md:text-4xl text-foreground/70">​</p>
            <p className="mt-6 text-base font-medium">Share once. Earn on every trade they make. Forever.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Up to 20% of platform fees. No cap. No expiry. Revenue share, not points.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              * Referral rewards apply to users who complete KYC verification.
            </p>
            <CtaCard className="mt-8" title="GET YOUR REFERRAL CODE" />
          </div>
          <div className="relative aspect-[4/5] w-full">
            <img
              src={chart1Bg}
              alt="Chimera referral preview"
              className="absolute inset-0 h-full w-full object-contain"
            />
            {/* Order: Badge_03 (bottom), Badge_02 (middle), Badge_01 (top) */}
            <Reveal className="absolute left-[28%] bottom-[22%] w-[44%] z-10" delay={100}>
              <img src={badge03} alt="" aria-hidden className="w-full" />
            </Reveal>
            <Reveal className="absolute left-[18%] top-[20%] w-[44%] z-20" delay={500}>
              <img src={badge02} alt="" aria-hidden className="w-full" />
            </Reveal>
            <div className="absolute right-[18%] top-0 bottom-0 w-[44%] z-30 flex items-center">
              <Reveal className="w-full" delay={900}>
                <img src={badge01} alt="" aria-hidden className="w-full" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST SIGNUP */}
      <section id="waitlist" className="mx-auto max-w-3xl px-6 pb-20 scroll-mt-24">
        <div className="surface-card p-8 md:p-10">
          <p className="eyebrow">JOIN THE WAITLIST</p>
          <h2 className="display mt-2 text-2xl md:text-3xl">JOIN CEXT WAITLIST!</h2>
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const cbName = useRef(`mcCallback_${Math.random().toString(36).slice(2)}`);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    const callbackName = cbName.current;
    (window as any)[callbackName] = (data: { result: string; msg?: string }) => {
      if (data.result === "success") {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.msg || "Something went wrong, please try again.");
      }
      delete (window as any)[callbackName];
      script.remove();
    };

    const url = `https://trade.us13.list-manage.com/subscribe/post-json?u=00a079f682daf0fd064fd51a8&id=e89b2f090c&f_id=00638ee4f0&EMAIL=${encodeURIComponent(
      email,
    )}&c=${callbackName}`;
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
  };

  return (
    <form onSubmit={onSubmit} className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="flex-1 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)]"
        />
        {/* Honeypot: keeps Mailchimp happy, must stay hidden */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input type="text" name="b_00a079f682daf0fd064fd51a8_e89b2f090c" tabIndex={-1} defaultValue="" />
        </div>
        <button type="submit" disabled={status === "loading"} className="btn-brand">
          {status === "loading" ? "JOINING..." : "JOIN NOW!"}
        </button>
      </div>
      {message && (
        <p className={`mt-3 text-xs ${status === "success" ? "text-[var(--brand-green)]" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}

function FeatureCard({ iconSrc, title, body }: { iconSrc: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(21, 19, 38, 0.2)" }}>
      <img src={iconSrc} alt="" className="h-10 w-auto object-contain" />
      <h3 className="display mt-3 text-2xl text-[var(--brand-green)]">{title}</h3>
      <p className="mt-3 text-sm text-foreground/80">{body}</p>
    </div>
  );
}

function TgeCountdown() {
  const target = Date.UTC(2026, 4, 27, 12, 0, 0);
  const compute = () => {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s };
  };
  const [t, setT] = useState(compute);
  useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return <span>{`${pad(t.d)} D | ${pad(t.h)} H | ${pad(t.m)} M | ${pad(t.s)} S to TGE`}</span>;
}

function LayerCard({
  iconSrc,
  title,
  body,
  iconClassName = "h-10 w-10",
}: {
  iconSrc: string;
  title: string;
  body: string;
  iconClassName?: string;
}) {
  return (
    <div
      className="flex h-full min-h-[260px] flex-col justify-end rounded-2xl border border-white/10 p-6 backdrop-blur"
      style={{ background: "#100E1C", boxShadow: "0px 0px 40px 0px rgba(31, 59, 219, 0.5)" }}
    >
      <img src={iconSrc} alt="" className={`${iconClassName} object-contain`} />
      <h3 className="display mt-3 text-xl text-[var(--brand-green)]">{title}</h3>
      <p className="mt-3 text-sm text-foreground/80">{body}</p>
    </div>
  );
}

function ComparisonCard({
  title,
  rows,
  highlight = false,
}: {
  title: string;
  rows: [string, string][];
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border p-6"
      style={
        highlight
          ? {
              background: "linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-blue-bright) 100%)",
              borderColor: "rgba(255, 255, 255, 0.1)",
            }
          : { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)" }
      }
    >
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
