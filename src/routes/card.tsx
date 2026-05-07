import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Placeholder } from "@/components/placeholder";
import cardHero from "@/assets/site/Coins/Chimera-card-2-1.png";
import cardCoins from "@/assets/site/Coins/Chimera-card-2-3.png";

export const Route = createFileRoute("/card")({
  head: () => ({
    meta: [
      { title: "Chimera Card — Self-custody Visa" },
      {
        name: "description",
        content:
          "Chimera Card bridges self-custody with real-world purchases. Reserve your spot — first 1,000 only.",
      },
      { property: "og:title", content: "Chimera Card — Self-custody Visa" },
      {
        property: "og:description",
        content:
          "Chimera Card bridges self-custody with real-world purchases. Reserve your spot — first 1,000 only.",
      },
    ],
  }),
  component: CardPage,
});

function CardPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
        <p className="display text-xs tracking-[0.3em] text-[var(--brand-green)]">CHIMERA CARD</p>
        <h1 className="display mx-auto mt-6 max-w-4xl text-4xl md:text-6xl">
          SELF-CUSTODY IN YOUR WALLET.
          <br />
          VISA IN YOUR POCKET.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-foreground/85">
          Your Bitcoin stays yours until the exact moment you tap and top up your card.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          Chimera Card bridges self-custody with real-world purchases.
        </p>
        <button className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10">
          RESERVE YOUR CARD
        </button>
        <img src={cardHero} alt="Chimera cards" className="mx-auto mt-10 w-full object-contain" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div
          className="flex items-center justify-between rounded-2xl border border-white/10 px-6 py-5"
          style={{ background: "var(--brand-navy-card)" }}
        >
          <div>
            <div className="text-[10px] font-bold tracking-[0.25em] text-[var(--brand-green)]">
              SPEND ANYWHERE VISA IS ACCEPTED
            </div>
            <div className="display mt-1 text-xl">RESERVE YOUR CARD</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Top up your card directly from Chimera Wallet. No extra steps.
            </div>
          </div>
          <span className="text-xl">↗</span>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <img src={cardCoins} alt="Chimera card with floating coins" className="aspect-[4/3] w-full object-contain" />
          <div>
            <h2 className="display text-4xl md:text-5xl">1,000 SPOTS.</h2>
            <p className="display mt-1 text-2xl text-foreground/80">THAT'S IT.</p>
            <p className="mt-6 text-sm text-foreground/85">
              Once all 1,000 spots are claimed, standard pricing applies — permanently. No waitlist, no
              retroactive pricing, no exceptions.
            </p>
            <p className="mt-3 text-sm font-semibold text-[var(--brand-green)]">
              Chimera Card Rolling out mid 2026.
            </p>
            <button
              className="mt-8 rounded-full px-6 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              SECURE YOUR SPOT NOW
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="display text-3xl md:text-4xl">THREE BENEFITS</h2>
        <p className="display text-2xl text-foreground/80">THAT DON'T EXPIRE:</p>

        <div className="mt-10 space-y-4">
          <BenefitRow
            tag="FOREVER"
            title="1.5% TRANSACTION FEE FOR LIFE"
            body="Locked for life. Pre-order customers lock in 1.5% forever. Standard rate is 2% — and may rise. Yours won't."
            badge="1.5%"
            strike="STANDARD 2%"
            filled
          />
          <BenefitRow
            tag="FREE FOREVER"
            title="ZERO MONTHLY FEE"
            body="No subscription. No maintenance charge. No annual fee. No bill."
            badge="FREE"
            strike="FOREVER"
          />
          <BenefitRow
            tag="FOREVER"
            title="ZERO TOP-UP FEES"
            body="Load from your Chimera Wallet at zero cost. Every time."
            badge="0.0%"
            strike="STANDARD 1%"
          />
        </div>

        <p className="mt-8 text-center text-xs italic text-muted-foreground">
          *Card programme provided in partnership with Wirex Pay. KYC is required to access the Wirex platform —
          separate from Chimera's own KYC. Chimera collects no fee or financial advantage for this service.
        </p>
      </section>

      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--brand-navy) 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-center text-4xl md:text-5xl">FAQ</h2>
          <div className="mt-10 space-y-3">
            <Faq q="How do I apply?" />
            <Faq q="Are the lifetime rates actually locked forever?" />
            <Faq q="Which countries?" defaultOpen>
              Chimera Card works anywhere Visa is accepted. Residents of the following countries can apply:
              Andorra, Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland,
              France, Germany, Gibraltar, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Luxembourg,
              Malta, Monaco, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia,
              Spain, Sweden, Switzerland, United Kingdom, Australia, Hong Kong, Indonesia, Malaysia, Philippines,
              Singapore, Taiwan, Thailand, Vietnam, Argentina, Brazil, Chile, Colombia, Ecuador, Mexico, Peru.
            </Faq>
            <Faq q="How do I top up?" />
          </div>

          <a
            href="https://app.chimerawallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 flex items-center justify-between rounded-2xl border border-white/10 px-6 py-5 transition-colors hover:border-white/30"
            style={{ background: "var(--brand-navy-card)" }}
          >
            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-[var(--brand-green)]">
                WORKS ON ANY DEVICE
              </div>
              <div className="display mt-1 text-xl">OPEN CHIMERA</div>
            </div>
            <span className="text-xl">↗</span>
          </a>
        </div>
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
  filled = false,
}: {
  tag: string;
  title: string;
  body: string;
  badge: string;
  strike: string;
  filled?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 px-6 py-6 md:grid-cols-[1fr_auto]"
      style={{
        background: filled ? "var(--brand-blue)" : "var(--brand-navy-card)",
      }}
    >
      <div>
        <span className="inline-block rounded-md bg-[var(--brand-green)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--brand-navy)]">
          {tag}
        </span>
        <h3 className="display mt-3 text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-foreground/85">{body}</p>
      </div>
      <div className="rounded-md border border-[var(--brand-green)] px-6 py-3 text-center">
        <div className="display text-3xl text-[var(--brand-green)]">{badge}</div>
        <div className="mt-1 text-[10px] tracking-widest text-foreground/70 line-through">{strike}</div>
      </div>
    </div>
  );
}

function Faq({ q, children, defaultOpen = false }: { q: string; children?: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-sm font-semibold">{q}</span>
        <span className="text-xl">{open ? "×" : "+"}</span>
      </button>
      {open && children && (
        <div className="border-t border-white/10 px-6 py-4 text-xs text-foreground/85">{children}</div>
      )}
    </div>
  );
}
