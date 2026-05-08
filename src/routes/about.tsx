import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/placeholder";
import arkLogo from "@/assets/site/ark-logo.png";
import mockupAppPage1 from "@/assets/site/mockup-app-page-1.png";
import openSource from "@/assets/site/open_source.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chimera — Built by people who believe your money should belong to you" },
      { name: "description", content: "Open-source. Non-custodial by design. Swiss non-profit. Self-sovereignty." },
      { property: "og:title", content: "About Chimera" },
      { property: "og:description", content: "Open-source. Non-custodial by design. Swiss non-profit. Self-sovereignty." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-center">
        <p className="display text-xs tracking-[0.3em] text-[var(--brand-green)]">ABOUT</p>
        <h1 className="display mt-6 text-4xl md:text-6xl">
          BUILT BY PEOPLE
          <br />
          WHO BELIEVE YOUR MONEY
          <br />
          SHOULD BELONG TO YOU.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-sm text-foreground/85">
          We write open-source code for people who understand that their money should belong to them. No shareholders. No venture capital. No one to answer to except the mission.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-xs text-muted-foreground">
          Everything we build is published openly, auditable by anyone, free to fork. Financial services are provided by regulated third parties. We don't hold your funds. The architecture makes it impossible.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
            <img src={arkLogo} alt="Chimera logo" className="h-10 w-10 object-contain" />
            <div className="mt-6 text-xs tracking-widest text-foreground/80">CHIMERA MAINNET<br/>LIVE SINCE</div>
            <div className="display mt-2 text-2xl text-[var(--brand-green)]">OCTOBER 2025</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
            <div className="display text-2xl text-[var(--brand-green)]">VERIFIABLE<br/>ON-CHAIN</div>
            <p className="mt-4 text-sm">NOT A ROADMAP PROMISE. SHIPPED.</p>
            <p className="mt-2 text-xs text-muted-foreground">THREE YEARS OF R&amp;D BEFORE PUBLIC MAINNET.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
            <div className="text-xs tracking-widest text-foreground/80">ARKADE PROTOCOL RAISED</div>
            <div className="display mt-2 text-3xl">$7.7M.</div>
            <p className="mt-2 text-xs text-muted-foreground">THE INFRASTRUCTURE CHIMERA IS BUILT ON IS TRUSTED BY THE BEST IN THE SPACE.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="display text-2xl">ALL CODE</h2>
            <p className="display text-3xl md:text-4xl">PUBLIC AND FREE.</p>
            <p className="mt-6 text-sm text-foreground/85">Every line of code is public on GitHub.<br/>Auditable by anyone, free to fork.</p>
            <p className="mt-4 text-sm text-foreground/85">Financial services run through regulated third parties.<br/>We don't hold your funds. The architecture makes it impossible.</p>
          </div>
          <img src={openSource} alt="Open source code" className="aspect-[4/3] w-full object-contain" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <img src={mockupAppPage1} alt="Chimera Wallet phone mockups" className="aspect-[5/4] w-full object-contain" />
          <div>
            <h2 className="display text-2xl">CHIMERA</h2>
            <p className="display text-3xl md:text-4xl">WALLET.</p>
            <p className="mt-6 text-sm">Swiss non-profit association.<br/>Writes and publishes open-source code.</p>
            <p className="mt-4 text-sm text-muted-foreground">No custody. No financial services. No profit motive.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="display text-2xl">WHAT WE</h2>
        <p className="display text-3xl md:text-5xl">STAND FOR.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["OPEN SOURCE.", "Every line published. No black boxes. Code that belongs to everyone who uses it."],
            ["NON-CUSTODIAL BY DESIGN.", "Not a policy that can change. Not a promise that can be broken."],
            ["SWISS NON-PROFIT ASSOCIATION.", "No extraction. No VC pressure. A legal structure built to align with the mission, not against it."],
            ["SELF-SOVEREIGNTY.", "The word the financial system has spent decades trying not to normalise. We're normalising it — one wallet at a time."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-[var(--brand-navy-card)] p-6">
              <h3 className="display text-xl text-[var(--brand-green)]">{t}</h3>
              <p className="mt-3 text-sm text-foreground/85">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest hover:bg-white/10">
            DOWNLOAD BRAND KIT
          </button>
        </div>
      </section>
    </main>
  );
}
