import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/placeholder";
import mockupAppPage1 from "@/assets/site/mockup-app-page-1.png";
import arkLogo from "@/assets/site/ark-logo.png";
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
import cardSwap from "@/assets/site/Coins/Chimera-card-2-3.png";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Chimera App — No Install. No Memory. No Risk." },
      {
        name: "description",
        content:
          "Chimera Wallet runs in your browser. Bitcoin, Lightning and Chimera in one progressive web app.",
      },
      { property: "og:title", content: "Chimera App — Progressive Web App" },
      {
        property: "og:description",
        content:
          "Chimera Wallet runs in your browser. Bitcoin, Lightning and Chimera in one progressive web app.",
      },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
        <p className="display text-xs tracking-[0.3em] text-[var(--brand-green)]">PROGRESSIVE APP</p>
        <h1 className="display mx-auto mt-6 max-w-3xl text-4xl md:text-6xl">
          NO INSTALL.
          <br />
          NO MEMORY. NO RISK.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-foreground/85">
          Bitcoin doesn't ask Apple for permission. Why should your wallet?
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Every native crypto app lives at the mercy of app stores. Wallets get removed on a Wednesday afternoon
          because someone in Cupertino or Mountain View changed their mind.
        </p>
        <a
          href="https://app.chimerawallet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-full px-6 py-3 text-xs font-bold tracking-widest text-[var(--brand-navy)]"
          style={{ backgroundColor: "var(--brand-green)" }}
        >
          OPEN CHIMERA
        </a>

        <img
          src={mockupAppPage1}
          alt="Chimera app phone mockups"
          className="mx-auto mt-12 w-full max-w-5xl h-auto"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest text-foreground/80">CHIMERA WALLET</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">RUNS IN YOUR BROWSER.</h2>
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

            <div
              className="mt-8 flex items-center justify-between rounded-2xl border border-white/15 px-6 py-5"
              style={{ background: "var(--brand-navy-card)" }}
            >
              <div>
                <div className="text-[10px] font-bold tracking-[0.25em] text-[var(--brand-green)]">
                  WORKS ON ANY DEVICE
                </div>
                <div className="display mt-1 text-xl">OPEN IN BROWSER</div>
              </div>
              <span className="text-xl">↗</span>
            </div>
          </div>
        </div>

        {/* asset row */}
        <div className="mt-16 grid grid-cols-3 gap-6 sm:grid-cols-6">
          {[
            { a: "Chimera", img: coinChimera },
            { a: "BTC", img: coinBitcoin },
            { a: "USDT", img: coinTether },
            { a: "ETH", img: coinEthereum },
            { a: "TRON", img: coinTron },
            { a: "POLYGON", img: coinPolygon },
          ].map(({ a, img }) => (
            <img key={a} src={img} alt={`${a} coin`} className="aspect-square w-full object-contain" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Tile
            icon={iconBolt}
            title={<>WHAT <span className="text-[var(--brand-green)]">YOU GET</span></>}
            body="Bitcoin. Lightning. Chimera. All in one — and nothing missing. Mainchain for settlement. Lightning for instant payments. Chimera Protocol for the next generation. No switching apps. No compromise."
          />
          <Tile
            icon={iconPaperplane}
            title={
              <>
                NO CHANNELS. NO SETUP.
                <br />
                <span className="text-[var(--brand-green)]">JUST SEND.</span>
              </>
            }
            body="Chimera eliminates Lightning's most painful friction. No inbound liquidity. No channel opens. Receive from day one."
          />
          <Tile
            icon={iconFaceID}
            title={<><span className="text-[var(--brand-green)]">NO ID</span> REQUIRED.</>}
            body="Access your wallet in minutes. Start trading. Regulated services provided by third parties."
          />
          <Tile
            icon={iconCard}
            title={
              <>
                MULTI-ASSET.
                <br />
                <span className="text-[var(--brand-green)]">ONE INTERFACE.</span>
              </>
            }
            body="BTC, USDT, ETH, TRON, POLYGON, FIAT and expanding. Everything modern finance offers — without handing over custody."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <img src={arkLogo} alt="Chimera" className="mx-auto h-16 w-auto object-contain" />
        <h2 className="display mt-6 text-3xl md:text-5xl">
          ARKADE SWAP
          <br />
          AND WRAPPED ASSETS
        </h2>
        <p className="display mt-3 text-xl tracking-widest text-[var(--brand-green)]">COMING SOON</p>
        <img src={cardSwap} alt="Chimera card swap" className="mx-auto mt-10 w-72 object-contain" />
      </section>

      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg, var(--brand-blue-bright) 0%, var(--brand-blue) 100%)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[var(--brand-navy-card)]/60 px-6 py-5 backdrop-blur">
            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-[var(--brand-green)]">
                YOUR MONEY. YOUR DEVICE. YOUR RULES.
              </div>
                <div className="display mt-1 text-xl">OPEN CHIMERA</div>
            </div>
            <span className="text-xl">↗</span>
          </div>
        </div>
      </section>
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
    <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-8">
      <img src={icon} alt="" className="h-10 w-10 object-contain" />
      <h3 className="display mt-6 text-2xl">{title}</h3>
      <p className="mt-4 text-sm text-foreground/80">{body}</p>
    </div>
  );
}
