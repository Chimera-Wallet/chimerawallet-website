import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaCard } from "@/components/cta-card";
import { Section, Card, BrandButton } from "@/components/ui";
import mockupAppPage1 from "@/assets/site/mockup-app-page-1.png";
import arkLogo from "@/assets/site/arkade-logo.svg";
import coinChimera from "@/assets/site/Coins/coin-front-chimera.png";
import coinBitcoin from "@/assets/site/Coins/coin-front-bitcoin.png";
import coinTether from "@/assets/site/Coins/coin-front-tether.png";
import coinEthereum from "@/assets/site/Coins/coin-front-ethereum.png";
import coinTron from "@/assets/site/Coins/coin-front-tron.png";
import coinPolygon from "@/assets/site/Coins/coin-front-polygon.png";
import iconBolt from "@/assets/site/Icons/icon_Bolt.svg";
import iconPaperplane from "@/assets/site/Icons/icon_Paperplane.svg";
import iconFaceID from "@/assets/site/Icons/icon_FaceID.svg";
import iconCard from "@/assets/site/Icons/icon_Card.svg";
 import cardSwap from "@/assets/site/Coins/Arkade-card-2-3.png";
import coinsSet from "@/assets/site/coins-set.png";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Chimera App — No Install. No Memory. No Risk." },
      {
        name: "description",
        content:
          "Open Chimera Wallet in your browser. No download, no App Store, no custody layer. Instant access on any device.",
      },
      { property: "og:title", content: "Chimera App — Progressive Web App" },
      {
        property: "og:description",
        content:
          "Open Chimera Wallet in your browser. No download, no App Store, no custody layer. Instant access on any device.",
      },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  return (
    <main>
      <Section size="none" className="pt-16 pb-12 text-center">
        <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">PROGRESSIVE APP</p></Reveal>
        <Reveal delay={120}><h1 className="hero-title mx-auto mt-6 max-w-5xl">
          NO INSTALL.
          <br />
          NO MEMORY. NO RISK.
        </h1></Reveal>
        <Reveal delay={240}><h2 className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-foreground/85">
          Bitcoin doesn't ask Apple for permission. Why should your wallet?
        </h2></Reveal>
        <Reveal delay={340}><p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Every native crypto app lives at the mercy of app stores. Wallets get removed on a Wednesday afternoon
          because someone in Cupertino or Mountain View changed their mind.
        </p></Reveal>
        <Reveal delay={460}>
          <BrandButton
            href="https://app.chimerawallet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            OPEN CHIMERA
          </BrandButton>
        </Reveal>

        <Reveal delay={580}><img
          src={mockupAppPage1}
          alt="Chimera app phone mockups"
          className="mx-auto mt-12 w-full max-w-5xl h-auto"
        /></Reveal>
      </Section>

      <Section size="sm">
        {/* asset row */}
        <div className="mb-16 grid grid-cols-3 gap-6 sm:grid-cols-6">
          {[
            { a: "Chimera", img: coinChimera },
            { a: "BTC", img: coinBitcoin },
            { a: "USDT", img: coinTether },
            { a: "ETH", img: coinEthereum },
            { a: "TRON", img: coinTron },
            { a: "POLYGON", img: coinPolygon },
          ].map(({ a, img }, i) => (
            <Reveal key={a} delay={i * 80}><img src={img} alt={`${a} coin`} className="aspect-square w-full max-w-20 object-contain mx-auto" /></Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <Reveal><div>
            <p className="text-sm tracking-widest text-foreground/80">CHIMERA WALLET</p>
            <h2 className="display mt-3 whitespace-nowrap text-3xl md:text-5xl">RUNS IN YOUR BROWSER.</h2>
            <p className="mt-6 text-base font-medium">No gatekeeper can touch it.</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li>• No download. You open a URL — the wallet is there.</li>
              <li>• No review board. Nothing waiting to be approved or removed.</li>
              <li>• No geo-block. No platform that can reach in and turn your money off.</li>
              <li>• No middleman. Nothing standing between you and your Bitcoin.</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              App stores have done it before. They'll do it again. No warning. No appeal. Gone. Not a promise.
              Architecture.
            </p>
          </div></Reveal>
          <Reveal delay={120}>
            <img
              src={coinsSet}
              alt="Bitcoin, Ethereum and Tether coins"
              className="mx-auto w-full max-w-[260px] h-auto object-contain -mb-10"
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-12 w-full">
            <CtaCard
              href="https://app.chimerawallet.com"
              eyebrow="WORKS ON ANY DEVICE"
              title="OPEN IN BROWSER"
            />
          </div>
        </Reveal>
      </Section>

      <Section size="sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch">
          <Reveal className="h-full"><Tile
            icon={iconBolt}
            title={<>WHAT <span className="text-[var(--brand-green)]">YOU GET</span></>}
            body="Bitcoin. Lightning. Arkade. All in one — and nothing missing. Mainchain for settlement. Lightning for instant payments. Arkade Protocol for the next generation. No switching apps. No compromise."
          /></Reveal>
          <Reveal delay={120} className="h-full"><Tile
            icon={iconPaperplane}
            title={
              <>
                NO CHANNELS. NO SETUP.
                <br />
                <span className="text-[var(--brand-green)]">JUST SEND.</span>
              </>
            }
            body="Chimera eliminates Lightning's most painful friction. No inbound liquidity. No channel opens. Receive from day one."
          /></Reveal>
          <Reveal delay={240} className="h-full"><Tile
            icon={iconFaceID}
            title={<><span className="text-[var(--brand-green)]">NO ID</span> REQUIRED.</>}
            body="Access your wallet in minutes. Start trading. Regulated services provided by third parties."
          /></Reveal>
          <Reveal delay={360} className="h-full"><Tile
            icon={iconCard}
            title={
              <>
                MULTI-ASSET.
                <br />
                <span className="text-[var(--brand-green)]">ONE INTERFACE.</span>
              </>
            }
            body="BTC, USDT, ETH, TRON, POLYGON, FIAT and expanding. Everything modern finance offers — without handing over custody."
          /></Reveal>
        </div>
      </Section>

      <Section size="lg" className="text-center">
        <Reveal><img src={arkLogo} alt="Chimera" className="mx-auto h-16 w-auto object-contain" /></Reveal>
        <div className="mx-auto max-w-3xl md:max-w-5xl">
          <Reveal delay={120}><h2 className="display mt-6 text-3xl md:text-5xl">
            ARKADE SWAP
            <br />
            AND WRAPPED ASSETS
          </h2></Reveal>
          <Reveal delay={240}><p
            className="mt-6 text-center text-foreground/80"
            style={{
              fontFamily: '"Funnel Display", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(0.875rem, 1.6vw, 20px)",
              lineHeight: "1.4",
              letterSpacing: "0.5px",
            }}
          >
            Unstoppable cross chain p2p trading with a level of privacy you never seen before. All the feature of a CEX with all the freedom of a DEX all wrapped in a progressive web app out of stores grasp. The future of trading is coming soon to Arkade.
          </p></Reveal>
        </div>
        <div className="relative">
          <Reveal delay={360}><img src={cardSwap} alt="Chimera card swap" className="mx-auto mt-10 w-72 object-contain" /></Reveal>
          <div className="mx-auto max-w-5xl px-6 -mt-16 relative z-10">
            <Reveal>
              <CtaCard
                href="https://app.chimerawallet.com"
                eyebrow="YOUR MONEY. YOUR DEVICE. YOUR RULES."
                title="OPEN CHIMERA"
              />
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Tile({
  icon,
  title,
  body,
}: {
  icon: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <Card padding="p-8" className="flex h-full min-h-[260px] flex-col justify-end">
      <img src={icon} alt="" className="h-10 w-10 object-contain" />
      <h3 className="display mt-6 text-2xl">{title}</h3>
      <p className="mt-4 text-sm text-foreground/80">{body}</p>
    </Card>
  );
}
