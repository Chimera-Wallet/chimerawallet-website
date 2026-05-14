import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Section, Card, BrandButton, GhostButton } from "@/components/ui";
import arkLogo from "@/assets/site/ark-logo.png";
import mockupAppPage1 from "@/assets/site/mockup-app-page-1.png";
import openSource from "@/assets/site/open_source.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chimera — Built by people who believe your money should belong to you" },
      {
        name: "description",
        content:
          "Chimera Wallet holds no funds, takes no spread, and sells no order flow. Open source, browser-based, built on Chimera. Freedom the way it should be.",
      },
      { property: "og:title", content: "About Chimera" },
      {
        property: "og:description",
        content:
          "Chimera Wallet holds no funds, takes no spread, and sells no order flow. Open source, browser-based, built on Chimera. Freedom the way it should be.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-center">
        <Reveal delay={0}>
          <p className="hero-eyebrow text-[var(--brand-green)]">ABOUT</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-title mt-6">
            BUILT BY PEOPLE
            <br />
            WHO BELIEVE YOUR MONEY
            <br />
            SHOULD BELONG TO YOU.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <h2 className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-foreground/85">
            We write open-source code for people who understand that their money should belong to them. No shareholders.
            No venture capital. No one to answer to except the mission.
          </h2>
        </Reveal>
        <Reveal delay={340}>
          <p className="mx-auto mt-3 max-w-3xl text-xs text-muted-foreground">
            Everything we build is published openly, auditable by anyone, free to fork. Financial services are provided
            by regulated third parties. We don't hold your funds. The architecture makes it impossible.
          </p>
        </Reveal>
      </section>

      <Section size="sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal>
            <Card>
              <img src={arkLogo} alt="Chimera logo" className="h-10 w-10 object-contain" />
              <div className="mt-6 text-xs tracking-widest text-foreground/80">
                ARKADE MAINNET
                <br />
                LIVE SINCE
              </div>
              <div className="display mt-2 text-2xl text-[var(--brand-green)]">OCTOBER 2025</div>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card>
              <div className="display text-2xl text-[var(--brand-green)]">
                VERIFIABLE
                <br />
                ON-CHAIN
              </div>
              <p className="mt-4 text-sm">NOT A ROADMAP PROMISE. SHIPPED.</p>
              <p className="mt-2 text-xs text-muted-foreground">THREE YEARS OF R&amp;D BEFORE PUBLIC MAINNET.</p>
            </Card>
          </Reveal>
          <Reveal delay={240}>
            <Card>
              <div className="text-xs tracking-widest text-foreground/80">ARKADE PROTOCOL RAISED</div>
              <div className="display mt-2 text-3xl">$7.7M.</div>
              <p className="mt-2 text-xs text-muted-foreground">
                THE INFRASTRUCTURE CHIMERA IS BUILT ON IS TRUSTED BY THE BEST IN THE SPACE.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="display text-2xl">ALL CODE</h2>
              <p className="display text-3xl md:text-4xl">PUBLIC AND FREE.</p>
              <p className="mt-6 text-sm text-foreground/85">
                Every line of code is public on GitHub.
                <br />
                Auditable by anyone, free to fork.
              </p>
              <p className="mt-4 text-sm text-foreground/85">
                Financial services run through regulated third parties.
                <br />
                We don't hold your funds. The architecture makes it impossible.
              </p>
              <BrandButton
                href="https://github.com/Chimera-Wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
              >
                CHECK OUR GITHUB
              </BrandButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src={openSource} alt="Open source code" className="aspect-[4/3] w-full object-contain" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img
              src={mockupAppPage1}
              alt="Chimera Wallet phone mockups"
              className="aspect-[5/4] w-full object-contain"
            />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="display text-2xl">CHIMERA</h2>
              <p className="display text-3xl md:text-4xl">WALLET.</p>
              <p className="mt-6 text-sm">
                Swiss non-profit association.
                <br />
                Writes and publishes open-source code.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">No custody. No financial services. No profit motive.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="display text-2xl">WHAT WE</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="display text-3xl md:text-5xl">STAND FOR.</p>
        </Reveal>
      </section>

      <Section size="none" className="pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["OPEN SOURCE.", "Every line published. No black boxes. Code that belongs to everyone who uses it."],
            ["NON-CUSTODIAL BY DESIGN.", "Not a policy that can change. Not a promise that can be broken."],
            [
              "SWISS NON-PROFIT ASSOCIATION.",
              "No extraction. No VC pressure. A legal structure built to align with the mission, not against it.",
            ],
            [
              "SELF-SOVEREIGNTY.",
              "The word the financial system has spent decades trying not to normalise. We're normalising it — one wallet at a time.",
            ],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 120} className="h-full">
              <Card className="h-full">
                <h3 className="display text-xl text-[var(--brand-green)]">{t}</h3>
                <p className="mt-3 text-sm text-foreground/85">{b}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <GhostButton>DOWNLOAD BRAND KIT</GhostButton>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
