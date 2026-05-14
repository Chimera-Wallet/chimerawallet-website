import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Section, Card, Eyebrow, BrandButton } from "@/components/ui";
import bronzeBadge from "@/assets/site/Tiers/Bronze.png";
import silverBadge from "@/assets/site/Tiers/Silver.png";
import goldBadge from "@/assets/site/Tiers/Gold.png";
import diamondBadge from "@/assets/site/Tiers/Diamond.png";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Chimera Referrals — Your link. Their trades. Your cut." },
      {
        name: "description",
        content:
          "20% of platform fees from every user you refer. Scale up to 60% with CEXT tier multipliers. No cap, no expiry.",
      },
      { property: "og:title", content: "Chimera Referrals" },
      {
        property: "og:description",
        content:
          "20% of platform fees from every user you refer. Scale up to 60% with CEXT tier multipliers. No cap, no expiry.",
      },
    ],
  }),
  component: ReferralsPage,
});

function ReferralsPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 text-center">
          <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">REFERRALS</p></Reveal>
          <Reveal delay={120}><h1 className="hero-title mx-auto mt-6">
            YOUR LINK. THEIR TRADES.
            <br />
            YOUR CUT. FOREVER.
            <br />
            NO CAP. NO EXPIRY.
          </h1></Reveal>
          <Reveal delay={240}><h2 className="mt-6 text-base md:text-lg text-foreground/85">Real platform revenue, credited automatically</h2></Reveal>
          <Reveal delay={340}><p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Every trade your referrals complete earns you a direct cut of the platform fee — for as long as they keep trading.
          </p></Reveal>
        </div>
      </section>

      <Section>
        <Reveal><h2 className="display text-3xl md:text-5xl">HOW IT WORKS.</h2></Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { n: 1, t: <>RECEIVE YOUR UNIQUE <span className="text-[var(--brand-green)]">REFERRAL CODE</span></>, b: "WHEN YOU JOIN." },
            { n: 2, t: <><span className="text-[var(--brand-green)]">SHARE IT ANYWHERE</span></>, b: "SOCIAL MEDIA, DMS, COMMUNITY GROUPS." },
            { n: 3, t: <>THEY SIGN UP, COMPLETE KYC, START TRADING. <span className="text-[var(--brand-green)]">YOU START EARNING.</span></>, b: "" },
            { n: 4, t: <>IT ACCUMULATES <span className="text-[var(--brand-green)]">FOREVER.</span></>, b: "EVERY TRADE NO CAP. NO EXPIRY." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <Card>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm">{s.n}</div>
                <div className="display mt-6 text-lg">{s.t}</div>
                {s.b && <div className="mt-2 text-xs text-muted-foreground">{s.b}</div>}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Reveal><h2 className="display text-3xl md:text-5xl">CEXT MULTIPLIERS</h2></Reveal>
        <Reveal delay={120}><p className="display mt-2 text-xl text-foreground/80">THE HIGHER YOUR TIER, THE BIGGER YOUR CUT.</p></Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { n: "BRONZE", m: "1x", img: bronzeBadge },
            { n: "SILVER", m: "1.5x", img: silverBadge },
            { n: "GOLD", m: "2x", img: goldBadge },
            { n: "DIAMOND", m: "3x", img: diamondBadge },
          ].map(({ n, m, img }, i) => (
            <Reveal key={n} delay={i * 120}>
              <Card>
                <img src={img} alt={`${n} tier badge`} className="mx-auto h-40 w-40 object-contain" />
                <h3 className="display mt-4 text-2xl">{n}</h3>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <div className="display text-xl">{m}</div>
                  <div className="text-[10px] text-muted-foreground">Referral Bonus</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal><p className="mt-8 text-xs text-muted-foreground">* Referral rewards apply to users who complete KYC verification.</p></Reveal>
        <Reveal delay={120}><BrandButton className="mt-8">GET YOUR REFERRAL CODE</BrandButton></Reveal>
      </Section>
    </main>
  );
}
