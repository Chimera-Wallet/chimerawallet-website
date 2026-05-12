import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/privacy-manifesto")({
  head: () => ({
    meta: [
      { title: "Privacy Manifesto — Chimera Wallet" },
      {
        name: "description",
        content:
          "Most companies write privacy policies; we write code that doesn't need one. Chimera's approach to privacy and transparency.",
      },
      { property: "og:title", content: "Privacy Manifesto — Chimera Wallet" },
      {
        property: "og:description",
        content:
          "Most companies write privacy policies; we write code that doesn't need one. Chimera's approach to privacy and transparency.",
      },
    ],
  }),
  component: PrivacyManifestoPage,
});

function PrivacyManifestoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <Reveal delay={0}><p className="hero-eyebrow text-[var(--brand-green)]">CHIMERA</p></Reveal>
      <Reveal delay={120}><h1 className="hero-title mt-6">PRIVACY MANIFESTO</h1></Reveal>

      <Reveal delay={240}><div className="mt-10 space-y-6 text-sm leading-relaxed text-foreground/85">
        <p className="text-base font-medium text-foreground">
          Most companies write privacy policies; we write code that doesn't need one.
        </p>

        <p>At Chimera we take privacy and transparency seriously.</p>

        <p>
          We are committed to protecting and preserving our users' privacy across all the platforms.
        </p>

        <p>Our approach to protecting your data is simple: we don't collect it.</p>

        <p>
          Our website at chimerawallet.com and Chimera wallet do not use cookies or other tracking
          technologies.
        </p>

        <p>
          Our analytics come exclusively from Plausible (
          <a
            href="https://plausible.io/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://plausible.io/about
          </a>
          ) a privacy preserving open-source solution designed to protect your privacy while providing
          anonymized data for practical purposes.
        </p>

        <p className="text-base font-medium text-foreground">
          Privacy, built in from the ground up.
        </p>

        <p>
          You may directly share your data with third parties through our platforms in order to access
          certain services please check the individual policies of the providers.
        </p>
      </div></Reveal>

      <Reveal><h2 className="display mt-12 text-2xl text-[var(--brand-green)]">PROVIDERS</h2></Reveal>
      <Reveal delay={120}><ul className="mt-6 space-y-3 text-sm">
        <li>
          Plausible —{" "}
          <a
            href="https://plausible.io/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://plausible.io/about
          </a>
        </li>
        <li>
          Outlogic Sagl —{" "}
          <a
            href="https://outlogic.net/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://outlogic.net/privacy-policy/
          </a>
        </li>
        <li>
          Lendasat —{" "}
          <a
            href="https://lendasat.com/docs/p2p-loans/legal/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-green)] hover:underline"
          >
            https://lendasat.com/docs/p2p-loans/legal/terms
          </a>
        </li>
      </ul></Reveal>
    </main>
  );
}