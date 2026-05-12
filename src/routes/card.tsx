import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Placeholder } from "@/components/placeholder";
import cardHero from "@/assets/site/Chimera_Card.png";
import cardCoins from "@/assets/site/chimera-card.png";

export const Route = createFileRoute("/card")({
  head: () => ({
    meta: [
      { title: "Chimera Card — Self-custody Visa" },
      {
        name: "description",
        content:
          "Use the Chimera Card anywhere Visa is accepted. Powered by licensed partners. Top up via the Chimera Wallet and use your balance in 50+ countries.",
      },
      { property: "og:title", content: "Chimera Card — Self-custody Visa" },
      {
        property: "og:description",
        content:
          "Use the Chimera Card anywhere Visa is accepted. Powered by licensed partners. Top up via the Chimera Wallet and use your balance in 50+ countries.",
      },
    ],
  }),
  component: CardPage,
});

function CardPage() {
  const ReserveForm = ({ children }: { children: React.ReactNode }) => (
    <form
      target="_blank"
      action="https://legacy.coinpayments.net/index.php"
      method="post"
      className="inline-block"
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
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
        <p className="hero-eyebrow text-[var(--brand-green)]">CHIMERA CARD</p>
        <h1 className="hero-title mx-auto mt-6 max-w-4xl">
          SELF-CUSTODY IN YOUR WALLET.
          <br />
          VISA IN YOUR POCKET.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-foreground/85">
          Zero monthly fee. Zero top-up fee. 1.5% transaction fee locked for life. First 1,000 pre-orders only.
        </p>
        <ReserveForm>
          <button
            type="submit"
            className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10"
          >
            RESERVE YOUR CARD
          </button>
        </ReserveForm>
        <img src={cardHero} alt="Chimera cards" className="mx-auto mt-10 w-full max-w-md object-contain" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <ReserveForm>
          <button type="submit" className="block w-full text-left">
        <div
          className="flex items-center justify-between rounded-2xl border border-white/10 px-6 py-5"
          style={{ background: "#100E1C", boxShadow: "0px 0px 40px 0px rgba(31, 59, 219, 0.5)" }}
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
          </button>
        </ReserveForm>
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
            <ReserveForm>
              <button
                type="submit"
                className="mt-8 rounded-full px-6 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
                style={{ backgroundColor: "var(--brand-green)" }}
              >
                SECURE YOUR SPOT NOW
              </button>
            </ReserveForm>
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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="display text-center text-3xl md:text-4xl">SUPPORTED COUNTRIES</h2>
        <p className="mt-4 text-center text-sm text-foreground/85">
          Chimera Card works anywhere Visa is accepted. Residents of the following countries can apply:
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-2 text-sm text-foreground/90 sm:grid-cols-2">
          {SUPPORTED_COUNTRIES.map(([flag, name]) => (
            <li key={name} className="flex items-center gap-3 border-b border-white/5 py-2">
              <span className="text-lg leading-none">{flag}</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--brand-navy) 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="display text-center text-4xl md:text-5xl">FAQ</h2>
          <div className="mt-10 space-y-3">
            <Faq q="How do I apply for a Chimera Card?">
              Click "PRE-ORDER NOW" below to reserve your card and lock in lifetime pre-order benefits.
            </Faq>
            <Faq q="What happens if I miss the pre-order window?">
              You'll pay standard rates with no grandfathered pricing. Pre-order members receive permanent rate protection.
            </Faq>
            <Faq q="Are pre-order rates really locked forever?">
              Yes. Your fees are frozen at pre-order levels for the lifetime of your account. Standard rates may increase over time, but yours won't.
            </Faq>
            <Faq q="Is Chimera Card secure?">
              Yes. Chimera Card uses the same Visa security infrastructure as traditional bank cards.
            </Faq>
            <Faq q="How do I top up my Chimera Card?">
              Top up directly from your non-custodial Chimera Wallet. It's quick, easy, and secure.
            </Faq>
          </div>

          <a
            href="https://app.chimerawallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 flex items-center justify-between rounded-2xl border border-white/10 px-6 py-5 transition-colors hover:border-white/30"
            style={{ background: "#100E1C", boxShadow: "0px 0px 40px 0px rgba(31, 59, 219, 0.5)" }}
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
        boxShadow: filled ? undefined : "0px 0px 40px 0px rgba(31, 59, 219, 0.5)",
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

const SUPPORTED_COUNTRIES: [string, string][] = [
  ["🇦🇩", "Andorra"], ["🇦🇹", "Austria"], ["🇧🇪", "Belgium"], ["🇧🇬", "Bulgaria"],
  ["🇭🇷", "Croatia"], ["🇨🇾", "Cyprus"], ["🇨🇿", "Czech Republic"], ["🇩🇰", "Denmark"],
  ["🇪🇪", "Estonia"], ["🇫🇮", "Finland"], ["🇫🇷", "France"], ["🇩🇪", "Germany"],
  ["🇬🇮", "Gibraltar"], ["🇬🇷", "Greece"], ["🇭🇺", "Hungary"], ["🇮🇸", "Iceland"],
  ["🇮🇪", "Ireland"], ["🇮🇹", "Italy"], ["🇱🇻", "Latvia"], ["🇱🇹", "Lithuania"],
  ["🇱🇺", "Luxembourg"], ["🇲🇹", "Malta"], ["🇲🇨", "Monaco"], ["🇲🇪", "Montenegro"],
  ["🇳🇱", "Netherlands"], ["🇳🇴", "Norway"], ["🇵🇱", "Poland"], ["🇵🇹", "Portugal"],
  ["🇷🇴", "Romania"], ["🇸🇰", "Slovakia"], ["🇸🇮", "Slovenia"], ["🇪🇸", "Spain"],
  ["🇸🇪", "Sweden"], ["🇨🇭", "Switzerland"], ["🇬🇧", "United Kingdom"], ["🇦🇺", "Australia"],
  ["🇭🇰", "Hong Kong"], ["🇮🇩", "Indonesia"], ["🇲🇾", "Malaysia"], ["🇵🇭", "Philippines"],
  ["🇸🇬", "Singapore"], ["🇹🇼", "Taiwan"], ["🇹🇭", "Thailand"], ["🇻🇳", "Vietnam"],
  ["🇦🇷", "Argentina"], ["🇧🇷", "Brazil"], ["🇨🇱", "Chile"], ["🇨🇴", "Colombia"],
  ["🇪🇨", "Ecuador"], ["🇲🇽", "Mexico"], ["🇵🇪", "Peru"],
];
