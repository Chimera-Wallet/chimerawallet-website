import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/placeholder";
import referralPreview from "@/assets/site/referral_preview.png";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Chimera Referrals — Your link. Their trades. Your cut." },
      { name: "description", content: "Real platform revenue, credited automatically. No cap. No expiry." },
      { property: "og:title", content: "Chimera Referrals" },
      { property: "og:description", content: "Real platform revenue, credited automatically. No cap. No expiry." },
    ],
  }),
  component: ReferralsPage,
});

function ReferralsPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={referralPreview}
          alt="Chimera referral network preview"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 text-center">
          <p className="display text-xs tracking-[0.3em] text-[var(--brand-green)]">REFERRALS</p>
          <h1 className="display mx-auto mt-6 text-4xl md:text-6xl">
            YOUR LINK. THEIR TRADES.
            <br />
            YOUR CUT. FOREVER.
            <br />
            NO CAP. NO EXPIRY.
          </h1>
          <p className="mt-6 text-base text-foreground/85">Real platform revenue, credited automatically</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Every trade your referrals complete earns you a direct cut of the platform fee — for as long as they keep trading.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="display text-3xl md:text-5xl">HOW IT WORKS.</h2>
        <p className="display text-2xl text-foreground/80">LOREM IPSUM DOLOR SIT AMET.</p>
        <p className="mt-6 max-w-4xl text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { n: 1, t: <>RECEIVE YOUR UNIQUE <span className="text-[var(--brand-green)]">REFERRAL CODE</span></>, b: "WHEN YOU JOIN." },
            { n: 2, t: <><span className="text-[var(--brand-green)]">SHARE IT ANYWHERE</span></>, b: "SOCIAL MEDIA, DMS, COMMUNITY GROUPS." },
            { n: 3, t: <>THEY SIGN UP, COMPLETE KYC, START TRADING. <span className="text-[var(--brand-green)]">YOU START EARNING.</span></>, b: "" },
            { n: 4, t: <>IT ACCUMULATES <span className="text-[var(--brand-green)]">FOREVER.</span></>, b: "EVERY TRADE NO CAP. NO EXPIRY." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm">{s.n}</div>
              <div className="display mt-6 text-lg">{s.t}</div>
              {s.b && <div className="mt-2 text-xs text-muted-foreground">{s.b}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="display text-3xl md:text-5xl">CEXT MULTIPLIERS</h2>
        <p className="display mt-2 text-xl text-foreground/80">THE HIGHER YOUR TIER, THE BIGGER YOUR CUT.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[["BRONZE","1x"],["SILVER","1.5x"],["GOLD","2x"],["DIAMOND","3x"]].map(([n,m]) => (
            <div key={n} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
              <Placeholder label={`${n} badge`} className="mx-auto h-24 w-24 text-[8px]" />
              <h3 className="display mt-4 text-2xl">{n}</h3>
              <div className="mt-3 border-t border-white/10 pt-3">
                <div className="display text-xl">{m}</div>
                <div className="text-[10px] text-muted-foreground">Referral Bonus</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">* Referral rewards apply to users who complete KYC verification.</p>
        <button className="mt-8 rounded-full px-6 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]" style={{ backgroundColor: "var(--brand-green)" }}>
          GET YOUR REFERRAL CODE
        </button>
      </section>
    </main>
  );
}
