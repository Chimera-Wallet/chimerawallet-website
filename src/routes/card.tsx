import { Reveal } from "@/components/reveal";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { Section, Card, Eyebrow, BrandButton, GhostButton } from "@/components/ui";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
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
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const embed = /(?:^|[?&])embed=1(?:&|$)/.test(searchStr ?? "");
  const ReserveForm = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <form
      target="_blank"
      action="https://legacy.coinpayments.net/index.php"
      method="post"
      className={className ?? "inline-block"}
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
      <Section size="none" className="pt-16 pb-10 text-center">
        <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">CHIMERA CARD</p></Reveal>
        <Reveal delay={120}><h1 className="hero-title mx-auto mt-6 max-w-5xl">
          SELF-CUSTODY
          <br />
          IN YOUR WALLET.
          <br />
          VISA IN YOUR POCKET.
        </h1></Reveal>
        <Reveal delay={240}><h2 className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-foreground/85">
          Zero monthly fee. Zero top-up fee. 1.5% transaction fee locked for life. First 1,000 pre-orders only.
        </h2></Reveal>
        <Reveal delay={340}>
          <ReserveForm>
            <GhostButton type="submit" className="mt-8">RESERVE YOUR CARD</GhostButton>
          </ReserveForm>
        </Reveal>
        <Reveal delay={460}>
          <div className="relative mx-auto mt-10 w-full max-w-md">
            {/* Fanned transparent card silhouettes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
              <div
                className="absolute aspect-[1.6/1] w-[85%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{ transform: "translateX(-95%) translateY(-28%) rotate(22deg)", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
              />
              <div
                className="absolute aspect-[1.6/1] w-[85%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{ transform: "translateX(95%) translateY(-28%) rotate(-22deg)", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
              />
              <div
                className="absolute aspect-[1.6/1] w-[90%] rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-sm"
                style={{ transform: "translateX(-52%) translateY(-2%) rotate(11deg)", boxShadow: "0 25px 70px rgba(0,0,0,0.4)" }}
              />
              <div
                className="absolute aspect-[1.6/1] w-[90%] rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-sm"
                style={{ transform: "translateX(52%) translateY(-2%) rotate(-11deg)", boxShadow: "0 25px 70px rgba(0,0,0,0.4)" }}
              />
            </div>
            <img src={cardHero} alt="Chimera cards" className="relative mx-auto w-full object-contain" />
          </div>
        </Reveal>
      </Section>

      <Section size="none" className="py-6">
        <Reveal>
          <ReserveForm className="block w-full">
            <button type="submit" className="block w-full text-left">
              <Card variant="glow" padding="px-6 py-8" className="cta-card relative flex w-full items-center justify-center">
                <div className="w-full text-left">
                  <Eyebrow>SPEND ANYWHERE VISA IS ACCEPTED</Eyebrow>
                  <div className="display mt-1 text-xl">RESERVE YOUR CARD</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Top up your card directly from Chimera Wallet. No extra steps.
                  </div>
                </div>
                <span className="absolute right-6 text-xl">↗</span>
              </Card>
            </button>
          </ReserveForm>
        </Reveal>
      </Section>

      <Section size="lg">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal><img src={cardCoins} alt="Chimera card with floating coins" className="aspect-[4/3] w-full object-contain" /></Reveal>
          <Reveal delay={120}><div>
            <h2 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">1,000 SPOTS.</h2>
            <p className="mt-1 text-2xl font-bold uppercase tracking-wide text-foreground/80">THAT'S IT.</p>
            <p className="mt-6 text-sm text-foreground/85">
              Once all 1,000 spots are claimed, standard pricing applies — permanently. No waitlist, no
              retroactive pricing, no exceptions.
            </p>
            <p className="mt-3 text-sm font-semibold text-[var(--brand-green)]">
              Chimera Card Rolling out mid 2026.
            </p>
            <ReserveForm>
              <BrandButton type="submit" className="mt-8">SECURE YOUR SPOT NOW</BrandButton>
            </ReserveForm>
          </div></Reveal>
        </div>
      </Section>

      <Section size="lg">
        <Reveal><h2 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">THREE BENEFITS</h2></Reveal>
        <Reveal delay={120}><p className="text-2xl font-bold uppercase tracking-wide text-foreground/80">THAT DON'T EXPIRE:</p></Reveal>

        <div className="mt-10 space-y-4">
          <Reveal><BenefitRow
            tag="FOREVER"
            title="1.5% TRANSACTION FEE FOR LIFE"
            body="Locked for life. Pre-order customers lock in 1.5% forever. Standard rate is 2% — and may rise. Yours won't."
            badge="1.5%"
            strike="STANDARD 2%"
          /></Reveal>
          <Reveal delay={120}><BenefitRow
            tag="FOREVER"
            title="ZERO MONTHLY FEE"
            body="No subscription. No maintenance charge. No annual fee. No bill."
            badge="FREE"
            strike="FOREVER"
          /></Reveal>
          <Reveal delay={240}><BenefitRow
            tag="FOREVER"
            title="ZERO TOP-UP FEES"
            body="Load from your Chimera Wallet at zero cost. Every time."
            badge="0.0%"
            strike="STANDARD 1%"
          /></Reveal>
        </div>

        <Reveal><p className="mt-8 text-center text-xs italic text-muted-foreground">
          *Card programme provided in partnership with Wirex Pay. KYC is required to access the Wirex platform —
          separate from Chimera's own KYC. Chimera collects no fee or financial advantage for this service.
        </p></Reveal>
      </Section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal><h2 className="text-center text-3xl font-bold uppercase tracking-wide md:text-4xl">SUPPORTED COUNTRIES</h2></Reveal>
        <Reveal delay={120}><p className="mt-4 text-center text-sm text-foreground/85">
          Chimera Card works anywhere Visa is accepted. Residents of the following countries can apply:
        </p></Reveal>
        <div className="mt-10 space-y-3">
          <Accordion type="multiple" className="space-y-3">
            {SUPPORTED_COUNTRIES_BY_CONTINENT.map(([continent, countries], i) => (
              <Reveal key={continent} delay={i * 80}>
                <ContinentPanel continent={continent} countries={countries} />
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, transparent 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <Reveal><h2 className="text-center text-4xl font-bold uppercase tracking-wide md:text-5xl">FAQ</h2></Reveal>
          <div className="mt-10 space-y-3">
            <Accordion type="multiple" className="space-y-3">
              <Reveal><Faq value="faq-1" q="How do I apply for a Chimera Card?">
                Click "PRE-ORDER NOW" below to reserve your card and lock in lifetime pre-order benefits.
              </Faq></Reveal>
              <Reveal delay={120}><Faq value="faq-2" q="What happens if I miss the pre-order window?">
                You'll pay standard rates with no grandfathered pricing. Pre-order members receive permanent rate protection.
              </Faq></Reveal>
              <Reveal delay={240}><Faq value="faq-3" q="Are pre-order rates really locked forever?">
                Yes. Your fees are frozen at pre-order levels for the lifetime of your account. Standard rates may increase over time, but yours won't.
              </Faq></Reveal>
              <Reveal delay={360}><Faq value="faq-4" q="Is Chimera Card secure?">
                Yes. Chimera Card uses the same Visa security infrastructure as traditional bank cards.
              </Faq></Reveal>
              <Reveal delay={480}><Faq value="faq-5" q="How do I top up my Chimera Card?">
                Top up directly from your non-custodial Chimera Wallet. It's quick, easy, and secure.
              </Faq></Reveal>
            </Accordion>
          </div>
        </div>

        {!embed && (
          <div className="mx-auto mt-3 max-w-7xl px-6">
            <Reveal className="w-full">
              <a
                href="https://app.chimerawallet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-card relative flex w-full items-center justify-between rounded-2xl px-6 py-8"
              >
                <div className="w-full">
                  <Eyebrow>WORKS ON ANY DEVICE</Eyebrow>
                  <div className="mt-1 text-xl font-bold uppercase tracking-wide" style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}>OPEN CHIMERA</div>
                </div>
                <span className="absolute right-6 text-xl">↗</span>
              </a>
            </Reveal>
          </div>
        )}
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
}: {
  tag: string;
  title: string;
  body: string;
  badge: string;
  strike: string;
}) {
  return (
    <Card padding="px-6 py-6" className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
      <div>
        <span className="inline-block rounded-md bg-[var(--brand-green)] px-2 py-1 text-[10px] font-bold tracking-widest text-[var(--brand-navy)]">
          {tag}
        </span>
        <h3
          className="mt-3 text-2xl font-bold uppercase tracking-wide"
          style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-foreground/85">{body}</p>
      </div>
      <div className="rounded-md border border-[var(--brand-green)] px-6 py-3 text-center">
        <div
          className="text-3xl font-bold text-[var(--brand-green)]"
          style={{ fontFamily: '"Titillium Web", ui-sans-serif, system-ui, sans-serif' }}
        >
          {badge}
        </div>
        <div className="mt-1 text-[10px] tracking-widest text-foreground/70 line-through">{strike}</div>
      </div>
    </Card>
  );
}

function Faq({ value, q, children }: { value: string; q: string; children?: React.ReactNode }) {
  return (
    <AccordionItem value={value} className="surface-glass border-b-0">
      <AccordionTrigger className="group flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-sm font-semibold hover:no-underline [&>svg]:hidden">
        <span>{q}</span>
        <span className="text-xl transition-transform duration-200 group-data-[state=open]:rotate-45">+</span>
      </AccordionTrigger>
      <AccordionContent className="border-t border-white/10 px-6 py-4 text-xs text-foreground/85">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

const SUPPORTED_COUNTRIES_BY_CONTINENT: [string, [string, string][]][] = [
  ["Europe", [
    ["🇦🇩", "Andorra"], ["🇦🇹", "Austria"], ["🇧🇪", "Belgium"], ["🇧🇬", "Bulgaria"],
    ["🇭🇷", "Croatia"], ["🇨🇾", "Cyprus"], ["🇨🇿", "Czech Republic"], ["🇩🇰", "Denmark"],
    ["🇪🇪", "Estonia"], ["🇫🇮", "Finland"], ["🇫🇷", "France"], ["🇩🇪", "Germany"],
    ["🇬🇮", "Gibraltar"], ["🇬🇷", "Greece"], ["🇭🇺", "Hungary"], ["🇮🇸", "Iceland"],
    ["🇮🇪", "Ireland"], ["🇮🇹", "Italy"], ["🇱🇻", "Latvia"], ["🇱🇹", "Lithuania"],
    ["🇱🇺", "Luxembourg"], ["🇲🇹", "Malta"], ["🇲🇨", "Monaco"], ["🇲🇪", "Montenegro"],
    ["🇳🇱", "Netherlands"], ["🇳🇴", "Norway"], ["🇵🇱", "Poland"], ["🇵🇹", "Portugal"],
    ["🇷🇴", "Romania"], ["🇸🇰", "Slovakia"], ["🇸🇮", "Slovenia"], ["🇪🇸", "Spain"],
    ["🇸🇪", "Sweden"], ["🇨🇭", "Switzerland"], ["🇬🇧", "United Kingdom"],
  ]],
  ["Asia & Pacific", [
    ["🇦🇺", "Australia"], ["🇭🇰", "Hong Kong"], ["🇮🇩", "Indonesia"], ["🇲🇾", "Malaysia"],
    ["🇵🇭", "Philippines"], ["🇸🇬", "Singapore"], ["🇹🇼", "Taiwan"], ["🇹🇭", "Thailand"],
    ["🇻🇳", "Vietnam"],
  ]],
  ["Latin America", [
    ["🇦🇷", "Argentina"], ["🇧🇷", "Brazil"], ["🇨🇱", "Chile"], ["🇨🇴", "Colombia"],
    ["🇪🇨", "Ecuador"], ["🇲🇽", "Mexico"], ["🇵🇪", "Peru"],
  ]],
];

function ContinentPanel({
  continent,
  countries,
}: {
  continent: string;
  countries: [string, string][];
}) {
  return (
    <AccordionItem value={continent} className="surface-card border-b-0">
      <AccordionTrigger className="group flex w-full items-center justify-between px-6 py-4 text-left hover:no-underline [&>svg]:hidden">
        <span className="text-sm font-semibold uppercase tracking-widest">
          {continent}
          <span className="ml-3 text-xs font-normal text-muted-foreground">({countries.length})</span>
        </span>
        <span className="text-xl transition-transform duration-200 group-data-[state=open]:rotate-45">+</span>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-2 border-t border-white/10 px-6 py-4 text-sm text-foreground/90 sm:grid-cols-2 md:grid-cols-3">
          {countries.map(([flag, name]) => (
            <li key={name} className="flex items-center gap-3 border-b border-white/5 py-2">
              <span className="text-lg leading-none">{flag}</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
